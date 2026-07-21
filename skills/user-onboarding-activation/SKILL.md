---
name: user-onboarding-activation
description: Design a first-run flow by matching one (or a composed sequence) of fifteen named onboarding patterns to the specific product type, targeting time-to-value rather than screen count.
---

# User Onboarding & Activation

Grounded in "Onboarding & AI Playbook — EUREKA + AI GTM Notes," "Onboarding Insights," and "The Onboarding Pattern Library — 15 UX Patterns from 200+ Apps."

## When to use
Use this when a first-run flow is being designed from a blank page or copied wholesale from an unrelated product, instead of matched deliberately from the fifteen named patterns to what this specific product actually needs. It's also the right tool when activation is being optimized purely for a lower screen count — data across 1,000+ studied apps shows the strongest-performing flows are sometimes the longest (Duolingo's 60+ screens), because what actually predicts activation is reaching the product's real value moment quickly, not minimizing steps.

## What it does
This skill matches specific onboarding patterns (First Look, Product Tour, Checklist, Action-Oriented, Self-Segmentation, Goal Setting, and nine others) to product type and user need, applies the EUREKA framework's Straight-Line Onboarding filter (does each step lead to the First Strike, personalize the path, or delight — the "DAD" test) to cut anything that does none of the three, and builds a Product Adoption Indicator as the concrete, validated activation target.

## Method
1. Identify the product's real First Strike / Aha moment concretely before designing any flow — the specific action that delivers the core customer job (Airbnb: first booking; Canva: first exported design) — everything in onboarding should be evaluated against how directly it moves toward this moment.
2. Choose the pattern (or composed sequence of patterns) matched to the product's actual shape: Self-Segmentation first for products serving genuinely distinct audiences, then Personalization, then a Checklist or Action-Oriented flow to drive the first real action, with Contextual Tooltips or Coach Marks layered in over time for secondary features — patterns compose; the skill is knowing which combination fits.
3. Run the DAD test on every step in a candidate flow: does it lead to the First Strike, personalize the path, or delight? A step failing all three should be cut, delayed, or questioned regardless of how natural it feels to include.
4. Use Empty States with a clear single CTA for anything depending on user-generated content, Demo Content or Simulation for products where a blank start is intimidating, and Information Gathering fronted honestly (with clear reasoning) for anything legally or functionally required before the product can work at all.
5. Personalize deliberately: most apps (77%) don't personalize onboarding at all, and where it is used well (letting users select multiple goals rather than forcing one), it produces measurable conversion lifts — treat personalization as a deliberate design choice, not a default to skip or a default to over-apply.
6. Sell the outcome, not the feature list, at First Look — show or let the user experience the result the product delivers rather than enumerating capabilities in a carousel.
7. Build and validate a real Product Adoption Indicator as the activation target: baseline the retention curve, hypothesize a specific repeatable early action and threshold, validate the overlap against real outcomes, and compress it to one number ("7 friends in 10 days") the whole team can act on — this, not screen count, is what activation design should actually optimize toward.
8. Know when to skip structured onboarding entirely — for products where the first interaction is the value itself (many AI chat products), the best activation design is getting out of the way, not inserting a designed flow that adds friction without adding clarity.

## Inputs
- The product's specific First Strike / Aha moment, stated concretely
- The current onboarding flow (if one exists), evaluated step-by-step against the DAD test
- Existing retention/cohort data, to validate a candidate Product Adoption Indicator
- Whether the product serves genuinely distinct user segments (relevant to Self-Segmentation) or a single audience

## Output format
A stated First Strike/Aha moment; a matched pattern or composed pattern sequence for the specific product type; a DAD-tested flow (each step marked keep/cut/delay); a validated Product Adoption Indicator with the specific action/threshold/timeframe; and a note on whether structured onboarding is the right choice at all for this specific product, or whether minimal/no onboarding serves it better.

## Example
A B2B tool serving two distinct user types (admins and end-users) is redesigning its one-size-fits-all product tour. Applying this method, the flow becomes Self-Segmentation first (which type are you), then a role-specific Checklist driving toward each role's real First Strike (an admin's first team invite; an end-user's first completed task), with Contextual Tooltips reserved for secondary features discovered later rather than crammed into the initial tour. A validated PAI ("invited 2+ teammates within the first week" for admins) becomes the actual activation target, replacing the previous "reduce onboarding to under 5 screens" goal that hadn't moved retention at all.

## Common pitfalls
- Optimizing onboarding purely for fewer screens instead of faster time-to-value — the data explicitly contradicts the assumption that shorter always wins.
- Applying one generic pattern (usually a forced Product Tour) to every product regardless of type, instead of matching from the fifteen named patterns to what this specific product and audience actually need.
- Treating personalization as either mandatory or irrelevant by default, instead of making it a deliberate, evaluated design choice — done well it lifts conversion; done as a default without real segmentation behind it, it adds friction for no benefit.
