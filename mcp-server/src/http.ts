#!/usr/bin/env node
// Remote entrypoint — Streamable HTTP transport for claude.ai's "Custom
// Connector" feature (Settings > Connectors > Add custom connector). Kept
// entirely separate from index.ts (stdio, used by Claude Code/Desktop locally):
// this one is meant to run on a public Cloud Run URL.
//
// No auth gate, unlike yezi-hub-mcp's remote server: this server only
// distributes the 57 static skill definitions (job descriptions + which
// guides are relevant) — no proprietary content, no external API calls, no
// access to yezi-hub-mcp's bearer token. Public/unauthenticated access here
// costs nothing and exposes nothing, so it isn't under-built, it's
// right-sized for what this server actually does.
//
// Stateless by design (sessionIdGenerator: undefined): Cloud Run can run
// multiple concurrent requests per instance, so each request gets its own
// McpServer + transport pair via createServer() rather than sharing one
// server-wide instance, which would let concurrent tool calls bleed state
// into each other.
import http from 'node:http'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { createServer } from './server.js'

const PORT = Number(process.env.PORT) || 8080

async function main() {
  const httpServer = http.createServer(async (req, res) => {
    // Unauthenticated health check — Cloud Run startup/liveness probes and a
    // quick manual sanity check hit this; it reveals nothing sensitive.
    if (req.method === 'GET' && (req.url === '/' || req.url === '/health')) {
      res.writeHead(200, { 'content-type': 'text/plain' }).end('ok')
      return
    }

    try {
      const { server } = await createServer()
      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined })
      res.on('close', () => {
        transport.close()
        server.close()
      })
      await server.connect(transport)
      await transport.handleRequest(req, res)
    } catch (err) {
      process.stderr.write(`Request error: ${err instanceof Error ? err.stack || err.message : String(err)}\n`)
      if (!res.headersSent) {
        res.writeHead(500, { 'content-type': 'application/json' }).end(JSON.stringify({ error: 'internal_error' }))
      }
    }
  })

  httpServer.listen(PORT, () => {
    process.stderr.write(`product-fieldwork-skills-mcp listening on :${PORT} (Streamable HTTP, no auth)\n`)
  })
}

main().catch(err => {
  process.stderr.write(`Fatal error: ${err instanceof Error ? err.stack || err.message : String(err)}\n`)
  process.exit(1)
})
