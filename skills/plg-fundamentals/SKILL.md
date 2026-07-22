---
name: plg-fundamentals
description: Stand up or diagnose a product-led growth motion using real ARPU-lever math, sequenced retention experiments, and a north-star-to-PQL metric chain from Toggl's actual 2.0 product work.
---

# PLG Fundamentals

Grounded in "Data Research & Logic — Toggl PLG Guide."

## When to use
Use this when a PLG motion is being run on one blended metric (overall revenue, overall retention) instead of independent, individually-tracked levers — Toggl's own ARPU growth plan tracks four separate levers (tier upgrades, paid add-ons, seat expansion, discount cleanup) precisely because blending them hides which one is actually underperforming. It's also the right tool when a retention drop is being explained by a single untested guess instead of a structured diagnostic — the real Premium retention case (88% → 79% over 3 months) required a 14-day, six-phase investigation before the actual cause was found.

## What it does
This skill builds a full PLG operating system: independent ARPU levers reviewed monthly with an explicit reallocation rule, sequenced (not simultaneous) retention experiments, a north-star metric chain from daily dashboards down to quarterly business outcomes, and a Product-Qualified-Lead scoring system that hands off self-serve usage signals to sales at the right threshold.

## Method
1. Track ARPU growth as independent levers, not one blended number: model each lever (tier-upgrade conversion, paid add-ons, seat expansion, pricing/discount cleanup) with its own target and review cadence, and reallocate effort away from any lever trending below roughly half its projected impact — underperformance in one lever shouldn't block or hide progress in the others.
2. Guard add-on monetization with an explicit rule: add-ons must feel additive, never extracted from an existing tier — moving a feature users already had behind a new paywall breaks trust in a way that costs far more than the incremental revenue it captures.
3. Run retention diagnostics as a structured, time-boxed investigation rather than a guess: verify data integrity first (before assuming real behavior changed), segment the drop by cohort/timing/account-size/feature-usage, check competitive and external factors, run qualitative interviews with churned and retained accounts, form 2-3 leading hypotheses and quantify how much each explains, then design and ship the intervention.
4. Before pushing all users into a behavior correlated with better retention, explicitly test for selection bias vs. causation with a controlled split — early adopters of a "good" behavior often already looked different before they adopted it, and pushing everyone into it without testing risks a costly false lever.
5. Sequence retention experiments deliberately across a quarter rather than testing everything at once: target a specific behavioral hook first (a reason to return tomorrow), then accelerate time-to-first-value for users already showing engagement, then add a social/multi-user loop — each stage building on what the prior one validated, since roughly a third of well-designed experiments produce a shippable result.
6. Build the north-star metric chain explicitly: DAU → Activation → a core adoption metric (a specific, repeatable behavior — e.g. teams where 3+ members tracked time in the past 7 days) → paid conversion → ARPU → net dollar retention → LTV:CAC, reviewed at matched cadences (daily for volume metrics, weekly for activation/adoption, monthly/quarterly for retention/ARPU/LTV).
7. Run a simple action protocol against every north-star-chain metric: green (on target, monitor only), yellow (within ~10% of target, investigate at the next weekly review), red (more than ~10% below target, owner writes a one-page diagnosis within 48 hours) — this keeps monitoring proportional to actual deviation instead of constant firefighting.
8. Score self-serve usage into a Product-Qualified-Lead system with tiered signals (high-intent signals like pricing-page visits or paywall hits worth more than adoption-breadth signals like feature count used), a clear point threshold for flagging to sales, and anti-spam guardrails (a cap on contact frequency, a minimum team-size floor, an exclusion window after a decline).

## Inputs
- Current ARPU composition, broken into candidate levers rather than one blended number
- Any recent retention change, with access to segment-level cohort data to run the structured diagnostic
- The current metric chain from daily dashboards to quarterly business outcomes, checked for gaps between levels
- Existing self-serve usage data, to build or refine PQL scoring thresholds

## Output format
An ARPU lever table with independent targets and a monthly reallocation rule; a six-phase retention diagnostic plan (or completed diagnosis) for any current retention concern; a sequenced (not simultaneous) retention experiment roadmap; a full north-star metric chain with review cadence and a green/yellow/red action protocol per level; and a PQL scoring model with tiered signals, a threshold, and anti-spam guardrails.

## Example
A team notices Premium retention dropped 9 points over a quarter and initially assumes it's a competitor launch. Running the six-phase diagnostic instead: data-integrity checks rule out a measurement artifact, segmentation reveals the drop concentrates in accounts upgraded via a specific promotional path (not competitor-driven), and churned-account interviews confirm those accounts never reached the core adoption behavior before their trial ended. The fix targets that specific promotional cohort's onboarding rather than a broad, unfocused retention campaign.

## Common pitfalls
- Tracking one blended ARPU or retention number instead of independent levers, hiding exactly which lever is underperforming and should be reallocated away from.
- Jumping to a fix for a retention drop based on the first plausible guess, instead of running the structured multi-phase diagnostic that rules out data artifacts and selection bias first.
- Testing multiple retention hypotheses simultaneously instead of sequencing them, making it impossible to attribute any resulting lift to a specific change.

## Guides referenced
- [Data Research & Logic — Toggl PLG Guide](https://yezi-hub.web.app/guide/GOEDeLVnNxy9UQTPx5zB)
