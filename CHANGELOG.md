# Changelog

## Unreleased

- Generated the first real resume draft: resume/resume-2026.md, following docs/resume/format.md and prompts/resume-generation.md against all now-complete source domains. Added a top-level resume/ folder to architecture.md's layout (mirroring website/) and a Professional Affiliations section to resume/format.md, which had fallen out of sync with the newer affiliations.md domain. Caught and fixed one violation of the repo's own link-don't-restate rule while drafting: Competentia's "USA, Australia, MEA" geographic scope was in the July 2025 PDF but hadn't been ingested into roles.md yet — fixed the source before using the fact in the resume.
- Ingested facts from a July 2025 job-search resume PDF (kept for reference, not positioning): expanded certifications.md with the full Microsoft/MOOC/professional certification/training list; added docs/career/affiliations.md; added two education entries (IGNOU BA Psychology, in progress; Aptech Advance Diploma, 1997); enriched roles.md with quantified achievements (Voith-Siemens team/revenue growth, Digitas India named clients) and split "Various Other Assignments" into its two constituent training/work periods; added a secondary India phone number to profile.md; added a "Voluntary & Community Contributions (pre-2025)" section to roles.md, distinct from the current community leadership role. Per user confirmation, kept LinkedIn's HCL title/team-size over this resume's conflicting version. Explicitly did NOT ingest DOB, nationality, passport number, visa status, or permanent address from this PDF — the repo is confirmed public on GitHub and none of that belongs in a public professional-identity repo.
- Reconciled the current-role conflict, per user confirmation: replaced roles.md's placeholder "Co-Founder & CTO — AI SaaS Startup" entry with the real picture from LinkedIn — Cognosic CTO (Oct 2025-Mar 2026, completed), then two concurrent current roles from Jan 2026 (Founder/CEO/MD at Stealth (WIP), CPTO at ServiceBuddy), plus unpaid community leadership roles (Multiple Companies, Oct 2025-Present). Updated eras.md's 2025+ section accordingly; resume/linkedin format docs now note the two concurrent current roles and record that roles.md has no open gaps as of 2026-07.
- Reconciled two conflicts between the repo and the LinkedIn export, per user confirmation: replaced education.md's MCA/B.Sc.-Mathematics entries with the 5 real credentials (IIM Lucknow, ICFAI, Sikkim Manipal MSc(IT), CDAC, V.B.S Purvanchal University); updated "25+ years" to "27+ years" in eras.md and build-learn-share-repeat.md. Location (Oslo) confirmed unchanged.
- Added docs/career/certifications.md (TOGAF, Power Platform Fundamentals, Operations Management, Competitive Strategy) and a Languages section to identity/profile.md (from the same LinkedIn export).
- Ingested full 1997-2025 role history from a LinkedIn PDF export into roles.md (Competentia, Digitas India, Synoverge, MBD Group, Voith-Siemens, HCL, NIIT, Binary Semantics, Dish TV, and early assignments), refined Leasi/Cegal to month-level dates, added a concurrent multi-org consulting role, and linked eras.md's 1997-2018 eras to the newly-confirmed roles. Flagged the 2025+/current-role entry as pending reconciliation rather than merging it — LinkedIn shows a different, more recent picture (Cognosic, Stealth (WIP), ServiceBuddy) than the earlier resume-sourced entry.
- Ingested confirmed resume facts into source domains: phone number (profile.md), roles.md (Leasi, Cegal, current startup — company/title/dates/responsibilities), tech-stack.md (cloud/integration, app dev, data), education.md; fixed eras.md's contradictory note about specifics belonging in generated artifacts; updated resume/linkedin format docs and generation prompts to read the new files.
- Added LinkedIn generation process: format spec and reusable prompt (Tier 2 of BACKLOG.md); added docs/linkedin/ to the artifact-domain list in architecture.md.
- Added resume generation process: format spec and reusable prompt (Tier 2 of BACKLOG.md).
- Added BACKLOG.md: tiered roadmap for remaining long-term deliverables.
- Added strategy domain: resume, website, and content strategy docs.
- Added knowledge domain: repository architecture, AI governance, and documentation standards docs.
- Added career domain: eras, leadership, and AI experience docs (with an explicit honesty rule against overstatement).
- Added philosophy domain: build-learn-share-repeat and systems-thinking docs.
- Added identity domain: profile and positioning docs.

## 0.1.0 - Foundation

- Initialized Alter Ego OS repository.
- Added project purpose, README, and first architecture decision record.
