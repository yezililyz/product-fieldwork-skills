---
name: marketing-org-and-stack
description: Set up CRM/marketing tooling around one non-negotiable habit — store structured data in properties, not notes — since that single choice determines whether segmentation, automation, and reporting ever work.
---

# Marketing Org & Stack

Grounded in "HubSpot CRM Basics Playbook • From Zero to Confident."

## When to use
Use this when a team's CRM is being used as a glorified notebook — free-text notes on contact records instead of structured fields — which quietly blocks every downstream capability (segmentation, automation, reporting, personalization) that the CRM exists to provide. It's also the right tool when onboarding a team onto a CRM from scratch and the instinct is to explore every advanced feature before the four core objects and their associations are actually understood.

## What it does
This skill structures a CRM setup around the four core objects (Contacts, Companies, Deals, Tickets) and their associations — the connected-record model that makes a CRM more than a spreadsheet — with one governing rule: anything that needs to power segmentation, automation, or reporting later must live in a Property, never in a free-text Note.

## Method
1. Learn the four core objects before touching anything else: Contacts (a person — lead, prospect, customer), Companies (an organization a contact belongs to), Deals (a sales opportunity tracked through pipeline stages), and Tickets (a support request).
2. Associate contacts with companies from the start, especially in B2B — an unassociated contact loses the relationship context that makes the CRM valuable to anyone viewing that record later.
3. Store every piece of structured information in a Property, never in a Note — this is the single habit that determines whether segmentation, automation workflows, and reporting will ever work; notes are invisible to all three.
4. Create custom properties deliberately, choosing the field type (single-line text, checkboxes, number) that matches how the data will actually be used downstream, not just how it's most convenient to enter.
5. Import contacts with one property per column and one contact per row, mapping columns correctly during import — a sloppy import creates property-data debt that compounds every time it's used for segmentation later.
6. Use one-on-one emails (tracked, tied to a specific contact record) for individual follow-ups, proposals, and meeting invites — these automatically log activity to the contact's timeline.
7. Reserve marketing emails (sent to many contacts at once) for newsletters, promotions, and announcements — built from templates, not appropriate for a genuinely one-to-one conversation.
8. Treat the contact/company/deal/ticket profile page's Associations panel as the source of truth for relationship context — anyone viewing a record should be able to see everything connected to it without hunting across other systems.

## Inputs
- The current state of contact/company data — is structured information already living in properties, or scattered across free-text notes?
- The specific segmentation, automation, or reporting need driving the CRM setup
- Any existing CSV data to import, checked for one-property-per-column structure before mapping
- Which team members need one-on-one email tracking vs. bulk marketing email access

## Output format
A defined property schema for each core object (Contacts, Companies, Deals, Tickets) with field types matched to intended use; an association model showing how contacts, companies, and deals should connect; an import plan with one property per column; and an explicit rule for the team distinguishing what goes in a property vs. what (if anything) still goes in a note.

## Example
A sales team has been tracking deal context in free-text notes on each contact record ("mentioned they need this by Q3, budget is tight"). None of it is usable for segmentation or reporting. The fix creates custom properties for expected close quarter and budget tier, migrates the relevant note content into those fields during a data cleanup pass, and establishes going forward that any information needed for a future report or automation must be entered as a property at the time it's learned, not left in a note to be manually re-read later.

## Common pitfalls
- Storing structured, reusable information (budget, timeline, preference) in free-text notes instead of properties, silently blocking every segmentation, automation, and reporting capability that depends on it.
- Importing contacts without one property per column, creating messy or mismapped data that has to be manually cleaned up before it's usable.
- Exploring advanced CRM features before the four core objects and their associations are solidly understood, building complexity on top of a foundation that isn't there yet.
