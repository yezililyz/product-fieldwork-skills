---
name: ai-native-ux
description: Design UX for an AI-powered feature by combining the four-step UX research cycle, IA/navigation structure, and the named psychological "laws" that predict how people perceive and decide.
---

# AI-Native UX

Grounded in "UX Research Handbook — Modular Frameworks," "UX Synthesis to Mockups — Modular Frameworks," "Behavior psychographics - 'laws' of UX," and "Information architecture guide - Product navigation, taxonomy and search."

## When to use
Use this when an AI feature is being designed without any research step — going straight from "we should add an AI assistant" to a mockup — and the team can't say what a good experience actually needs to feel like versus a rushed one. It's also the right tool when an AI feature's latency, uncertainty, or non-deterministic output is breaking a UX law the team hasn't named yet — for example, users abandoning a slow "thinking" state because the Doherty threshold (~400ms for felt responsiveness) is being violated with no perceived-performance treatment. The signal to use it now: a usability test on an AI feature surfaces confusion that a named law would have predicted in advance.

## What it does
This skill runs a real research-to-ship UX cycle for an AI-powered feature: a four-step study (plan, conduct, analyze, share) to ground design decisions in actual user behavior, an information-architecture pass so the feature's navigation and labeling match how users actually seek information, and a systematic check against the named UX laws (Hick's, Fitts's, Jakob's, Miller's, Doherty, Von Restorff, Peak-end, and others) that predict how people will perceive an AI feature's uncertainty, latency, and novelty.
## Method
1. Write a research plan before designing anything: background, goals, research questions (not literal interview questions), 1–2 KPIs, methodology, participant criteria, and a discussion script.
2. Run a usability study (~5 participants) on the AI feature's prototype — moderated if you need live follow-up on confusing AI outputs, unmoderated if you want real-world, unprompted reactions to the AI's behavior.
3. Synthesize findings through the four-step pipeline: gather all raw notes in one place, organize via affinity diagramming, extract themes (patterns across 3+ participants), then write one actionable insight per theme.
4. Map the feature's information architecture explicitly: which of the four seeking needs (known-item, exploratory, exhaustive, re-finding) does this AI feature actually serve, and does its navigation/labeling match that need rather than an org-chart structure?
5. Run the heuristic law audit on the AI feature specifically: choice audit (Hick's — is the AI offering too many actions/options per turn?), memory audit (Miller's — does the user have to recall context the AI already has?), convention audit (Jakob's — does this deviate from how users expect AI assistants to behave elsewhere, and is the deviation justified?), latency audit (Doherty — is the ~400ms threshold met, or does a "thinking" state need perceived-performance treatment like a skeleton or progress indicator?).
6. Name the feature's peak moment and its ending deliberately (Peak-end rule) — for an AI feature this is often the first moment the output feels genuinely useful, and the completion/handoff state after the AI finishes its work.
7. Run the ethics check on any AI-driven nudge or default: does it pass the reversal test (would it still make sense if the user saw exactly how it works), the regret test (would users regret the action it nudged them into), and the symmetry test (is opting out as easy as opting in)? AI features' persuasive defaults (auto-accept suggestions, pre-filled AI content) are especially prone to failing these.
8. Prioritize resulting fixes as P0 (blocks the core AI flow or is inequitable/inaccessible), P1 (a real pain point but the flow still completes), or P2 (a polish item), and present findings as a short deck: study details, themes with evidence, prioritized insights and recommendations.

## Inputs
- The AI feature's current prototype or live behavior, and what stage it's at (concept, prototype, post-launch)
- Any existing user complaints or drop-off data specific to the AI interaction
- Which of the four information-seeking needs the feature is meant to serve
- Constraints on latency/compute that affect what perceived-performance techniques are viable

## Output format
A short research plan and study writeup (method, N, key findings with quotes); an information-architecture note on which seeking need the feature serves and whether its structure matches; a law-by-law heuristic audit table (law, violation found, fix); and a P0/P1/P2-prioritized recommendation list with the ethics check applied to any AI-driven nudges or defaults.

## Example
A team designing an AI meeting-notes assistant runs a 5-participant usability study and finds users don't trust the auto-generated summary because there's no way to see what it left out (an exhaustive-seeking need the IA doesn't serve). The heuristic audit flags a Doherty violation — a 6-second "thinking" spinner with no progress signal — fixed with a skeleton state showing partial results streaming in. The peak moment is identified as the first correct action-item extraction; the team invests polish there rather than uniformly across the flow. An auto-accepted "smart reply" default is flagged for failing the regret test and changed to an explicit one-tap confirm.

## Common pitfalls
- Designing the AI feature's UI before running any research, then discovering in a support-ticket spike that the confusion was predictable from a named law (usually Jakob's or Doherty).
- Treating an AI feature's latency as an engineering afterthought instead of a UX requirement — the ~400ms threshold and perceived-performance techniques belong in the spec, not the backlog.
- Shipping an AI-driven default (auto-accept, auto-apply) without running the reversal/regret/symmetry ethics check, turning a helpful shortcut into a dark pattern.

## Guides referenced
- [UX Research Handbook — Modular Frameworks](https://yezi-hub.web.app/guide/KQbZ0jTALIv7BdboHUUZ) — source of the four-step research study (plan/conduct/analyze/share) in Method steps 1-3.
- [UX Synthesis to Mockups — Modular Frameworks](https://yezi-hub.web.app/guide/46P6eqCvQjEE2PkMzzfB) — source of the affinity-diagramming synthesis pipeline and the P0/P1/P2 prioritization + deck format in Method steps 3 and 8.
- [Behavior psychographics - "laws" of UX](https://yezi-hub.web.app/guide/THvXliXVTW4tVAecR9BF) — source of the named UX laws (Hick's, Jakob's, Miller's, Doherty, Peak-end) audited in Method steps 5-6.
- [Information architecture guide - Product navigation, taxonomy and search](https://yezi-hub.web.app/guide/NSVuTIyM6xch6nvDBaqm) — source of the four information-seeking needs (known-item, exploratory, exhaustive, re-finding) applied in Method step 4.
