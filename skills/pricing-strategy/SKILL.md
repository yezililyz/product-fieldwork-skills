---
name: pricing-strategy
description: Set, change, or test pricing using the autonomy-×-attribution archetype map to pick the right model, then validate any change on a narrow, guarded cohort before rolling out broadly.
---

# Pricing Strategy

Grounded in "Monetization, Tokens & Strategy," "Monetization Experiment Guideline — Seat vs. Value Pricing," and "Go-to-Market, Pricing & Sales — The Field Guide."

## When to use
Use this when an AI feature is being priced by default seat-based logic without checking whether its actual autonomy and attribution level would support real outcome-based pricing — the archetype 2×2 (autonomy × attribution) determines both which model fits and how much pricing power is available, and the highest-value quadrant (high autonomy, high attribution) can capture 25-50% of value created versus 10-20% for classic seat-based SaaS. It's also the right tool when a pricing change is about to ship broadly with no baseline, no guardrail, and no rollback plan.

## What it does
This skill picks the right pricing archetype from the autonomy/attribution 2×2 (seat-based, hybrid, usage-based, or outcome-based) matched to what the product can actually prove, reframes any pilot or PoC as a co-created business case rather than a technical validation, and applies the seat-vs-usage experimentation discipline (baseline, narrow hypothesis, predeclared guardrails, contained rollout) to any pricing change before it ships broadly.

## Method
1. Place the product on the autonomy × attribution 2×2 honestly: low autonomy/low attribution fits seat-based pricing; low autonomy with high attribution (a copilot with provable impact) fits hybrid seat-plus-consumption; high autonomy/low attribution fits pure usage-based; high autonomy with high attribution is the only quadrant where genuine outcome-based pricing works — don't jump to outcome-based before attribution can actually be proven.
2. For an incumbent already on seats, take the honest incremental path first: layer token/credit provisions onto existing plan tiers so running out creates a natural, automatic upgrade conversation — pure seat-based pricing while the product itself displaces the value of a seat is "catching a falling knife."
3. Consider the revolutionary path only when a genuinely separate, fully-autonomous capability exists: launch it as its own outcome-priced product bolted onto the core platform (the Intercom Fin pattern — priced per AI-resolved ticket, $0 if a human intervenes) rather than trying to force the whole product into one new pricing logic at once.
4. Reframe any pilot or proof-of-concept as a co-created business case, not a technical validation: charge for it (to filter serious buyers from tire-kickers), never let the fee anchor the eventual commercial price, and co-build the ROI model with the customer's own inputs (their current process time, headcount, volumes) so they can't challenge the output later since they agreed to the inputs.
5. Negotiate with give-and-get discipline: never concede a discount for free — trade it for something (a value audit the customer's own team commissions becomes their business case for the next renewal) — and present options (a flat price vs. a lower-flat-plus-percentage-of-value structure) rather than a single number, which redirects the conversation to value instead of a price fight.
6. Before running a pricing experiment, establish the baseline (current conversion, ARPU, retention, support volume by segment) as the control every result gets judged against.
7. Write one narrow hypothesis covering exactly one pricing variable and one segment, predeclare guardrails (acceptable drops in conversion/retention, margin limits) and a rollback plan before launch, and roll out to a contained cohort only (new signups, one region) — never existing accounts first.
8. Judge the result by the whole metric shape, not one headline number: a pricing change that lifts ARPU while quietly damaging activation, retention, or spiking support tickets is a failure dressed as a win.
9. For anything token/compute-priced, remember token cost is a dial, not a fixed fact — tune it via caching (especially for high input:output ratio agentic workloads, where cache hit rate is the single biggest cost lever) rather than passing raw, unoptimized compute cost straight through to the customer.

## Inputs
- The product's actual autonomy level (human still in the loop, or not) and attribution capability (can impact be proven with data)
- Current pricing structure and whether it's seat-based, usage-based, hybrid, or outcome-based
- Baseline metrics (conversion, ARPU, retention, support volume) by segment, before any pricing test
- For AI/token-priced products: current cache hit rate and input:output token ratio, to check whether cost is being managed or just passed through

## Output format
A stated position on the autonomy/attribution 2×2 with the resulting recommended archetype (seat / hybrid / usage / outcome); for any pilot or PoC, a co-created ROI model built from the customer's own inputs, priced with a range or percentage-of-value framing rather than a single hard number; and, for any pricing change, a narrow one-variable hypothesis with predeclared guardrails, a contained-cohort rollout plan, and a whole-metric-shape judgment criterion.

## Example
An AI customer-support product currently priced per seat is considering an outcome-based ticket-resolution add-on. Mapped onto the 2×2, the core seat-based product stays where it is (still meaningfully human-in-the-loop, moderate attribution), but the new autonomous resolution feature is scoped as its own bolt-on, priced strictly per AI-resolved ticket with $0 charged whenever a human has to step in — following the Intercom Fin pattern rather than trying to fold outcome pricing into the existing seat structure. A 30-day pilot is framed explicitly as building the ROI model together with the customer's own support-ticket volume and current cost-per-resolution data, not as a free technical trial.

## Common pitfalls
- Reaching for outcome-based pricing before attribution can actually be proven with data — skipping straight to the highest-value quadrant without the underlying measurement capability to support it.
- Presenting a pilot or PoC as a free technical validation instead of a co-created, filtered business case — losing both the tire-kicker filter and the anchor-avoidance benefit of charging for it.
- Shipping a pricing change to the full existing customer base at once instead of a contained new-signup cohort with predeclared guardrails, making it impossible to cleanly attribute the resulting metric shifts to the change itself.
