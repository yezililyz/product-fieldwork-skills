---
name: growth-experimentation
description: Design and run a growth or monetization experiment with real rigor — narrow hypothesis, predeclared guardrails, contained rollout — judging the whole metric shape, not just the headline lift.
---

# Growth Experimentation

Grounded in "Monetization Experiment Guideline — Seat vs. Value Pricing" and "Data Research & Logic — Toggl PLG Guide."

## When to use
Use this when a growth or pricing change is about to ship broadly based on intuition or a single encouraging metric, without a predeclared hypothesis, guardrail, or rollback plan. It's also the right tool when a metric moved after a change and the team can't yet tell whether that's a real causal effect or selection bias — the Toggl capacity-planning case shows exactly how "using X causes better retention" and "the type of user who already retains well happens to use X" can look identical without a controlled test. The signal to use it now: someone wants to ship a pricing or growth change to 100% of users on day one.

## What it does
This skill runs the full experiment arc — state the problem precisely, segment and analyze who's affected differently, weigh candidate models against each other, test on a narrow contained cohort with predeclared guardrails, and judge the result by its whole metric shape (conversion, retention, support load) rather than one headline number. It's grounded in two real cases: a seat-vs-usage pricing decision and Toggl's own onboarding/retention experiment sequencing, including how to tell causation from selection bias before acting on a correlation.

## Method
1. State the problem precisely before designing anything: for a pricing question, name exactly where value and price have decoupled (e.g., heavy users under-charged relative to value received); for a retention question, name the specific behavioral or cohort pattern driving the metric.
2. Segment the affected population before choosing a model — the same change is an opportunity for one segment (power users with strong usage-value fit) and a real risk for another (light, price-sensitive users who'd be scared off by unpredictable billing); a single blanket experiment ignores this split.
3. Apply the removal test to any new metric or field before building around it: if nothing (billing, a report, a workflow) actually depends on it, remove it from scope; if it's useful but not urgent, defer behind progressive disclosure; only build full complexity around what's proven essential.
4. Choose the simplest model that captures the real value metric first — for pricing specifically, hybrid (a predictable base plus a usage-linked component) is usually the safe destination over a wholesale jump straight to pure usage-based or outcome-based pricing.
5. Before running any test, establish the baseline (current conversion, ARPU, retention, support volume by segment) as the control every result gets judged against — you cannot claim a lift without a trusted "before."
6. Write one narrow hypothesis — what changes, for whom, and why it should work — covering exactly one variable and one segment, not a bundle of simultaneous changes.
7. Predeclare guardrails and a rollback plan before launch: acceptable drops in conversion/retention, margin limits, and exactly how quickly copy/packaging/billing can be reverted if the guardrails are breached.
8. Roll out to a contained cohort only — new signups, or a single region — never existing accounts first, to keep the blast radius small and the analysis clean; instrument the full funnel plus behavioral response (usage change, downgrades) and retention through actual renewal, not just day-one revenue.
9. Before attributing a metric change to a specific cause, explicitly test for selection bias versus causation: do early adopters of a feature already look different pre-adoption (selection bias), or does a controlled 50/50 split show the guided group actually retaining better (causation)? Don't push all users into a "correlated" behavior until this is resolved.
10. Judge the whole metric shape at the end, not one number — a pricing or growth change that lifts ARPU while quietly damaging activation, retention, or spiking support tickets is a failure dressed as a win; approve only if baseline is known, the hypothesis is narrow, guardrails were explicit, and rollback is ready.

## Inputs
- The specific problem or metric decoupling being addressed (pricing misalignment, a retention drop, an onboarding gap)
- Baseline data by segment (conversion, ARPU, retention, support volume) before any change ships
- The specific cohort the initial test will run against (new signups only, one region) — never the full existing base first
- A rollback mechanism (commercial, technical, support) that's actually ready before launch, not theoretical

## Example
A team notices accounts using a "capacity planning" feature retain better and wants to push all Premium users into it. Before doing so, they run the causation-vs-selection-bias test: a 50/50 controlled split of guided vs. self-discovered adoption in week one, measuring 90-day retention. If the guided group doesn't retain meaingfully better than the self-discovered group, the original correlation was selection bias (better-retaining accounts happened to find the feature on their own), and the fix becomes making the feature more discoverable — not mandatory — while tracking adoption only as a leading indicator, not a lever to force.

## Output format
A stated problem and affected segments; the removal-test verdict on any new metric or field involved; a one-variable, one-segment hypothesis; a predeclared guardrail and rollback plan; a contained-cohort rollout plan (who's in scope, what's instrumented); and a final decision judged against the whole metric shape (conversion + retention + support load), not a single headline number.

## Common pitfalls
- Shipping a pricing or growth change to the full existing user base immediately instead of a contained new-signup or single-region cohort, making the blast radius large and the resulting data hard to interpret cleanly.
- Treating a correlation ("users of X retain better") as proof of causation without running a controlled test to rule out selection bias — the exact trap that would have pushed capacity planning on all users for no real retention gain.
- Approving an experiment on a single headline metric (ARPU lift) without checking the whole shape — a "win" that quietly damaged activation, retention, or spiked support tickets is a loss in disguise.

## Guides referenced
- [Monetization Experiment Guideline — Seat vs. Value Pricing](https://yezi-hub.web.app/guide/jxKLPDM3mpe8lgeYXRLA)
- [Data Research & Logic — Toggl PLG Guide](https://yezi-hub.web.app/guide/GOEDeLVnNxy9UQTPx5zB)
