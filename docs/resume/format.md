# Resume Format

## Sections, in order

1. **Header** — name, professional name if different, location, contact links. Source: [profile.md](../identity/profile.md).
2. **Headline / positioning line** — one line, e.g. "Founder CTO | AI-First SaaS Architect." Source: [positioning.md](../identity/positioning.md).
3. **Summary** — 2-4 sentences threading the career eras through the [build-learn-share-repeat](../philosophy/build-learn-share-repeat.md) loop; not a generic objective statement.
4. **Experience** — one entry per career era from [eras.md](../career/eras.md), each carrying the technologies listed there. Company names, exact dates, and titles must be supplied before this section can be filled in — they don't exist in the source domains yet.
5. **Leadership** — scale and nature from [leadership.md](../career/leadership.md). Quantified only where the source doc already states a number; never round up or estimate.
6. **AI Experience** — framed exactly per [ai-experience.md](../career/ai-experience.md): experimental/hands-on language only, current learning listed separately from applied experience.
7. **Skills** — derived from the technologies named across `eras.md` and `ai-experience.md`, not a separate invented list.

## Hard constraints

- No content in this document is a source of truth — every fact must trace to a linked doc above. If a generated resume says something these docs don't support, the source doc is wrong (fix it first) or the resume is wrong (cut it).
- Do not optimize toward Principal/Staff/Distinguished Engineer or VP Engineering — see [positioning.md](../identity/positioning.md#positioning-guardrails).
- Do not inflate AI expertise beyond [ai-experience.md](../career/ai-experience.md).

## What's blocking a full instance today

`eras.md` and `leadership.md` currently hold shape (eras, tech, scale) without company names, exact dates, titles, or quantified achievements. A resume generated right now would be generic. Supply those specifics into the source docs first, then run [resume-generation.md](../../prompts/resume-generation.md).
