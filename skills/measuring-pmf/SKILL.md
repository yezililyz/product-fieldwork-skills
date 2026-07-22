---
name: measuring-pmf
description: Judge product-market fit by validity and reliability, not a single encouraging metric — using a real Product Adoption Indicator and the measurement-error framework that distinguishes a valid signal from a noisy or biased one.
---

# Measuring PMF

Grounded in "Quantification & Measurement • A Practical Guide" and "Onboarding Insights."

## When to use
Use this when "we have PMF" is being claimed on the strength of one encouraging number (a strong week of signups, a positive early NPS) without checking whether that number is actually valid (measuring the intended thing) or reliable (would repeat consistently). It's also the right tool when a team wants a real behavioral proxy for PMF rather than a survey-based feeling — the Product Adoption Indicator methodology (find one repeated early action that predicts durable retention) is exactly this kind of concrete signal.

## What it does
This skill applies measurement theory's validity/reliability distinction to any candidate PMF signal — is it actually measuring durable product value, and would it hold up if re-measured — then builds a real Product Adoption Indicator from retention-curve data as the concrete behavioral proxy, rather than relying on vibes or a single-metric snapshot.

## Method
1. Before trusting any PMF signal, ask the validity question: does this indicator actually measure durable product value, or could it be inflated by something else entirely (a launch spike, a paid promotion, a single influential customer)? A valid indicator has little systematic error pushing it in one direction for reasons unrelated to real product value.
2. Also ask the reliability question: would this same signal reproduce if measured again next month, or was it a one-off? Test-retest logic applies directly — a metric that swings wildly between periods for no clear reason is unreliable, and unreliable metrics make poor PMF evidence regardless of how good they look in a single snapshot.
3. Build a real Product Adoption Indicator instead of relying on a survey score: baseline the actual retention curve, form a hypothesis ("if new users do X at least N times within Y days, they're more likely to be active after Z days"), and validate the overlap between "did X≥N times" and "still active at Z days."
4. Compress the validated PAI into one number the whole team can say out loud and act on (the canonical example: "7 friends in 10 days") — a good PAI is a leading indicator of retention, built on one repeated action, time-bound, and early in the user journey.
5. Don't assume onboarding length or a single "Aha moment" screen is the PMF signal — the data shows some of the most successful products have long onboarding flows; the actual signal is whether users reach the value moment and then return, not how quickly they clicked through setup.
6. Triangulate the PAI against a second, independently-sourced indicator where possible (e.g., a qualitative signal like organic referral or an unprompted expansion request) — validity is strengthened by comparing multiple measures of the same underlying concept, not by trusting one number in isolation.
7. Distinguish nominal enthusiasm (a good NPS score, positive comments) from ratio-level behavioral evidence (actual usage frequency, actual retention at a fixed horizon) — these operate at different levels of measurement, and only the behavioral evidence supports claims about magnitude ("twice as engaged"), not the survey score.
8. Revisit the PMF claim over a real time horizon, not a single week — a validated PAI needs to hold up across multiple cohorts and multiple time periods before it's trustworthy evidence of durable fit, not just a temporarily correlated pattern.

## Inputs
- Whatever metric or signal is currently being cited as evidence of PMF
- Access to real retention-curve/cohort data to test candidate Product Adoption Indicators
- A stated concept of what "durable value" means for this specific product, to check any candidate metric's validity against it
- Multiple time periods of data, to check whether a promising signal actually reproduces (reliability) rather than being a one-off

## Output format
A validity assessment of the current PMF claim (what it's actually measuring, and what could be inflating it); a reliability check (does it hold up across repeated measurement, or is it a one-off spike); a validated Product Adoption Indicator with the specific action/threshold/timeframe and the retention-curve evidence behind it; and an honest statement of whether the evidence spans enough cohorts/time to be trustworthy, not just encouraging.

## Example
A team claims PMF based on a strong first month of signups and a positive early NPS survey. Checking validity: the signup spike coincided with a one-time press mention (a systematic bias unrelated to durable value), and the NPS sample was mostly the most enthusiastic early users (a reliability concern — unlikely to reproduce with a broader cohort). Building a real PAI instead — baselining retention and testing "3+ core actions in the first 7 days" against 90-day retention — reveals PMF signal in a specific segment (accounts with an existing team already using a competitor) but not broadly, a far more actionable and honest picture than the original press-spike-driven claim.

## Common pitfalls
- Declaring PMF on the strength of a single encouraging metric without checking whether it's valid (measuring real durable value) or reliable (would reproduce if measured again).
- Treating a short, low-friction onboarding flow as evidence of good product experience and, by extension, PMF — the data explicitly contradicts this; length has no independent relationship to retention or fit.
- Confusing survey-based enthusiasm (NPS, sentiment) with ratio-level behavioral evidence (actual retention, actual usage frequency) — these sit at different levels of measurement and shouldn't be treated as interchangeable proof of the same claim.

## Guides referenced
- [Quantification & Measurement • A Practical Guide](https://yezi-hub.web.app/guide/b2Cv9g4SVKO5MS2bYIRb)
- [Onboarding Insights](https://yezi-hub.web.app/guide/npbfOxMPLoQVKDPC7zDV)
