---
name: engineering-health
description: Diagnose and fix the recurring-bug pattern in a codebase by building a five-part safety net once, then running one disciplined ritual per change — paired with a five-step system-design framework for new architecture.
---

# Engineering Health

Grounded in "The Builder's Safety Net — A Reusable Debugging System" and "The System Design Playbook."

## When to use
Use this when a project "keeps breaking" in ways that feel like many unrelated bugs, but are actually the same handful of missing foundations spawning bug after bug — no version control save point, an AI grading its own homework, mutable eval records, or dashboards reading live data that the next run silently overwrites. It's also the right tool when a new system needs architecting and the team's instinct is to jump straight to a component diagram instead of scoping and deriving requirements from the user first — the most common failure mode in system-design work at any level.

## What it does
This skill builds a five-part debugging safety net once (version control, an append-only eval record, tests that fail loudly, unmasked error handling, immutable per-run snapshots), then runs a strict one-change ritual for every future change: clean state, one edit, test, compare, commit or revert — never patched over silently. For new architecture, it applies the universal five-step system-design framework (clarify and scope, derive requirements from user behavior, name the attributes, build the architecture component by component, surface trade-offs proactively) that holds across wildly different systems.

## Method
1. Diagnose which of the four underlying cracks is actually causing the recurring bugs: no save point (no version control, so a bad change can't be undone), a self-grading AI (the same model that made a change is asked to verify it, and reports success on things it didn't fix), mutable eval records (test results live in the same place the next run overwrites), or live reads (dashboards/reports reading data the next run silently changes).
2. Set up version control as the foundation, if it doesn't already exist properly: a real `.gitignore`, a baseline commit, and a hard rule that changes are never reset or rebased without explicit human approval.
3. Freeze an append-only eval record: every version's output gets written to a new, timestamped file (never overwritten), named with the commit hash that produced it — so "what did version X actually produce" is always answerable.
4. Write tests that lock in known-good behavior and fail loudly — any future change that breaks a previously-correct case should be blocked before it can be called "done," not discovered later by a user.
5. Unmask silent error handling: find every catch/except block that swallows a failure and returns a fake default, and replace it with an explicit error flag plus a visible warnings count — a failure disguised as a valid result is worse than a visible crash.
6. Make every run write an immutable, per-run snapshot, and make every dashboard/report read that snapshot rather than a live, mutable store — this is what makes historical views stay true instead of quietly rewriting the past.
7. Once the net exists, run the one-change ritual for every future change, without exception: confirm clean git state, make exactly one change, show the diff, run tests and the eval, compare against the previous eval output, then commit and tag — or revert cleanly if anything failed. Never batch two changes into one pass.
8. For new architecture (not debugging an existing system), run the five-step system-design framework in strict order: clarify and scope with the user/interviewer before drawing anything; derive requirements by walking the user's actual journey step by step (a component that doesn't trace back to a step in that journey probably shouldn't exist); name the attributes that actually decide the architecture (availability vs. consistency, latency budget, accuracy vs. speed, storage/bandwidth math); build the architecture one component at a time, stating each one's job before connecting it to the next; and surface trade-offs (race conditions, cache staleness, cost at scale) proactively rather than waiting to be asked.

## Inputs
- The current state of version control, if any, on the project in question
- A description of the recurring bug pattern — does it look like the same failure recurring in different forms?
- For new architecture: the user's actual journey/workflow the system needs to support, before any component is proposed
- Access to run the eval/test suite so the one-change ritual can actually be executed, not just described

## Output format
A named root cause among the four cracks; the five-part safety net built out (version control state, eval-record location, test suite status, error-handling audit, snapshot mechanism); and, going forward, a strict log of one-change-ritual runs (diff shown, tests run, eval compared, commit/revert decision). For new architecture: a five-step design writeup (scope, derived requirements, named attributes, component-by-component architecture, proactively surfaced trade-offs).

## Example
A team's AI-assisted pipeline "keeps breaking" after every prompt tweak, and nobody can say what changed between the version that worked and the one that doesn't. Diagnosis finds two cracks at once: no version control (changes overwrite the working state with no way back) and mutable eval records (the "last good output" file gets overwritten by every new run). The fix builds git with a tagged baseline and an append-only `/eval-runs/` folder keyed by commit hash. Going forward, every prompt change follows the one-change ritual — one edit, diff shown, eval compared against the last committed version — catching a regression on the very next change instead of three changes later when it's unclear which edit broke it.

## Common pitfalls
- Trusting an AI's own claim that a fix worked, instead of requiring it to show the actual diff and real test/eval output before treating anything as done — the self-grading-AI crack is often the root cause of "we fixed this already" bugs that keep coming back.
- Jumping straight from a system-design prompt to a component architecture diagram without first walking the user's actual journey — the strongest architectures in every worked case were derived from user behavior, not from brainstorming components first.
- Batching multiple changes into one pass to save time, which defeats the entire purpose of the one-change ritual — when something breaks, there's no way to isolate which of the batched changes caused it.

## Guides referenced
- [The Builder's Safety Net — A Reusable Debugging System](https://yezi-hub.web.app/guide/MTzdEA7LMMwfIavbc0Qh)
- [The System Design Playbook](https://yezi-hub.web.app/guide/0s3fJkZLtEVeplMwcmlr)
