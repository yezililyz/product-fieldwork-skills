---
name: ai-evals
description: Design, grade, automate, and operationalize evals for an LLM or agent feature — goldens first, human grading second, LLM-judge automation only once aligned to human labels.
---

# AI Evals

Grounded in the "AI Evals Playbook."

## When to use
Use this when a team is shipping AI features on vibes — ad hoc QA, scattered screenshots, anecdotal "feels off" feedback — with no repeatable way to tell whether a prompt or model change made things better, worse, or just differently wrong. It's also the right tool the moment someone reaches for an LLM-as-judge dashboard before any human has defined what "good" looks like, which produces false confidence dressed up as measurement. The signal to use it now: a release decision is being made on gut feel, or a regression was caught by a user before anyone on the team noticed it.

## What it does
This skill builds a real evaluation system: goldens that define acceptable behavior, synthetic data that widens coverage, a human-grading pass that anchors what quality means for this product, and an LLM-judge automation layer that's checked for agreement with those human labels rather than trusted on arrival. It also covers agent-specific observability, since agents add tool calls and branching that a simple input→output eval can't see into.

## Method
1. Understand the task before building anything: define the business goal, the real user scenarios, the cost of a failure, and what "good" concretely means in product terms — not "AI evals" in the abstract.
2. Create goldens first: human-curated input/output examples covering normal cases, angry users, refusal cases, escalations, unsupported asks, and edge cases. This is a PM + subject-matter-expert job, not an engineering one.
3. Expand coverage with synthetic data generated from the goldens — adversarial inputs, underrepresented scenarios, privacy-safe examples — to stress the system beyond what a small manual set can reach.
4. Run human evals before any automation: start with 5–10 examples to shape the rubric, grade on named dimensions (accuracy, tone, policy, helpfulness), and keep notes on *why* an output is good or bad — that critique text is what later aligns the LLM judge.
5. Build the LLM-as-judge only after human labels exist: write a judge prompt using the rubric dimensions, compare its labels against the human labels, and iterate the prompt until agreement is acceptable. Continue spot-checking, since drift never stops.
6. Add code-based checks for anything mechanically verifiable (forbidden strings, required format, routing logic, policy constraints) — cheap, deterministic, and complementary to the judge, not a replacement for it.
7. For agentic systems specifically, log at every layer: user input, the model step (system prompt, retrieved context, output), the agent action (tool selected, arguments, API result, retries), and the outcome (final response, user feedback, completion) — you cannot debug or design targeted evals without trace-level visibility.
8. Wire evals into production, not just offline testing: sample live traffic, review disagreements between judge and reality, and create a release gate for future prompt or model changes, since offline tests alone miss drift and real-world phrasing.

## Inputs
- The specific AI feature or workflow being evaluated, and its business goal
- Any existing user feedback, support tickets, or failure reports to seed goldens
- Access to real production traffic samples, once available, for ongoing drift checks
- Who on the team (PM, SME, AI engineer) will own labeling and judge alignment

## Output format
A golden set covering normal, edge, and adversarial cases; a human-labeling rubric with named dimensions and a scale (binary/ternary/1–5); an LLM-judge prompt with a documented agreement rate against human labels; a set of code-based checks for mechanically verifiable failures; and, for agents, a trace-logging schema across the four layers (input, model step, agent action, outcome).

## Example
A team shipping a support-ticket triage agent starts with 30 human-labeled goldens covering normal tickets, angry customers, and out-of-scope requests. A human eval pass on the first 10 examples surfaces that "resolves ticket fast" was being gamed by closing tickets prematurely — so a health-metric guardrail (90-day re-open rate) gets paired with the driver metric. An LLM judge is built against the labeled set, reaches 88% agreement with human labels, and is deployed to sample 5% of live traffic weekly, with disagreements routed back to a human reviewer.

## Common pitfalls
- Reaching for an LLM-judge dashboard before any human has defined what "good" means for this product, creating a confident-looking score that isn't actually aligned to the product bar.
- Relying on a single overall metric that hides serious problems in tone, safety, or policy compliance — a rubric needs named dimensions, not one score.
- Testing only offline, never sampling real production traffic, and missing the drift, phrasing, and agent behavior that only shows up under live conditions.
