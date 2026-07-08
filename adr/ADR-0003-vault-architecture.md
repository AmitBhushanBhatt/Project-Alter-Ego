# ADR-0003: Vault — A Private Data Layer Separate from Project Alter Ego

## Status

Accepted

## Context

Project Alter Ego is meant to become a "life OS" — a digital twin that can answer for resume, expertise, and eventually broader personal-agent queries (in the spirit of the [Personal Planning Agent](../../PlanningAgent/) project). That requires ingesting a much larger and more sensitive corpus than professional identity facts: roughly 5TB of personal digital history spanning 1995–present, including banking, insurance, investments, contacts, chats, and email — alongside the resume/career material already in this repo.

Two things collide if that corpus is added to this repository:

1. **Sensitivity mismatch.** `docs/` is deliberately public (see [ADR-0001](ADR-0001-knowledge-repository-first.md)) and the resume/positioning content is meant to be shown. Banking records, insurance policies, private chats, and investment data are never meant to be shown to anyone. One repository cannot serve both purposes safely, regardless of whether the repo's visibility is later set to private — git history is effectively permanent, and "private today" is not the same guarantee as "never meant to leave this machine."
2. **Shape mismatch.** This repo is markdown-first, small, and hand-curated (see [documentation-standards.md](../docs/knowledge/documentation-standards.md)). A 5TB personal archive needs a database, a vector index, and an ingestion pipeline — categorically different infrastructure, not more markdown files.

## Decision

Split into two tiers:

**Tier 1 — Vault.** A private, local-first data layer holding the full personal archive (post-triage, see [vault/ARCHITECTURE.md](../vault/ARCHITECTURE.md) for the ingestion design). Structured personal records (banking, insurance, contacts, investments) live in a SQL store; unstructured material (email, chats, notes, documents) live in a local RAG index (embeddings + vector store). The Vault is **never committed to any git remote, public or private** — its data lives only on hardware the user controls. It exposes a controlled query interface via a local **MCP server**, so any trusted AI client (Claude, a local model via Ollama, or whatever comes next) can query it through a standard protocol without the client ever holding a copy of the raw data.

**Tier 2 — Project Alter Ego (this repo, unchanged in kind).** Stays exactly what it already is: curated, reviewed, markdown-first professional identity. It may query the Vault's MCP interface when generating an artifact (e.g., pulling a confirmed job title), but only public/professional-tagged facts get written into `docs/` — the same distill-then-commit process already used for the LinkedIn export and job-search resume (see `docs/career/roles.md`'s provenance). The Vault's private domains (banking, insurance, chats) are never written into this repo in any form.

**Processing model:** local-first. Bulk classification, extraction, and embedding of the raw archive happens with local tools/models — not by sending 250GB of private material to any cloud AI subscription. Cloud AI (this session included) is reserved for high-value, already-triaged curation passes on small subsets the user explicitly shares — the same pattern already used successfully for the two resume PDFs.

## Consequences

- The Vault is a separate project (`~/development/life-vault` or similar), not a folder inside `alter-ego`. `vault/` in this repo holds only the architecture/design docs — zero data, ever.
- Building the Vault means standing up new local infrastructure (a database, a vector store, an MCP server, local LLM/embedding runtime) — a real engineering project, not an extension of the markdown work done so far.
- Per [ADR-0002](ADR-0002-personal-instance-template-extractable-later.md), the Vault's *architecture and ingestion methodology* are generic/portable and can be documented here; the Vault's *implementation and data* are Amit-specific and must never appear in this or any public repository.
- Financial and legal domains (investment tracking, will drafting) accessed through the Vault still require a licensed advisor/lawyer for actual advice or execution — the Vault can organize and surface information, not substitute for that.
