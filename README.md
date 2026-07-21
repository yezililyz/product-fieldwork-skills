# Product Fieldwork Skills

57 Claude Skills, one per specific product/growth/career job (e.g. `continuous-discovery`, `writing-prds`, `planning-cadence`, `pricing-strategy`) — each backed by real guides from [Product Fieldwork](https://yezi-hub.web.app), a curated PM knowledge library.

## How these work

Every skill here is **thin and MCP-backed** — the `SKILL.md` doesn't bundle static content. Instead it tells Claude which of Product Fieldwork's guides are relevant to that specific job, and instructs it to pull real content live via the `yezi-knowledge-hub` MCP server:

- `search_knowledge_base` — semantic search across the whole library
- `get_guide` — full text of one specific guide
- `build_learning_path` — a sequenced set of guides for a stated goal
- `extract_templates` — copy-ready templates/snippets from a guide

**These skills require the `yezi-knowledge-hub` MCP server to actually work.** Connect it first — see [CONNECTING.md](https://github.com/yezililyz/yezi-hub-mcp/blob/main/CONNECTING.md) for setup via claude.ai or Claude Code.

## Installing a skill

**Option 1 — one at a time.** Copy the `skills/<slug>/` folder you want into your own Claude Skills directory (or point Claude Code at this repo). Each skill is self-contained — a single `SKILL.md`, no other files.

**Option 2 — all 57 at once, via MCP.** [`mcp-server/`](./mcp-server) wraps every skill here as a native MCP resource/prompt/tool, so any MCP client (Claude Desktop, Cursor, Continue, Claude Code) can discover and load them with one config line instead of copying folders manually. See [`mcp-server/README.md`](./mcp-server/README.md) for setup.

## What's covered

Not every guide in the library maps cleanly onto a single named job, and not every named job has a guide behind it yet — these 57 are the ones with a genuine match. Some skills draw on more than one guide; a few guides show up under more than one skill, since real product work overlaps (e.g. "Planning Cadence" is relevant to both `planning-cadence` and `goal-setting-okrs`).

Browse the `skills/` folder for the full list.

## License

[MIT](./LICENSE).
