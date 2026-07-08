import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Reads directly from the repo's docs/ folder at build time -- per ADR-0004,
// content is never duplicated into website/ by hand. See docs/knowledge/architecture.md.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../docs' }),
  schema: z.object({}).passthrough(),
});

export const collections = { docs };
