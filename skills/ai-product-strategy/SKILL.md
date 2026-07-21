---
name: ai-product-strategy
description: Set strategy for an AI/ML-powered product — starting from whether ML is even the right tool for the problem, through the three-wave roadmap, to the ROI framework that justifies the investment.
---

# AI Product Strategy

Grounded in "AI PM Strategy Handbook" (five Autonomous workshop sessions), "AI / ML Product Management — The Field Guide," and "The AI/ML PM Playbook" (product leaders from Amazon, Meta, Google, LinkedIn, PayPal, Booking.com, OneSchema).

## When to use
Use this when a strategy conversation starts from the tool ("we need AI agents," "we need copilots") instead of the business problem — the tool-first trap responsible for the vast majority of the 95%+ of AI projects that fail. It's also the right tool when a team is unsure whether a specific feature actually needs ML at all, versus rules or heuristics that would be more accurate, interpretable, and cheaper to build. The signal to use it now: an executive has announced an AI initiative before anyone has scoped a specific user problem it solves.

## What it does
This skill first gates whether ML is the right tool for the problem at all (rules-based solutions win when 100% accuracy or full interpretability is required), then builds a three-wave AI roadmap (efficiency, quality/new capability, system transformation) tied to corporate strategy, sizes the investment against a three-bucket ROI framework (cost efficiency, revenue optimization, new revenue streams), and prioritizes candidate AI initiatives on an ROI-×-difficulty grid with an explicit kill/scale rule from the prototype stage.

## Method
1. Run the data gate before scoping anything: is the needed data available, accessible, not overly invasive ("creepiness factor"), private/secure, and high-quality? No data, no ML — pick a different solution.
2. Check the four ML-fit signals on the specific feature: does it need complex logic no rule set can capture, does it scale with volume, does it need per-user personalization, and does it need to adapt as patterns change over time? If none apply, a simpler rules-based approach is very likely the right call.
3. Build the strategy outside-in and future-back: map first- and second-order consequences of what AI capabilities now enable, then separately identify what won't change (customer trust, human judgment in complex decisions) as anchors for how far to extend the ambition.
4. Build a three-wave roadmap per function: Wave 1 (efficiency — quickest to measure, necessary but not sufficient for advantage), Wave 2 (quality/new capability competitors can't easily match), Wave 3 (system transformation — only reachable once Wave 1 and 2 generate the learning data to support it).
5. Size the investment against three ROI buckets — cost efficiency, revenue optimization, and new revenue streams — and watch for "contagious return": when AI investments across functions start feeding each other's data, the systemic return compounds past what any single initiative shows alone.
6. Plot every candidate initiative on an ROI-x-difficulty grid with a cross-functional team in the room (subject-matter experts, ML/data, product engineering, business leads) — you need relative positioning to sequence bets, not precise estimates.
7. Prototype every initiative for 2–4 weeks before committing further, with an explicit kill rule: if difficulty is higher than expected or ROI isn't materializing in the prototype, kill it; only scale when both hold.
8. Apply the $1:$2 rule to the rollout: for every $1 invested in the AI technology itself, plan $2 in people and change management — technology alone rarely delivers the projected return without a matching operating-model shift, since AI runs at machine speed while the organization around it runs at human and org speed.

## Inputs
- The specific business problem the AI initiative is meant to solve, stated before any tool is named
- An honest audit of data availability, quality, and access for the candidate use case
- The organization's current AI maturity (Wave 1/2/3) across the relevant function
- Who's in the room for ROI-×-difficulty scoring — it needs cross-functional input, not one team's estimate

## Output format
A stated business problem with a Y/N answer on whether ML is even the right tool, using the four-signal test; a three-wave roadmap for the relevant function with a named play at each wave; an ROI estimate placed in one of the three buckets with a contagious-return note if applicable; an ROI-×-difficulty placement for the initiative relative to other candidates; and a prototype plan with explicit kill and scale criteria.

## Example
A company wants "AI-powered customer support." The data gate passes (support transcripts are available, clean, and consented), and the four-signal test confirms fit (complex, high-volume, needs personalization, patterns shift over time). The initiative is placed in Wave 1 (efficiency — faster ticket resolution) with a Wave 2 follow-on (proactive issue detection from support patterns competitors don't have visibility into). ROI is sized in the cost-efficiency bucket first, with a contagious-return note that support-pattern data could later feed a Wave 3 product-improvement loop. A 3-week prototype is scoped with an explicit kill criterion: if resolution time doesn't improve by a stated threshold, kill before further investment.

## Common pitfalls
- Starting from "we need AI" and reverse-engineering a use case to justify the tool, instead of starting from a specific business problem and only then evaluating whether AI is the right technique.
- Treating Wave 1 (efficiency) success as evidence the organization is ready for Wave 3 (system transformation) — these are parallel tracks with different requirements, not a guaranteed sequence.
- Funding the AI technology without a matching investment in people and change management, then blaming the model when the organization around it can't actually absorb machine-speed output.
