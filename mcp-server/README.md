# product-fieldwork-skills-mcp

> **MCP server exposing 57 Product Fieldwork skills (product, growth, and career jobs) as native MCP resources, prompts, and tools.**

This is the MCP transport for the [product-fieldwork-skills](https://github.com/yezililyz/product-fieldwork-skills) repo. Each skill (`planning-cadence`, `writing-prds`, `pricing-strategy`, `continuous-discovery`, and 53 more — see [`../skills/`](../skills)) is surfaced to any MCP-aware client as:

- a **resource** — `skill://<name>` returning the full SKILL.md as `text/markdown`
- a **prompt** — `<name>` with an optional `{user_query}` parameter
- callable via three top-level **tools** — `list_skills`, `find_skill`, `read_skill`

Built on the official [`@modelcontextprotocol/sdk`](https://github.com/modelcontextprotocol/typescript-sdk). Works out of the box with Claude Desktop, Cursor, Continue, and any other MCP client.

**Important — this server distributes skill *definitions*, not skill *content*.** Every skill here is thin: its `SKILL.md` tells Claude which of Product Fieldwork's real guides are relevant and instructs it to pull them live via the separate [`yezi-hub-mcp`](https://github.com/yezililyz/yezi-hub-mcp) server (`search_knowledge_base`, `get_guide`, `build_learning_path`, `extract_templates`). **Connect both servers** — this one alone won't have real guide content to offer.

---

## Install

### Run via `npx`

```bash
npx -y product-fieldwork-skills-mcp@latest
```

### Install globally

```bash
npm install -g product-fieldwork-skills-mcp
product-fieldwork-skills-mcp
```

The server speaks the MCP JSON-RPC protocol on stdio. It logs operational messages to stderr; stdout is reserved for MCP traffic.

---

## Wire it into your MCP client

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%/Claude/claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "product-fieldwork-skills": {
      "command": "npx",
      "args": ["-y", "product-fieldwork-skills-mcp@latest"]
    }
  }
}
```

Restart Claude Desktop. The 57 skills will appear under the resources picker (the paper-clip icon) and the slash-commands menu. Also connect `yezi-hub-mcp` (see its own [CONNECTING.md](https://github.com/yezililyz/yezi-hub-mcp/blob/main/CONNECTING.md)) so skills have real guide content to pull from.

### Cursor

`~/.cursor/mcp.json` — see [`examples/cursor.json`](./examples/cursor.json).

### Continue

`~/.continue/config.yaml` — see [`examples/continue.yaml`](./examples/continue.yaml).

### Codex / Zed / generic MCP host

Any client that supports the `command + args` MCP launcher format works the same way. See [`examples/`](./examples) for ready-to-copy snippets, and [`examples/docker.md`](./examples/docker.md) for running via Docker.

---

## What the server exposes

### Resources

| Field | Value |
| ----- | ----- |
| Count | **57** (one per skill) |
| URI scheme | `skill://<name>` (e.g. `skill://planning-cadence`) |
| Mime type | `text/markdown` |
| Body | The full `SKILL.md` including YAML frontmatter |

### Prompts

| Field | Value |
| ----- | ----- |
| Count | **57** (one per skill) |
| Name | The skill's name (e.g. `writing-prds`) |
| Argument | `user_query` *(optional)* — appended after the skill content as a follow-up user message |

Each prompt returns a two-message conversation: a preamble that loads the skill content (and reminds Claude to use `yezi-hub-mcp`'s tools for real guide content), followed by the user's question.

### Tools

| Tool | Args | Returns |
| ---- | ---- | ------- |
| `list_skills` | `query?`, `limit?` | All skills matching a free-text filter |
| `find_skill` | `question`, `limit?` | Top-N skills ranked by relevance to a free-text question |
| `read_skill` | `name` | Full `SKILL.md` body for one skill |

All tools return both `content[].text` (JSON-stringified) and `structuredContent` (parsed object) so they work with old and new MCP clients.

**Note on `find_skill`**: unlike some skill libraries with a shared category suffix (e.g. `<vertical>-compliance`), our 57 slugs don't share a naming convention, so there's no "vertical" filter/bonus here — just a deterministic keyword scorer over each skill's name and description (4 pts per name-token match, 2 pts per description-token match, 1 pt substring fallback). No embeddings, by design, at this scale.

### Server info

```json
{
  "name": "product-fieldwork-skills-mcp",
  "title": "Product Fieldwork Skills MCP",
  "version": "0.1.0",
  "capabilities": { "resources": {}, "prompts": {}, "tools": {}, "logging": {} }
}
```

---

## Architecture

```
mcp-server/
├── src/
│   ├── index.ts          # bin entry point (stdio transport)
│   ├── server.ts         # createServer() factory
│   ├── handlers/         # resource / prompt / tool registration
│   ├── tools/            # list_skills / find_skill / read_skill
│   └── skills/           # loader, parser, registry
├── test/                 # vitest suites: unit + e2e via InMemoryTransport
├── examples/             # client config snippets
├── Dockerfile            # multi-stage, node:20-alpine
└── scripts/sync-skills.mjs   # copies ../skills/ into ./skills/ pre-publish
```

Modeled closely on [Cleo Labs' `skills_library/mcp-server`](https://github.com/Cleo-Labs-IA/skills_library/tree/main/mcp-server) — same module shape, same skill-resolution fallback chain, same deterministic keyword scorer. The one structural difference: their skills are fully self-contained, so their server is *pure distribution*. Ours are thin, so this server distributes skill *definitions* while `yezi-hub-mcp` supplies live *content*.

---

## Develop

```bash
# Install deps
cd mcp-server
npm install

# Run the server in dev mode (reads from ../skills/)
npm run dev

# Type-check + tests
npm run typecheck
npm test

# Build
npm run build

# Validate via raw JSON-RPC
echo '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"1.0"}}}' | node dist/index.js
```

### Environment

- `SKILLS_DIR` — override the auto-resolved skills directory.
