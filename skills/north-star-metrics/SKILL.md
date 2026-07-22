---
name: north-star-metrics
description: Choose a North Star metric durable enough to actually ladder a team's work into, using validity and reliability as the test — then decompose it into a MECE driver tree of owned, thresholded operational KPIs, not just a number on a dashboard.
---

# North Star Metrics

Grounded in "Quantification & Measurement • A Practical Guide," plus a standalone KPI-driver-tree framework (not sourced from a specific yezi-hub guide) for decomposing a chosen North Star into operational metrics.

## When to use
Use this when a candidate North Star metric is being chosen because it's easy to track or looks good on a dashboard, without checking whether it actually measures the concept the business cares about (validity) or would hold up consistently over time (reliability). It's also the right tool when multiple teams are laddering into a North Star that turns out to be measuring something adjacent to, but not the same as, real durable value — the gap between concept and measurement is exactly where North Star metrics quietly fail. It's the right tool again once a North Star is chosen but a team is tracking a long dashboard of metrics that move up and down every week without anyone being able to say which ones actually predict it, or after a metric has clearly been gamed — a target was hit but the underlying business didn't improve. The signal to reach for the second half of this skill specifically: a metrics review meeting spends more time debating what a number means than deciding what to do about it.

## What it does
This skill applies the measurement chain (concept → conceptual definition → operational definition → variable) to North Star selection, forcing an explicit statement of what abstract concept the metric is meant to represent before choosing the specific number that measures it, and checks the candidate for both validity (measures the real concept, minimal systematic error) and reliability (consistent, minimal random error) before it gets adopted. Once a valid, reliable North Star is chosen, it decomposes that metric into a clean, MECE driver tree down to operational metrics specific teams actually control, sets explicit action thresholds on each, and pressure-tests every metric in the resulting system for how it could be gamed.

## Method
1. Name the actual concept the North Star is meant to represent before proposing any specific metric — "growth," "engagement," and "health" are concepts, not metrics; skipping this step is how teams end up measuring something adjacent to what they actually meant.
2. Write the conceptual definition in plain language (what does this concept mean, specifically, for this product) before writing the operational definition (the exact observable variable that will stand in for it) — the gap between these two is where measurement error enters.
3. Check candidate metrics for validity: does the number actually track the intended concept, or could it move for reasons systematically unrelated to it (a metric that's easily gamed, or that responds more to seasonality than to real product health)? Triangulate against a second independent indicator where possible, since validity can't be verified from the metric alone.
4. Check candidate metrics for reliability: would repeated measurement produce a consistent value, or does the metric swing on random noise unrelated to the underlying concept? A North Star that's valid but wildly noisy makes a poor rallying point, since teams can't tell signal from static week to week.
5. Match the North Star's level of measurement to how it will actually be used: a ratio-level metric (real zero point, meaningful ratios — revenue, active users) supports claims like "twice as much"; an ordinal metric (a satisfaction scale) only supports ranking, not magnitude comparisons — using the wrong level for the intended claim quietly misleads the org.
6. Prefer a metric with genuine explanatory density over a metric that's merely easy to track — a good North Star is closer to a validated Product Adoption Indicator (one specific, time-bound, repeatable behavior shown to predict durable outcomes) than a vague aggregate like "engagement."
7. Once the North Star itself passes validity and reliability, run a driver-tree decomposition: break it down into the multiplicative or additive components that mathematically determine it (for example, retention = 1 - churn; churn = function of onboarding completion, support response time, and feature adoption), continuing until you reach metrics a specific team actually controls — and check the tree for MECE structure, with no branch double-counting the same underlying behavior and no material driver left unrepresented.
8. Organize the resulting metrics into three layers (outcome, driver, health-guardrail), set an explicit action threshold for each driver metric — the specific value that triggers a defined response, since a metric without a threshold is a chart, not a KPI — assign one accountable owner per metric, and set a review cadence matched to each layer's natural update frequency (health/driver metrics weekly or biweekly, outcome metrics monthly or quarterly, to avoid overreacting to noise in a lagging number).
9. Pressure-test every metric in the system, North Star and drivers alike, for whether it can be gamed in a way that satisfies the number without satisfying the underlying concept — where a plausible gaming path exists, pair it with a health-metric guardrail that would catch it, and revisit the whole system's validity periodically as the product and market change.

## Inputs
- The abstract concept ("growth," "retention," "value delivered") the North Star is meant to represent, stated explicitly
- Historical data on the candidate metric's variance over time, to check reliability
- Any known ways the metric could be gamed or moved without a corresponding real change in the underlying concept
- The specific claims teams will want to make using this metric, to check the level of measurement actually supports them
- Once a North Star is chosen: the operational levers and teams available to influence it, and any historical data showing the relationship between candidate driver metrics and the North Star

## Output format
A named concept the North Star is meant to represent, with an explicit conceptual definition; the specific candidate metric (operational definition) proposed to measure it; a validity check and a reliability check; a note on its level of measurement and what claims that does and doesn't support; a MECE KPI driver tree from the North Star down to operational metrics; a three-layer metric table (outcome/driver/health) with owner, cadence, and action threshold for each; and a proxy-failure note for every metric identifying its gaming risk and the guardrail that catches it.

## Example
A team proposes "weekly active users" as their North Star for a B2B tool where most value is delivered through a small number of deep, infrequent sessions (e.g., a quarterly planning tool). Checking validity reveals a mismatch: WAU rewards frequency, not depth, and could be gamed by adding low-value features that bring users back more often without moving the real concept (successful quarterly plans completed). The team instead builds a North Star around "plans marked complete and still active 90 days later." Decomposing that metric, the driver tree breaks it into plan-creation rate, completion rate, and 90-day plan-revisit rate, each owned by a specific team; an action threshold is set on completion rate (if it drops below 60% for two consecutive weeks, the onboarding team triggers a review), and the proxy-failure check flags that completion rate could be gamed by marking plans complete prematurely, so it's paired with a health-metric guardrail tracking whether completed plans are actually revisited 90 days later.

## Common pitfalls
- Choosing a North Star because it's easy to track (page views, signups) rather than because it validly represents the concept the business actually cares about.
- Adopting a metric that can be gamed to move in the right direction without the underlying concept actually improving — a validity failure that erodes trust in the North Star once discovered.
- Using an ordinal or noisy metric to support claims of magnitude ("we doubled X") that its level of measurement or reliability doesn't actually support.
- Tracking a wide dashboard of driver metrics with no explicit link back to the North Star, or setting metrics without action thresholds, turning KPIs into passive charts nobody is accountable for acting on.

## Guides referenced
- [Quantification & Measurement • A Practical Guide](https://yezi-hub.web.app/guide/b2Cv9g4SVKO5MS2bYIRb)
