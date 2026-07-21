---
name: evaluating-startup-ideas
description: Source and validate startup ideas from where real pain already surfaces — Reddit, Upwork, G2, chat history, copy-paste friction — rather than brainstorming in a vacuum.
---

# Evaluating Startup Ideas

Grounded in "17 Ways to Generate Startup Ideas in the AI Age."

## When to use
Use this when idea generation is happening entirely in a brainstorm — a whiteboard session, a list of "what if we built X" — with no connection to a real, already-observable pain someone is paying to solve manually. It's also the right tool once a shortlist of ideas exists and needs pressure-testing against real signal (existing paid workarounds, repeated complaints, low-satisfaction incumbents) rather than gut feel about which sounds most exciting. The signal to use it now: an idea is being pursued because it's technically interesting, not because anyone has verified people are already begging for it.

## What it does
This skill applies a set of concrete, repeatable sourcing tactics — mining your own AI chat history for repeated prompts, searching Reddit for "is there a tool for," auditing Upwork for gigs paid repeatedly for the same manual work, reading G2 reviews for what people hate about legacy tools — all converging on one core principle: look for tedious, painful, repetitive workflows people are already paying for or complaining about, then productize them with AI.

## Method
1. Mine your own repeated AI usage first: if you're typing the same prompt weekly in ChatGPT/Claude/Cursor, that recurring friction is itself a signal of a specific, narrow product opportunity — a tool that does that one thing well, not a general-purpose wrapper.
2. Search for people already asking for the solution: `site:reddit.com "is there a tool" [your niche]` surfaces people explicitly requesting something that doesn't yet exist — read the comments specifically, since they often reveal what people would actually pay and which features matter most.
3. Audit your own or others' copy-paste friction between tools (emails into a CRM, a design tool into Slack) — the more manual and frequent the copy-paste, the larger the latent opportunity, since it's direct evidence of an integration gap nobody's closed.
4. Browse Upwork for gigs multiple different clients pay for repeatedly — recurring, annoying, manual gigs are the clearest signal of work ready to be turned into an AI-powered product at a fraction of the cost.
5. Read G2 reviews of legacy, highly-used tools specifically for "what's missing" and "what I dislike" — a highly-used tool with real dissatisfaction is a target for an AI-native rebuild, not a reason to avoid the category as "already solved."
6. Talk directly to business owners, paying for their time (roughly $50-100 for 30 minutes) and asking specifically about daily spreadsheet updates, repetitive tasks, and their biggest frustrations — they may become the first customer as a direct result of the conversation.
7. Read comments on YouTube tutorials for popular software, and on tutorials that stitch together 8+ tools for one workflow — both reveal, in the user's own words, the friction points and desired features that an integrated or simplified product could capture.
8. Once a candidate idea clears this sourcing bar, validate demand directly with 10-20 potential users before building anything, then build the simplest possible MVP and get the first 10-100 real customers before assuming the idea is right.

## Inputs
- Access to the sourcing channels themselves (Reddit search, Upwork, G2, YouTube comments) or willingness to spend time there directly
- Any existing repeated personal friction (chat history, copy-paste patterns) to mine first, since it's the fastest and cheapest source
- A target niche or job title, if narrowing rather than open-ended browsing
- Budget/time for direct conversations with business owners as a validation step

## Output format
A shortlist of candidate ideas, each tagged with its sourcing method (chat-history mining, Reddit search, Upwork audit, G2 review mining, direct conversation) and the specific evidence found (a quoted complaint, a repeated gig listing, a review excerpt); a prioritization based on how repeated/painful/already-paid-for the underlying workflow is; and a validation plan (10-20 target-user conversations) before any build commitment.

## Example
Scanning G2 reviews for a legacy expense-reporting tool surfaces a recurring complaint: "receipts still have to be manually re-entered even after I photograph them." Cross-checking Upwork confirms multiple clients paying repeatedly for manual receipt-entry gigs — the same friction, independently validated in two different sourcing channels. The resulting idea (AI-powered receipt-to-expense-report automation) is validated with 15 direct conversations with small-business owners before any code is written, rather than being pursued purely because AI-powered OCR sounded technically interesting.

## Common pitfalls
- Generating ideas purely from brainstorming or "what's technically possible with AI now" instead of starting from an already-observable, already-paid-for pain.
- Treating a category as "too saturated" after seeing established incumbents, instead of reading their G2 reviews for the specific dissatisfaction that signals room for an AI-native, narrower competitor.
- Skipping direct validation (talking to 10-20 real potential users) because the sourcing signal already felt convincing — sourcing signal narrows the search, it doesn't replace confirming real willingness to pay.
