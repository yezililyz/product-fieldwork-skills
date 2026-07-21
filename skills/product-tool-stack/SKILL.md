---
name: product-tool-stack
description: Choose AI prompts and CRM tooling for a PM workflow by matching the specific job (discovery, planning, execution, analytics) to a tested prompt or habit, rather than adopting tools generically.
---

# Product Tool Stack

Grounded in "The AI Prompt Library for Product Managers" and "HubSpot CRM Basics Playbook • From Zero to Confident."

## When to use
Use this when someone wants AI assistance for a PM task (interview synthesis, a PRD section, a competitive analysis) and is starting from a blank prompt instead of a tested, purpose-built one — the library covers nine stages (discovery through AI system design) with specific, chainable prompts for each. It's also the right tool when setting up or cleaning up a CRM and the instinct is to explore advanced features before mastering the four core objects and the single habit (properties, not notes) that determines whether any of it works later.

## What it does
This skill matches a specific PM job to the right tested prompt from the library — using prompt chains (sequential, reviewable steps) instead of one giant prompt for complex work like feedback synthesis — and applies power-user clauses (red-teaming the output, asking AI to improve its own prompt, giving AI permission to say "I don't know") to any prompt before trusting its output. For CRM tooling specifically, it enforces the properties-over-notes discipline that makes segmentation, automation, and reporting possible later.

## Method
1. Match the task to its stage in the library rather than writing a prompt from scratch: Discovery (interview synthesis, pain-point extraction, persona development), Planning (PRD sections, OKRs, RICE/MoSCoW/Cost-of-Delay prioritization), Execution (user stories, launch checklists, risk assessment), Market Analysis (competitive teardown, positioning maps), Product Analytics (funnel/cohort analysis, SQL scaffolding), and Building With AI (system prompts, agent design, evals).
2. For anything involving a large volume of raw input (hundreds of feedback items), use a prompt chain — categorize, then surface top themes, then prioritize — reviewing between each step, rather than one giant prompt that risks compounding errors invisibly.
3. Apply power-user clauses to any AI output before trusting it: append a red-team request ("critique this ruthlessly — what would a skeptical VP find wrong with it"), a meta-prompt request ("rewrite this prompt to produce better output, and explain what you changed"), and an explicit permission to say "I don't know" rather than confabulate when information is missing.
4. Use role-stacked evaluation for any feature or proposal with multiple stakeholder lenses — ask the same AI to assess it as a PM (user value), an engineer (technical risk), and a designer (usability) in sequence, rather than a single generic pass.
5. Before shipping any AI-assisted document, run a self-check pass: has every part of the original question been addressed, are the facts verifiable, is there a logical inconsistency — correcting any found issue before presenting it as final.
6. For CRM setup, master the four core objects (Contacts, Companies, Deals, Tickets) and their associations before touching any advanced feature — an unassociated contact loses the relationship context that makes a CRM more useful than a spreadsheet.
7. Store every piece of structured, reusable information in a CRM property, never a free-text note — this single habit determines whether segmentation, automation, and reporting will ever work; notes are invisible to all three.
8. Use one-on-one tracked emails for individual follow-ups and bulk marketing emails only for genuinely one-to-many communication (newsletters, announcements) — conflating the two either spams individual contacts or under-tracks real conversations.

## Inputs
- The specific PM task needing AI assistance, matched to its stage in the prompt library
- Raw input volume, to decide between a single prompt and a multi-step chain
- Current CRM state — is structured data already living in properties, or scattered across notes?
- Any existing prompt or document to run the power-user clauses (red-team, meta-prompt, self-check) against before finalizing

## Output format
The specific library prompt (or chain of prompts) matched to the task, with power-user clauses appended where the output needs pressure-testing; a role-stacked evaluation where multiple stakeholder lenses apply; and, for CRM setup, a defined property schema for each core object plus an explicit team rule distinguishing what goes in a property vs. what (if anything) stays in a note.

## Example
A team has 500 pieces of raw customer feedback and needs a prioritized theme list. Instead of one large prompt, they run the three-step chain: categorize each item (bug/feature/UX/praise/other), surface the top themes per category with frequency and a representative quote, then prioritize via an impact-vs-effort matrix — reviewing the output between each step rather than trusting one pass to get all three jobs right at once. The final prioritized list gets one more pass with the red-team clause appended, surfacing that "load time" complaints were undercounted because several were miscategorized as generic praise in step one.

## Common pitfalls
- Writing a single large, generic prompt for a complex multi-step task (like feedback synthesis) instead of a reviewable chain — errors in an early step compound invisibly through the rest of the pipeline.
- Trusting AI output without appending a red-team or self-check pass, especially on anything going to a stakeholder or a decision with real stakes.
- Storing structured, reusable CRM data in free-text notes instead of properties, silently blocking every segmentation, automation, and reporting capability that depends on it later.
