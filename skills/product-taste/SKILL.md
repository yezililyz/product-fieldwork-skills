---
name: product-taste
description: Develop judgment about what's genuinely good (not just fast or possible) using the principles filter and a real PRD teardown that says no to more powerful options specifically to protect product identity.
---

# Product Taste

Grounded in "Product Strategy — A Framework for Filtering Great from Good" and "Anatomy of a Great PRD — Linear's Priority Micro-Adjust, Torn Down."

## When to use
Use this when a feature decision is being justified by "we could build it" or "users asked for it" rather than by any actual filter for whether it's genuinely good — the principles filter (differentiated, time-sensitive, frequently used) exists precisely to catch ideas that are merely possible, not actually great. It's also the right tool when reviewing a spec or PRD that never says no to anything — a document that accepts every capable option instead of rejecting the ones that would dilute the product's identity is missing the single most senior move a real PRD makes.

## What it does
This skill applies the principles filter (a great idea must be differentiated, time-sensitive, and frequently used — failing any one makes it merely a "nice to have") to any feature decision, and extracts eight concrete craft moves from a real, sentence-by-sentence PRD teardown: leading with the problem, decoding indirect user requests into the real underlying need, solving at the smallest sufficient surface, and — the sharpest move — rejecting more powerful options explicitly because they'd erode what makes the product distinct.

## Method
1. Run any candidate feature through the principles filter before building it: is it differentiated (something a competitor couldn't just as easily claim), time-sensitive (needed in the moment, not merely convenient), and frequently used (something people return to, not a one-off)? Failing any one test means it's passable, not great.
2. Lead with the problem before proposing any solution — name the concrete failure modes of the current state precisely enough that the eventual fix feels inevitable, not invented.
3. Decode indirect requests: when users ask for a specific solution ("add custom fields," "add more categories"), don't take the request literally — extract the underlying need it's actually pointing at, since users describe solutions but PMs are the ones who diagnose problems.
4. Solve at the smallest sufficient surface — add order or clarity to structure that already exists before reaching for new structure; resist scope creep even when a more elaborate solution would also technically work.
5. Show rejected options with real reasons, not just effort estimates — tie each "no" explicitly to product identity or principle (a more powerful option that would dilute what makes the product distinct is worth rejecting even if it's easier to build or more requested).
6. Ground every claim about user need in real evidence — an actual conversation, a real mockup a customer made, a direct quote — rather than an invented persona; observation is what separates taste from opinion.
7. Spec the one genuinely hard edge case precisely, rather than leaving ambiguity for engineering to guess at — the difference between a document with real judgment and one that just describes a feature at a high level.
8. Plan the rollout and the announcement as part of the same narrative the feature serves — bundling a small feature with a related one to tell one coherent story is itself a product decision, not just a scheduling one.

## Inputs
- The candidate feature or spec being evaluated for genuine quality, not just feasibility
- Real evidence of the underlying user need (an actual request, quote, or mockup) rather than an assumed persona
- Any more powerful or more-requested alternative that was considered and needs an explicit, principled reason for rejection
- The product's stated identity or principles, to check whether a rejected option would have diluted it

## Output format
A principles-filter verdict (differentiated / time-sensitive / frequently-used, pass/fail on each) for the candidate feature; a stated problem framed by concrete failure modes, ahead of any solution; the underlying need extracted from any literal user request; an explicit list of rejected alternatives with identity-based (not just effort-based) reasons; and real evidence (a quote, thread, or mockup) grounding the claimed user need.

## Example
Users repeatedly ask for "custom fields" so they can build their own numeric ranking system. Taken literally, this would be built as requested. Decoded through the principles filter and the underlying-need lens, the real need is a stable, global stack-rank — achievable by adding drag-and-drop reordering within existing priority buckets instead. The more powerful "custom fields" option is explicitly rejected in the spec: it would technically satisfy the request, but it's out of character for a product whose core differentiator is opinionated, uniform defaults — building it would dilute exactly what makes the product distinct.

## Common pitfalls
- Building the literal feature users asked for instead of decoding the underlying need it's pointing at — treating a request as a spec instead of a symptom.
- Accepting the most powerful or most-requested option without weighing whether it would erode what actually makes the product distinct — effort and capability aren't the only cost of a feature.
- Writing a spec or persona from assumption instead of grounding it in a real quote, thread, or artifact — taste is built on observation, not invented opinion.
