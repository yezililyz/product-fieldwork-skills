---
name: data-infrastructure
description: Design or evaluate data/ML platform infrastructure — feature stores, pipelines, lineage, quality, security, observability, and APIs — using the project-to-product mindset shift as the organizing principle.
---

# Data Infrastructure

Grounded in "ML Feature Stores • Complete Guide," "The Six Pillars of Data Security," "Data Products — The Field Guide," "Data Security, Privacy & Compliance — The Field Guide," "Process & Data Operations — A Working Guide," "Data Quality, Relevance & Governance — The Trust Triad," "The Data Field Guide," "Data Integration & Architecture," "The Data Lineage Guide," "API Product Playbook," "APIs for Product Managers — Field Guide," and "The Data Observability Playbook."

## When to use
Use this when a data platform is described entirely in technology terms — "system A feeds bucket B, zone one, zone two" — and nobody can point to which part of the actual business each piece serves. It's also the right tool when a specific infrastructure decision is on the table (feature store, lineage tooling, an API to expose, a security control) and needs grounding in what real teams (a major bank, Walmart, GM, BlaBlaCar, Mercari, PayPal, Stripe) actually did, not a generic architecture diagram. The signal to use it now: a data initiative has failed before — data initiatives fail roughly 90% of the time — and nobody's asked why beyond "the model didn't work."

## What it does
This skill applies the project-to-product mindset shift as the frame for every technical decision: a data project is single-shot and ends at ship; a data product is continuously released, reused across use cases, and trusted. Within that frame, it covers the specific infrastructure disciplines — feature stores (training-serving consistency), the Trust Triad (quality/relevance/governance), the Six Pillars of data security, lineage and observability (detect problems before the business does), and API product design (Stripe/Twilio-caliber developer experience) — each grounded in real deployment outcomes rather than abstract best practice.

## Method
1. Frame every data initiative as a product decision first: who is the user, what KPI justifies building it, and can you see the actual business (fraud detection, clinical trials, inventory) in the architecture — not just systems and buckets?
2. For ML specifically, stand up a feature store once you're past ad-hoc experiments: a feature registry for discovery, an offline store for point-in-time-correct training data, and an online store for millisecond-latency serving — with the explicit goal of eliminating training-serving skew and data leakage.
3. Apply the Trust Triad to any AI/data system before scaling it: data quality (clean, documented — poor quality costs the average company an estimated $12.9M/year in rework), relevance (accurate data answering the wrong question is still useless — Walmart's early recommendations were technically accurate but generic until relevance signals were added), and governance shifted left (tag ownership and sensitivity at data creation, the way GM did, not bolted on right before an AI pipeline touches it).
4. Run the Six Pillars as a loop, not a checklist, for anything security-sensitive: Governance (policy, classification, catalog, resilience) → Discovery (find where sensitive data actually lives, not just where the catalog says) → Protection (encryption, key management, access control, backup) → Compliance (retention, audit trails) → Detection (anomaly monitoring) → Response (case management, playbooks) — and feed what Response learns back into Governance.
5. Build lineage at the granularity the decision needs: table-level lineage answers "does Table A feed Table B," column-level lineage answers "which specific field broke" — start with technical lineage (what engineers need daily) and layer business lineage on top only once compliance/exec trust becomes the bottleneck.
6. Instrument observability across the three questions that matter: is the pipeline moving (process quality), what's actually in the cargo (data quality — schema changes, volume anomalies), and where is it going (lineage-scoped impact) — the earlier a broken pipeline is caught, the smaller the blast radius before the business notices.
7. If exposing an API (internal or public), design around three pillars: value (is the exposed capability worth the integration effort), monetization (usage-based, tiered, or revenue-share, fit to how transaction value varies), and developer experience (documentation, sandbox, SDKs) — DX is frequently the actual competitive differentiator between technically equivalent APIs (Stripe's advantage over technically similar competitors is documentation quality).
8. Before committing to any storage architecture (warehouse/lake/lakehouse/mesh) or integration pattern (ETL/ELT/streaming/CDC), match to actual need rather than what's exciting to build — the "streaming trap" (building real-time pipelines nobody needed) and the "one big table" trap (schema-less dumping that becomes unmaintainable) are the two most common overbuild failure modes.

## Inputs
- The specific data/ML/API decision in front of the team (feature store, lineage tool, security posture, API design)
- Current state: is this still a one-off project, or does it need to become a reusable product across teams?
- Any existing quality, security, or lineage gaps already causing pain (support tickets, failed audits, broken dashboards)
- For API decisions: who the developer-consumer actually is, and what they're trying to accomplish

## Output format
A stated project-vs-product framing for the initiative; the specific pillar(s) or discipline(s) engaged (feature store / Trust Triad / Six Pillars / lineage / observability / API design) with the concrete architecture choice; a named real-world precedent from the guides supporting the choice; and an explicit note on what's being deliberately deferred (e.g. real-time streaming not yet justified, business lineage not yet needed).

## Example
A team's fraud-detection model is drowning analysts in false positives — the root cause, once traced, is messy upstream transaction data rather than weak modeling (the bank AML case). The fix follows the Trust Triad in order: clean and enrich the transaction data first (quality), confirm the enriched features actually predict real fraud rather than generic anomalies (relevance), and tag data ownership at the source system rather than after the pipeline breaks again (governance, shift-left). A feature store is introduced specifically to guarantee the enriched features are computed identically in training and real-time serving, closing the training-serving skew that caused the original drift.

## Common pitfalls
- Describing the entire data platform in technology terms (systems, buckets, zones) with no one able to point to which part of the business it actually serves — the clearest sign the project-to-product shift hasn't happened.
- Building real-time streaming infrastructure because it's technically exciting, when the actual output is a daily report that batch processing would serve just as well at a fraction of the cost and maintenance burden.
- Bolting governance on at the end of a project (checking compliance right before an AI pipeline goes live) instead of shifting it left to data creation — the GM lesson: catching a compliance gap after launch costs far more than catching it at data creation.
