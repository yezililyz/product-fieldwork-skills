/**
 * Register one MCP prompt per skill. Each prompt is parameterized by a
 * single optional `user_query` argument and returns a two-message
 * conversation: the skill content as a preamble + the user query.
 *
 * This lets MCP-aware clients (Claude Desktop, Cursor, etc.) inject a
 * skill into the model context with a single slash command.
 */

import { z } from 'zod'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import type { RegistryEntry, SkillRegistry } from '../skills/registry.js'

const PROMPT_ARGS_SHAPE = {
  user_query: z
    .string()
    .optional()
    .describe('Optional user question to append after the skill content. If omitted, the skill is loaded standalone.'),
}

export function registerSkillPrompts(server: McpServer, registry: SkillRegistry): void {
  for (const skill of registry.all()) {
    registerOne(server, skill)
  }
}

function registerOne(server: McpServer, skill: RegistryEntry): void {
  server.registerPrompt(
    skill.name,
    {
      title: skill.name,
      description: skill.description,
      argsSchema: PROMPT_ARGS_SHAPE,
    },
    async args => {
      const userQuery = typeof args?.user_query === 'string' ? args.user_query : ''
      const messages = [
        {
          role: 'user' as const,
          content: {
            type: 'text' as const,
            text: buildSkillPreamble(skill),
          },
        },
      ]
      if (userQuery.trim().length > 0) {
        messages.push({
          role: 'user' as const,
          content: { type: 'text' as const, text: userQuery },
        })
      }
      return {
        description: skill.description,
        messages,
      }
    },
  )
}

function buildSkillPreamble(skill: RegistryEntry): string {
  return [
    `You have been given access to the following Product Fieldwork skill: \`${skill.name}\`.`,
    '',
    "Follow the guidance below. This skill is thin — it doesn't bundle guide content itself, it tells you which of Product Fieldwork's real guides are relevant and how to pull them. Use the yezi-knowledge-hub MCP server's `search_knowledge_base`, `get_guide`, `build_learning_path`, and `extract_templates` tools as instructed below to ground your answer in the real guides (that server must also be connected — see https://github.com/yezililyz/yezi-hub-mcp/blob/main/CONNECTING.md).",
    '',
    '---',
    '',
    skill.content,
  ].join('\n')
}
