---
name: shipping-velocity
description: Increase real shipping speed by first checking whether the bottleneck is actually visibility (decisions and releases nobody records) rather than raw execution speed — and by tracking where a solved bottleneck moved to next.
---

# Shipping Velocity

Grounded in "From PR Throughput to Product Velocity — Dropbox's Agentic SDLC" and "A Startup PM Delivery Guide."

## When to use
Use this when a team assumes shipping is slow because execution is slow, when the actual problem is information loss — decisions and releases happen informally and are never recorded, so context evaporates and the same ground gets re-covered repeatedly. It's also the right tool once a real speed bottleneck (like AI-assisted code generation) has been solved — the constraint doesn't disappear, it relocates downstream (to review time, cognitive load, CI/CD cost), and declaring victory at the first bottleneck misses where the next one landed.

## What it does
This skill first diagnoses whether the real problem is visibility or velocity — installing a lightweight release log and decision log before assuming more process or more automation is needed — then, for teams that have genuinely solved a bottleneck (e.g., through AI-assisted generation), applies the "rebuild the factory, not swap the engine" principle: redesigning the whole downstream system around the new capability rather than patching each subsequent stage independently.

## Method
1. Reframe the stated problem before reaching for a fix: is work actually moving slowly, or are decisions and releases happening informally and evaporating — the second is a visibility problem, and the fix (make information traversable) is completely different from a velocity fix.
2. Install exactly one lightweight mechanism at a time to close the biggest visibility leak — a release log (what shipped, why, who's affected, posted the moment anything ships) or a decision log (date, decision, why, owner, affected area, appended the moment a real decision lands) — run it personally for a few weeks before asking the team to adopt it, so it proves its value before becoming a mandate.
3. Separate PM ownership from engineering ownership explicitly: the PM owns the "what and why" (PRD framing, stories, prioritization, stakeholder trade-offs); engineering owns the "how" (architecture, API design, effort estimates); resolve assumptions, dependencies, and scope cuts together in refinement — this split itself prevents a common velocity drag (unclear ownership causing rework).
4. Run a lightweight weekly rhythm rather than heavy process: a 30-minute priorities sync (what matters this week, what's changed, what needs a decision), an async leadership update (green/amber/red plus one specific decision needed), and continuous release/decision logging — this is often the entire "PM operating system" a fast-moving team needs.
5. Never broadcast an ETA set alone — reconcile any date change with engineering before it goes external, and when a project slips, re-rank the backlog rather than silently absorbing the slip by extending the date without adjusting anything else.
6. Once a genuine speed bottleneck is solved (e.g., AI-assisted code generation dramatically increasing raw output), explicitly ask where the constraint moved rather than declaring victory — solving generation speed typically relocates the bottleneck downstream into review time, reviewer cognitive load, and CI/CD cost and volume.
7. Redesign the whole downstream system around the new capability rather than patching each stage independently with its own tool and its own metric — the "rebuild the factory, don't just swap the engine" principle: 1900s factories that bolted an electric motor onto an unchanged steam-engine layout captured only a fraction of the possible gain.
8. Build a funnel-style measurement framework matched to whatever new capability is driving throughput: fuel (raw input/resource consumption) → adoption (how that input actually gets used) → output (what portion of the work product it actually produced) → impact (the metric leadership cares about, like time-to-ship) — and pair every growth metric with an explicit quality guardrail (defect rate, review SLA) so rising volume doesn't quietly mask degrading quality.

## Inputs
- Whether the current complaint is "things move too slowly" or, on closer inspection, "nobody knows what shipped or why" — these need different fixes
- Current state of release/decision logging, if any exists, to identify which single mechanism would close the biggest leak first
- If a recent capability has already increased raw throughput (e.g., AI-assisted generation): what happened to review time, CI/CD load, and defect rates as a result
- Current ETA-setting practice — are dates being reconciled with engineering before going external, or set and broadcast unilaterally?

## Output format
A diagnosis distinguishing a visibility problem from a true velocity problem; if visibility, one installed mechanism (release log or decision log) with its when/where/who/automation specified; a weekly rhythm (priorities sync, async leadership update, continuous logging); and, if a real bottleneck was recently solved, a stated new bottleneck location downstream plus a redesigned (not patched) plan for the stages now under strain, with a paired quality guardrail for any reported growth metric.

## Example
A startup's founders keep making product decisions and shipping changes that the rest of the team learns about informally, days later, if at all. Rather than adding a heavier process, a single decision log (one Notion row per decision: date, decision, why, owner) is installed and run by the PM alone for two weeks before being opened to founders and engineering. Once adopted, decisions become traceable months later, and the perceived "slowness" — which was actually rework caused by decisions getting silently re-litigated — drops without anyone touching the actual engineering process.

## Common pitfalls
- Treating an information-loss problem (decisions and releases nobody records) as if it were an execution-speed problem, and adding heavier process or more automation that doesn't address the actual leak.
- Declaring a bottleneck solved (e.g., "AI made us 2x faster at generating code") without checking where the constraint moved downstream — review time, reviewer cognitive load, and CI/CD cost often silently absorb the gain instead.
- Broadcasting an ETA that was set unilaterally, without reconciling it with the people actually doing the work, then having to walk it back publicly when it slips.

## Guides referenced
- [From PR Throughput to Product Velocity — Dropbox's Agentic SDLC](https://yezi-hub.web.app/guide/CkatjgOI1GjtqxAf6xkx)
- [A Startup PM Delivery Guide](https://yezi-hub.web.app/guide/GQGPNNCzmhbX2d7HurJs)
