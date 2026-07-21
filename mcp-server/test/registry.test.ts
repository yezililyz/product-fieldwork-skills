import { describe, expect, it } from 'vitest'

import type { LoadedSkill } from '../src/skills/loader.js'
import { SkillRegistry } from '../src/skills/registry.js'

function loaded(name: string, description: string): LoadedSkill {
  const raw = `---\nname: ${name}\ndescription: ${description}\n---\n\n# ${name}\n`
  return {
    frontmatter: { name, description },
    body: `# ${name}`,
    raw,
    path: `/fake/${name}/SKILL.md`,
  }
}

describe('SkillRegistry', () => {
  const skills = [
    loaded('planning-cadence', 'Use when designing or fixing a team annual/quarterly/weekly planning rhythm'),
    loaded('writing-prds', 'Use when writing or reviewing a PRD to make it ship something small and sharp'),
    loaded('pricing-strategy', 'Use when setting, changing, or testing product pricing and packaging'),
  ]

  it('indexes by name and reports size', () => {
    const r = new SkillRegistry(skills)
    expect(r.size).toBe(3)
    expect(r.get('writing-prds')?.description).toContain('PRD')
    expect(r.get('nope')).toBeUndefined()
  })

  it('returns deterministic sorted lists', () => {
    const r = new SkillRegistry(skills)
    const names = r.all().map(s => s.name)
    expect(names).toEqual(['planning-cadence', 'pricing-strategy', 'writing-prds'])
  })

  it('filters by free-text query', () => {
    const r = new SkillRegistry(skills)
    expect(r.list({ query: 'PRD' }).map(s => s.name)).toEqual(['writing-prds'])
  })

  it('ranks search results by relevance', () => {
    const r = new SkillRegistry(skills)
    const hits = r.search('how do I write a tighter PRD?', 2)
    expect(hits.length).toBeGreaterThan(0)
    expect(hits[0].skill.name).toBe('writing-prds')
  })

  it('returns empty results on noise query', () => {
    const r = new SkillRegistry(skills)
    expect(r.search('xyz unrelated zzzz', 3)).toEqual([])
  })

  it('rejects duplicates', () => {
    expect(() => new SkillRegistry([skills[0], skills[0]])).toThrow(/Duplicate skill/)
  })
})
