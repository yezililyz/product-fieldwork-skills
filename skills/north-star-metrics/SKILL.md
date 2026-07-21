---
name: north-star-metrics
description: Choose a North Star metric durable enough to actually ladder a team's work into, using validity and reliability as the test — not popularity or ease of tracking.
---

# North Star Metrics

Grounded in "Quantification & Measurement • A Practical Guide."

## When to use
Use this when a candidate North Star metric is being chosen because it's easy to track or looks good on a dashboard, without checking whether it actually measures the concept the business cares about (validity) or would hold up consistently over time (reliability). It's also the right tool when multiple teams are laddering into a North Star that turns out to be measuring something adjacent to, but not the same as, real durable value — the gap between concept and measurement is exactly where North Star metrics quietly fail.

## What it does
This skill applies the measurement chain (concept → conceptual definition → operational definition → variable) to North Star selection, forcing an explicit statement of what abstract concept the metric is meant to represent before choosing the specific number that measures it, and checks the candidate for both validity (measures the real concept, minimal systematic error) and reliability (consistent, minimal random error) before it gets adopted.

## Method
1. Name the actual concept the North Star is meant to represent before proposing any specific metric — "growth," "engagement," and "health" are concepts, not metrics; skipping this step is how teams end up measuring something adjacent to what they actually meant.
2. Write the conceptual definition in plain language (what does this concept mean, specifically, for this product) before writing the operational definition (the exact observable variable that will stand in for it) — the gap between these two is where measurement error enters.
3. Check candidate metrics for validity: does the number actually track the intended concept, or could it move for reasons systematically unrelated to it (a metric that's easily gamed, or that responds more to seasonality than to real product health)? Triangulate against a second independent indicator where possible, since validity can't be verified from the metric alone.
4. Check candidate metrics for reliability: would repeated measurement produce a consistent value, or does the metric swing on random noise unrelated to the underlying concept? A North Star that's valid but wildly noisy makes a poor rallying point, since teams can't tell signal from static week to week.
5. Match the North Star's level of measurement to how it will actually be used: a ratio-level metric (real zero point, meaningful ratios — revenue, active users) supports claims like "twice as much"; an ordinal metric (a satisfaction scale) only supports ranking, not magnitude comparisons — using the wrong level for the intended claim quietly misleads the org.
6. Prefer a metric with genuine explanatory density over a metric that's merely easy to track — a good North Star is closer to a validated Product Adoption Indicator (one specific, time-bound, repeatable behavior shown to predict durable outcomes) than a vague aggregate like "engagement."
7. Pressure-test whether the North Star can be gamed in a way that satisfies the metric without satisfying the underlying concept — if a team could hit the number while making the real product worse, the metric has a validity problem, not just a monitoring gap.
8. Revisit the North Star's validity periodically as the product and market change — a metric that validly captured the intended concept a year ago can drift out of alignment as the business model or user base shifts, even if the number itself keeps moving smoothly.

## Inputs
- The abstract concept ("growth," "retention," "value delivered") the North Star is meant to represent, stated explicitly
- Historical data on the candidate metric's variance over time, to check reliability
- Any known ways the metric could be gamed or moved without a corresponding real change in the underlying concept
- The specific claims teams will want to make using this metric, to check the level of measurement actually supports them

## Output format
A named concept the North Star is meant to represent, with an explicit conceptual definition; the specific candidate metric (operational definition) proposed to measure it; a validity check (what could move this number for reasons unrelated to the real concept, and how it's been triangulated); a reliability check (does it hold steady enough across repeated measurement to be a stable rallying point); and a note on what level of measurement it is and what claims that does and doesn't support.

## Example
A team proposes "weekly active users" as their North Star for a B2B tool where most value is delivered through a small number of deep, infrequent sessions (e.g., a quarterly planning tool). Checking validity reveals a mismatch: WAU rewards frequency, not depth, and could be gamed by adding low-value features that bring users back more often without moving the real concept (successful quarterly plans completed). The team instead builds a North Star around "plans marked complete and still active 90 days later" — lower-frequency, but validly tied to the actual concept of durable value for this specific product.

## Common pitfalls
- Choosing a North Star because it's easy to track (page views, signups) rather than because it validly represents the concept the business actually cares about.
- Adopting a metric that can be gamed to move in the right direction without the underlying concept actually improving — a validity failure that erodes trust in the North Star once discovered.
- Using an ordinal or noisy metric to support claims of magnitude ("we doubled X") that its level of measurement or reliability doesn't actually support.
