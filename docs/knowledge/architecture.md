# Repository Architecture

## Top-level layout

- `README.md`, `PROJECT.md`, `CHANGELOG.md`, `LICENSE` — orientation and provenance.
- `adr/` — Architecture Decision Records for anything hard to reverse or that sets precedent.
- `docs/` — the knowledge itself, split into source domains and artifact domains (below).
- `assets/` — images, diagrams, logos referenced by docs or generated artifacts.
- `context/` — raw source material not yet distilled into a domain doc (old resumes, notes, transcripts).
- `prompts/` — reusable prompts for generating artifacts from this repository.
- `scripts/` / `tools/` — automation that reads this repo to produce artifacts.
- `resume/` — the generated resume output (regenerated from `docs/resume/` + source domains, never hand-edited directly).
- `website/` — the Astro website project (ADR-0004). Real application code, not markdown — reads content from `docs/` at build time rather than duplicating it. See `CLAUDE.md`'s "The `website/` codebase" section before working here.
- `vault/` — **design/architecture docs only, never data.** The Vault itself (banking, insurance, chats, email, and other private material) is a separate, private, local-first project that never enters this or any repository — see [ADR-0003](../../adr/ADR-0003-vault-architecture.md).

## Two kinds of `docs/` folders

**Source domains** — canonical, hand-maintained, reused across multiple artifacts rather than belonging to just one:

- `docs/identity/` — who Amit is (stable facts + positioning)
- `docs/philosophy/` — why Amit builds the way he does
- `docs/career/` — what happened (eras, leadership, AI experience) — raw fact, nothing derived
- `docs/narrative/` — how the story of `docs/career/` gets told — deliberately interpretive/synthesized, unlike the other source domains. Still canonical in the sense that the website, talks, and media requests should all draw from the same narrative rather than each writing their own; if a narrative claim needs to change, it changes here once.
- `docs/knowledge/` — how this repository itself works (this folder)

**Artifact domains** — describe how to *generate* an output from the source domains, or hold generation-specific strategy. They should contain strategy/framing, not restated facts:

- `docs/strategy/` — resume/website/content strategy (framing rules for generation)
- `docs/resume/`, `docs/linkedin/`, `docs/website/`, `docs/talks/`, `docs/content/`, `docs/consulting/` — per-artifact working notes

## The one rule that matters

If a fact could be looked up in a source domain, an artifact domain must **link to it**, never restate it. Restating creates two places that can drift out of sync; linking creates one source of truth with many consumers. See [ADR-0001](../../adr/ADR-0001-knowledge-repository-first.md).

## How to apply

Before adding a new doc, ask: is this a fact about Amit (→ source domain) or a rule about producing an artifact (→ artifact domain)? If it's unclear, it probably belongs in a source domain and the artifact-domain doc should just link to it.
