// Turn "Coming soon" entries on the hub pages (/use-cases/, /industries/, /compare/, /guides/) into links once the page exists.
// Run after merging a library page branch:  node scripts/link-hubs.mjs   (idempotent; prints what it linked)
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exists = (r) => [`${r}.html`, `${r}/index.html`].some((f) => existsSync(path.join(root, f.replace(/^\//, ""))));
for (const hub of ["use-cases", "industries", "compare", "guides"]) {
  const file = path.join(root, hub, "index.html");
  if (!existsSync(file)) continue;
  let html = readFileSync(file, "utf8");
  const before = html;
  html = html.replace(/<li class="hub-item" data-route="([^"]+)" data-pending([^>]*)>([\s\S]*?)<\/li>/g, (all, route, rest, inner) => {
    if (!exists(route)) return all;
    console.log(`linked ${route} on /${hub}/`);
    inner = inner.replace(/<span class="hub-name">([\s\S]*?)<\/span>/, `<a href="${route}">$1</a>`).replace(/\s*<p class="hub-soon"[^>]*>[\s\S]*?<\/p>/, "");
    return `<li class="hub-item" data-route="${route}"${rest}>${inner}</li>`;
  });
  if (html !== before) writeFileSync(file, html);
}
