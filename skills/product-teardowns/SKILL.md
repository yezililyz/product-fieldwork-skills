---
name: product-teardowns
description: Reverse-engineer a real shipped product's decisions using a systematic framework (persona → JTBD → journey → business model → data → moat → pre-mortem), grounded in five full teardowns of real companies.
---

# Product Teardowns

Grounded in "Product Teardown Guide," "Cleo Labs Product Teardown," "Shipping & Monetizing AI Products," "Trustpair — Product Teardown," "Linear Agent — Operating Layer Playbook," and "Lemrock — The Agentic Commerce Playbook."

## When to use
Use this when someone wants to build product sense by studying a real product's decisions rather than reading abstract theory — a structured teardown trains you to observe like a PM (the trade-offs behind every decision), not like a user. It's also the right tool when evaluating a specific real product (a competitor, a case study, an acquisition target) and needing a systematic framework rather than an unstructured list of likes and dislikes — the difference between a teardown and mere opinion is whether it's hypothesis-driven, evidence-grounded, and ends with concrete leverage points.

## What it does
This skill runs the full reverse-engineering framework — context and hypothesis, persona/stakeholder mapping, JTBD across functional/emotional/social dimensions, journey mapping with before/after contrast, feature-to-JTBD-to-metric mapping, business model and revenue logic, data strategy and moat analysis, north star and metric hierarchy, competitive positioning, and a pre-mortem — and grounds each step in patterns pulled from five real teardowns (an AI compliance-skills company, an AI-on-Samsung-TVs case study, a fraud-prevention fintech, Linear's own agent rollout, and an agentic-commerce infrastructure play).

## Method
1. Set context and state hypotheses before dissecting anything: define the teardown's goal (what lens — growth, retention, moat — determines what to go deep on), research the company's real stage and market, scope the analysis (full product vs. one feature vs. one lifecycle stage), and write down your working hypothesis about the product's core bet before you start — confirming or refuting it later is where the real insight lives.
2. Map every persona and stakeholder, not just "the user" — B2B products almost always have a distinct buyer, user, and beneficiary (Trustpair: the CFO buys, the Controller lives in it daily, Compliance validates the purchase) and missing this split hides real design tension.
3. Write the JTBD across all three dimensions — functional (the task being accelerated), emotional (the anxiety being removed), and social (how using it changes how others see the user) — and test each candidate pain point against frequency × cost to find the acute wedge worth building around first.
4. Map the full user journey from trigger to retention, contrasting explicit before/after states, and flag the gaps (moments the product abandons the user) and seams (handoffs between tools or teams that create friction) — these are usually the teardown's most valuable findings.
5. Map every feature back to the specific persona it serves, the JTBD it fulfills, and the metric it's designed to move — a feature list with no such scaffolding is just an inventory, not an analysis.
6. Map the business model explicitly: who pays, what's the atomic billable/valuable unit, what's the growth motion, and — critically — what's the flywheel (the reinforcing loop that compounds, like Trustpair's more-validations → better-fraud-signals → higher-accuracy → more-enterprise-wins loop).
7. For any data-intensive or AI-native product, ask specifically what data it accumulates that no competitor can replicate (Cleo Labs' Legal Atlas: coverage × freshness × per-signal traceability) — that answer is usually the real moat, distinct from any UI or feature-level advantage.
8. Reverse-engineer the north star when it isn't published: look at what the sales team emphasizes in case studies, what metric the pricing is tied to, and what the biggest before/after claims are — then check any candidate north star against three tests: does it move with real customer value, does it correlate with revenue, and does it disaggregate into actionable sub-metrics.
9. Run a pre-mortem explicitly: write 2-3 concrete failure narratives ("it's 18 months from now and this failed to reach PMF — what was the most likely cause?") before writing improvement hypotheses — this surfaces real risk instead of only cataloging strengths.
10. Close with a one-page verdict: the core bet in one sentence, an honest read on execution quality, and the single highest-leverage change — resisting the urge to list ten disconnected observations instead of naming the one that matters most.

## Inputs
- The specific product being torn down, and the lens/goal driving the analysis (growth, retention, moat, competitive threat)
- Whatever public information exists on the company (funding, customers, positioning, published metrics)
- The specific scope (full product, one feature, one lifecycle stage) — unbounded teardowns produce unfocused opinions
- A stated working hypothesis about the product's core bet, written before the deep analysis begins

## Output format
A context brief with a stated hypothesis; a persona/stakeholder map distinguishing buyer/user/beneficiary; a three-dimensional JTBD statement with a pain-severity matrix; a journey map with explicit before/after and named gaps/seams; a feature-to-JTBD-to-metric table; a business model summary (payer, atomic unit, flywheel); a data/moat assessment for data-intensive products; a reverse-engineered north star with its three-test validation; and a one-page verdict with 2-3 pre-mortem failure narratives and the single highest-leverage improvement.

## Example
Tearing down a compliance-automation startup, the persona map separates the small-team founder (user, feels the pain daily) from a regulatory consultant (beneficiary, receives the cleaner evidence pack). The business model analysis reveals an open-core flywheel — free, widely-distributed playbooks earning adoption, with a proprietary, hard-to-replicate data backend (coverage × freshness × traceability) capturing the actual revenue — mirroring the Cleo Labs pattern exactly. The pre-mortem names a specific risk (a much larger, better-funded incumbent acquiring a competitor and out-resourcing the coverage race) as more likely to sink the company than any product execution flaw.

## Common pitfalls
- Producing a list of liked/disliked features with no persona, JTBD, or business-model scaffolding — this is a UX critique, not a teardown, and misses the trade-offs that actually explain the product's decisions.
- Skipping the pre-mortem and only cataloging strengths, producing a one-sided analysis with no real risk assessment.
- Trying to tear down "the whole product" with no stated scope or lens, producing a long but unfocused list of observations instead of a sharp, leverage-pointed analysis.
