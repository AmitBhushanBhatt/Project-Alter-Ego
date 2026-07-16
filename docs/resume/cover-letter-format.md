# Cover Letter Format

Sibling artifact to the resume, sourced from the same domains — see [format.md](format.md) for the resume's own structure. Nothing here restates facts; everything traces back to [profile.md](../identity/profile.md), [positioning.md](../identity/positioning.md), [roles.md](../career/roles.md), and [origin-story.md](../narrative/origin-story.md).

## The one way this differs from the resume

The resume is a master document — one comprehensive version that gets condensed per use. A cover letter is **not** a master document: it's inherently per-application, addressed to a specific company and role. The generated version in `resume/cover-letter-2026.md` is a **template** with `[Company Name]`, `[Role Title]`, and `[Hiring Manager Name]` placeholders — filling those in, and tailoring the second paragraph to the specific opportunity, is expected every time it's actually used. Don't treat the template itself as ready to send.

## Sections, in order

1. **Header** — name and contact links, matching the resume's header exactly. Source: [profile.md](../identity/profile.md).
2. **Salutation** — `Dear [Hiring Manager Name],` or `Dear Hiring Team,` if no name is known.
3. **Opening** — one paragraph: who this is, the positioning line, and a bridge to why this specific opportunity fits. Source: [positioning.md](../identity/positioning.md), [build-learn-share-repeat.md](../philosophy/build-learn-share-repeat.md).
4. **Proof paragraph** — 1-2 concrete, recent examples that demonstrate the fit, pulled from [roles.md](../career/roles.md) or a [case study](../narrative/). Specific and verifiable, not a restated skills list.
5. **Why this fits paragraph** — connects the systems-builder identity and career arc to what the role likely needs. Source: [origin-story.md](../narrative/origin-story.md), [systems-thinking.md](../philosophy/systems-thinking.md).
6. **Close** — a direct, brief call to action. No restating the whole letter.
7. **Sign-off** — name.

## Hard constraints

- Same as the resume: no fact here is a source of truth, no exaggeration beyond [ai-experience.md](../career/ai-experience.md), no optimizing toward the roles excluded in [positioning.md](../identity/positioning.md#positioning-guardrails).
- Keep it under one page — a cover letter that restates the whole resume has failed at being a cover letter.
- The proof paragraph must cite something specific and real (a named project, a named migration, a quantified outcome already in `roles.md`) — never a generic claim like "proven track record."

## How to apply

When tailoring for a real application: fill in the placeholders, adjust the proof paragraph to whichever role/case study is most relevant to that specific opportunity, and cut anything that doesn't serve that one application. Re-run [prompts/cover-letter-generation.md](../../prompts/cover-letter-generation.md) rather than hand-editing the template directly if the underlying facts change.
