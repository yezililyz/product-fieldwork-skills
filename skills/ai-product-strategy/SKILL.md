---
name: ai-product-strategy
description: Set strategy for an AI-powered product in the GenAI era — picking a real wedge, finding where the moat actually lives once models commoditize, and climbing the agency ladder deliberately — not just gating whether classical ML fits.
---

# AI Product Strategy

Grounded in "The AI Product Strategy Playbook" (34 conversations with builders from Anthropic, OpenAI, Microsoft, Cursor, Windsurf, Scale, Surge, Intercom, LinkedIn, Slack), "AI PM Strategy Handbook," "AI / ML Product Management — The Field Guide," and "The AI/ML PM Playbook."

## When to use
Use this when a strategy conversation starts from the tool ("we need AI agents," "we need a copilot") instead of the business problem — the "shiny object trap" responsible for most bolt-on chat experiences that ship to check a box rather than solve real pain. It's also the right tool when a team is treating AI strategy as a classical-ML feasibility question (do we have the data, is this rules vs. ML) when the actual product is GenAI/LLM-native — a different set of questions applies: where does the moat live once the base model commoditizes, how much agency should this feature actually have, and what does the product's model literally optimize for.

## What it does
This skill recalibrates strategy for GenAI's inverted economics (cheap code, expensive inference, non-deterministic output) before anything else, picks a real wedge using the pain-first "chore → sweet spot → payoff" discipline, locates the actual moat now that base models are commodity infrastructure (data, interface, and orchestration — not the model layer), and climbs the agency ladder deliberately (suggest → act-with-approval → sharper tools → bounded autonomy) rather than shipping full autonomy on day one. Where the feature is closer to classical ML than GenAI, it falls back to the ML-fit gate (data availability, rules-vs-ML signals) and the three-wave/ROI framework from the AI PM Strategy Handbook.

## Method
1. Recalibrate the underlying economics before scoping anything: code is now cheap but inference isn't, so a business model that can't clear inference cost (pure ad-funded, for instance) breaks; design for "squishy," non-deterministic outputs rather than assuming the old 100%-accuracy bar; and treat the product as an organism that improves with every interaction, not a static release.
2. Pick the wedge using the pain-first formula: find a real chore (a repeated, high-friction step users do constantly), confirm it's a sweet spot (AI delivers a step-change, not a marginal improvement), size the payoff (the time saved has to be big enough to justify the switching effort), and return to first principles (how does AI solve the original objective better, rather than bolting AI onto old feature logic) — validate desirability with a low-fidelity demo before any real build.
3. Decide replace-vs-augment explicitly for the target workflow, and consider going vertical — foundation labs won't build the domain-specific tool, so domain knowledge plus a niche interface on top of general models is the open lane for anyone not building foundation models themselves.
4. Locate the real moat now that base models are commoditizing: proprietary, licensed (not scraped) data and superior vertical interface/workflow design are durable; custom models are an earned, later-stage investment once generic models hit a ceiling on your specific "magic moments"; the base model itself is not a moat. Run the stress test — does AI here create a structural barrier, does it erode your own existing barriers, does it open a genuine second act — and prefer deep orchestration (multiple specialized models mapped to a workflow's real steps) over a thin wrapper around one generic chat box.
5. Treat the data engine as the actual product quality lever, not model choice: prioritize expert-annotated demonstration data and pipeline freshness over chasing the newest model version, and choose the optimization technique in order of cost — prompting first (cheapest), then RAG (when the model needs live or large internal knowledge), then fine-tuning (brand voice or domain expertise), then distillation (cost/latency at scale) — only once the cheaper lever has been tried and found insufficient.
6. Climb the agency ladder deliberately rather than shipping full autonomy immediately: start where mistakes are cheap (suggest to a human operator, never act on a customer directly), earn the next rung only once real behavioral signal (not a calendar date) shows the system is predictable under real-world noise, and keep a hard human checkpoint on anything that spends money or changes infrastructure regardless of how far up the ladder the feature climbs.
7. If the feature is closer to classical ML than GenAI, fall back to the ML-fit gate: is the needed data available, accessible, and high-quality; does the problem need complex logic, scale, personalization, or adaptation over time that a rule set can't capture — if none apply, a simpler rules-based approach is likely the right call, and skip the rest of this GenAI-specific method.
8. Name what the product's model actually optimizes for, explicitly and early — engagement-maximizing objectives produce low-quality, addictive behavior, while an objective genuinely aligned with user outcomes (respecting their time, being demonstrably honest) becomes the product's real spec, not an afterthought bolted on after the fact.

## Inputs
- The specific business problem or chore the AI initiative addresses, named before any tool or model is chosen
- Whether the target feature is GenAI/LLM-native or closer to classical ML, to route to the right half of this method
- An honest read on where the team currently sits on the agency ladder for this feature, and what behavioral signal (not calendar time) would justify climbing further
- The specific data assets (proprietary, licensed) available to build a durable moat, distinct from just picking a capable base model

## Output format
A stated wedge (the specific chore, why it's a step-change not a marginal gain, and the validated payoff); a moat assessment naming which layer (data, interface, orchestration, or an earned custom model) the defensibility actually lives in; a current agency-ladder rung for the feature with the specific behavioral signal that would justify the next rung; a data-engine plan naming the optimization technique (prompting/RAG/fine-tuning/distillation) in cost order; and an explicit statement of what the product's model is optimizing for.

## Example
A team wants "AI-powered customer support." Applying the wedge formula, the real chore isn't answering tickets generically — it's the repeated, high-friction step of digging through prior tickets and account history before responding, a task agents do dozens of times daily. The moat is placed in proprietary support-ticket data and a purpose-built agent interface, not the underlying model. The feature starts at agency-ladder rung 1 (suggest a drafted response to the human agent, never send directly), with a stated behavioral signal (95%+ suggestion acceptance rate over four weeks) required before advancing to rung 2 (act with approval). The team explicitly states the objective: optimize for first-contact resolution quality, not for handle-time reduction alone, to avoid the model learning to close tickets prematurely.

## Common pitfalls
- Bolting AI onto an existing feature ("add a chatbot") instead of returning to first principles and asking how AI solves the original objective fundamentally better — the shiny-object trap that produces generic, low-adoption features.
- Treating the base model as the moat, when base models are commoditizing fast — the durable defensibility lives in proprietary data, interface/workflow design, and (later) a custom model earned once generic models hit a ceiling.
- Shipping full autonomy on day one instead of climbing the agency ladder — starting where mistakes are cheap and earning each rung with real behavioral signal, not a launch deadline.

## Guides referenced
- [The AI Product Strategy Playbook](https://yezi-hub.web.app/guide/3cQOCtMboAybhWGJPvZ3)
- [AI PM Strategy Handbook](https://yezi-hub.web.app/guide/Z07jloJKF1Xv5oJ0P4fE)
- [AI / ML Product Management — The Field Guide](https://yezi-hub.web.app/guide/3vjUjIbDmxtuGTAwTLDE)
- [The AI/ML PM Playbook](https://yezi-hub.web.app/guide/Lrw3LjYUGF2v2WD8yU54)
