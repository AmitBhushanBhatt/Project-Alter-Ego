# Documentation Standards

## File and folder conventions

- One concept per file. If a doc needs an "and" in its title, it's probably two docs.
- File names are kebab-case: `systems-thinking.md`, not `SystemsThinking.md` or `systems_thinking.md`.
- Every domain folder (`docs/<domain>/`) has a `README.md` index: one line per doc, no restated content.

## Doc structure

Each concept doc follows this shape:

1. `# Title` matching the concept, not the filename.
2. A small number of `##` sections stating facts plainly — short, declarative, no filler.
3. A closing `## How to apply` section: how this doc should influence generated artifacts or future decisions. This is what turns a fact into something actionable.

## Cross-linking

- Link to related docs with relative markdown links (`[label](../domain/file.md)`) rather than repeating their content.
- If two docs would otherwise say the same thing, one of them is wrong — merge or link instead.

## Commits

- Message format: `docs(<domain>): <summary>`, e.g. `docs(career): add eras, leadership, and AI experience docs`.
- One domain per commit where practical. Cross-cutting edits (e.g. fixing a link after adding a new domain) can ride along with the commit that motivated them.
- Author identity for this repository is fixed — see the git config already set locally; do not override it per-commit.

## Changelog

- Every doc-adding or doc-changing commit gets a line under `## Unreleased` in `CHANGELOG.md`.
- Roll `Unreleased` into a version heading (like `0.1.0 - Foundation`) only at a deliberate milestone, not per-commit.

## ADRs

- Use `adr/ADR-NNNN-title.md` only for decisions that are hard to reverse or that change how the repository is organized (e.g. ADR-0001's "knowledge repository first" decision).
- Format: `Status` / `Context` / `Decision` / `Consequences` — matching ADR-0001.
- Routine content additions (a new domain doc, a new fact) do not need an ADR.

## How to apply

Any AI or human adding to this repository should follow this document exactly, since it's what keeps 50+ small docs feeling like one coherent repository instead of a pile of disconnected notes. See [ai-governance.md](ai-governance.md) for the broader collaboration rules this standard sits inside.
