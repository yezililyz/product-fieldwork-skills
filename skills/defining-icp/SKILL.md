---
name: defining-icp
description: Define an ideal customer profile from scratch using the PACE pain-first test, or re-segment an existing customer base by need (not firmographics) and score it on attractiveness × right-to-win.
---

# Defining ICP

Grounded in "Go-to-Market, Pricing & Sales — The Field Guide," plus a standalone customer-segmentation framework (not sourced from a specific yezi-hub guide) for re-cutting an existing customer base.

## When to use
Use this when an ICP is defined by firmographics alone ("mid-market SaaS companies, 50-500 employees") with no test for whether that segment actually feels the pain the product solves, or whether they can afford to buy. It's also the right tool when a team is chasing an audience or a channel before nailing down the pain — the reliable way founders stay stuck under $1M ARR for years is starting anywhere in the pain-audience-channel-expansion sequence except pain. Once a real customer base already exists, it's the right tool again when a strategy decision (where to invest, what to build, who to target) is being made against that base described only in generic demographic terms, hiding more decision-relevant differences than it reveals — or when a personas deck exists but nobody uses it to make trade-offs because it was built for marketing color, not resourcing decisions. The signal to use it now: sales is closing deals but retention and expansion are weak (ICP was defined by who could be reached, not who needed the product urgently), or two people in the room have different mental pictures of "the customer" and are talking past each other in a resourcing debate.

## What it does
This skill covers two related but distinct jobs. For a new or unclear ICP, it applies the PACE sequence's three-trait test (pain, money, cost of inaction) to candidate segments, rejecting audience- or channel-first thinking until the pain is established. For an existing, already-diverse customer base, it re-cuts customers by underlying need and behavior rather than surface attributes, verifies the cut is clean (MECE — no customer in two segments or none), and scores each segment on commercial attractiveness and right-to-win, naming the one or two segments the strategy should actually be built around.

## Method
1. Establish the pain first, before defining any audience trait — an urgent, painful, specific problem, not a vague inconvenience. Starting audience-first ("let's target this niche") without a defined pain produces a segment definition with nothing to test it against.
2. Test each candidate segment against the three ICP traits: do they feel the pain (urgent, showing up now), do they have the money (already paying meaningfully for adjacent software), and do they face an expensive cost of inaction (the bigger the cost of not acting, the easier the sale) — prioritize high-cost-of-inaction segments specifically, since they predict fast sales cycles, high retention, and organic referrals.
3. If an existing, diverse customer base already exists, shift from picking an ICP to re-segmenting it: gather usage data, purchase behavior, win/loss records, and support tickets, and identify the underlying jobs-to-be-done each customer is actually hiring the product to accomplish — two customers in the same firmographic bucket often have entirely different jobs, and vice versa.
4. Draft candidate segments around clusters of similar jobs and buying behavior, then test the cut for MECE structure: every customer must land in exactly one segment, with no overlaps and no catch-all "other" bucket hiding a bad cut — if a meaningful share of customers don't fit cleanly, redraw the boundaries rather than papering over it.
5. Score each existing segment on attractiveness (size, growth rate, willingness to pay, lifetime value net of cost-to-serve, using actual revenue/margin data) and on right-to-win (your current share, brand relevance, distribution fit, whether your product's strengths map to what this segment's job requires) — a segment can be highly attractive and still wrong to pursue if a competitor has a structural advantage there.
6. Plot segments on an attractiveness-vs-right-to-win matrix and rank them, avoiding the trap of chasing the largest segment by size alone when it's one where you hold the weakest structural position.
7. Layer in the segmentation axes that actually change how any candidate ICP or existing segment buys: size alone is insufficient — growth potential, business model, and workload/traffic often matter more than headcount (a small team running huge infrastructure load belongs in "enterprise" treatment regardless of size).
8. Validate continuously against actual conversion and retention data (for a new ICP) or against real named customers and current roadmap fit (for an existing segmentation) — name the one or two segments the strategy is built around, and explicitly state which segments are being deprioritized and why, so the decision isn't quietly reversed later without new evidence.

## Inputs
- The specific, named pain the product solves, stated concretely (for a new ICP)
- Customer-level usage, purchase, revenue/margin, and win/loss data (for re-segmenting an existing base)
- Any existing qualitative research, customer interviews, or segment-level conversion/retention data
- A rough view of competitive share by customer type, if available

## Output format
For a new ICP: a stated specific pain, a scored table of candidate segments against the three PACE traits, and a prioritized recommendation with the strongest cost-of-inaction rationale. For an existing base: a MECE segmentation with a job-to-be-done statement per segment, an attractiveness-vs-right-to-win matrix, a data table showing size/growth/margin by segment, and a final ranked call naming the one or two segments to build strategy around with the rationale for deprioritizing the rest.

## Example
A compliance-automation tool with no existing customers considers three candidate ICPs and prioritizes mid-market banks over fintech startups and credit unions specifically for their high cost of inaction (higher fines, more reputational exposure), even though fintechs looked like an easier initial sales cycle. Eighteen months later, its now-diverse SMB base gets re-cut into four needs-based groups (solo operators, growing teams, agencies, franchises); margin data shows the agency segment has 2.3x the lifetime value of the largest segment (solo operators) despite being a third the size, and — with an existing distribution edge through partner channels — becomes the primary wedge for the next product cycle.

## Common pitfalls
- Defining ICP by firmographics without testing whether the segment actually feels the target pain urgently, or chasing the most reachable audience instead of the one with the pain — the "wrong end of PACE" mistake.
- Segmenting an existing base by demographic or firmographic convenience because the data is easy to pull, even when it doesn't predict behavior or value.
- Allowing segments to overlap or leaving a large "other" bucket in a re-segmentation, which signals the underlying cut doesn't reflect real behavioral differences — or picking the largest segment by volume without weighting for margin and right-to-win.

## Guides referenced
- [Go-to-Market, Pricing & Sales — The Field Guide](https://yezi-hub.web.app/guide/uAWIr7m0kRyKChMC5h1G)
