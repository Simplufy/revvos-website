// Shared helpers for the site-architecture scripts (hubs, nav, breadcrumbs, related links, checks).
// Pages are discovered from the file tree; each one is put in exactly one silo (scripts/silos.json + rules below).
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
export const ORIGIN = "https://revvos.xyz";
export const MANIFEST_PATH = path.join(ROOT, "scripts", "silos.json");
export const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
export const SILOS = manifest.silos; // key -> {name, hub, more, all, intro...}

const SKIP_DIRS = new Set(["assets", "scripts", "node_modules", ".git", ".wrangler"]);

// ---------- files and URLs ----------
export function htmlFiles(dir = ROOT) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || SKIP_DIRS.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...htmlFiles(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out.sort();
}

export const rel = (file) => path.relative(ROOT, file).split(path.sep).join("/");

// The URL a file is served at (the 200 response, no redirect): folder pages end in "/", foo.html is "/foo".
export function urlOf(file) {
  const r = rel(file);
  if (r === "index.html") return "/";
  if (r.endsWith("/index.html")) return "/" + r.slice(0, -"index.html".length);
  return "/" + r.slice(0, -".html".length);
}

// Identity key that ignores the trailing slash (canonicals and the sitemap drop it on folder pages).
export const key = (url) => (url === "/" ? "/" : url.replace(/\/+$/, ""));

