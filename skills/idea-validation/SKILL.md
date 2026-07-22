---
name: idea-validation
description: Validate one specific idea before investing further — cross-checking it against real sourcing signal (not brainstorming) and story-based interviews that reveal what people actually do, not what they say.
---

# Idea Validation

Grounded in "17 Ways to Generate Startup Ideas in the AI Age," "Continuous Discovery Habits • Teresa Torres," and "Discovery in the Age of AI • Teresa Torres."

## When to use
Use this when a single idea already exists and the question isn't "what should we build" but "is this actually worth building" — the moment before committing real engineering time. It's also the right tool when the validation done so far has been asking people directly whether they like the idea ("would you use this?"), which reliably produces optimistic, worthless signal regardless of how honest people are trying to be. The signal to use it now: enthusiasm exists but nobody has yet found independent, already-observable evidence (a paid workaround, a repeated complaint, a specific past behavior) that the underlying problem is real.

## What it does
This skill validates a specific idea two ways at once: checking for independent sourcing evidence that the pain is real and already being paid for or complained about (G2 reviews, Upwork gigs, Reddit threads), and running story-based interviews that collect what people actually did recently rather than their opinion of the idea. Both approaches deliberately avoid asking "is this a good idea" directly, since that question is the fastest way to collect flattering, false-positive answers.

## Method
1. Search for independent evidence the pain already exists before running a single interview: `site:reddit.com "is there a tool" [niche]`, G2 reviews of adjacent tools for "what's missing," and Upwork for gigs multiple clients pay for repeatedly doing this exact manual work.
2. Never ask directly whether the idea is good — talk about the person's life and workflow instead; if the idea is never mentioned, they can't flatter you about it, and the resulting signal is real.
3. Grade every question against the three-tier interview scale before asking it: Tier 1 ("would you use something like this?") is worthless — people are bad at predicting their own future behavior and want to be nice; Tier 2 ("tell me about your experience with X") is better but still leaky — it surfaces what people think they do, not what they actually did; Tier 3, the fix, is "tell me about the last time you [did the thing this idea addresses]" — a specific, recent, real story grounded in actual behavior, not a generalization or a forecast.
4. Excavate the story with temporal prompts ("what did you do first," "what came next") rather than guessing at what happened — guessing contaminates the interview with your own assumption about the problem.
5. Watch for the three species of bad data and discard them on the spot: compliments ("everyone loves it"), fluff (generic or future-tense claims), and unprompted feature requests (dig into the motivation behind a request rather than adding it straight to a roadmap).
6. Capture each conversation in a one-page snapshot — the story's key moments, every unmet need or pain point heard, a few quick segmenting facts, and one memorable quote — so patterns across 3-4 interviews can be compared rather than acting on a single anecdote.
7. Look for convergence between the two validation tracks: does the sourcing evidence (a G2 complaint, an Upwork gig) match what real interview subjects independently describe as their actual past behavior? Convergence across both is far stronger signal than either alone.
8. Audit the validation process itself for discovery theater before trusting any batch of interviews: if nothing in scope ever changes after the conversations, no candidate idea is ever killed, only one solution is ever seriously considered, or the interviews exist to validate the idea rather than learn about the customer, the "validation" was theater regardless of good intentions — the fix is personal discipline (set aside ego, stay curious through the seventh interview on the same topic), not a different template.
9. Only after this convergence, validate demand directly with a small number of real potential users (10-20) and build the simplest possible test before any larger commitment — sourcing and interviews narrow the search; they don't replace confirming real willingness to act.

## Inputs
- The single specific idea being validated, stated concretely enough to search and ask about
- Access to the sourcing channels (Reddit, G2, Upwork) relevant to the idea's category
- Willingness to run 3-4 real story-based interviews with people who might have the underlying problem
- Enough discipline to avoid mentioning the idea itself during those interviews until the very end, if at all

## Output format
A sourcing-evidence summary (quoted complaints, repeated gig listings, or review excerpts independently confirming the pain); 3-4 interview snapshots built from story-based conversations (experience map, opportunities heard, one quote each); a convergence check comparing sourcing evidence against interview findings; and a validate/iterate/kill recommendation based on whether both tracks agree the pain is real and already costing people something.

## Example
An idea for an AI tool that auto-fills expense reports is checked against G2 reviews of an existing expense tool, surfacing a specific recurring complaint about manual receipt re-entry. Three story-based interviews are run without mentioning the idea, each opening with "tell me about the last time you submitted an expense report" — two of three independently describe the exact same receipt re-entry friction, unprompted. The convergence between the G2 signal and the interview signal is strong enough to justify a small validation build, rather than the weaker single-source evidence either track would have provided alone.

## Common pitfalls
- Asking directly "would you use this" or "is this a good idea" and treating an enthusiastic answer as validation — it's the single most common way to collect false-positive signal.
- Relying on sourcing evidence alone (a G2 complaint, a Reddit post) without running any real interviews to confirm the same pain shows up in actual past behavior, not just written complaints.
- Adding every feature request heard during validation straight to the idea's scope, instead of digging into the underlying motivation — people describe their problems accurately far more often than they describe the right solution.
- Running interviews that never actually change anything — the idea never gets killed, only one solution is ever seriously entertained — and calling it validation anyway; this is discovery theater, and it's rarely bad faith, just a failure to stay curious past the first few conversations.

## Guides referenced
- [17 Ways to Generate Startup Ideas in the AI Age](https://yezi-hub.web.app/guide/gud4eLPH4IwJnyqUsA8T)
- [Continuous Discovery Habits • Teresa Torres](https://yezi-hub.web.app/guide/8g4iXOetD9bSDh0Yy34X)
- [Discovery in the Age of AI • Teresa Torres](https://yezi-hub.web.app/guide/W3wRRokIMKMDt3O8rkF2)
