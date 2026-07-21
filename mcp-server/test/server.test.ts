import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { createServer } from '../src/server.js'

const here = fileURLToPath(import.meta.url)
const SKILLS_DIR = resolve(here, '..', '..', '..', 'skills')

describe('createServer', () => {
  it('loads the full 57-skill library', async () => {
    const { registry, skillsDir } = await createServer({ skillsDir: SKILLS_DIR })
    expect(skillsDir).toBe(SKILLS_DIR)
    expect(registry.size).toBe(57)
    expect(registry.get('planning-cadence')).toBeDefined()
    expect(registry.get('writing-prds')?.description).toMatch(/PRD/i)
  })
})
