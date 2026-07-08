# Vault Architecture

Design-only document. Nothing in this folder is or will be actual personal data — the Vault itself is a separate, private, local-first project (see [ADR-0003](../adr/ADR-0003-vault-architecture.md)). This describes how to build it.

## Scope

A personal digital archive spanning **1995–present (~30 years)**, roughly 5TB total:

- ~4TB photos/video/duplicated attachments — **out of scope**, no processing planned
- ~1TB text-ish material (email, docs, spreadsheets, chats, social exports, financial/legal records) — **in scope**, of which an estimated ~75% is low-signal (spam, promotional email, logistics chat, duplicate attachments), leaving roughly **~250GB of real signal** to actually process

The goal is not to preserve everything — it's to make the real ~250GB queryable, with clear provenance, at a sensitivity level appropriate to who's asking.

## Source taxonomy

### Offline sources (physical capture, one-time)

| Source | Notes |
|---|---|
| Current machine's local disk | Documents, Desktop, Downloads, old project folders |
| Old/external hard disks | From retired laptops/desktops — may need SATA-to-USB adapters |
| USB flash drives | Usually smaller, higher hit-rate for "important stuff someone deliberately saved" |
| Optical media (CD/DVD) | Common backup medium 2000s–early 2010s; needs an external optical drive on modern hardware |
| Old laptop/desktop images | If a machine is still bootable, a full disk image before decommissioning is safer than picking files by hand |

### Online sources (accounts/services, exportable)

| Source | Notes |
|---|---|
| Email (Hotmail/Outlook/Live, Gmail, ISP mail) | Since ~1996 (Hotmail's launch). Very early-era webmail may simply not be recoverable if never locally archived — worth confirming before investing effort. |
| Cloud storage (OneDrive, Google Drive, Dropbox, iCloud) | Export or direct API/rclone-style sync |
| Messaging (WhatsApp, Telegram, old Skype/MSN Messenger) | Each has a "export chat" or data-download feature |
| Social media (LinkedIn, Facebook, Twitter/X, Instagram) | Each has a "download your data" feature (JSON/HTML archive) |
| Financial/insurance portals | Usually PDF/CSV statement downloads; rarely have a bulk export — expect manual collection |
| Calendar/contacts | vCard/ICS export from whichever provider was in use per era |
| Notes apps (OneNote, Evernote, Apple Notes) | Export formats vary; some require paid tiers to bulk-export |

### Era/format considerations (why 30 years matters)

- **1995–2000** — Early Hotmail webmail (pre-archival, may be unrecoverable), Word/Excel binary formats (`.doc`/`.xls` 95/97), floppy disks if any survive.
- **2000–2010** — Outlook Express (`.dbx`), MSN Messenger logs (`.xml`), early digital photos (out of scope), CD/DVD backups become common, early social media.
- **2010–2015** — Gmail/cloud email dominant, WhatsApp begins, smartphone era starts, Dropbox/Google Drive/OneDrive appear.
- **2015–2025** — Highest volume by far. Full cloud/mobile era, WhatsApp/Slack/Teams at work, modern Office 365, multi-device sync.

Legacy formats (`.dbx`, `.pst`, pre-2007 binary Office) need explicit **format normalization** before anything else can parse them — this is a distinct pipeline stage, not an afterthought.

## Pipeline stages

```
1. Discovery        →  2. Classification  →  3. Format Normalization
                                                       │
                                                       ▼
4. Extraction & Structuring  →  5. Dedup & Relevance Filter  →  6. Sensitivity Tagging
                                                       │
                                                       ▼
                              7. Indexing & Storage  →  8. MCP Access Layer  →  9. Consumption
```

1. **Discovery** — crawl every source and produce a manifest (path, type, size, dates, source-of-origin). No content is read yet — this is purely cataloging, and alone will validate or correct the 4TB/1TB/250GB estimate before any real processing effort is spent.
2. **Classification** — tag each item by format/type, era (which routes it to the right legacy parser), and a rough sensitivity tier (public-ok / personal-private / highly-sensitive).
3. **Format normalization** — convert legacy formats into modern parseable equivalents: `.dbx`/`.pst` → `.mbox`/`.eml`; pre-2007 binary Office → text/structured extraction (e.g. via headless LibreOffice conversion); WhatsApp/Telegram exports → a normalized message schema (sender, timestamp, text, attachment reference); social-media takeout JSON/HTML → normalized post/comment/message records.
4. **Extraction & structuring** — split by classification into two lanes:
   - **Structured lane** (banking, insurance, contacts, investments, calendar) → typed records into SQL tables.
   - **Unstructured lane** (email, chats, notes, documents) → chunked, embedded, loaded into a local vector store.
5. **Dedup & relevance filtering** — this is where the "75% not relevant" estimate becomes concrete: dedupe repeated attachments across email threads, drop spam/promotional mail, drop low-signal chat noise ("on my way"). Borderline items go to a review queue rather than being silently discarded.
6. **Sensitivity tagging** — every stored record gets a tag (public/professional, personal-private, highly-sensitive) that downstream access rules enforce. A query made in a "generate my resume" context should never be able to retrieve a highly-sensitive record, structurally, not just by convention.
7. **Indexing & storage** — final load into the SQL store, the vector store, and a lightweight **provenance catalog** (source file, ingestion date, classification, sensitivity tag) for every record — the same traceability principle already used in Project Alter Ego (every resume fact traces to a source doc) applied at Vault scale.
8. **MCP access layer** — a local MCP server exposing controlled tools over both stores, e.g. `search_documents(query)`, `query_financial_records(filter)`, `get_contact(name)`, `get_timeline(range)`. Each tool call is gated by the sensitivity tags and by which client/context is asking.
9. **Consumption** — Project Alter Ego (or a future personal agent) calls the MCP server for what it needs. Facts meant to be public/professional get distilled and written into this repo's `docs/`, exactly as done today; everything else stays in the Vault, queried live, never duplicated into git.

## Technology stack (local-first)

- **Structured store**: SQLite to start (zero-ops, file-based); Postgres later if concurrent access matters.
- **Vector store**: Chroma or LanceDB — both run embedded, no server process required.
- **Embeddings**: a local model via Ollama (e.g. `nomic-embed-text`) or `sentence-transformers`.
- **Classification/extraction LLM**: a local model via Ollama for bulk, repetitive tasks (classify sensitivity, summarize a document). Cloud AI is reserved for small, already-triaged, high-value curation passes the user explicitly shares — not for bulk processing of raw private material.
- **MCP server**: a small TypeScript or Python service implementing the MCP spec over the two stores.
- **Ingestion scripts**: plain per-stage scripts (Python) are sufficient at ~250GB scale — no heavyweight workflow engine needed.

## Physical deployment

Deliberately location-agnostic: SQLite/Chroma are just files, so the Vault runs the same whether it lives on this Mac or migrates to a NAS later — only the mount path changes. No deployment decision needs to be made before the architecture is usable; that choice (this machine vs. a NAS/dedicated server) can be made or changed independently of everything above.

## Open questions (not yet decided)

- Physical location (this Mac vs. NAS vs. dedicated home server) — deferred, doesn't block starting.
- Which local LLM/embedding models specifically — a small pilot will surface this faster than picking in the abstract.
- How much of the pre-2010 email/chat history is actually recoverable at all, versus lost to defunct services.

## How to apply

Pilot one source category end-to-end (discovery → sensitivity tagging → MCP query) before scaling to others — proves the pipeline on a bounded, real dataset rather than designing further in the abstract.
