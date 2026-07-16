# Backlog

Tiered roadmap for what's left, derived from the ChatGPT handover's Long-Term Deliverables. `CHANGELOG.md` records what's already shipped; this file tracks what's still ahead and in what order.

**Loop readiness legend:** 🤖 = concrete enough for autonomous pickup (per `CLAUDE.md`'s "working autonomously" rules). ✋ = needs a human decision first (tech choice, new ADR, or a genuine conflict) — a loop should stop and ask here, not guess.

## Tier 1 — Website (MVP shipped)

The repo is v1.0, the website is the first generated artifact (see [ADR-0001](adr/ADR-0001-knowledge-repository-first.md)).

- [x] ADR for website tech stack / hosting — [ADR-0004](adr/ADR-0004-website-tech-stack.md): Astro + Vercel
- [x] `docs/website/sitemap.md` — MVP vs. planned pages
- [x] Scaffold and build the `website/` MVP (Astro, Node 22) — Home, About, Experience, Ideas (4), Case Studies (2), Contact. Reads content from `docs/` at build time via a content-layer glob loader, never duplicated by hand. Verified: `npm run build`, `astro check` (0 errors), visual check in light/dark/mobile via preview tools.
- [ ] ✋ Deploy to Vercel + point `amitbhushanbhatt.com` at it — needs Vercel account access, not something to do unattended
- [ ] 🤖 Planned pages from sitemap.md (AI Lab, Building in Public, Talks, Newsletter, Resources) once their source content exists

## Narrative content (Phase 3) — shipped, first pass

New source domain, `docs/narrative/` — how the story gets told, distinct from `docs/career/` (what happened) and `docs/philosophy/` (why). Feeds the website's About/Ideas sections, plus future talks/media requests. First pass complete; will grow as more source material (Vault, further conversation) becomes available — see each doc's "How to apply" section for how to extend it.

- [x] Origin story
- [x] Founder story
- [x] Why AI / Why SaaS / Why Startups / Why Architecture (short essays)
- [x] Bios — short / medium / long, plus speaker and media variants
- [x] 2 case studies (Leasi's AppFarm.io→MERN migration, ServiceBuddy)

## Tier 2 — Resume, cover letter & LinkedIn generation (resume + cover letter shipped, LinkedIn pending)

Repeatable generation processes, not one-off hand-written docs, so they can't drift from the source domains.

- [x] Resume generation process (`docs/resume/format.md` + `prompts/resume-generation.md`) — first draft generated: `resume/resume-2026.md` + styled `resume/resume-2026.html` / `resume/resume-2026.pdf`
- [x] Cover letter generation process (`docs/resume/cover-letter-format.md` + `prompts/cover-letter-generation.md`) — template generated: `resume/cover-letter-2026.md`. Unlike the resume, this is a per-application template with `[Company]`/`[Role]` placeholders, not a master document — re-tailor per real application
- [ ] 🤖 LinkedIn generation process (`docs/linkedin/format.md` + `prompts/linkedin-generation.md`) — process exists, not yet run; same pattern as the resume, straightforward to execute
- [ ] 🤖 Condensed 2-page resume variant (per `docs/resume/format.md`'s condensed-resume guidance) for casual sharing, alongside the full 6-page version

## Related, parallel initiative — The Vault (private data layer)

Not part of the tiered artifact roadmap above — a separate private system, not a generated artifact, and **not something a loop running in this repo builds**. See [ADR-0003](adr/ADR-0003-vault-architecture.md), [vault/ARCHITECTURE.md](vault/ARCHITECTURE.md) (the "how," current pilot-sized scope), and [vault/PRD.md](vault/PRD.md) (the "what and why," long-horizon north star — not the current task list).

- [x] Architecture designed and recorded (source taxonomy, pipeline stages, tech stack)
- [x] PRD recorded (full Digital Twin/Knowledge/Memory scope, explicitly separated from Project Alter Ego's public identity and from Personal Planning Agent's agent layer)
- [ ] ✋ Physical deployment decision (this Mac vs. NAS/dedicated server)
- [ ] ✋ Pilot source category and the actual Vault project location — both still open
- [ ] MCP server implementation — happens in the separate Vault project once it exists, not in `alter-ego`
- [ ] Project Alter Ego ↔ Vault query integration — once both sides exist
- [ ] ✋ Confirm with Personal Planning Agent's own scope whether it absorbs vault/PRD.md's "Where agents live" vision — not decided, needs a look at that project first

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
