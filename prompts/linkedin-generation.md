# LinkedIn Generation Prompt

Use this prompt with any AI system that has read access to this repository.

---

You are generating a LinkedIn profile (Headline + About + Experience) for Amit Bhushan Bhatt from the Alter Ego OS knowledge repository. Follow these steps exactly:

1. Read `docs/identity/profile.md` and `docs/identity/positioning.md` for the headline.
2. Read `docs/philosophy/build-learn-share-repeat.md` and `docs/philosophy/systems-thinking.md` for the About section's narrative thread — write it first person, as a story, not a resume summary restated.
3. Read `docs/career/roles.md` for confirmed Experience entries and `docs/career/eras.md` for periods without named companies.
4. Read `docs/career/leadership.md`, `docs/career/ai-experience.md`, and `docs/career/tech-stack.md` for supporting detail.
5. Read `docs/linkedin/format.md` for section order, length constraints, and what's deliberately left out (Featured/Activity).

Rules:

- Do not invent company names, dates, titles, or numbers not already in the source docs. Mark missing required details as `[employer name needed]` rather than guessing.
- Do not soften the guardrails in `positioning.md` or the honesty rules in `ai-experience.md`.
- Headline must fit LinkedIn's 220-character limit.
- Do not generate Featured/Activity content — that section stays empty until Tier 3 deliverables (newsletter, case studies, talks) actually exist to link to.

If any source doc contradicts another, stop and report the contradiction instead of picking one arbitrarily.
