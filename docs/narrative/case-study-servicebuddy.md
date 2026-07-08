# Case Study: Building ServiceBuddy AI-First From Day One

## Context

ServiceBuddy is a next-generation services marketplace, starting in Norway and designed to scale globally. As CPTO (Chief Product and Technology Officer) from January 2026, the role covers Product and Technology end-to-end — vision through execution — concurrent with building Stealth (WIP) as a separate venture vehicle.

## The approach

Rather than building a generic marketplace and bolting on AI later, the platform was built cloud-native and AI-aware from the start: Supabase (PostgreSQL, Auth0), React, Node.js (Express), and Vercel for the core platform, with mobile in React Native (Expo) inside a Turborepo architecture — a structure chosen to let web and mobile share code without becoming entangled. Prototyping speed came from Buzz44; workflows run through GitHub and Google Workspace rather than a heavier, slower toolchain.

AI isn't a feature added on top — it's embedded in the core experience through intelligent job-to-provider matching, the central mechanic of a services marketplace. Getting the matching right earlier, with AI, rather than starting with manual/rules-based matching and retrofitting intelligence later, was a deliberate sequencing choice.

## Where it stands

Moving from POC to market, with the explicit next phase being evolution into a fuller AI-first platform: automation, personalization, and data-driven decisioning as the mechanisms that redefine how services get discovered and delivered, not just a matching algorithm bolted onto a conventional marketplace.

## What this demonstrates

Founder-level ownership of both product and technology simultaneously, and a concrete instance of "AI-first" meaning something architectural, not marketing language — see [Why SaaS](why-saas.md) and [Why AI](why-ai.md) for the reasoning this decision comes from.

## How to apply

Use for the website's Case Studies/Building in Public sections. This is a live, ongoing build — update this document as the platform evolves rather than letting it freeze at the January 2026 snapshot. Any new fact goes into [roles.md](../career/roles.md) first.
