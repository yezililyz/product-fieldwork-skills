---
name: writing-prds
description: Write a PRD that ships something small and sharp — leading with the problem, decoding indirect requests, and explicitly rejecting more powerful options on principle — using a real, sentence-by-sentence dissected example.
---

# Writing PRDs

Grounded in "Anatomy of a Great PRD — Linear's Priority Micro-Adjust, Torn Down."

## When to use
Use this when a PRD opens with the proposed solution instead of the problem, skipping the step that makes the eventual fix feel inevitable rather than invented — the real teardown shows a PRD spending its real weight naming three concrete failure modes of the current state before proposing anything at all. It's also the right tool when a spec never says no to anything — a PRD that accepts every capable option instead of explicitly rejecting the ones that would dilute the product's identity is missing the single most senior move a real PRD can make.

## What it does
This skill extracts eight concrete craft moves from a real, dissected Linear PRD and applies them to any spec: lead with the problem, decode indirect user requests into the real underlying need, solve at the smallest sufficient surface, show rejected alternatives with real (not just effort-based) reasons, ground every claim in real evidence, spec the one genuinely hard edge case precisely, plan migration explicitly, and launch the release as part of a coherent larger narrative.

## Method
1. Structure the PRD as Context → Problem → Solution, in that order, and spend real weight on the Problem section — name the concrete failure modes of the current state precisely enough that a reader who only gets through this section already understands why something must change.
2. Decode indirect requests explicitly: when users ask for a specific solution ("add custom fields," "add more categories"), don't build what was literally asked for — name the underlying need the request is actually pointing at, and state that decoding in the PRD itself so readers see the reasoning, not just the conclusion.
3. Solve at the smallest surface that fully resolves the named problem — add order or clarity to structure that already exists before reaching for new structure, and commit to an opinionated stance about how the feature should be used rather than hedging with configurability.
4. Show every seriously-considered alternative that was rejected, with the real reason tied to product identity or principle, not just implementation effort — the sharpest single move a PRD can make is rejecting a more powerful, more requested option specifically because it would erode what makes the product distinct.
5. Ground every usage scenario in real evidence — an actual customer message thread, a real mockup someone made, a direct quote — rather than an invented persona; observation converts a claimed user need into something a reader can verify.
6. Spec the one genuinely hard edge case precisely, pinning down the exact ambiguity engineers would otherwise have to guess at, rather than leaving it as an implicit assumption.
7. Plan the rollout with explicit migration thinking — bootstrap existing users from their current data rather than stranding them on a blank slate, and sequence milestones (internal → beta → GA) around the one real concern at each stage.
8. Treat the launch and announcement as a narrative choice, not just a scheduling one — bundling a small feature with a related one to tell one coherent story about the product is itself a deliberate product decision worth stating in the PRD.

## Inputs
- The feature or change the PRD is meant to scope, along with the concrete current-state failure modes it addresses
- Any literal user requests that need decoding into the real underlying need before proposing a solution
- The more powerful or more-requested alternatives that were considered, with the specific principle-based reason each was rejected
- Real evidence (a quote, a thread, a mockup) grounding the claimed user need, rather than an invented persona

## Output format
A PRD structured Context → Problem → Solution, with the Problem section carrying real weight; a decoded underlying need stated explicitly where user requests were indirect; a list of rejected alternatives with identity-based reasons; at least one usage scenario grounded in real evidence (a quote, thread, or mockup); a precisely specified hard edge case; an explicit migration/bootstrap plan; and a stated launch sequencing choice tied to a coherent narrative.

## Example
A PRD for a small notification-preferences change opens not with "add a mute button" but with three named failure modes of the current all-or-nothing notification system, each grounded in a real support-ticket quote. It decodes a cluster of literal requests ("let me turn off email but keep push," "stop pinging me on weekends") into one underlying need — per-channel, per-time-window control — and explicitly rejects a more powerful per-notification-type settings matrix, citing that it would fragment the product's currently simple settings page. The rollout plan bootstraps existing users' preferences from their current all-or-nothing setting rather than defaulting everyone to "all on."

## Common pitfalls
- Opening a PRD with the proposed solution instead of the problem, skipping the step that makes readers arrive at the same conclusion themselves before ever seeing the fix proposed.
- Building exactly what was literally requested instead of decoding the underlying need behind a cluster of similar requests, missing the more elegant single solution that would have served all of them.
- Accepting a more powerful or more-requested alternative without ever weighing whether it would dilute what makes the product distinct — the "no, and here's why" is often the single most valuable sentence in the whole document.
