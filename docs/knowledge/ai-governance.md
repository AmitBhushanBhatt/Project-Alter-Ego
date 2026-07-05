# AI Governance

## Purpose

This repository will be read and edited by multiple AI systems over its lifetime (ChatGPT, Claude Code, and tools that don't exist yet). This document defines the rules so contributions stay consistent regardless of which AI made them.

## Roles

- **Claude Code** — repository maintainer from July 2026 onward (per the ChatGPT handover). Owns structure, documentation quality, refactoring, and consistency across domains.
- **ChatGPT** — originated the project (identity, philosophy, career framing, folder taxonomy) and remains a valid source for high-level strategy brainstorming, but is no longer the repository's implementation authority.
- **Future AI systems** — must follow this document before making changes, the same as any human contributor would follow a CONTRIBUTING guide.

## Rules for any AI working in this repository

1. **Read before writing.** Check existing docs across all domains before adding a new one — don't duplicate a fact that already has a home.
2. **Link, don't restate.** See the rule in [architecture.md](architecture.md). If you're about to write a fact that exists elsewhere, replace it with a link.
3. **Source domains are canonical.** If generating an artifact (resume, website copy, a talk abstract) surfaces a new fact or framing, write it back to the relevant source domain first, then generate the artifact from it — never let the artifact be the only place the fact lives.
4. **Preserve honesty guardrails.** Domains like [ai-experience.md](../career/ai-experience.md) and [positioning.md](../identity/positioning.md) contain explicit rules against overstatement. Generation must not drift past them for the sake of a punchier sentence.
5. **Small, incremental changes.** One domain or concept per commit, matching [documentation-standards.md](documentation-standards.md). No large rewrites that touch many domains at once.
6. **Record real decisions as ADRs.** A new ADR is warranted when a choice is hard to reverse or changes how the whole repository is organized — not for routine content additions.
7. **Challenge, don't just execute.** If a request would make an artifact the source of truth, would duplicate an existing fact, or contradicts an existing ADR, say so before proceeding rather than complying silently.

## How to apply

Treat this document as the repository's CONTRIBUTING.md for AI collaborators. Update it if the roles or rules above change — e.g., if a new AI system takes over maintenance, or Claude Code's mandate changes.
