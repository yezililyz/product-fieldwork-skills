---
name: roadmap-prioritization
description: Build a prioritized roadmap end-to-end — from the should-we-build-this-at-all gate through WSJF/BCG scoring and real-capacity modeling to a traceable strategy-to-delivery loop with an explicit kill list — instead of just ranking a backlog by feel.
---

# Roadmap Prioritization

Grounded in "Beyond Prioritization — The Field Guide," "Roadmaps Operating Loop — Interactive Workflow Guide," and "Strategy to Delivery: Interactive Toolkit," plus a standalone capacity-and-kill-list framework (not sourced from a specific yezi-hub guide) for forcing a long candidate list down to what the org can actually deliver.

## When to use
Use this when a backlog is being ranked purely on a RICE or MoSCoW score with no earlier gate checking whether each item should be built at all — RICE effort only captures engineering time, never total cost of ownership, compliance risk, or whether a business model exists behind the feature. It's also the right tool when roadmap items can't be traced back to the goals they serve, or when a planning cycle has produced 12+ initiatives that are all rated "high priority" — that's not a prioritization, it's an unresolved conflict, and the organization is quietly planning to fund most of them at reduced scope rather than making real trade-offs. The signal to use it now: last year's roadmap tried to do too much, most items shipped late or watered-down, and nobody wants to repeat that pattern.

## What it does
This skill runs a full prioritization pipeline: the ten-question investment gate (should this be built at all), a traceable operating loop connecting every roadmap item back to a stated goal, portfolio-level tools (WSJF, a BCG-style grid) for sequencing, and — once candidates survive scoring — a real-capacity check against the organization's actual historical delivery rate (not its org-chart-idealized capacity), sequenced by dependency and cash flow, closing with an explicit, reasoned kill list for everything that didn't make the cut.

## Method
1. Run every roadmap candidate through the investment gate before ranking it: customer feasibility, business feasibility (does it ladder to a stated goal), technical feasibility and total cost of ownership, and a stated success/kill metric — a blank field here is an unvalidated assumption, not a green light.
2. Capture raw demand in one place and group it into themes rather than working a flat, unranked list — a theme's votes-per-idea ratio often reveals asymmetric, high-intensity demand a flat idea count would hide.
3. Score surviving candidates on customer value, business value, and effort/confidence together, then use WSJF specifically when cost of delay matters — but remember a high WSJF score can still legitimately wait if resources or dependencies aren't resolved.
4. Use a BCG-style growth-share view when the question is portfolio-level (where to invest across initiatives or product lines), and a weighted scoring model with pre-committed weights for close calls that don't resolve cleanly on WSJF or BCG alone — set the weights before scoring, not after, to avoid reverse-engineering a preferred answer.
5. Model real capacity explicitly: estimate how many initiatives of this size and type the organization can actually run in parallel based on historical delivery record, not idealized org-chart headcount — if the team has completed 3 major initiatives a year historically, don't plan for 8 regardless of how the scoring ranks them.
6. Sequence the surviving candidates by dependency logic first (what must happen before what) and cash flow second — attractiveness rank alone is not a valid sequencing rule if a lower-ranked item is a hard prerequisite for a higher-ranked one — and stress-test the shortlist against the capacity ceiling, cutting further rather than compressing timelines if it still exceeds realistic parallel capacity.
7. Write an explicit kill list for everything that didn't survive: every cut candidate with the specific reason (insufficient impact, infeasible given capacity, redundant, dependency not yet met) — this is what makes the prioritization defensible and prevents the same items from being silently re-added next cycle without new evidence.
8. Keep every roadmap item traceable in both directions (feature → initiative → goal), sequence the roadmap at three altitudes (strategy, portfolio, features) for three audiences from the same underlying records, and hand off to engineering while preserving that traceability chain.
9. Monitor with a recurring ritual: check release progress, whether high-value work is actually the work moving, and whether idea/theme volume signals a shifting user need — then revisit the kill list at the next planning checkpoint too, since some killed initiatives become viable once a dependency clears or capacity frees up.

## Inputs
- The raw candidate backlog or ideas list, with themes if any exist
- The specific stated goals or strategic pillars each candidate should trace back to
- Cost-of-delay inputs for a WSJF pass, or market-share/growth data for a portfolio-level BCG view
- Realistic team capacity based on historical delivery record, not budgeted headcount, and known dependencies between candidates

## Output format
A gated candidate list (passed/failed the ten-question investment test); a themed and scored backlog; a WSJF-ranked or BCG-plotted view; a capacity-checked, dependency-sequenced shortlist of the initiatives actually being funded; an explicit kill list stating the specific reason each remaining candidate was cut; and a three-altitude roadmap (strategy/portfolio/features) with explicit goal-to-feature traceability.

## Example
A company enters planning with 14 candidate initiatives, all labeled high priority by their sponsors. After the investment gate eliminates a few with unbounded compliance exposure, the rest are scored on a weighted model (40% revenue impact, 30% strategic fit, 20% risk, 10% speed) and checked against a realistic capacity of 4 major initiatives per year based on last year's delivery record. The list narrows to 4, sequenced so a security certification ships first since a partner API cannot launch without it. Ten initiatives are killed with named reasons, including a rebrand (high sponsor enthusiasm, low financial return) and a mobile rebuild (blocked on the checkout redesign completing first) — both explicitly logged so they aren't silently re-proposed next cycle without new evidence.

## Common pitfalls
- Ranking a backlog by RICE or customer-value score alone, skipping the earlier should-we-build-this-at-all gate and the later real-capacity check that catches an unrealistic, over-parallel plan.
- Scoring initiatives on attractiveness alone without checking them against real organizational capacity, producing a roadmap that looks good on paper and fails in execution.
- Cutting initiatives without stating a specific reason, which invites them to be silently re-added in the next planning cycle without new evidence — or losing traceability between roadmap items and the goals they serve.

## Guides referenced
- [Beyond Prioritization — The Field Guide](https://yezi-hub.web.app/guide/8kFZtBBWMb3sXgxad7cg)
- [Roadmaps Operating Loop — Interactive Workflow Guide](https://yezi-hub.web.app/guide/xwp2MJONtyfyiS6jwKux)
- [Strategy to Delivery: Interactive Toolkit](https://yezi-hub.web.app/guide/fF4DsRvbfv5QUvR6s9XS)
