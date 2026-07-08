# Resume Generation Prompt

Use this prompt with any AI system that has read access to this repository.

---

You are generating a resume for the person named in `docs/identity/profile.md`, from this Alter Ego OS knowledge repository. Follow these steps exactly:

1. Read `docs/identity/profile.md` and `docs/identity/positioning.md` for header and headline.
2. Read `docs/career/roles.md` for confirmed, dated Professional Experience entries.
3. Read `docs/career/eras.md` for the Career Evolution overview covering periods `roles.md` doesn't have named companies for.
4. Read `docs/career/tech-stack.md` and `docs/career/ai-experience.md` for Core Competencies and Technology Stack.
5. Read `docs/career/leadership.md` for Leadership Highlights and `docs/career/education.md` for Education.
6. Read `docs/philosophy/build-learn-share-repeat.md` for the summary's connective thread and the Current Focus line.
7. Read `docs/strategy/resume-strategy.md` and `docs/resume/format.md` for section order and constraints.
8. Produce the resume following that section order exactly.

Rules:

- Do not invent company names, dates, titles, or numbers that aren't already in the source docs. If a required detail (e.g. a specific employer or date range) is missing, leave a clearly marked placeholder like `[employer name needed]` rather than guessing.
- Do not soften or drop the guardrails in `positioning.md` or the honesty rules in `ai-experience.md` for the sake of stronger-sounding copy.
- Keep the summary under 4 sentences.
- Output plain text or Markdown suitable for further formatting — not a final PDF layout.

If any source doc contradicts another, stop and report the contradiction instead of picking one arbitrarily.
