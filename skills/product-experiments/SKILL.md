---
name: product-experiments
description: Design one specific, isolated product experiment with real rigor — a narrow hypothesis, a predeclared guardrail, and a contained rollout — rather than a broad, unfocused test.
---

# Product Experiments

Grounded in "Monetization Experiment Guideline — Seat vs. Value Pricing."

## When to use
Use this when a single experiment is being scoped with a vague goal ("let's test if this helps") instead of one narrow, falsifiable hypothesis covering exactly one variable and one segment. It's also the right tool when a test is about to ship to the full existing user base at once, with no predeclared guardrail or rollback plan — the difference between an experiment and an unmonitored rollout.

## What it does
This skill walks one experiment through its full arc: precisely stating the problem, segmenting who's actually affected differently, choosing the simplest model that captures the real question, establishing a trusted baseline, writing one narrow hypothesis, predeclaring guardrails and a rollback plan, running on a contained cohort, and judging the result by its whole metric shape rather than a single headline number.

## Method
1. State the problem precisely before designing the test — name exactly what's misaligned or uncertain, specific enough that a reader unfamiliar with the backstory would understand what's being tested and why.
2. Segment the population the experiment would affect before choosing a design — the same change can be a clear win for one segment and a real risk for another; a single blanket test across both hides this.
3. Apply the removal test to anything new the experiment would introduce: if no downstream system or decision actually depends on a new metric or field, remove it from scope; if it's useful but not urgent, defer it rather than building it into this specific test.
4. Establish the baseline first — current values for every metric the experiment will move, segmented the same way the test will be — since this is the control every result gets judged against, and a test without a trusted baseline can't produce a trustworthy result.
5. Write exactly one hypothesis covering exactly one variable and one segment — not a bundle of simultaneous changes, which makes it impossible to attribute any resulting change to a specific cause.
6. Predeclare guardrails before launch: the acceptable drop in any metric that shouldn't degrade, and the specific point at which the test gets rolled back — decided in advance, not negotiated after seeing an uncomfortable result.
7. Roll out to the smallest reasonable contained cohort — new signups only, or a single segment/region — never the full existing base first, so the blast radius stays small and the resulting data stays interpretable.
8. Instrument the full response, not just the primary metric: the funnel around the change, behavioral responses (adoption, abandonment), and outcomes through a real time horizon (not just day-one), since day-one data can look encouraging while a delayed cost only shows up later.
9. Judge the result by its whole metric shape — a test that lifts the primary metric while quietly damaging a secondary one (retention, support load, trust) is a failure dressed as a win; only approve and expand once baseline, hypothesis, guardrails, and rollback were all in place and the guardrails held.

## Inputs
- The specific question or uncertainty the experiment is meant to resolve, stated precisely
- Baseline data for every metric the test will move, segmented the same way the test will run
- The smallest reasonable cohort the test can run against first (new signups, one segment, one region)
- A concrete rollback mechanism, ready before launch, not designed after a bad result appears

## Output format
A precise problem statement; the population segment(s) the experiment affects, and how they differ; a single one-variable, one-segment hypothesis; a documented baseline; predeclared guardrails and a rollback trigger; a contained-cohort rollout plan; and a final judgment based on the whole metric shape, not one number.

## Example
A team wants to test whether a new onboarding step improves activation. Instead of shipping it to all new signups immediately, the experiment is scoped to one narrow hypothesis ("adding a guided setup step increases 7-day activation for solo-account signups specifically, without increasing signup abandonment more than 3 points") tested on a single geographic cohort of new signups, with the abandonment guardrail predeclared and a same-day rollback plan ready if it's breached.

## Common pitfalls
- Testing a bundle of simultaneous changes at once instead of isolating one variable, making it impossible to attribute any resulting metric movement to a specific cause.
- Shipping to the full existing user base immediately instead of a contained cohort, both increasing the risk of a bad result and making the resulting data harder to interpret cleanly.
- Judging the experiment's success on a single headline metric without checking whether a predeclared guardrail metric quietly degraded — a real loss can hide behind an encouraging top-line number.
