# ADR-0002: Personal Instance First, Template-Extractable Later

## Status

Accepted

## Context

Project Alter Ego started as a personal knowledge repository for Amit Bhushan Bhatt (see [ADR-0001](ADR-0001-knowledge-repository-first.md)). The original vision was to build his "alter ego" — a digital twin that every professional artifact could be generated from.

That vision has since grown one clause: build it as a digital twin *first*, but structure it so the underlying methodology — not Amit's personal facts — could later be forked by someone else building their own alter ego. This isn't a commitment to actually build a public template product. It's a constraint on how this repository is structured now, so that option isn't foreclosed by accident.

The risk: without a deliberate boundary, the "engine" (repository architecture, documentation standards, AI-collaboration rules, generation prompts) and the "content" (Amit's identity, career, philosophy) tend to blur together. A generation prompt that hardcodes a name, or a standards doc that assumes one specific person's guardrails, works fine for a single-user repository — but makes later extraction a rewrite instead of a copy.

## Decision

Keep the engine and the content separated, starting now, not when extraction becomes concrete:

- **Engine (generic, portable)**: `docs/knowledge/` (repository architecture, AI governance, documentation standards), `prompts/` (generation prompts), the domain taxonomy itself (source domains vs. artifact domains), and doc-writing conventions.
- **Content (personal, Amit-specific)**: `docs/identity/`, `docs/philosophy/`, `docs/career/`, and everything in artifact-domain folders once populated (`docs/resume/`, `docs/website/`, etc.) — plus any generated output (`resume/`, `website/`).

Concretely:
- Generation prompts reference "the subject named in `docs/identity/profile.md`," not a hardcoded name.
- Anything added to `docs/knowledge/` must make sense for a repository about someone else — if it only makes sense for Amit specifically, it belongs in a content domain instead.
- `BACKLOG.md` items should be legible as generic-methodology work or personal-content work, so the fork boundary stays visible rather than something to reverse-engineer later.

## Consequences

- Slightly more discipline required now (e.g., no hardcoded names in prompts) in exchange for not needing a structural rewrite if/when extraction is ever pursued.
- This does not commit to ever actually publishing a template, tool, or product — it only keeps that door open at low ongoing cost.
- Future AI collaborators (per [ai-governance.md](../docs/knowledge/ai-governance.md)) should treat "would this make sense for someone else's alter ego repo?" as a live test when adding to `docs/knowledge/` or `prompts/`.