// Resolve an href to a local html file the way Cloudflare Pages serves it, or null.
export function resolveHref(href, fromFile) {
  if (!href || /^(?:[a-z]+:|#|\/\/)/i.test(href)) return null;
  let clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  let target = clean.startsWith("/") ? path.join(ROOT, clean) : path.resolve(path.dirname(fromFile), clean);
  const cands = clean.endsWith("/") ? [path.join(target, "index.html")]
    : [target, target + ".html", path.join(target, "index.html")];
  for (const c of cands) {
    if (c.endsWith(".html") && existsSync(c) && statSync(c).isFile()) return c;
  }
  return null;
}

// ---------- page metadata ----------
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', "#x27": "'", "#39": "'", nbsp: " ", middot: "·", mdash: "-", ndash: "-" };
export const decode = (s) => s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
  if (ENT[e.toLowerCase()] !== undefined) return ENT[e.toLowerCase()];
  if (e[0] === "#") return String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
  return m;
});
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const text = (s) => decode(String(s || "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

export function readPage(file) {
  const html = readFileSync(file, "utf8");
  const url = urlOf(file);
  const title = text(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  const description = text(html.match(/<meta name="description" content="([^"]*)"/i)?.[1]);
  const h1 = text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] || null;
  const noindex = /<meta name="robots"[^>]*noindex/i.test(html);
  const factory = /<body class="page-guide"/.test(html) || /class="guide-wrap"/.test(html);
  const variant = /<header class="site-header">/.test(html) ? "marketing" : /<header class="nav"/.test(html) ? "base" : "none";
  const crumbNav = html.match(/<nav class="guide-crumbs"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || "";
  const crumbLabel = [...crumbNav.matchAll(/<span[^>]*>([^<]*)<\/span>/g)].map((m) => text(m[1])).filter((s) => s && s !== "/").at(-1) || "";
  return { file, rel: rel(file), url, html, title, description, h1, canonical, noindex, factory, variant, crumbLabel };
}

// ---------- silos ----------
// Lead-magnet guides can live anywhere (/guides/, /use-cases/, the root). They are listed in silos.json "guides";
// on the factory machine, packages under runtime/factory/leadmagnets/revvos/ are picked up automatically too.
const LEADMAGNET_DIR = process.env.REVVOS_LEADMAGNETS_DIR || "C:/Users/mcgui/founder-platform/runtime/factory/leadmagnets/revvos";
export function leadMagnetUrls() {
  const set = new Set(manifest.guides.map(key));
  const found = [];
  if (existsSync(LEADMAGNET_DIR)) {
    for (const slug of readdirSync(LEADMAGNET_DIR)) {
      const pj = path.join(LEADMAGNET_DIR, slug, "page.json");
      if (!existsSync(pj)) continue;
      try {
        const u = JSON.parse(readFileSync(pj, "utf8")).url;
        if (u && !set.has(key(u)) && resolveHref(u, path.join(ROOT, "index.html"))) { set.add(key(u)); found.push(key(u)); }
      } catch { /* unreadable package: ignore */ }
    }
  }
  return { set, found };
}

export function hubKeys() {
  return new Map(Object.entries(SILOS).map(([k, s]) => [key(s.hub), k]));
}

// Returns {silo, isHub} for a page; silo null = utility page (contact, legal, support, 404).
export function classify(page, lm) {
  const k = key(page.url);
  if (k === "/") return { silo: null, isHub: false, home: true };
  const hubs = hubKeys();
  if (hubs.has(k)) return { silo: hubs.get(k), isHub: true };
  if (page.noindex || page.rel === "404.html") return { silo: null, isHub: false };
  const a = manifest.assign[k] ?? manifest.assign[k + "/"];
  if (a !== undefined) return { silo: a, isHub: false };
  if (lm.has(k)) return { silo: "guides", isHub: false };
  if (k.startsWith("/guides/")) return { silo: "guides", isHub: false };
  if (k.startsWith("/use-cases/")) return { silo: "use-cases", isHub: false };
  if (k.startsWith("/solutions/") || k.startsWith("/roles/")) return { silo: "solutions", isHub: false };
  if (k.startsWith("/legal/")) return { silo: null, isHub: false };
  if (page.factory) return { silo: "compare", isHub: false }; // root-level factory articles: category / comparison pages
  return { silo: null, isHub: false };
}

// Topic groups inside big silos (used for hub H2s and for "most related first").
export function topicOf(page) {
  const k = key(page.url);
  if (manifest.topicOverrides[k]) return manifest.topicOverrides[k];
  const slugText = k.toLowerCase();
  const words = (k + " " + page.title).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  // "a-b" keywords match the URL; plain keywords match the start of a word in the URL or title
  const hit = (w) => (w.includes("-") ? slugText.includes(w) : words.some((x) => x.startsWith(w)));
  for (const [name, kws] of manifest.topics) {
    if (kws.some(hit)) return name;
  }
  return manifest.topics.at(-1)[0];
}

// Short human label for nav/breadcrumbs.
export function labelOf(page) {
  const k = key(page.url);
  if (manifest.labels[k]) return manifest.labels[k];
  const generic = new Set(["use cases", "resources", "guides", ""]);
  if (page.crumbLabel && !generic.has(page.crumbLabel.toLowerCase())) return page.crumbLabel;
  const t = page.title.replace(/\s*\|\s*RevvOS\s*$/i, "");
  if (t.includes(": ")) {
    const after = t.split(": ").slice(1).join(": ");
    if (/^the /i.test(after)) return after;
    return t.split(": ")[0];
  }
  return t;
}

// Link text for lists: the page's H1 for articles is long, so use the title without the brand suffix.
export function listTitle(page) {
  // marketing pages have brand-style titles ("Operating Control Sprint Scope Ledger"); their nav label reads better
  if (!page.factory && page.url && manifest.labels[key(page.url)] && !key(page.url).startsWith("/roles/")) return manifest.labels[key(page.url)];
  return page.title.replace(/\s*\|\s*RevvOS\s*$/i, "").trim();
}

// All pages, classified.
export function loadSite() {
  const lm = leadMagnetUrls();
  const pages = htmlFiles().map(readPage).map((p) => ({ ...p, ...classify(p, lm.set) }));
  for (const p of pages) p.topic = p.silo && !p.isHub ? topicOf(p) : null;
  for (const p of pages) p.label = labelOf(p);
  return { pages, newLeadMagnets: lm.found };
}

export function saveManifestGuides(extra) {
  if (!extra.length) return;
  const m = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
  m.guides = [...new Set([...m.guides, ...extra])].sort();
  writeFileSync(MANIFEST_PATH, JSON.stringify(m, null, 2) + "\n");
}

// ---------- marker helpers ----------
// Replace the content between <!-- name:start --> and <!-- name:end -->; returns null when the markers are absent.
export function replaceBetween(html, name, content) {
  const re = new RegExp(`<!-- ${name}:start -->[\\s\\S]*?<!-- ${name}:end -->`);
  if (!re.test(html)) return null;
  return html.replace(re, () => `<!-- ${name}:start -->${content}<!-- ${name}:end -->`);
}
export const block = (name, content) => `<!-- ${name}:start -->${content}<!-- ${name}:end -->`;

// Keep the file's existing line endings (the working tree is CRLF on Windows, LF in git).
export function writeHtml(file, html) {
  const before = readFileSync(file, "utf8");
  const crlf = before.includes("\r\n");
  let out = html.replace(/\r\n/g, "\n");
  if (crlf) out = out.replace(/\n/g, "\r\n");
  if (out !== before) { writeFileSync(file, out); return true; }
  return false;
}
