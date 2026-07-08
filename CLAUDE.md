# Project Alter Ego — Claude Code Guide

## What this repository is

The canonical knowledge repository for the person named in [docs/identity/profile.md](docs/identity/profile.md) — the source every generated artifact (resume, LinkedIn, website, talks) is produced *from*, not a resume or website itself. See [README.md](README.md), [PROJECT.md](PROJECT.md), and [docs/knowledge/architecture.md](docs/knowledge/architecture.md) for the full model. Longer-term ambition: a personal "life OS" — see [ADR-0003](adr/ADR-0003-vault-architecture.md) for how the private data layer (Vault) relates to this repo without ever entering it.

## Repository model — read this before adding anything

- `docs/` splits into **source domains** (identity, philosophy, career, knowledge — canonical facts) and **artifact domains** (strategy, resume, linkedin, website, talks, content, consulting — generation rules, never restated facts).
- **The one rule that matters:** if a fact could be looked up in a source domain, link to it, never restate it. Two copies of a fact drift; one copy with many links doesn't.
- `adr/` — Architecture Decision Records for anything hard to reverse or precedent-setting. Not for routine content additions.
- `BACKLOG.md` — the tiered roadmap, what's next. `CHANGELOG.md` — what's already shipped, one line per commit.
- `vault/` — **design docs only, never data.** The actual private data layer is a separate, private, local-first project (ADR-0003) that never enters this or any repository.

Full detail: [docs/knowledge/architecture.md](docs/knowledge/architecture.md).

## Git identity — non-negotiable, read before any commit

- Commits in this repo **must** use `Amit Bhatt <amitbhushanbhatt@hotmail.com>` — this matches the machine's global git config; never set a repo-local override.
- Push/pull **over SSH only**: `git@github.com:AmitBhushanBhatt/Project-Alter-Ego.git`. If a push ever fails with 403, the remote has likely reverted to an `https://` URL — fix the remote (`git remote set-url origin git@github.com:AmitBhushanBhatt/Project-Alter-Ego.git`), don't touch `gh auth`.
- A local `pre-push` hook already enforces the identity check, but hooks don't travel with clones — don't assume it exists on another machine.

## Documentation conventions

- One concept per file. Kebab-case filenames.
- Every domain folder has a `README.md` index — one line per doc, no restated content.
- Doc shape: `# Title` → a few `##` sections stating facts plainly → a closing `## How to apply` section.
- Cross-link with relative markdown links instead of duplicating content.
- Commit message format: `docs(<domain>): <summary>`.
- Every doc-changing commit gets one line under `CHANGELOG.md`'s `## Unreleased`.

Full detail: [docs/knowledge/documentation-standards.md](docs/knowledge/documentation-standards.md).

## Engine vs. content (ADR-0002)

- **Engine** (generic, portable — should make sense for anyone's alter-ego repo): `docs/knowledge/`, `prompts/`, the domain taxonomy itself.
- **Content** (personal, specific to this instance): `docs/identity/`, `docs/philosophy/`, `docs/career/`, and generated output (`resume/`, `website/`).
- Generation prompts reference "the person named in `docs/identity/profile.md`," never a hardcoded name — keep it that way when adding new prompts.

Full detail: [ADR-0002](adr/ADR-0002-personal-instance-template-extractable-later.md).

## Privacy — hard rule, not a preference

This repository is **public** on GitHub. Never commit: passport numbers, date of birth, nationality/visa/residence status, full home addresses, banking/financial records, or anything belonging to the Vault (ADR-0003). When ingesting any new source document (a PDF export, an old resume, anything), actively screen for this before writing to `docs/` — don't wait to be asked.

## Working autonomously (loops, background sessions)

**Safe to do without asking:**
- Add or update docs within an existing domain, following the fact → why → how-to-apply pattern already established.
- Fix broken cross-links, stale `README.md` indexes, or missing `CHANGELOG.md` entries.
- Commit and push using the conventions above.
- Check off completed `BACKLOG.md` items and add newly-discovered ones.

**Stop and ask first:**
- Anything that changes `positioning.md`, philosophy content, or the Decision Framework's core values — these are identity decisions, not documentation cleanup.
- Writing a new ADR.
- Anything Vault-adjacent beyond what's already scoped in `vault/ARCHITECTURE.md`.
- Restructuring the domain taxonomy itself (adding/renaming a `docs/` domain).
- Any conflict between two sources of fact (e.g., two documents disagreeing on a date or title) — flag it, don't silently pick one.

## Common tasks

- **Generate the resume:** follow [prompts/resume-generation.md](prompts/resume-generation.md) against current source docs, write `resume/resume-<year>.md`, then regenerate the styled `.html`/`.pdf` from it (headless Chrome `--print-to-pdf`; see git log for the exact invocation), commit all three together.
- **Ingest a new source document** (LinkedIn export, old resume, etc.): read it, extract facts, cross-check against existing docs for conflicts, ask the user only on genuine conflicts (not on routine additions), write confirmed facts to the right source domain, update `CHANGELOG.md`, commit.
- **Before the first commit or push of a session:** verify `git config user.name`/`user.email` resolve correctly and the remote is the SSH URL above.

## The `website/` codebase (Astro, per ADR-0004)

Unlike the rest of this repo, `website/` is real application code, not markdown:

- **Requires Node ≥22.** The machine's default is Node 20 (nvm) — run `nvm use 22` (or `nvm install 22` if not yet installed) before any `npm`/`astro` command in this folder.
- Content is read from `docs/` at build time (`src/content.config.ts`, a glob loader pointed at `../docs`) — never hand-copy doc content into `website/`. New narrative/career docs are automatically available to the site once they exist.
- `src/lib/docs.ts` strips maintainer-only sections (`## How to apply`, `## Status`, etc.) and rewrites relative `docs/*.md` links to their GitHub source before rendering publicly — any new page pulling doc content should use `renderPublicMarkdown()`, not render raw doc bodies directly.
- Design tokens (palette, type) live in `src/layouts/Layout.astro` and intentionally reuse the resume's ink-and-slate-blue palette for brand consistency across artifacts.
- Before considering a page done: `npm run build` and `npx astro check` must both pass clean, and check the result visually (light, dark, mobile) using the preview tools — see [docs/website/sitemap.md](docs/website/sitemap.md) for which pages are MVP vs. planned.
- Deploying to Vercel is a ✋ item (see `BACKLOG.md`) — requires account access, don't attempt it unattended.

## Reference

- [PROJECT.md](PROJECT.md) — mission, motto, positioning at a glance
- [BACKLOG.md](BACKLOG.md) — tiered roadmap
- [adr/](adr/) — every architecture decision made so far
- [docs/knowledge/ai-governance.md](docs/knowledge/ai-governance.md) — rules for any AI system collaborating on this repo
