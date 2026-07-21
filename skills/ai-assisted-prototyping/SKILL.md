---
name: ai-assisted-prototyping
description: Set up Claude Code as a real prototyping system — claude.md, parallel agent patterns, and an Auto Research loop — rather than a one-off chat interface.
---

# AI-Assisted Prototyping

Grounded in the "Advanced Claude Code Playbook • System Prompts to Autonomous Research" (Nick Sarif's advanced Claude Code course).

## When to use
Use this when someone is using Claude Code as a single-shot chat window — one prompt, one file, no memory between sessions — and hitting a ceiling on how fast they can iterate. It's also the right tool when a build workflow has an obvious parallelizable shape (many small research or QA tasks feeding one decision) that's currently being run serially through a single conversation. The signal to use it now: someone asks "how do I make Claude Code remember my project's conventions" or "how do I run more than one thing at once."

## What it does
This skill turns Claude Code from a chat window into a system: a two-layer claude.md (global preferences + local project memory), parallel agent patterns for research and synthesis, and the Auto Research loop for compounding, unattended iteration. It also covers the harness-diversification and workspace-organization habits that keep the system reliable when Claude has an off day.

## Method
1. Set up a global `~/.claude/claude.md` for what never changes across projects: high-level reasoning strategies, personal context and goals, token-conservation rules, and core preferences.
2. Set up a local, per-project `claude.md` for what's specific to this build: an architecture summary, where files live and what they do, project-specific skills/tools, and a running log of what worked and what didn't on this project.
3. Run the workflow loop deliberately: Plan → Instantiate → extract learnings → update the local claude.md → periodically distill recurring learnings up into the global claude.md via `/insights`.
4. For any task with a "research many angles, then decide" shape, use the fan-out/fan-in pattern: spawn several cheap researcher agents on different angles, then feed their summaries to one stronger synthesizer agent — this beats one agent trying to do it all serially, in both speed and quality.
5. For decisions with real ambiguity, use debate/stochastic consensus: spawn agents with deliberately different framings (conservative, contrarian, first-principles) and compare where they agree and where the high-variance outlier might actually be right.
6. For a build with distinct phases, use pipeline handoff: a developer agent, then a QA agent, then a reviewer agent, each with a clean context and a narrow incentive — this consistently outperforms one agent trying to be all three.
7. For the highest-leverage long-running pattern, implement the Auto Research loop: form a hypothesis ("if I change X, metric Y improves"), execute the change, assess it against a standardized measurement, then log and iterate — keeping winners and discarding losers. Even small per-run improvements compound fast at high iteration counts.
8. Before shipping anything public-facing, run the 80/20 security checklist: never paste API keys into chat (store them in `.env` and tell Claude not to read or commit it), audit for hallucinated package names, and enable row-level security on every database table.

## Inputs
- The project's current architecture and conventions, if any exist yet
- What's already been tried and what failed, to seed the claude.md learnings log
- Whether the task at hand has a parallelizable shape (multiple independent angles) or is inherently sequential
- Any public-facing surfaces that need the security checklist run before shipping

## Output format
A two-file claude.md set (global + local) with the four required sections each; a named parallelization pattern (fan-out/fan-in, debate, or pipeline handoff) matched to the task's shape; an Auto Research loop definition (hypothesis, execution step, measurement, logging cadence) if the task is iterative; and a completed 80/20 security checklist before any public-facing ship.

## Example
A small team building a new onboarding flow sets up a local claude.md documenting their component structure and two known gotchas from a prior session. For the open question of "which onboarding copy converts best," they fan out three researcher agents to draft distinct angles (benefit-led, social-proof-led, urgency-led), synthesize the strongest elements with one Opus-tier agent, then run an Auto Research loop — ship, measure signup completion, log the result, iterate on the losing variant — rather than debating copy in a meeting.

## Common pitfalls
- Treating Claude Code as a stateless chat window instead of a system with memory, re-explaining the same project context every session instead of writing it once into claude.md.
- Running everything through one agent serially when the task's shape is obviously parallelizable, leaving significant speed and quality on the table.
- Pasting API keys directly into the conversation, where they persist in local history files, instead of storing them in `.env` and instructing Claude never to read or commit it.
