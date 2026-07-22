import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { runFindSkill } from '../src/tools/find_skill.js'
import { runListSkills } from '../src/tools/list_skills.js'
import { runReadSkill } from '../src/tools/read_skill.js'
import { loadAllSkills } from '../src/skills/loader.js'
import { SkillRegistry } from '../src/skills/registry.js'

const here = fileURLToPath(import.meta.url)
const SKILLS_DIR = resolve(here, '..', '..', '..', 'skills')

async function buildRegistry(): Promise<SkillRegistry> {
  const skills = await loadAllSkills(SKILLS_DIR)
  return new SkillRegistry(skills)
}

describe('tool handlers', () => {
  it('list_skills returns all 71 by default', async () => {
    const r = await buildRegistry()
    const out = runListSkills(r, {})
    expect(out.total).toBe(71)
    expect(out.count).toBe(71)
  })

  it('list_skills filters by free-text query', async () => {
    const r = await buildRegistry()
    const out = runListSkills(r, { query: 'onboarding' })
    expect(out.count).toBeGreaterThan(0)
    expect(out.skills.some(s => s.name === 'user-onboarding-activation')).toBe(true)
  })

  it('find_skill ranks a PRD question to writing-prds', async () => {
    const r = await buildRegistry()
    const out = runFindSkill(r, { question: 'how do I write a tighter PRD?', limit: 3 })
    expect(out.matches.length).toBeGreaterThan(0)
    expect(out.matches[0].name).toBe('writing-prds')
  })

  it('read_skill returns full SKILL.md content', async () => {
    const r = await buildRegistry()
    const out = runReadSkill(r, { name: 'planning-cadence' })
    expect(out.content).toContain('name: planning-cadence')
    expect(out.content).toContain('description:')
  })

  it('read_skill throws on unknown name', async () => {
    const r = await buildRegistry()
    expect(() => runReadSkill(r, { name: 'does-not-exist' })).toThrow(/Unknown skill/)
  })
})
