---
name: supply-demand-balance
description: Balance supply and demand on a platform using Lemrock's real data-contract and freshness discipline — treating stale or unverified supply-side data as the actual failure mode, not simply "not enough supply."
---

# Supply/Demand Balance

Grounded in "Lemrock — The Agentic Commerce Playbook."

## When to use
Use this when a supply/demand imbalance is being diagnosed purely as "we need more supply" or "we need more demand," without checking whether the real problem is that existing supply-side data is stale or unverifiable — a match built on out-of-date price or availability data erodes demand-side trust just as badly as a genuine supply shortage, and shows up in the metrics as a demand problem when the root cause is a data-freshness problem. It's also the right tool when a platform is scaling demand-side reach (more query volume, more channels) faster than it's scaling supply-side data quality, creating a widening gap between what's promised and what can actually be fulfilled.

## What it does
This skill applies Lemrock's real architecture pattern for a data-mediated marketplace: precise data contracts between supply and demand (what demand sends as intent/context, what supply returns as normalized attributes plus real-time price/stock), a freshness SLA on the supply side as a precondition for any match being trustworthy, and a router/orchestration layer that matches demand to supply at a complexity level appropriate to the request rather than one-size-fits-all matching logic.

## Method
1. Diagnose supply/demand imbalance by checking data freshness before assuming a raw quantity shortage — a demand-side query that surfaces stale supply data (wrong price, sold-out inventory shown as available) produces the same failed-transaction symptom as a genuine supply shortfall, but needs an entirely different fix.
2. Specify the data contract on both sides explicitly: what demand-side context gets sent (intent, constraints, real-time signals) and what supply-side data gets returned (normalized attributes, current price, current availability, a working action) — an imprecise or incomplete contract on either side is often the actual cause of a perceived "balance" problem.
3. Treat supply-side freshness as an enforced SLA, not an assumption — real-time sync frequency for price/stock data should be a monitored, alertable metric, since a match built on stale data is worse than no match at all (it actively erodes trust).
4. Route matching complexity to what the request actually needs rather than applying one uniform matching depth everywhere — a router deciding by request type and complexity keeps cost and speed reasonable while reserving deeper (more expensive) matching logic for requests that genuinely need it.
5. Build the performance-signal feedback loop deliberately: every match or transaction attempt should produce a signal (success, failure, "not relevant") that feeds back into improving future matching quality — a platform with no feedback loop stays static while the effective supply/demand match quality of competitors compounds over time.
6. Segment supply by genuine complexity when balancing investment — a simple, single-SKU supplier stresses the matching system very differently than a complex, multi-variant, bundle-based supplier (Lemrock's own DIY-retail deep dive shows this explicitly), and may warrant differentiated onboarding depth or freshness requirements.
7. Distinguish a genuine quantity imbalance (not enough real supply to meet demand) from a data-quality imbalance (enough real supply, but not verified/current enough to be trustworthy) before deciding where to invest — the fixes are completely different: quantity imbalance needs supply-side acquisition; data-quality imbalance needs freshness/validation infrastructure.
8. Track the specific density metric that reveals real balance, not just raw volume on either side — a ratio of successful matches to total demand attempts (not total supply listed, not total demand queries alone) is what actually shows whether supply and demand are balancing in practice.

## Inputs
- Current supply-side data freshness metrics (how current is price/availability data, and is it monitored as an SLA)
- The specific data contract currently in place between supply and demand sides, checked for completeness
- Whether recent match failures are being diagnosed as quantity shortages or checked first for data-staleness causes
- Segment-level complexity data for supply-side participants, to check whether one-size-fits-all matching logic is being misapplied

## Output format
A diagnosis distinguishing genuine quantity imbalance from data-freshness imbalance; the specific data contract (demand-side intent schema, supply-side normalized-attribute schema) with freshness fields called out explicitly; a stated freshness SLA with current monitoring status; a density-ratio metric (successful matches per demand attempt) as the real balance indicator, replacing any raw-volume-only metric; and, where relevant, a complexity-segmented view of supply-side participants.

## Example
A platform sees demand-side complaints rising and assumes it needs more supply-side participants. Checking data freshness first reveals the real issue: a meaningful share of existing supply listings have stock/price data more than 48 hours stale, causing failed transactions that look like a supply shortage but are actually a freshness failure. The fix prioritizes real-time sync infrastructure and an enforced freshness SLA over recruiting additional supply — the existing supply base was sufficient, but untrustworthy.

## Common pitfalls
- Diagnosing every supply/demand imbalance as a raw quantity problem and investing in more supply or more demand acquisition, when the actual cause is stale or unverified supply-side data eroding trust in matches that already exist.
- Applying one uniform matching complexity to every request regardless of how simple or complex the underlying supply-side item is, wasting cost on simple matches and under-serving genuinely complex ones.
- Tracking raw supply or demand volume as the balance indicator instead of a density ratio (successful matches per demand attempt) that actually reveals whether the two sides are resolving into real transactions.
