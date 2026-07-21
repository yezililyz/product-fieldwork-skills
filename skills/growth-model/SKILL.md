---
name: growth-model
description: Design or diagnose a product's actual growth mechanics — where onboarding length is not the point, time-to-value is — using real ARPU/retention data and 1,000+ studied onboarding flows.
---

# Growth Model

Grounded in "Data Research & Logic — Toggl PLG Guide," "Onboarding Insights," and "Onboarding & AI Playbook — EUREKA + AI GTM Notes."

## When to use
Use this when a growth diagnosis defaults to "onboarding is too long, shorten it" without evidence — data across 1,000+ studied apps shows some of the most successful onboarding flows (Duolingo, finance apps) are also among the longest, because length was never the actual variable that mattered. It's also the right tool when a team can't say which specific stage of the funnel (acquisition, activation, retention, expansion) is actually broken, and is instead treating the whole growth model as one undifferentiated problem. The signal to use it now: a retention or activation metric moved and nobody has yet separated "which lever changed this" from "we redesigned everything at once."

## What it does
This skill maps the product's growth mechanics stage by stage — acquisition through activation (getting to the real "Aha moment," which starts before signup and continues through habit formation, not a single post-signup screen) through retention (a Product Adoption Indicator: one simple, repeatable, time-bound action that predicts durable retention) — and treats onboarding length as irrelevant on its own; only time-to-value and structural clarity matter. It applies real growth-lever math (independent ARPU levers, sequenced retention experiments) from Toggl's actual product work, and the EUREKA framework's Straight-Line Onboarding filter for cutting a flow to only what's necessary.

## Method
1. Reject "onboarding should be short" as a default: the data (25-screen average across 1,000+ apps studied, with successful long flows in Finance/Health/Education) shows the real pattern is getting users to the Aha moment as fast as possible — sometimes that takes 3 screens, sometimes 60, and length itself predicts nothing.
2. Define the product's actual Aha moment concretely (Airbnb: first booking; Netflix: finding and watching a show) and map every onboarding step against whether it moves the user toward that moment, personalizes the path, or delights (the DAD test) — remove anything that does none of the three.
3. Find the Product Adoption Indicator (PAI): baseline the retention curve, form a hypothesis ("if new users do X at least N times within Y days, they're more likely to be active after Z days"), validate the overlap between "retained" and "did X≥N times," and compress it to one number the whole org can repeat out loud (Facebook: "7 friends in 10 days").
4. Sell the outcome during onboarding, not the feature list — the apps that convert well show or let users experience the result (Superhuman's compelling pitch, Airbnb's post-first-listing CEO video) rather than enumerating capabilities.
5. Personalize selectively, not by default: only 23% of apps personalize onboarding at all (AI apps even less, at 7%, often deliberately letting the product learn from usage instead) — but where personalization is used well (Headspace letting users pick multiple goals), it produces measurable lifts, so the decision is deliberate, not default-on.
6. Treat quizzes and forms as value-delivery moments, not data collection: show what the answers unlock immediately (a personalized plan, a projected date), rather than collecting inputs with no visible payoff.
7. Model ARPU growth as independent, separately-tracked levers (tier-upgrade conversion, paid add-ons, seat expansion, discount/pricing cleanup) rather than one blended number — review each lever monthly against its own target, and reallocate effort away from any lever trending below about half its projected impact, since underperformance in one lever doesn't block the others.
8. Sequence retention experiments deliberately rather than testing everything at once: target the specific behavioral hook first (a reason to return the next day), then an acceleration of first-value delivery for users already showing engagement signals, then a social/multi-user loop — each building on what the previous one validated.
9. Know when to skip onboarding entirely: for products where the first interaction *is* the value (many AI chat apps, tools that speak for themselves through pure UI), the best onboarding is deliberately getting out of the way rather than inserting a designed flow.

## Inputs
- The product's current onboarding flow, screen by screen, to run the DAD test (does this step drive toward Aha, personalize, or delight?)
- Existing retention/cohort data, to test candidate Product Adoption Indicators against actual retention curves
- Current ARPU composition, broken out by candidate lever (upgrades, add-ons, seats, pricing), not as one blended number
- Any existing personalization in onboarding, to check whether it's deliberate and measured or ad hoc

## Output format
A named, concrete Aha moment for the product; a DAD-tested onboarding flow (each step marked keep/delay/remove); a candidate Product Adoption Indicator with the retention-curve validation behind it; an ARPU lever breakdown with independent targets and a monthly reallocation rule; and a sequenced (not simultaneous) retention experiment plan tied to specific funnel stages.

## Example
A team assumes their 12-screen signup flow is "too long" based on a competitor's 3-screen flow, and plans to cut it blind. Running the DAD test instead reveals 4 of the 12 screens are pure friction (no Aha-progress, no personalization, no delight) and get removed, while 3 screens that seemed removable are actually delivering a personalized projected outcome (closer to Duolingo's model) and get kept, even though they add length. The real fix — informed by data, not a length assumption — cuts the flow from 12 to 8 screens while increasing, not decreasing, the personalization at the steps that remain.

## Common pitfalls
- Shortening onboarding by default because "shorter is better," when the actual data shows length has no independent relationship to conversion or retention — time-to-value does.
- Blending all ARPU growth into one number instead of tracking independent levers (upgrades, add-ons, seats, pricing) separately, which hides which specific lever is underperforming and should be reallocated away from.
- Testing multiple retention hypotheses at once instead of sequencing them (behavioral hook first, then acceleration, then social loop), making it impossible to attribute a resulting lift to any specific change.
