import { marked } from 'marked';
import posixPath from 'node:path/posix';

/**
 * Every doc in docs/ ends with a "## How to apply" section meant for repo
 * maintainers, not website visitors. This strips it (and any other
 * maintainer-only section) before rendering to the public site.
 */
const MAINTAINER_ONLY_HEADINGS = ['How to apply', 'What this story is for', 'Known gap', 'Status'];

const GITHUB_BLOB_BASE = 'https://github.com/AmitBhushanBhatt/Project-Alter-Ego/blob/main/docs';

/**
 * Cross-doc links like [systems-thinking.md](../philosophy/systems-thinking.md)
 * make sense inside the repo but resolve to nothing on the live site (there's
 * no /philosophy/systems-thinking.md route) and read as raw filenames to a
 * visitor. Rewrite any relative .md link to its GitHub source instead of
 * leaving it broken or exposing repo-internal paths as a route.
 */
function rewriteRelativeDocLinks(markdown: string, docId: string): string {
  const docDir = posixPath.dirname(docId); // e.g. "narrative" for "narrative/why-architecture"
  return markdown.replace(
    /\]\(([^)\s]+\.md)(#[^)]*)?\)/g,
    (_match, relPath: string, anchor = '') => {
      const resolved = posixPath.normalize(posixPath.join(docDir, relPath));
      return `](${GITHUB_BLOB_BASE}/${resolved}${anchor})`;
    }
  );
}

export function publicMarkdown(raw: string, docId: string, opts: { dropLeadingH1?: boolean } = {}): string {
  let lines = raw.split('\n');
  const cutIndex = lines.findIndex((line) =>
    MAINTAINER_ONLY_HEADINGS.some((heading) => line.trim() === `## ${heading}`)
  );
  lines = cutIndex === -1 ? lines : lines.slice(0, cutIndex);
  if (opts.dropLeadingH1) {
    const h1Index = lines.findIndex((line) => line.startsWith('# '));
    if (h1Index !== -1) lines.splice(h1Index, 1);
  }
  return rewriteRelativeDocLinks(lines.join('\n').trim(), docId);
}

export async function renderPublicMarkdown(raw: string, docId: string, opts: { dropLeadingH1?: boolean } = {}): Promise<string> {
  return marked.parse(publicMarkdown(raw, docId, opts), { async: true });
}
