# Backlog

Tiered roadmap for what's left, derived from the ChatGPT handover's Long-Term Deliverables. `CHANGELOG.md` records what's already shipped; this file tracks what's still ahead and in what order.

**Loop readiness legend:** 🤖 = concrete enough for autonomous pickup (per `CLAUDE.md`'s "working autonomously" rules). ✋ = needs a human decision first (tech choice, new ADR, or a genuine conflict) — a loop should stop and ask here, not guess.

## Tier 1 — Website

Unblocks reuse of everything else; the repo is v1.0, the website is the next generated artifact (see [ADR-0001](adr/ADR-0001-knowledge-repository-first.md)).

- [x] ADR for website tech stack / hosting — [ADR-0004](adr/ADR-0004-website-tech-stack.md): Astro + Vercel
- [ ] 🤖 `docs/website/sitemap.md` — translate [website-strategy.md](docs/strategy/website-strategy.md)'s five themes into actual pages
- [ ] 🤖 Scaffold the `website/` implementation (Astro project per ADR-0004) — sequenced after the narrative content below, so the site launches with more than stub sections

## Narrative content (Phase 3) — shipped, first pass

New source domain, `docs/narrative/` — how the story gets told, distinct from `docs/career/` (what happened) and `docs/philosophy/` (why). Feeds the website's About/Ideas sections, plus future talks/media requests. First pass complete; will grow as more source material (Vault, further conversation) becomes available — see each doc's "How to apply" section for how to extend it.

- [x] Origin story
- [x] Founder story
- [x] Why AI / Why SaaS / Why Startups / Why Architecture (short essays)
- [x] Bios — short / medium / long, plus speaker and media variants
- [x] 2 case studies (Leasi's AppFarm.io→MERN migration, ServiceBuddy)

## Tier 2 — Resume & LinkedIn generation (resume shipped, LinkedIn pending)

Repeatable generation processes, not one-off hand-written docs, so they can't drift from the source domains.

- [x] Resume generation process (`docs/resume/format.md` + `prompts/resume-generation.md`) — first draft generated: `resume/resume-2026.md` + styled `resume/resume-2026.html` / `resume/resume-2026.pdf`
- [ ] 🤖 LinkedIn generation process (`docs/linkedin/format.md` + `prompts/linkedin-generation.md`) — process exists, not yet run; same pattern as the resume, straightforward to execute
- [ ] 🤖 Condensed 2-page resume variant (per `docs/resume/format.md`'s condensed-resume guidance) for casual sharing, alongside the full 6-page version

## Related, parallel initiative — The Vault (private data layer)

Not part of the tiered artifact roadmap above — a separate private system, not a generated artifact, and **not something a loop running in this repo builds**. See [ADR-0003](adr/ADR-0003-vault-architecture.md) and [vault/ARCHITECTURE.md](vault/ARCHITECTURE.md).

- [x] Architecture designed and recorded (source taxonomy, pipeline stages, tech stack)
- [ ] ✋ Physical deployment decision (this Mac vs. NAS/dedicated server)
- [ ] ✋ Pilot source category and the actual Vault project location — both still open
- [ ] MCP server implementation — happens in the separate Vault project once it exists, not in `alter-ego`
- [ ] Project Alter Ego ↔ Vault query integration — once both sides exist

## Tier 3 — Content / thought leadership

Ongoing rather than one-time; governed by [content-strategy.md](docs/strategy/content-strategy.md)'s "prove it was built" filter. **Not loop-ready yet** — each item below is a placeholder, not a concrete task; needs decomposition (e.g. "Newsletter" → platform choice, cadence, first-issue topic) before autonomous work can pick it up.

- [ ] Newsletter
- [ ] Builder's Journal
- [ ] Speaker profile
- [ ] Case studies
- [ ] Talks

## Tier 4 — Larger, longer horizon

**Not loop-ready** — same reason as Tier 3, and further out besides.

- [ ] AI Lab (constrained by the honesty rules in [ai-experience.md](docs/career/ai-experience.md))
- [ ] Consulting assets
- [ ] Book
- [ ] Knowledge graph of professional expertise

## Sequencing notes

- 2026-07-06 — Tier 2 started ahead of Tier 1: faster win using only docs already written. Website ordering may be revisited once Tier 2 ships.
