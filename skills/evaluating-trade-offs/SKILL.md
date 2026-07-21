---
name: evaluating-trade-offs
description: Decide whether something is worth building at all — before prioritizing it — using the ten-question investment discipline that RICE, MoSCoW, and Kano never ask.
---

# Evaluating Trade-offs

Grounded in "Beyond Prioritization — The Field Guide."

## When to use
Use this when a RICE or MoSCoW exercise has already picked a "winner" between two features, but nobody has asked whether the winner is actually worth building — RICE effort only captures engineering time, never the €350K infrastructure cost, the compliance risk, or the total cost of ownership hiding behind "it's just a button." It's also the right tool when a feature scores well on reach and impact but has no real business model behind it (the referral-program mirage: bigger reach, but doubled CAC, fraud risk, and no revenue attached). The signal to use it now: a team is debating build order for something nobody has actually validated should be built.

## What it does
This skill runs ten investment questions across customer/business/technical/financial feasibility, pricing, operations, compliance, risk, strategic trade-offs, and success measurement — before an idea enters a sprint, not after. It explicitly separates sequencing tools (RICE, MoSCoW, Kano, WSJF — which decide order) from investment questions (which decide whether to build at all), and adds a specific eight-question AI-use gate for any feature that reaches for AI by default.

## Method
1. Run customer feasibility first: who is the customer, how painful is the problem (severity × frequency), what do they do today as a workaround, and is this a need or a nice-to-have? Use JTBD interviews and real user research — not assumption.
2. Run business feasibility: does it drive revenue, retention, conversion, market expansion, or strategic differentiation, laddering explicitly to the org's North Star and this year's stated goals?
3. Run technical feasibility as a complexity matrix, rating each dimension (engineering effort, architecture changes, API dependencies, legacy constraints, latency/performance, scalability, security) Low/Medium/High — consulting engineering rather than declaring the answer yourself.
4. Estimate total cost of ownership honestly: engineering build cost, cloud infrastructure, AI/LLM API usage, ongoing maintenance (often ~2x the build cost), support/CS overhead, compliance/legal, and vendor licenses — the categories teams "almost always" miss are AI usage cost, support overhead, and compliance.
5. Decide pricing and monetization during discovery, not at launch: choose cost-based, competition-based, or value-based pricing deliberately, and validate willingness-to-pay with real users before the structure (subscription, usage-based, seat-based, tiered) is locked in.
6. Plan operational readiness before go-live: a support runbook, a trained CS team, monitoring/alerting, and a hypercare window — remembering that a feature that's technically ready can still create an operational ripple nobody planned for (same-day delivery pulling in warehouse, drivers, fraud, and returns teams that were never in the planning meeting).
7. Check compliance and legal exposure explicitly for every target market (GDPR, HIPAA, PCI, accessibility, the EU AI Act) — a "simple" geographic expansion can take 18 months once accessibility review and data-residency law are factored in.
8. Score risk (likelihood × impact across technical, business, legal, financial, customer, operational, security, and vendor-dependency risk) with a real mitigation plan for each — "we'll deal with it if it happens" is a liability, not a plan — then name the explicit strategic trade-off (what are we NOT building, and does this crowd out higher-priority work) and define success and kill metrics before building, so a feature that isn't working can actually be killed instead of lingering forever.
9. For anything reaching for AI specifically, run the eight-question gate first: can rules solve 80% of it (if yes, don't use AI), what's the inference cost per user at scale, how are prompt changes versioned, what's an acceptable hallucination rate, what's the human-review/fallback flow, what happens if the model provider changes pricing, how is output quality measured over time, and what are the bias/fairness risks?
10. Apply the personal-finance gut check as a final filter: "if I were investing my own money, would I still build this?" Hesitation is data, not noise to override.

## Inputs
- The specific feature or initiative being evaluated, ideally before it's entered a sprint or backlog
- Access to engineering for an honest technical-feasibility and TCO estimate (not a guess)
- The org's current North Star metric and this year's stated goals, to check business-feasibility alignment
- Target markets/jurisdictions, to check compliance exposure before commitment

## Output format
A completed ten-question Product Investment Canvas (customer, business, technical, financial/TCO, pricing, operational, compliance, risk, strategic trade-off, success measurement) with blank fields flagged as unvalidated assumptions; for AI features, the eight-question AI gate answered explicitly; and a final build/hold/kill recommendation with the specific question(s) that drove the decision.

## Example
A referral program scores well on a RICE sheet (big reach, decent impact, low engineering effort) and looks like an easy approve. Running it through the ten questions surfaces what RICE missed: it roughly doubles cost of acquisition (rewarding both referrer and referred), invites fraud and fake-profile abuse, and has no direct revenue model attached — a "leaky bucket" once financial and risk feasibility are actually priced in. The canvas records this as a hold, with the specific missing pieces (fraud mitigation plan, CAC math) named as what would need to change before reconsidering.

## Common pitfalls
- Treating a RICE or MoSCoW score as a build decision instead of a sequencing tool — these frameworks were never designed to catch total cost of ownership, compliance risk, or whether a business model exists at all.
- Estimating "effort" as engineering time alone, missing the categories teams almost always underestimate: ongoing maintenance (~2x build cost), support/CS overhead, and compliance/legal review.
- Adding AI to a feature because it's trendy without running the eight-question AI gate first — especially skipping "could rules solve 80% of this," which alone would have avoided a large share of AI feature regret.
