---
name: marketplace-fundamentals
description: Reason about a two-sided or infrastructure marketplace using Lemrock's real architecture — data contracts, a dual technical/business metric scoreboard, and a founding-PM prioritization sequence (unblock scale, then prove value, then secure trust).
---

# Marketplace Fundamentals

Grounded in "Lemrock — The Agentic Commerce Playbook."

## When to use
Use this when a marketplace or infrastructure-layer product is being planned without clear data contracts between the parties it connects — Lemrock's own core PM/engineering artifact is exactly this: two precisely specified schemas (a structured query payload and a normalized product item) that encode intent, grounding, and trust between an AI agent and a brand's catalog. It's also the right tool for a founding PM deciding what to build first in a two-sided system — the sequencing logic (unblock scale before proving value before securing trust) generalizes well beyond agentic commerce specifically.

## What it does
This skill applies Lemrock's end-to-end architecture pattern — ingestion/structuring, an orchestration core, a distribution layer, and a performance-signal flywheel that keeps improving the system — to any marketplace connecting one side's supply to another side's demand through an intermediary layer. It also gives the founding-PM prioritization logic (self-serve onboarding first, analytics second, reliability third, deep vertical differentiation fourth) and the dual scoreboard (technical health vs. business value) needed to run it.

## Method
1. Define the marketplace's core value proposition in both a commercial and a technical framing — Lemrock's own split ("an end-to-end search optimizer for merchants" vs. "a layer of data injection into LLM responses") shows both framings are usually needed for different audiences (buyers vs. engineers).
2. Design the data contracts between the two sides explicitly and early: one schema for what demand sends in (intent, context, constraints) and one for what supply returns (normalized attributes, real-time price/stock, a working action) — getting these two contracts right is what prevents the core trust failure (stale data, hallucinated availability) in any intermediated marketplace.
3. Build the ingestion/structuring layer to normalize heterogeneous supply-side data into one consistent shape before anything else touches it — a marketplace's entire trust proposition rests on this normalization being accurate and current.
4. Route through an orchestration core matched to the actual complexity of each request — not every query needs the most expensive path; a router deciding by request type, complexity, and latency budget keeps cost and speed reasonable at scale.
5. Build the performance-signal flywheel deliberately: every transaction or interaction produces implicit and explicit feedback that should feed back into ranking, matching, or retrieval quality — a marketplace that doesn't close this loop stays static while competitors' matching quality compounds.
6. Sequence founding-PM priorities by what actually unblocks scale first: self-serve onboarding (removing founder-heavy manual bottlenecks) before analytics/insights (proving value to existing participants) before reliability/freshness guarantees (securing trust) before deep vertical-specific differentiation (winning a hard reference case).
7. Track two scoreboards in parallel, not one: technical health (latency, precision, freshness, error/hallucination rate) and business value (conversion, GMV, ROAS, activation) — a marketplace optimizing only one of these will eventually break the other.
8. Position deliberately against adjacent competitors by identifying the actual wedge: vendor-neutral, multi-platform middleware is a different bet than a platform-native, single-surface integration — know which one the marketplace actually is before making roadmap trade-offs that assume the other.

## Inputs
- The two (or more) sides of the marketplace and what each one sends/receives through the intermediary layer
- Current onboarding process for new supply-side or demand-side participants — how founder-dependent is it today?
- Existing metrics, sorted into technical-health vs. business-value buckets, to check both are actually being tracked
- The marketplace's actual competitive wedge (multi-platform neutrality vs. single-platform depth) to keep roadmap decisions consistent with it

## Output format
Two explicit data contracts (what each side sends and receives) with the fields that specifically prevent staleness or hallucination; a founding-PM priority list ordered by the scale→value→trust→differentiation sequence, each scored on effort vs. impact; a dual scoreboard template (technical-health metrics alongside business-value metrics); and a stated competitive wedge the roadmap is protecting.

## Example
A new marketplace connecting service providers to customers through a third-party booking assistant is being planned. Applying this method, the team specifies two data contracts up front (a structured request payload from the assistant, a normalized provider-availability schema with a real-time freshness timestamp) before writing any matching logic — preventing the assistant from ever surfacing a provider who's actually fully booked. Founding-PM priorities are sequenced to build self-serve provider onboarding first (currently founder-run for the first 20 providers), deferring a planned "premium provider" tier until after onboarding and freshness are both solid.

## Common pitfalls
- Building matching or ranking logic before the data contracts between the two sides are specified precisely, risking exactly the staleness/hallucination trust failure that kills confidence in an intermediated marketplace.
- Investing in a differentiating, vertical-specific feature (the "hard reference case") before the basic onboarding bottleneck is solved — impressive depth doesn't matter if only a handful of participants can ever get onto the platform.
- Tracking only business metrics (GMV, conversion) without a parallel technical scoreboard (freshness, precision, error rate) — business metrics can look fine right up until a trust failure causes a sudden collapse neither side saw coming.
