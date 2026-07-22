---
name: growth-model
description: Design a product's growth mechanics using real ARPU/retention data — where onboarding length isn't the point, time-to-value is — and diagnose a growth stall down to its single binding constraint when growth has already broken.
---

# Growth Model

Grounded in "Data Research & Logic — Toggl PLG Guide," "Onboarding Insights," and "Onboarding & AI Playbook — EUREKA + AI GTM Notes," plus a standalone growth-diagnostic framework (not sourced from a specific yezi-hub guide) for isolating a stalled-growth binding constraint.

## When to use
Use this when a growth diagnosis defaults to "onboarding is too long, shorten it" without evidence — data across 1,000+ studied apps shows some of the most successful onboarding flows (Duolingo, finance apps) are also among the longest, because length was never the actual variable that mattered. It's also the right tool when a team can't say which specific stage of the funnel (acquisition, activation, retention, expansion) is actually broken, and is instead treating the whole growth model as one undifferentiated problem. It's the right tool again once growth has visibly stalled or decelerated and leadership is debating half a dozen competing theories at once (pricing, sales, marketing spend, a product gap) without testing any of them against the data — especially if a fix has already been tried (more ad spend, a price cut) and growth didn't respond, which usually means a symptom was treated rather than the actual constraint. The signal to use it now: a retention or activation metric moved and nobody has yet separated "which lever changed this" from "we redesigned everything at once," or the loudest voice in the room — not the data — is currently driving the growth diagnosis.

## What it does
This skill maps the product's growth mechanics stage by stage — acquisition through activation (the real "Aha moment," which starts before signup) through retention (a validated Product Adoption Indicator) — treating onboarding length as irrelevant on its own; only time-to-value and structural clarity matter. It applies real growth-lever math (independent ARPU levers, sequenced retention experiments) and the Straight-Line Onboarding filter for cutting a flow to only what's necessary. When growth has already stalled, it switches into diagnostic mode: decomposing growth arithmetically (new/expansion/churn/contraction) and through the funnel to locate exactly where the deceleration is happening, then tracing that location back to a structural root cause with a five-whys chain rather than stopping at the first plausible story.

## Method
1. Reject "onboarding should be short" as a default: the data (25-screen average across 1,000+ apps studied, with successful long flows in Finance/Health/Education) shows the real pattern is getting users to the Aha moment as fast as possible — sometimes that takes 3 screens, sometimes 60, and length itself predicts nothing.
2. Define the product's actual Aha moment concretely and map every onboarding step against whether it moves the user toward that moment, personalizes the path, or delights (the DAD test) — remove anything that does none of the three.
3. Find the Product Adoption Indicator (PAI): baseline the retention curve, form a hypothesis ("if new users do X at least N times within Y days, they're more likely to be active after Z days"), validate the overlap, and compress it to one number the whole org can repeat out loud.
4. Model ARPU growth as independent, separately-tracked levers (tier-upgrade conversion, paid add-ons, seat expansion, discount/pricing cleanup) rather than one blended number — reallocate effort away from any lever trending below about half its projected impact, since underperformance in one lever doesn't block the others.
5. Sequence retention experiments deliberately rather than testing everything at once: target the specific behavioral hook first, then acceleration of first-value delivery, then a social/multi-user loop — each building on what the previous one validated.
6. When growth has visibly stalled, decompose the top line arithmetically into new, expansion, churned, and contraction revenue as distinct time series — a flat net number can hide new-business strength being offset by a churn problem, or vice versa.
7. Date the precise inflection point where the growth curve bent and line it up against a timeline of internal changes (pricing, org, product releases) to generate hypotheses grounded in what actually changed, then walk the acquisition-to-retention funnel as a waterfall to locate the stage with the largest deviation from its historical baseline — that is usually where the real leak is, and it's often not the stage generating the most internal complaints.
8. Read cohort retention curves by signup vintage to distinguish structural decay (a permanent step-down starting at a specific cohort) from cyclical decay (a recurring, self-correcting pattern) — only structural decay indicates a fixable binding constraint. Confirm with a five-whys trace to a structural root cause, cross-check against a segment cut (is the deceleration uniform or concentrated in one cohort/region), and state the single binding constraint in one sentence with a confidence level and the next analysis that would confirm or kill it.

## Inputs
- The product's current onboarding flow, screen by screen, to run the DAD test
- Existing retention/cohort data, to test candidate Product Adoption Indicators and to distinguish structural from cyclical decay
- Current ARPU composition, broken out by candidate lever, not as one blended number
- If diagnosing a stall: revenue time series split by new/expansion/churn/contraction, full-funnel conversion metrics with historical baselines, and a timeline of internal changes over the period in question

## Output format
For growth design: a named Aha moment, a DAD-tested onboarding flow, a validated Product Adoption Indicator, an ARPU lever breakdown with a monthly reallocation rule, and a sequenced retention experiment plan. For diagnosing a stall: a growth decomposition chart (new/expansion/churn/contraction over time), a funnel waterfall with deviation from baseline flagged, a cohort chart distinguishing structural from cyclical decay, a one-sentence binding-constraint statement with a confidence level, and a named next analysis to confirm it.

## Example
A team assumes their 12-screen signup flow is "too long" and plans to cut it blind; the DAD test instead reveals which screens are pure friction versus which deliver real personalized value, cutting the flow from 12 to 8 while increasing personalization at the steps that remain. Separately, a company with flat year-over-year growth suspects weak acquisition, but decomposition shows new-logo revenue is actually up 12% while expansion revenue collapsed 40% starting the exact quarter an onboarding process change shipped — the binding constraint is a broken expansion motion for mid-market accounts, not an acquisition problem at all.

## Common pitfalls
- Shortening onboarding by default because "shorter is better," when the actual data shows length has no independent relationship to conversion or retention — time-to-value does.
- Diagnosing a growth problem from the net top-line number alone, which hides offsetting movements between new business, expansion, and churn.
- Accepting the loudest or most politically convenient explanation for a stall without testing it against funnel and cohort data, or stopping the root-cause trace at the first symptom instead of tracing it with five-whys to a structural cause.

## Guides referenced
- [Data Research & Logic — Toggl PLG Guide](https://yezi-hub.web.app/guide/GOEDeLVnNxy9UQTPx5zB)
- [Onboarding Insights](https://yezi-hub.web.app/guide/npbfOxMPLoQVKDPC7zDV)
- [Onboarding & AI Playbook — EUREKA + AI GTM Notes](https://yezi-hub.web.app/guide/F8Wn0MFR76AdQZk1iJYI)
