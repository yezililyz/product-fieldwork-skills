# syntax=docker/dockerfile:1.7
# Multi-stage Dockerfile for product-fieldwork-skills-mcp.
#
# Stage 1 builds TypeScript -> JS with full dev deps. Stage 2 ships a slim
# Alpine image with only the compiled JS, production deps, and the bundled
# `skills/` directory.

############################
# Stage 1 — build
############################
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first to leverage Docker layer caching.
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund

# Copy source, scripts, and the parent skills/ directory.
COPY tsconfig.json ./
COPY src ./src
COPY scripts ./scripts
COPY skills ./skills

# Compile and verify chmod on the bin shim.
RUN npm run build

############################
# Stage 2 — runtime
############################
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV SKILLS_DIR=/app/skills

# Production dependencies only.
COPY package.json package-lock.json* ./
RUN npm install --omit=dev --no-audit --no-fund && npm cache clean --force

# Compiled JS + skill library.
COPY --from=build /app/dist ./dist
COPY --from=build /app/skills ./skills

# Run as the unprivileged node user shipped with the official image.
USER node

# MCP servers speak JSON-RPC on stdio. No port to expose.
ENTRYPOINT ["node", "dist/index.js"]

LABEL org.opencontainers.image.title="product-fieldwork-skills-mcp" \
      org.opencontainers.image.description="MCP server exposing 57 Product Fieldwork skills (product, growth, career jobs)." \
      org.opencontainers.image.source="https://github.com/yezililyz/product-fieldwork-skills" \
      org.opencontainers.image.licenses="MIT"
