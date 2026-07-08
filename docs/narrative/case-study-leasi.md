# Case Study: Migrating Leasi off AppFarm.io

## Context

Leasi's SaaS platform — inventory management, equipment rental, maintenance, and project/resource management for tenants — was built on AppFarm.io, a low-code platform. As CTO (October 2023 – September 2025), the mandate covered architecture decisions and delivery across frontend, backend, integrations, and cloud infrastructure for the full platform.

## The decision

Migrate off AppFarm.io onto a MERN stack (MongoDB, Express, React, Node) plus Microsoft Azure, including Azure iPaaS for integration. A low-code platform trades flexibility for speed; at Leasi's stage, the constraints of staying on AppFarm.io had started to outweigh the speed it once bought. The migration wasn't a rewrite for its own sake — it was reclaiming architectural control: API-first design, room for enterprise integrations, and a platform that could keep extending rather than hitting the low-code ceiling.

## Execution

Planned and executed the migration to the new stack while the platform kept running for existing tenants — this is the harder version of the problem, not a greenfield rebuild. Alongside the migration, the engineering practice itself changed: GitHub Copilot/Codespaces, DataButton, and Cursor became part of the daily toolchain, and AI (LLMs, agent workflows, MCP) started getting applied to the software engineering process itself, not just the product.

## What this demonstrates

Architectural conviction under real constraints — choosing to migrate a live multi-tenant platform rather than staying comfortable on a low-code foundation, and doing it without a green light to pause the business. It's also an early, concrete example of AI-assisted engineering being adopted in practice, not just discussed — see [Why AI](why-ai.md) for how that theme continued into later roles.

## How to apply

Use for the website's Case Studies section and any technical due-diligence conversation about migration experience. If new specifics about this migration become available (metrics, timeline detail), add them to [roles.md](../career/roles.md) first.
