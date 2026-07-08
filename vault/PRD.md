# Vault — Product Requirements Document

Design-only document, per [ADR-0003](../adr/ADR-0003-vault-architecture.md) — nothing here is or will be actual personal data. This is the north star for what the Vault should eventually become; [ARCHITECTURE.md](ARCHITECTURE.md) is the "how" (pipeline, tech stack), this is the "what and why." Not a sprint plan — `BACKLOG.md`'s Vault section tracks the actual next concrete step, which stays much narrower than the full scope below.

## Vision

A single, private, local-first source of truth for personal and professional life — continuously collecting, organizing, and reasoning over the information that represents a person, past and present. The goal is a trusted AI system that can answer questions about any part of life, assist with decisions, automate repetitive cognitive work, and preserve accumulated knowledge — always under direct supervision, never as an unsupervised agent acting alone.

This is distinct from [Project Alter Ego](../README.md) itself, which stays a narrow, curated, **public** professional-identity layer. The Vault is where the comprehensive, **private** version lives — see the split in ADR-0003.

## Core principles

AI-first · human-in-the-loop · privacy-first · local-first whenever practical · cloud-enabled only when it's a clear net benefit · vendor-neutral · extensible · explainable · auditable · secure by design · future-proof · API-first (MCP, per ADR-0003).

## What the Vault's data should be able to support answering

Not the Vault answering directly as a chatbot — this is what its data layer needs to make *possible* for whatever agent queries it (see "Where agents live" below): who am I, what have I done, what commitments have I made, what assets do I own, what risks exist, what decisions have I made before, what's active right now, what have I learned over the years, what would I normally do in a situation like this.

## Scope: Identity, Knowledge, Memory

**Identity** (private — distinct from Project Alter Ego's public positioning): family, relationships, values, goals, preferences, personality, decision style, communication style, working habits, health/travel preferences, financial philosophy, risk tolerance.

**Knowledge**: everything learned — books, courses, certificates, technical expertise, architecture decisions, business strategy, lessons learned, mistakes, mental models. Overlaps with `docs/career/` and `docs/philosophy/` at the curated-for-public layer; the Vault holds the fuller, unfiltered version.

**Memory**: life timeline, career timeline, projects, meetings, emails, chats, documents, code, ideas, notes, receipts, contracts, presentations, research, purchase history, travel history, financial history, legal documents. Photos/video are explicitly deprioritized per `ARCHITECTURE.md`'s scope decision (~4TB of the ~5TB archive, no processing planned) unless that's revisited later.

## Data sources

Organized by category — extends the source taxonomy in [ARCHITECTURE.md](ARCHITECTURE.md):

- **Documents** — PDF, Word, Excel, PowerPoint, Markdown, scanned/handwritten notes, contracts, certificates
- **Media** — photos, video, voice recordings, meeting/call recordings (deprioritized, see above)
- **Communication** — email, SMS, WhatsApp, Signal, Telegram, Slack, Teams, meeting transcripts
- **Productivity** — calendar, tasks, notes, journals, bookmarks, browser history (optional, high sensitivity), RSS
- **Development** — GitHub/GitLab/Bitbucket, local git repos, architecture diagrams, issue trackers, CI/CD history
- **Professional** — Jira, Confluence, Notion, Microsoft 365, Google Workspace, CRM/ERP, HR/learning portals, cloud consoles
- **Finance** — bank/credit card/loan statements, investments, brokerage, crypto wallets, insurance, tax documents, net worth history, budgets
- **Legal** — passport, visa, property documents, employment contracts, wills, power of attorney, licenses
- **Health** — medical reports, prescriptions, lab reports, wearables, fitness/nutrition/sleep history
- **Social** — LinkedIn, Facebook, Instagram, X, Reddit, YouTube, blogs, communities

Anything in this list involving surveillance-adjacent data (browsing history, security camera footage) is explicitly optional and lower priority — worth deliberate reconsideration before ever ingesting, not a default.

## Knowledge representation (future evolution beyond the MVP)

`ARCHITECTURE.md`'s MVP is SQLite (structured) + Chroma/LanceDB (vector/RAG) + a provenance catalog. The fuller vision adds: knowledge graph, timeline, relationship graph, memory graph, task graph, entity graph, event graph, version history. Treat this as where the architecture grows *after* the pilot proves out the basics — not a reason to over-build the first version.

## AI capabilities the data layer must support

Understand, summarize, reason, plan, compare, predict, recommend, generate, explain, translate, research, critique, prioritize, detect inconsistencies, identify missing information, suggest improvements, multi-step reasoning. These are capabilities an agent needs *from* the Vault's data (structured access, good retrieval, provenance) — the Vault itself is a data layer, not the agent performing these.

## Where agents live — explicitly not here

The full multi-agent vision (Executive Assistant, Chief of Staff, Financial Advisor, Legal Assistant, Research Assistant, Travel Planner, Project Manager, Meeting Assistant, Health Coach, and similar specialized agents), the automation behaviors (daily briefings, overdue-task detection, expiring-document tracking), the example scenarios (resume generation, day planning, financial queries, life review), and the output formats (reports, dashboards, presentations, generated documents) all belong to **Personal Planning Agent** (`~/development/PlanningAgent`), not to the Vault or to Project Alter Ego. That project currently has a narrower scope (calendar + tasks, read-only). This PRD's agent-layer ambition is what it could grow into — a decision for that project's own roadmap, not something to build inside this repo.

## Security and trust requirements

Role-based access · end-to-end encryption · version history · audit logs · secrets management · local AI support · selective, deliberate cloud usage · granular permissions · consent management · backup and disaster recovery.

## Guardrails — non-negotiable

- **Legal**: the Vault can organize and draft (e.g., a will's content, a document inventory), but cannot substitute for a lawyer's execution — wills and similar documents have jurisdiction-specific validity requirements no generated document satisfies alone.
- **Financial**: the Vault can organize, track, and surface financial data, but does not give personalized investment advice — that requires a licensed advisor.
- **Never public**: nothing described in this document is ever committed to this or any public repository. This PRD is a specification; the data it describes lives only in the private Vault system (ADR-0003).

## Success criteria

Becomes the authoritative private source of truth. Continuously learns rather than going stale. Reduces cognitive load and preserves decades of accumulated knowledge. Helps make better decisions. Remains trustworthy, explainable, and secure throughout. Augments judgment — never operates as an unsupervised replacement for it.

## How to apply

Treat this as the long-horizon target, not the current task list. `BACKLOG.md`'s Vault section and `ARCHITECTURE.md`'s "open questions" define what's actually next (physical deployment decision, first pilot category) — check those before assuming any specific piece of this document is imminent.
