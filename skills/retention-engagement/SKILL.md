---
name: retention-engagement
description: Improve retention by targeting time-to-value and a validated Product Adoption Indicator — not onboarding length — using named UX patterns matched to what the product actually needs.
---

# Retention & Engagement

Grounded in "Onboarding Insights," "The Onboarding Pattern Library — 15 UX Patterns from 200+ Apps," and "Onboarding & AI Playbook — EUREKA + AI GTM Notes."

## When to use
Use this when a retention problem is being blamed on "onboarding is too long" without evidence — data across 1,000+ studied apps shows some of the most successful, highest-retaining products (Duolingo, finance apps) also have the longest onboarding flows; length itself predicts nothing, time-to-value does. It's also the right tool when a first-run flow is using one generic pattern (a feature tour) for every product type, instead of matching the specific pattern (of fifteen named ones) to what the product actually needs.

## What it does
This skill diagnoses retention and engagement problems by separating the myth (short = good) from the real driver (fast, validated time-to-value), applies the fifteen named onboarding patterns as a matched toolkit rather than a generic checklist, and builds a real Product Adoption Indicator — one specific, repeatable early behavior shown to predict durable retention — as the concrete target to design toward.

## Method
1. Reject "shorten onboarding" as a default fix — check first whether the actual problem is time-to-value (how long until the user experiences the product's core benefit), which has no fixed relationship to screen count.
2. Match onboarding patterns to the specific need rather than defaulting to a feature tour: a First Look or Product Tour for feature-rich platforms that would overwhelm a cold start; a Checklist or Action-Oriented flow for setup-heavy products where getting to value takes several concrete steps; Self-Segmentation when the product serves genuinely distinct audiences; Empty States with a clear CTA for anything depending on user-generated content; Goal Setting for products that rely on repeated usage measured over time.
3. Use lighter-touch patterns (Walkthrough Beacons, Coach Marks, Contextual Tooltips) for optional, non-blocking guidance — reserve a forced sequential walkthrough (Product Tour) only for genuinely feature-dense products where a cold start would otherwise overwhelm.
4. Personalize deliberately, not by default — only 23% of apps personalize onboarding at all, and AI products often do it even less (7%), sometimes intentionally letting the product learn from usage instead; where personalization is used well (letting users pick multiple goals rather than forcing one), it produces measurable retention lifts, so the decision should be deliberate, not skipped by default either.
5. Sell the outcome during onboarding rather than listing features — show or let the user experience the result (a personalized plan, a projected outcome) instead of enumerating capabilities.
6. Build a real Product Adoption Indicator: baseline the actual retention curve, hypothesize a specific repeatable action and threshold ("if new users do X at least N times within Y days, they're more likely to be active after Z days"), validate the overlap against real retention data, and compress it into one number the whole team can act on.
7. Treat quizzes, forms, and information-gathering steps as value-delivery moments — show what the answers unlock immediately rather than just collecting inputs with no visible payoff.
8. Know when to skip structured onboarding entirely — for products where the first interaction is the value itself (many AI chat tools, products that "speak for themselves"), the best onboarding is deliberately getting out of the way, not inserting a designed flow that adds friction without adding clarity.

## Inputs
- The product's current onboarding flow, screen by screen, matched against the fifteen named patterns
- Existing retention/cohort data, to test candidate Product Adoption Indicators against real outcomes
- Whether the product currently personalizes onboarding at all, and whether that's a deliberate choice
- Any recent onboarding changes made purely to reduce screen count, to check whether they addressed time-to-value or just length

## Output format
A stated time-to-value diagnosis (not a screen-count diagnosis); a matched onboarding pattern (or combination — patterns compose, e.g. self-segmentation → personalization → checklist → contextual tooltips) for the specific product type; a validated Product Adoption Indicator with the specific action/threshold/timeframe and retention-curve evidence; and a note on whether structured onboarding is even the right choice for this product, or whether getting out of the way serves it better.

## Example
A team cuts their 10-screen onboarding to 4 screens after reading that "shorter is better," and retention doesn't improve. Redirected to the real driver, the team instead measures time-to-first-value directly and finds it's not screen count but a confusing account-setup step blocking users from reaching the "aha" moment — fixed by adding an Action-Oriented pattern (do the real first task immediately) rather than removing more screens. A validated PAI ("completed one full project within the first session") then becomes the actual retention-predicting target for future onboarding iteration.

## Common pitfalls
- Shortening onboarding by default because "shorter is better," when the real data shows length has no independent relationship to retention — time-to-value does.
- Applying the same generic pattern (usually a Product Tour) to every product type instead of matching a pattern to what the specific product actually needs.
- Declaring a retention fix successful based on a single metric snapshot instead of validating a real Product Adoption Indicator against actual retention-curve data over multiple cohorts.
