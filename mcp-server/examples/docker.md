# Docker usage

## Build the image

```bash
cd mcp-server
# Skills are sourced from ../skills/ — copy them into the build context first
rm -rf skills && cp -R ../skills ./skills
docker build -t product-fieldwork-skills-mcp:local .
```

## Run interactively

MCP servers communicate on stdio. To smoke-test the image, pipe a single `initialize` request and read the first response line:

```bash
echo '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"1.0"}}}' \
  | docker run --rm -i product-fieldwork-skills-mcp:local
```

## Wire into Claude Desktop via Docker

```json
{
  "mcpServers": {
    "product-fieldwork-skills": {
      "command": "docker",
      "args": ["run", "--rm", "-i", "product-fieldwork-skills-mcp:local"]
    }
  }
}
```

## Remember: connect `yezi-hub-mcp` too

This server only distributes the 57 skill definitions. When a skill actually fires, it instructs Claude to call the separate `yezi-hub-mcp` server for real guide content — that server needs to be connected as well. See its [CONNECTING.md](https://github.com/yezililyz/yezi-hub-mcp/blob/main/CONNECTING.md).
