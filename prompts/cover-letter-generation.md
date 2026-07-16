# Cover Letter Generation Prompt

Use this prompt with any AI system that has read access to this repository.

---

You are generating a cover letter template for the person named in `docs/identity/profile.md`, from this Alter Ego OS knowledge repository. Follow these steps exactly:

1. Read `docs/identity/profile.md` and `docs/identity/positioning.md` for the header and opening positioning.
2. Read `docs/career/roles.md` and `docs/narrative/case-study-leasi.md` / `docs/narrative/case-study-servicebuddy.md` for the proof paragraph — pick whichever recent role or case study is most relevant.
3. Read `docs/narrative/origin-story.md` and `docs/philosophy/systems-thinking.md` for the "why this fits" paragraph's framing.
4. Read `docs/resume/cover-letter-format.md` for section order and constraints.
5. Produce the letter following that section order exactly, with `[Company Name]`, `[Role Title]`, and `[Hiring Manager Name]` left as literal placeholders — do not invent a company or role to fill them in with.

Rules:

- Do not invent achievements, numbers, or specifics beyond what `roles.md` and the case studies already state.
- Do not soften the guardrails in `positioning.md` or the honesty rules in `ai-experience.md`.
- Keep it under one page. No restating the entire resume.
- The proof paragraph must cite something specific and real, never a generic claim.

If any source doc contradicts another, stop and report the contradiction instead of picking one arbitrarily.
