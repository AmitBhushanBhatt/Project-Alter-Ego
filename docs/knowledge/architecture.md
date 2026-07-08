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
- `website/` — the generated website output (or its build source, once it exists).
- `vault/` — **design/architecture docs only, never data.** The Vault itself (banking, insurance, chats, email, and other private material) is a separate, private, local-first project that never enters this or any repository — see [ADR-0003](../../adr/ADR-0003-vault-architecture.md).

## Two kinds of `docs/` folders

**Source domains** — canonical, factual, hand-maintained. Nothing here is derived from anything else in the repo:

- `docs/identity/` — who Amit is (stable facts + positioning)
- `docs/philosophy/` — why Amit builds the way he does
- `docs/career/` — what happened (eras, leadership, AI experience)
- `docs/knowledge/` — how this repository itself works (this folder)

**Artifact domains** — describe how to *generate* an output from the source domains, or hold generation-specific strategy. They should contain strategy/framing, not restated facts:

- `docs/strategy/` — resume/website/content strategy (framing rules for generation)
- `docs/resume/`, `docs/linkedin/`, `docs/website/`, `docs/talks/`, `docs/content/`, `docs/consulting/` — per-artifact working notes

## The one rule that matters

If a fact could be looked up in a source domain, an artifact domain must **link to it**, never restate it. Restating creates two places that can drift out of sync; linking creates one source of truth with many consumers. See [ADR-0001](../../adr/ADR-0001-knowledge-repository-first.md).

## How to apply

Before adding a new doc, ask: is this a fact about Amit (→ source domain) or a rule about producing an artifact (→ artifact domain)? If it's unclear, it probably belongs in a source domain and the artifact-domain doc should just link to it.
