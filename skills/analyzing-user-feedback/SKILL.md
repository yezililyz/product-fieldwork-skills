---
name: analyzing-user-feedback
description: Turn messy qualitative feedback into decision-ready, quantified signal without flattening the story, using five quantification methods and the validity/reliability theory behind good measurement.
---

# Analyzing User Feedback

Grounded in "Quantify Qualitative Data • 5 Methods" and "Quantification & Measurement • A Practical Guide."

## When to use
Use this when a pile of interview notes, support tickets, or reviews contains real signal but nobody can turn it into something a leader can act on beyond "some users are frustrated." It's also the right tool when a team has already turned qualitative data into a number, but that number can't be trusted — because nobody checked whether the measure is valid (measuring the intended concept) or reliable (consistent across repeated measurement). The signal to use it now: a stakeholder asks "how many users actually said that?" and the honest answer is "a lot, roughly."

## What it does
This skill applies a repeatable process to quantify qualitative feedback — defining goals, organizing by theme, choosing 2–3 complementary methods (content, sentiment, NPS, thematic, or narrative analysis), coding consistently, and counting — while keeping the underlying measurement honest by checking every resulting metric against validity and reliability, and matching statistical treatment to the metric's actual level of measurement.

## Method
1. Define what you're trying to understand before touching the data — e.g. why users get stuck at a specific step, or overall satisfaction with a feature — since the goal determines both the coding categories and which method(s) apply.
2. Organize the raw feedback by theme (navigation, load time, color scheme, etc.) before choosing a method — most useful analyses combine 2–3 methods rather than relying on one.
3. Apply content analysis to tag specific words or topics and count frequency — good for spotting recurring, nameable topics across many open-ended responses.
4. Apply sentiment analysis to measure emotional tone (positive/negative/neutral/mixed) — good after a launch or campaign, to know where to dig deeper.
5. Apply NPS analysis if loyalty is the question: segment into promoters (9–10), passives (7–8), detractors (0–6), then break down themes *within* each group — promoters and detractors usually cite different things entirely.
6. Apply thematic analysis when the goal is understanding the underlying idea, not just counting a word — it captures context and meaning that content analysis alone misses.
7. Apply narrative analysis for anything that unfolds over time (onboarding, a multi-step journey) — the structure of how users describe their journey (confusion → learning → success) tells you exactly where to intervene.
8. Before presenting any resulting number, check it against validity (does it actually measure the intended concept — triangulate with another indicator if unsure) and reliability (would measuring it again produce a similar result), and match the statistical treatment to its level of measurement (nominal/ordinal/interval/ratio) — don't calculate a mean on an ordinal Likert scale as if it were a ratio variable.

## Inputs
- The raw qualitative feedback (interview transcripts, support tickets, reviews, survey open-ends)
- The specific question or decision this analysis is meant to inform
- Any existing categories/tags already in use, to check for overlap before creating new ones
- Whether loyalty (NPS), sentiment, or a journey-shaped experience is the primary lens needed

## Output format
A stated analysis goal; the 2–3 methods chosen and why; a coded theme breakdown with percentages ("35% of users mentioned load time," not "some users"); a validity/reliability note on the resulting metric; and, where relevant, a level-of-measurement flag on any number that shouldn't be averaged or ranked the way it's being presented.

## Example
Support tickets and post-launch interviews about a new checkout flow are coded via content analysis (35% mention "load time") combined with NPS analysis, which reveals promoters cite "ease of use" while detractors cite "load time" specifically — a sharper signal than sentiment alone. The load-time complaint is checked for validity by triangulating against actual load-time telemetry (systematic error check), confirming it isn't just a perception artifact. The resulting priority list separates the "60% of users hit this" claim (a ratio-level, poolable statistic) from the NPS-derived "detractors care about X" claim (ordinal, not to be averaged with unrelated scores).

## Common pitfalls
- Reporting "some users said X" instead of doing the coding work to say "35% of users said X," which is the entire value proposition of quantifying qualitative data.
- Using only one method (usually sentiment) when the question actually needs a second lens — NPS-segmented themes or narrative structure — to be decision-ready.
- Treating an ordinal measure (a Likert scale, an NPS category) as if it were ratio-level, averaging or ratio-comparing numbers that only support ranking or counting.
