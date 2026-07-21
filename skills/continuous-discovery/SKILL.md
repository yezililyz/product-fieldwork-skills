---
name: continuous-discovery
description: Set up or improve an ongoing, outcome-driven discovery practice — story-based weekly interviews feeding an opportunity solution tree — rather than a one-off research sprint.
---

# Continuous Discovery

Grounded in "Continuous Discovery Habits • Teresa Torres," "Discovery in the Age of AI — Teresa Torres," and "The Four Steps to the Epiphany — The Field Guide" (Steve Blank).

## When to use
Use this when a team ships based on outputs ("ship this by March") instead of outcomes ("reduce churn"), and discovery — if it happens at all — is a one-time research sprint rather than a weekly habit. It's also the right tool the moment delivery gets cheap (AI-assisted building), since Teresa Torres's core reframe is that discovery becomes *more* important, not less, when anyone can ship anything — without a filter, the backlog fills with untested whims and customers get the product equivalent of Homer Simpson's car: everything someone thought mattered, nothing that actually did. The signal to use it now: nothing in the backlog ever changes after a round of "customer interviews," or only one solution is ever seriously considered — both are tells of discovery theater, not real discovery.

## What it does
This skill sets up the actual operating system: a single outcome metric at the top, weekly story-based customer interviews (not solution validation), an opportunity solution tree to keep the messy discovery space organized, and assumption testing to compare multiple solutions cheaply before committing engineering time. For an AI-powered product specifically, it extends the same discipline into the error-analysis-to-eval loop, since for AI products discovery and error analysis become nearly synonymous.

## Method
1. Set a single outcome at the top — a specific, defined metric like reduced churn or increased activation, usually set with executives — not a bundle of goals and not an output like "ship feature X."
2. Run one story-based interview per week, minimum. Ask "tell me about the last time you [did the thing the product is for]" — never "would you use this?" (people are bad at predicting their own future behavior) and never a generic "tell me about your experience" (people report what they think they do, not what they actually did).
3. Excavate the story with temporal prompts ("what did you do first," "what came next") instead of guessing or leading — guessing is the single most common interviewing mistake, and it contaminates the story with the interviewer's own assumptions.
4. Capture each interview in a one-page snapshot: an experience map of the story's key moments, every unmet need/pain point/desire heard as a candidate opportunity, a few quick segmenting facts, one memorable quote, and any not-yet-actionable insights parked for later.
5. Build and maintain the opportunity solution tree: filter snapshot opportunities by whether they could plausibly drive the outcome, build a "super experience map" spanning 3-4 interviews, turn distinct story moments into top-level branches, and revisit/restructure the tree every 3-4 interviews as a living document.
6. Pick one target opportunity, then brainstorm multiple candidate solutions for it — a compare-and-contrast decision, never a single solution taken straight to build.
7. Test solutions via assumption testing, not whole-idea testing: break the solution into what must be true for it to work, and test each assumption in isolation before committing design or engineering time — this localizes exactly where a solution would break, instead of a vague pass/fail on the whole idea.
8. If building an AI-powered feature specifically, treat error analysis as the AI-era form of discovery: log traces (prompt + response), review batches of ~50 with human annotation, find the common errors, fix via context/prompt/orchestration changes, write an eval for any error that persists, and A/B test the fix — the same discipline as interviewing, applied to real usage traces instead of conversations.
9. If validating a brand-new business model (not just a feature), run Steve Blank's Customer Development in parallel to product build: Customer Discovery (test problem/product/customer hypotheses outside the building, with real "earlyvangelists" willing to buy an unfinished product) before Customer Validation (prove repeatable paying-customer acquisition) before any Customer Creation spend — pivoting back to Discovery, not scaling forward, if paying customers can't be found.

## Inputs
- The single outcome metric this discovery practice is meant to move
- Access to real customers/users for a weekly interview cadence
- The current opportunity solution tree, if one already exists, or raw notes to build the first draft from
- For AI products: a mechanism for logging traces (prompt + response) from real usage

## Output format
A stated single outcome metric; a weekly interview snapshot template in use (experience map, opportunities, quick facts, quote, insights); a current opportunity solution tree with a named target opportunity; an assumption-testing plan for the candidate solutions under that opportunity, listing which assumption is being tested and how; and, for AI features, an error-analysis-to-eval loop with a defined batch-review cadence.

## Example
A team's outcome is "increase weekly active usage of the collaboration feature." Four interviews in week one surface a recurring opportunity: users create a doc, then abandon it because they can't tell who else has seen it. The tree gets a new branch under the "reviewing a shared doc" moment. Instead of building the first idea that comes to mind, the team brainstorms three solutions (a viewer-count badge, an activity feed, a read-receipt system) and assumption-tests the cheapest-to-validate one first — a static badge mockup — before any engineering work starts on the winner.

## Common pitfalls
- Running interviews that ask people to predict future behavior or rate a prototype ("would you use this?") instead of excavating a real, recent, specific story of what they actually did.
- Discovery theater: interviews that never change the backlog, never kill an idea, and only ever validate the one solution the team already wanted to build — usually a structural/organizational problem, not a personal failing.
- Whole-idea testing (build the full thing, then see if it works) instead of assumption testing (break it into what must be true, test the riskiest assumption first) — especially tempting now that AI prototyping makes a half-baked idea look "real" in one prompt.
