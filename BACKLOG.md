# Backlog

Tiered roadmap for what's left, derived from the ChatGPT handover's Long-Term Deliverables. `CHANGELOG.md` records what's already shipped; this file tracks what's still ahead and in what order.

## Tier 1 — Website

Unblocks reuse of everything else; the repo is v1.0, the website is the next generated artifact (see [ADR-0001](adr/ADR-0001-knowledge-repository-first.md)).

- [ ] ADR for website tech stack / hosting
- [ ] `docs/website/sitemap.md` — translate [website-strategy.md](docs/strategy/website-strategy.md)'s five themes into actual pages
- [ ] Scaffold the `website/` implementation

## Tier 2 — Resume & LinkedIn generation (in progress)

Repeatable generation processes, not one-off hand-written docs, so they can't drift from the source domains.

- [ ] Resume generation process (`docs/resume/format.md` + `prompts/resume-generation.md`)
- [ ] LinkedIn generation process (`docs/linkedin/format.md` + `prompts/linkedin-generation.md`)

Note: producing a full, non-generic instance of either artifact needs company names, dates, and quantified achievements that [leadership.md](docs/career/leadership.md) and [eras.md](docs/career/eras.md) don't yet contain — those docs deliberately excluded specifics until supplied.

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
