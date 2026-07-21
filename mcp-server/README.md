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

**This package is not published to npm.** `npx -y product-fieldwork-skills-mcp@latest` will not work until/unless that changes — don't run it expecting it to install anything. Two confirmed-working ways to actually use this today:

### Option A — claude.ai or Claude Desktop (remote, no build required)

A public, unauthenticated instance is already deployed:

```
https://product-fieldwork-skills-mcp-644687258733.us-central1.run.app
```

1. In claude.ai (or Claude Desktop's own Connectors screen): **Settings → Connectors → Add custom connector**
2. **Name**: `Product Fieldwork Skills` (or anything you'll recognize)
3. **Remote MCP server URL**: the URL above
4. Leave the OAuth fields blank — no auth required
5. Save. All 57 skills' tools/resources/prompts should now be available in your conversations.

No install, no local setup, nothing to build. It's a small Cloud Run service capped at 3 instances — cold starts after idle are a couple of seconds.

### Option B — Claude Code (local, requires a build)

Claude Code doesn't yet have a "remote connector" flow the way claude.ai does, so this path needs a local build:

```bash
git clone https://github.com/yezililyz/product-fieldwork-skills.git
cd product-fieldwork-skills/mcp-server
npm install
npm run build
claude mcp add --scope user product-fieldwork-skills -- node "$(pwd)/dist/index.js"
```

`--scope user` makes it available from any directory, not just the one you ran the command in. Verify with `claude mcp list`.

**Note on Claude Desktop's "Local MCP servers" screen** (Settings → Developer): this also works for a local build the same way as Claude Code — click "Edit Config" and add an `mcpServers` entry pointing `command: node` at your built `dist/index.js`, same shape as the Claude Code command above. Option A (the deployed URL) is simpler if you don't need a local build for other reasons.

### Cursor / Continue / other clients

Their config formats support both remote URLs and local `command`+`args` — see [`examples/`](./examples) for snippets. **Untested by us against either the remote URL or a local build** — if you try one, we'd want to know whether it worked.

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
│   ├── index.ts          # stdio bin entry point (Claude Code/Desktop local)
│   ├── http.ts           # Streamable HTTP entry point (Cloud Run, no auth)
│   ├── server.ts         # createServer() factory, shared by both entry points
│   ├── handlers/         # resource / prompt / tool registration
│   ├── tools/            # list_skills / find_skill / read_skill
│   └── skills/           # loader, parser, registry
├── test/                 # vitest suites: unit + e2e via InMemoryTransport
├── examples/             # client config snippets
├── Dockerfile            # local/npm-package Docker use (dist/index.js, stdio)
├── Dockerfile.http       # Cloud Run deploy (dist/http.js, no auth, port 8080)
└── scripts/sync-skills.mjs   # copies ../skills/ into ./skills/ pre-publish/pre-deploy
```

Modeled closely on [Cleo Labs' `skills_library/mcp-server`](https://github.com/Cleo-Labs-IA/skills_library/tree/main/mcp-server) — same module shape, same skill-resolution fallback chain, same deterministic keyword scorer. Two differences: their skills are fully self-contained, so their server is *pure distribution* — ours are thin, so this server distributes skill *definitions* while `yezi-hub-mcp` supplies live *content*. And `src/http.ts`/`Dockerfile.http` (the public Cloud Run deployment) has no Cleo Labs equivalent — their server is stdio-only; the remote HTTP path here mirrors `yezi-hub-mcp/src/http.ts` instead, minus its bearer-token gate (see [Install](#install) for why that's safe here).

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

# Validate via raw JSON-RPC (stdio)
echo '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"1.0"}}}' | node dist/index.js
```

### Run/test the HTTP variant locally

```bash
PORT=8091 node dist/http.js &
curl http://localhost:8091/health
curl -X POST http://localhost:8091/ \
  -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","method":"tools/call","id":1,"params":{"name":"list_skills","arguments":{}}}'
```

### Redeploy to Cloud Run

`gcloud run deploy --source .` only picks up a file literally named `Dockerfile`, so deploying `Dockerfile.http` means building from a copy with it renamed, plus a fresh `node scripts/sync-skills.mjs` so `skills/` is present in that build context:

```bash
node scripts/sync-skills.mjs   # skills/ must exist in the build context
rm -rf /tmp/pfs-deploy && mkdir /tmp/pfs-deploy
cp package.json package-lock.json tsconfig.json /tmp/pfs-deploy/
cp -R src skills /tmp/pfs-deploy/
cp Dockerfile.http /tmp/pfs-deploy/Dockerfile
cd /tmp/pfs-deploy
gcloud run deploy product-fieldwork-skills-mcp \
  --source . --region us-central1 \
  --allow-unauthenticated --max-instances 3 --memory 256Mi
```

### Environment

- `SKILLS_DIR` — override the auto-resolved skills directory.
- `PORT` — HTTP port for `http.js` (default 8080; Cloud Run sets this automatically).
