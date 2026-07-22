---
name: leading-org-change
description: Roll out an org-wide process or tooling change by treating the whole system as the unit of redesign, not swapping one tool while leaving the surrounding process untouched — and by anticipating where the bottleneck moves next.
---

# Leading Org Change

Grounded in "From PR Throughput to Product Velocity — Dropbox's Agentic SDLC."

## When to use
Use this when an org is about to roll out a new tool (AI coding assistants, a new process) as an isolated swap — "coding is solved, now go buy a review-checklist tool for the next stage" — rather than redesigning the whole system it sits inside. Dropbox's own framing: 1900s factories that bolted an electric motor onto an old steam-engine layout captured only a fraction of the possible benefit, because they swapped the power source without rebuilding the factory around it. It's also the right tool when a rollout solved its original bottleneck (in Dropbox's case, code-generation speed) and the org hasn't yet asked where the constraint moved to next. The signal to use it now: a metric that mattered before the change (PR throughput) no longer reflects what's actually happening in the system.

## What it does
This skill sequences an org-wide change through the five conditions that actually drove Dropbox's adoption (executive support, developer segmentation, active enablement, visible champions, safety guardrails as non-negotiable), then treats the change as "rebuild the factory" rather than "swap the engine" — auditing every downstream stage the change affects, not just the one it directly touches. It builds a funnel-style measurement system (fuel → adoption → output → impact) for judging whether the change is actually working at the system level, not just at the point of adoption.

## Method
1. Secure genuine top-down executive support before rollout — not a mandate, but visible signaling that this matters, which unblocks legal/procurement speed and sets the cultural tone faster than any bottom-up effort can.
2. Segment the population being changed rather than rolling out one playbook to everyone: early adopters and skeptics need different approaches, and different sub-groups (in Dropbox's case, web/mobile/desktop developers) need tools actually matched to their specific workflows.
3. Invest in active enablement and change management, not a one-time training session — the underlying tools/models evolve continuously, so bring vendor or expert teams in directly and repeatedly as the tools change under people's feet.
4. Identify and incentivize visible champions: high performers sharing wins publicly creates a fast internal feedback loop that accelerates adoption far more than top-down messaging alone.
5. Treat safety and quality guardrails as non-negotiable from day one, in close partnership with security/quality functions — not an afterthought bolted on once volume increases.
6. Once the original bottleneck is solved, explicitly ask where it moved: solving generation speed didn't remove the constraint, it relocated it downstream (to review time, cognitive load on reviewers, CI/CD cost, validation wait) — audit every subsequent stage the change now stresses, not just the one that improved.
7. Redesign the whole system around the change rather than patching each downstream stage independently with a separate tool and a separate metric — put the new capability at the center and re-organize every adjacent stage around it, moving from local optimization to system optimization.
8. Build a funnel-style measurement framework matched to the new system: fuel (raw input, e.g. resource/token consumption), adoption (how the input actually gets used), output (what portion of the work product came from the change vs. the old way), and impact (the metric leadership actually cares about — time-to-ship, ROI).
9. Pair every growth metric with a quality guardrail so increased volume doesn't quietly mask degrading quality: A/B test old-way vs. new-way output directly, track review/turnaround SLAs as volume rises, and monitor defect/rework rates per component against existing baselines.

## Inputs
- The specific process or tool change being rolled out, and which population(s) it affects differently
- Current executive sponsorship status — is there visible, active backing, or just a mandate?
- Whichever downstream stage of the workflow the change most directly touches, so its neighbors can be audited for new strain
- Existing quality baselines (defect rates, review SLAs) to compare against once volume changes

## Example
An org rolls out AI-assisted code generation broadly and initially celebrates a 2x rise in PR throughput. Applying the "rebuild the factory" lens instead of celebrating the swap alone, the team audits every downstream SDLC stage and finds code review time and CI/CD cost both rising faster than throughput — the bottleneck moved, it didn't disappear. The response isn't a bolted-on review tool; it's redesigning the review and validation stages together with the new generation speed in mind, plus a funnel-based measurement system (fuel/adoption/output/impact) replacing the now-meaningless PR-throughput-alone metric.

## Output format
The five-condition rollout plan (executive support, segmentation, enablement, champions, guardrails) named explicitly; a stated original bottleneck and where it's expected to move once solved; a systemwide audit of downstream stages affected by the change, not just the one directly touched; a funnel-based measurement framework (fuel/adoption/output/impact) replacing whatever metric mattered before; and paired quality guardrails (A/B comparison, SLA tracking, defect-rate monitoring) for every growth metric being reported.

## Common pitfalls
- Declaring victory once the original bottleneck is solved (faster code generation, in Dropbox's case) without checking where the constraint moved downstream — the "swap the engine, keep the factory layout" mistake that captures only a fraction of the possible benefit.
- Patching each subsequent stage independently with its own tool and its own metric, instead of redesigning the whole system around the change — this is what keeps the org stuck at local optimization instead of reaching system-level gains.
- Reporting a growth metric (throughput, adoption) with no paired quality guardrail, so a real quality regression (rising defect rate, slipping review SLAs) hides silently behind an impressive-looking volume number.

## Guides referenced
- [From PR Throughput to Product Velocity — Dropbox's Agentic SDLC](https://yezi-hub.web.app/guide/CkatjgOI1GjtqxAf6xkx)
