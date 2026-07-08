# Backlog

Tiered roadmap for what's left, derived from the ChatGPT handover's Long-Term Deliverables. `CHANGELOG.md` records what's already shipped; this file tracks what's still ahead and in what order.

## Tier 1 — Website

Unblocks reuse of everything else; the repo is v1.0, the website is the next generated artifact (see [ADR-0001](adr/ADR-0001-knowledge-repository-first.md)).

- [ ] ADR for website tech stack / hosting
- [ ] `docs/website/sitemap.md` — translate [website-strategy.md](docs/strategy/website-strategy.md)'s five themes into actual pages
- [ ] Scaffold the `website/` implementation

## Tier 2 — Resume & LinkedIn generation (resume shipped, LinkedIn pending)

Repeatable generation processes, not one-off hand-written docs, so they can't drift from the source domains.

- [x] Resume generation process (`docs/resume/format.md` + `prompts/resume-generation.md`) — first draft generated: `resume/resume-2026.md` + styled `resume/resume-2026.html` / `resume/resume-2026.pdf`
- [ ] LinkedIn generation process (`docs/linkedin/format.md` + `prompts/linkedin-generation.md`) — process exists, not yet run
- [ ] Condensed 2-page resume variant (per `docs/resume/format.md`'s condensed-resume guidance) for casual sharing, alongside the full 6-page version

## Related, parallel initiative — The Vault (private data layer)

Not part of the tiered artifact roadmap above — a separate private system, not a generated artifact. See [ADR-0003](adr/ADR-0003-vault-architecture.md) and [vault/ARCHITECTURE.md](vault/ARCHITECTURE.md).

- [x] Architecture designed and recorded (source taxonomy, pipeline stages, tech stack)
- [ ] Physical deployment decision (this Mac vs. NAS/dedicated server)
- [ ] Pilot ingestion on a first source category
- [ ] MCP server implementation
- [ ] Project Alter Ego ↔ Vault query integration

## Tier 3 — Content / thought leadership

Ongoing rather than one-time; governed by [content-strategy.md](docs/strategy/content-strategy.md)'s "prove it was built" filter.

- [ ] Newsletter
- [ ] Builder's Journal
- [ ] Speaker profile
- [ ] Case studies
- [ ] Talks

## Tier 4 — Larger, longer horizon

- [ ] AI Lab (constrained by the honesty rules in [ai-experience.md](docs/career/ai-experience.md))
- [ ] Consulting assets
- [ ] Book
- [ ] Knowledge graph of professional expertise

## Sequencing notes

- 2026-07-06 — Tier 2 started ahead of Tier 1: faster win using only docs already written. Website ordering may be revisited once Tier 2 ships.
