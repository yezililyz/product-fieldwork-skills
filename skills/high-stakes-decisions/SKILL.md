---
name: high-stakes-decisions
description: Make a consequential, hard-to-reverse call by separating symptom from root cause first, then testing only the hypotheses that would actually change the decision — not by analyzing everything available.
---

# High-Stakes Decisions

Grounded in "Beyond Prioritization — The Field Guide," "Business Strategy — Creating Competitive Advantage," and "Problem-Solving & Framing Toolkit for Product Management."

## When to use
Use this when a decision is being made on whatever data happened to be handy, rather than on what would actually have to be true for the decision to change — the consulting insight that starting from data produces pattern-hunting and false confidence, while starting from a testable hypothesis keeps analysis purposeful. It's also the right tool when a "problem" being solved is really a symptom (sales are down, churn is high) restated as if it were a cause — fixing a symptom only suppresses it temporarily, and it will recur. The signal to use it now: a proposed fix would leave the underlying mechanism completely unchanged if implemented.

## What it does
This skill separates symptom from root cause using the 5 Whys and fishbone diagrams, decomposes the problem space with MECE structure so nothing overlaps or gets missed, and replaces open-ended exploration with hypothesis-driven analysis — stating what must be true for the decision to change, then testing only that, prioritized by impact and uncertainty. For decisions with real business-strategy stakes, it layers in competitive-advantage analysis (VRIN, Five Forces) to check that a "great" option is also defensible, not just correct.

## Method
1. Distinguish symptom from root cause with a three-part test: does the statement describe an outcome or a mechanism? Can the client/team actually control it? If fixed, would the same problem almost certainly not recur? A "no" on any of these means you're still at the symptom level.
2. Run the 5 Whys to drill from symptom to mechanism, anchoring each "why" in observable facts rather than opinion, and stopping at a specific, actionable design element (a policy, process, or capability) rather than drifting into unfixable territory like "culture" or "the market."
3. For genuinely multi-variable problems, use a fishbone diagram (people, process, technology, materials, environment, measurement) to surface candidate causes across categories without narrowing prematurely — each branch is a hypothesis to test, not a verdict.
4. Structure the full problem space with MECE: pick the organizing dimension, list all elements, test for overlap and gaps, and refine until the categories are clean, complete, and actionable — neither so granular they're useless nor so vague they don't point to any action.
5. Convert the sharpest branches into explicit, falsifying hypotheses in the format "if [X], then [Y], because [Z]" — checking each for four qualities: specific, verifiable, problem-relevant, and not itself another symptom in disguise.
6. Prioritize which hypotheses to test first on impact × uncertainty: high impact and high uncertainty gets tested first (the biggest unknowns); low impact and low uncertainty gets deprioritized or just monitored.
7. Design the minimum analysis needed to decisively support or reject each prioritized hypothesis — stop once a hypothesis is decisively resolved unless further precision would actually change the recommendation; run a sensitivity check to quantify how much the conclusion could shift.
8. For strategically consequential decisions (not just operational ones), check the surviving option against durability, not just correctness: does it pass VRIN (valuable, rare, inimitable, non-substitutable) as a real competitive advantage, or is it merely good and easily matched? A correct decision that's easy for a competitor to copy is a weaker bet than a slightly less obvious one that's actually defensible.
9. Translate the final recommendation into the decision-maker's own language and stakes — dollar impact, risk reduction, or decision speed — rather than leaving it as an analytical artifact nobody can act on.

## Inputs
- The stated problem, in whatever form it first arrived (usually a symptom, not a cause)
- Access to whoever holds tacit knowledge of the mechanism (the people closest to where the problem actually occurs)
- Enough data access to test the 2-3 highest-priority hypotheses specifically, not a full data dump
- The decision-maker's own stakes and language, to translate the eventual recommendation

## Output format
A root-cause statement that passes the three-part symptom test; a MECE decomposition of the problem space; a small set of hypotheses in "if/then/because" format, each rated on impact and uncertainty; the specific analysis run against the top 1-2 hypotheses with a clear supported/rejected verdict; and, for strategic decisions, a VRIN check on the surviving option's actual defensibility.

## Example
"Churn is up" arrives as the stated problem. The three-part test flags this as a symptom (an outcome, not a mechanism). Five Whys traces it to a specific, controllable cause: no structured onboarding follow-up exists past day 3. A fishbone check confirms no competing hypothesis (pricing, support quality, product bugs) explains as much of the pattern. The hypothesis "if we add a day-7 and day-14 check-in, then 90-day retention improves, because early unaddressed confusion is currently driving silent churn" is tested on a contained cohort before being rolled out broadly — resolving the ambiguity before committing the whole team to a fix.

## Common pitfalls
- Treating a symptom (sales are down, NPS is low) as if it were already the root cause, and building a fix that leaves the actual mechanism untouched — guaranteeing recurrence.
- Analyzing all available data before forming any hypothesis, producing pattern-hunting and false confidence instead of a decision-ready answer — hypothesis-first framing exists specifically to prevent this.
- Picking the "correct" strategic option without checking whether it's actually defensible (VRIN) — a good idea a competitor can trivially copy is a much weaker high-stakes bet than it first appears.
