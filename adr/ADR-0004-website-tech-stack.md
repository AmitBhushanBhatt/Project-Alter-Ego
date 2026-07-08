# ADR-0004: Website Tech Stack — Astro + Vercel

## Status

Accepted

## Context

Tier 1 of [BACKLOG.md](../BACKLOG.md) has been blocked on this decision. [website-strategy.md](../docs/strategy/website-strategy.md) describes the website as a "digital headquarters" — content-heavy (Thinking, Projects, Experiments, Architecture, Ideas), needs to grow from a minimal MVP (Home/About/Experience) to richer sections (AI Lab, Case Studies, Newsletter, Building in Public) without a rewrite, and shouldn't demand significant ongoing operational overhead since it isn't the primary product.

## Decision

- **Framework: Astro.** Its markdown/MDX-native content collections map directly onto the domain structure already established in `docs/` (career, philosophy, identity) instead of inventing a second content model. Ships zero JS by default (fast, appropriate for a personal site), and supports islands of interactivity later — an AI Lab demo, a filterable case-study list — without committing to a full SPA architecture up front.
- **Hosting: Vercel.** Zero-config Astro deploys, preview deployments per push (fits the review-before-merge habit already established in this repo), sufficient free tier for a personal site, and a path to server functions later (contact form, newsletter signup) without a platform migration.
- **Content sourcing:** the site reads from `docs/` at build time rather than duplicating content by hand into `website/` — this preserves the "link, don't restate" rule (see [architecture.md](../docs/knowledge/architecture.md)) at the implementation level, not only in documentation.
- **Domain:** `amitbhushanbhatt.com` (already referenced in [profile.md](../docs/identity/profile.md)) points to the Vercel deployment once live.

## Consequences

- Introduces a Node.js/npm build process to a repo that has been pure-markdown until now. `website/` becomes a real codebase; `docs/website/` stays the planning/spec layer, not the implementation.
- Astro's content collections expect a frontmatter schema — some `docs/` domain docs may need a light build-time transform rather than being consumed verbatim, without changing the source docs' own format or conventions.
- `CLAUDE.md` and [architecture.md](../docs/knowledge/architecture.md) need a short update once scaffolding begins, describing how to work in the new `website/` codebase alongside the markdown-only rest of the repo.
