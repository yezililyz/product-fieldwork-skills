---
name: building-with-ai-agents
description: Design and operate a reliable AI agent or agentic workflow — using the directive/orchestration/execution split to keep a probabilistic model from breaking a multi-step business process.
---

# Building With AI Agents

Grounded in "Agentic Workflows — The Business Playbook," "Agentic AI & Agents," "AI Agents Playbook • Nick Sarif," "AI Agent Harness," "MCP Field Guide — How Agents Get Hands," "Agentic AI Architecture • Google Cloud Guide," "Frontier Model Field Guide," and "The AI Prompt Library for Product Managers."

## When to use
Use this when a team is chaining multiple LLM calls into a "workflow" and it keeps breaking in ways nobody can debug — because a raw model is a probabilistic sampler, not a deterministic function, and chained steps compound: five steps at 90% reliability each lands you at roughly 59% end-to-end success, not 90%. It's also the right tool when someone is about to connect an agent to a new MCP server or grant it tool access without having thought through trust, context budget, or blast radius. The signal to use it now: an agent workflow works in the demo and fails unpredictably the moment it runs unattended.

## What it does
This skill applies the three-layer directive/orchestration/execution pattern to separate what must stay flexible (routing, judgment) from what must stay exact (deterministic scripts), wires in the guardrails and human-in-the-loop checkpoints that make autonomy safe, and applies the trust and context-budget discipline MCP tool access requires. It also covers the parallelization patterns (fan-out/fan-in, debate, pipeline handoff) that get more out of multi-agent systems than one agent working serially.

## Method
1. Classify what you're actually building on the ladder: a document (static), a chatbot (two-way conversation, bounded to the chat window), or an agent (two-way action — it calls tools, writes files, changes real systems). Only agents need everything below.
2. Run every agent through the same loop: Observe (ingest context) → Think/Plan (build a mini-plan against an explicit Definition of Done) → Act (call tools) → Reflect (self-evaluate and correct) → Orchestrate (feed results into the next planning pass). Spend the most human steering time on the planning step — a 1% planning error compounds hardest across everything downstream.
3. Separate the three layers explicitly: directives (plain-language markdown SOPs — objective, input spec, step-by-step process, definition of done, and named edge cases/fallback behavior), orchestration (the agent itself, making routing decisions and calling tools in the right order — the only genuinely probabilistic layer), and execution (small, deterministic, unit-testable scripts — one job each, same input always yields the same output).
4. Write every directive with its four required parts plus edge cases: a vague or under-specified Definition of Done is the single most common reason agent results disappoint.
5. Before connecting any MCP server, check its trust tier: local/stdio servers run with your machine's full privileges (highest blast radius — justified only for genuinely local needs); remote/managed and first-party servers remove that local exposure. Connect only the tools a given task actually needs — every connected server's schema loads into context whether used or not, and quality degrades as low-relevance context fills the window.
6. Match the parallelization pattern to the task's shape: fan-out/fan-in (many cheap researchers → one strong synthesizer) for breadth, debate/stochastic consensus (deliberately different framings compared for agreement and outliers) for high-uncertainty decisions, pipeline handoff (specialist agents in sequence, each with clean context) for a workflow with distinct phases.
7. Score every step on two axes before deciding its autonomy level: magnitude of the outcome and sensitivity to small errors. High on both (financial docs, credential changes) always gets human review before it ships; low on both (bulk scraping, draft generation) can run fully autonomous; everything else gets spot-checked.
8. Build in self-annealing: when a step fails, diagnose the actual cause, attempt a bounded number of fixes, then update both the directive and the execution script so the same class of error can't recur — with explicit guardrails (confirm before any action above a cost threshold, never modify credentials without approval, log every self-modification).
9. Before deploying to unattended/scheduled operation, strip the LLM out of the runtime path where possible — ship only the deterministic execution scripts for recurring, already-battle-tested workflows, with explicit success/failure logging replacing the reasoning window you can no longer watch live.

## Inputs
- The business process being automated, broken into its actual steps and their individual reliability
- Which steps are genuinely deterministic (can move to code) vs. which need judgment (must stay with the model)
- What MCP servers or tools the agent needs, and their trust tier (local/stdio vs. remote/first-party)
- The magnitude and error-sensitivity of each step, to set the human-in-the-loop level correctly

## Output format
A directive written in the four-part format (objective, inputs, steps, definition of done) with named edge cases; a layer map showing which steps are directive/orchestration/execution; a trust and context-budget check on every connected MCP server; a per-step human-in-the-loop classification (always-review / spot-check / fully autonomous); and, for anything going to unattended operation, a monitoring/logging plan substituting for the reasoning window.

## Example
A lead-generation workflow (scrape → verify match rate → enrich → upload → notify) is built as a directive with an explicit Definition of Done ("sheet link with ≥ target rows, each with a verified email") and a named edge case ("if fewer results than requested, widen the filter before returning partial results"). Scraping and enrichment run as deterministic execution scripts; only the "which filter to widen" decision stays with the orchestrating agent. The workflow is scored low-magnitude/low-sensitivity and runs fully autonomous on a weekly cron, posting a success/failure summary to a monitoring Slack channel since there's no live reasoning window to watch once deployed.

## Common pitfalls
- Chaining LLM calls into a multi-step "workflow" without accounting for compound unreliability — a chain of even 90%-reliable steps degrades fast, and the fix is moving deterministic steps into code, not hoping for a better model.
- Connecting every available MCP server "just in case," which silently eats a large share of the context budget in unused tool definitions before the agent has done anything.
- Deploying an agent to fully autonomous, unattended operation on a task that's actually high-magnitude and error-sensitive (financial documents, credential changes) instead of keeping a human review step in place.
