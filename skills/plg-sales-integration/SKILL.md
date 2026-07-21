---
name: plg-sales-integration
description: Layer an assisted-sales motion onto self-serve PLG using tiered PQL scoring and data-backed internal influence — deciding precisely when usage signals warrant a human touch, and how to get engineering/leadership buy-in for it.
---

# PLG + Sales Integration

Grounded in "Data Research & Logic — Toggl PLG Guide" and "Enterprise Analytics & PM Playbook."

## When to use
Use this when self-serve accounts are showing enterprise-level usage (large teams, high paywall-hit frequency) with no mechanism routing them to a human sales touch — pure PLG motions systematically under-monetize this segment by leaving them to self-serve indefinitely. It's also the right tool when the internal case for adding a sales layer is being made with urgency alone ("we're leaving money on the table") instead of the data-backed priority stack that actually moves engineering and leadership.

## What it does
This skill builds a tiered Product-Qualified-Lead scoring system that routes only genuinely sales-ready accounts to a human touch (with anti-spam guardrails protecting the self-serve experience for everyone else), and pairs it with the specific internal-influence tactics needed to get engineering and leadership resourcing for the sales-integration work itself — since building the PQL pipeline is itself a cross-functional initiative requiring the same evidence-based pitch as any other roadmap ask.

## Method
1. Score self-serve accounts into weighted tiers rather than a single "engaged/not engaged" flag: Tier 1 signals (pricing-page visits, paywall hits, enterprise-sounding search terms) carry the most weight since they indicate active purchase intent; Tier 2 signals (team growth, active-user count, hours tracked) indicate scale; Tier 3 signals (feature breadth, account age, API usage) indicate depth of adoption.
2. Set an explicit point threshold for flagging an account to sales, and route flagged accounts with full usage context attached (which features, what triggered the flag, estimated account value) — a sales rep working from a rich context card converts faster than one working a cold list.
3. Build anti-spam guardrails into the routing logic from day one: cap contact frequency per account per period, set a minimum team-size floor below which accounts stay self-serve only, and add an exclusion window after any explicit decline — a PQL system that burns self-serve trust with over-eager outreach damages the very motion it's meant to complement.
4. Route by fit as well as engagement: high product engagement plus good customer fit gets an active sales push; high engagement with poor fit gets support only, no active sales; low engagement with good fit ("heartbreakers" — dream customers who haven't engaged yet) gets nurture campaigns instead of a cold sales push; low engagement plus poor fit gets deprioritized entirely.
5. Track conversion from PQL flag to actual sales opportunity and closed deal as the system's own health metric — a scoring model that flags accounts that rarely convert needs its weights retuned, not just more volume fed into it.
6. When pitching engineering or leadership for the resourcing this system requires, replace urgency framing with a data-backed priority stack: show the specific dollar impact of the proposed PQL routing versus competing initiatives, not just "this feels important."
7. Build a regular visibility ritual (a weekly dashboard review, a monthly PQL-to-close-rate readout) so engineering and leadership see the compounding value of the integration work over time — visible, recurring proof of impact is what sustains resourcing past the initial launch.
8. Expect and plan for the blended-motion reality most successful PLG-to-enterprise companies land in: self-serve remains the default acquisition and expansion engine, while sales-assist activates only for the specific segment whose scored signals justify the cost of a human touch — not a wholesale shift away from self-serve.

## Inputs
- Current self-serve usage data, to build or check tiered PQL signal weights
- Existing sales capacity, to set a realistic contact-frequency guardrail before flagging accounts
- Historical PQL-to-close conversion data, if any exists, to check whether current scoring weights are actually predictive
- The specific competing initiatives a PQL-routing resourcing ask would need to out-argue with data

## Output format
A tiered PQL scoring model (signal weights, point threshold, anti-spam guardrails); a fit-vs-engagement routing matrix (active sales / support-only / nurture / deprioritize); a PQL health metric (flag-to-opportunity-to-close conversion) tracked over time; and, for the internal resourcing case, a data-backed priority stack comparing this initiative's dollar impact against competing asks.

## Example
A self-serve project-management tool notices a cluster of accounts hitting a reporting-feature paywall 5+ times in two weeks with 15+ active seats — a Tier 1 + Tier 2 signal combination crossing the PQL threshold. These accounts route to sales with a context card showing the specific paywall and estimated account value; a similarly-sized account with high seat count but zero paywall hits stays self-serve, since engagement (not just size) gates the sales touch. Six months of tracking flag-to-close conversion shows the model over-weights team size and under-weights paywall frequency, and the scoring weights are retuned accordingly.

## Common pitfalls
- Routing every large or fast-growing self-serve account to sales based on size alone, ignoring actual engagement signals — flooding sales with low-conversion leads and burning capacity that should go to genuinely sales-ready accounts.
- Building the PQL pipeline with no anti-spam guardrails, so over-eager or repeated outreach damages trust in the self-serve product experience for accounts that never wanted a sales touch.
- Pitching the internal resourcing case for sales integration on urgency alone instead of a data-backed priority stack showing specific dollar impact against competing initiatives — the pitch that actually moves engineering and leadership.
