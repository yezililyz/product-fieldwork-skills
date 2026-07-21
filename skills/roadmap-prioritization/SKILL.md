---
name: roadmap-prioritization
description: Build a prioritized roadmap end-to-end — from the should-we-build-this-at-all gate through WSJF/BCG scoring to a traceable strategy-to-delivery loop — instead of just ranking a backlog by feel.
---

# Roadmap Prioritization

Grounded in "Beyond Prioritization — The Field Guide," "Roadmaps Operating Loop — Interactive Workflow Guide," and "Strategy to Delivery: Interactive Toolkit."

## When to use
Use this when a backlog is being ranked purely on a RICE or MoSCoW score with no earlier gate checking whether each item should be built at all — RICE effort only captures engineering time, never total cost of ownership, compliance risk, or whether a business model exists behind the feature. It's also the right tool when roadmap items can't be traced back to the goals they serve — the operating-loop pattern (goal → initiative → release → epic → feature, traceable in both directions) is what prevents a roadmap from drifting into a disconnected feature list.

## What it does
This skill runs a full prioritization pipeline: the ten-question investment gate (should this be built at all, before ranking it), a traceable operating loop connecting every roadmap item back to a stated goal (capture ideas → theme them → score on customer/business value → sequence on a roadmap → hand off to engineering → monitor KPIs), and portfolio-level tools (WSJF for cost-of-delay-driven ranking, a BCG-style grid for where to invest across a portfolio) for turning strategy into an actual sequence of work.

## Method
1. Run every roadmap candidate through the investment gate before ranking it: customer feasibility (is the problem real and painful), business feasibility (does it ladder to a stated goal), technical feasibility and total cost of ownership (not just build effort — maintenance, support, compliance), and a stated success/kill metric — a blank field here is an unvalidated assumption, not a green light.
2. Capture raw demand in one place (an ideas/feedback portal) and group it into themes rather than working a flat, unranked list — a theme's votes-per-idea ratio often reveals asymmetric, high-intensity demand a flat idea count would hide.
3. Score surviving candidates on customer value, business value, and effort/confidence together, not on a single dimension — a feature scoring high on customer need but with high effort and low confidence needs a different conversation than one that's cheap and certain.
4. Use WSJF specifically when cost of delay matters: rank by (business value + time criticality + risk reduction) ÷ job size — but remember a high WSJF score can still legitimately wait if resources, dependencies, or timing conflicts aren't resolved; scoring alone isn't the whole prioritization call.
5. Use a BCG-style growth-share view when the question is portfolio-level (where to invest across initiatives or product lines, not just which single feature ships next) — plotting by market share and growth surfaces which bets are Stars worth doubling down on versus Dogs worth sunsetting.
6. Keep every roadmap item traceable in both directions: a scheduled feature should trace up to the initiative and goal it serves; a stated goal should trace down to the specific features currently funding it. If a roadmap item can't make that trace, the prioritization step was skipped somewhere.
7. Sequence the roadmap at three altitudes for three audiences from the same underlying records — a strategy-level view (initiatives and features tagged to goals, for leadership), a portfolio view (coordinating across multiple product lines), and a features view (release-by-release, for delivery teams) — so none of them can silently drift out of sync with the others.
8. Hand off to engineering while preserving the traceability chain — the ticket in the delivery tool should still connect back to the feature, the initiative, and the goal, which is what makes later KPI dashboards trustworthy rather than disconnected activity metrics.
9. Monitor with a recurring ritual, not a one-time review: check whether release progress is on pace, whether high-value work is actually the work moving, and whether idea/theme volume is signaling a shifting user need — then re-run the goal-alignment check periodically, since features that were once aligned can drift as strategy shifts.

## Inputs
- The raw candidate backlog or ideas list, with themes if any exist
- The specific stated goals or strategic pillars each candidate should trace back to
- Cost-of-delay inputs (business value, time criticality, risk reduction, job size) for a WSJF pass, or market-share/growth data for a portfolio-level BCG view
- Current roadmap traceability — can features be traced up to goals, and goals traced down to the features funding them?

## Output format
A gated candidate list (passed/failed the ten-question investment test, with specific missing fields flagged); a themed and scored backlog (customer value, business value, effort/confidence); a WSJF-ranked or BCG-plotted view depending on the question being asked (sequencing vs. portfolio investment); and a three-altitude roadmap (strategy/portfolio/features) with explicit goal-to-feature traceability at every level.

## Example
A backlog of 40 candidate features is first run through the investment gate, eliminating 8 that have no clear business-feasibility link to a stated goal and 3 with unbounded compliance exposure. The remaining 29 are themed from an ideas portal, revealing one theme with a much higher votes-per-idea ratio than its raw idea count would suggest — a small number of asks with outsized demand intensity. WSJF ranks the themed, gated candidates for the next quarter, while a separate BCG-style view is used to decide whether to keep investing in a mature feature area (a Cash Cow) or fund a newer, higher-growth bet (a Question Mark) instead.

## Common pitfalls
- Ranking a backlog by RICE or customer-value score alone, skipping the earlier should-we-build-this-at-all gate that catches unbounded total cost of ownership or missing business models.
- Treating raw idea/vote counts as a flat list instead of grouping into themes, hiding asymmetric demand signals (a small number of ideas with very high vote intensity) that a flat ranking would miss entirely.
- Losing traceability between roadmap items and the goals they serve, so a feature keeps shipping quarter after quarter with no one able to say which strategic pillar it's still actually funding.
