#!/usr/bin/env node
// Crawl internal <a href> links from the home page over the local files and report orphan public pages
// (not reachable from /), click depth, and sitemap mismatches.
//   node scripts/check-architecture.mjs [--json] [--max-depth 3]
// Exit code 1 when there are orphans or pages deeper than --max-depth.
import { readFileSync } from "node:fs";
import path from "node:path";
import { ROOT, ORIGIN, htmlFiles, readPage, resolveHref, key, rel } from "./lib/site.mjs";

const args = process.argv.slice(2);
const maxDepth = Number(args[args.indexOf("--max-depth") + 1]) || 3;
const asJson = args.includes("--json");

const pages = new Map(htmlFiles().map((f) => [f, readPage(f)]));
const isPublic = (p) => p.rel !== "404.html" && !p.noindex;

const linksOf = (p) => {
  const out = new Set();
  for (const m of p.html.matchAll(/<a\s[^>]*?href="([^"]+)"/gi)) {
    const f = resolveHref(m[1], p.file);
    if (f && pages.has(f)) out.add(f);
  }
  return out;
};

const home = path.join(ROOT, "index.html");
const depth = new Map([[home, 0]]);
const queue = [home];
while (queue.length) {
  const f = queue.shift();
  for (const t of linksOf(pages.get(f))) {
    if (!depth.has(t)) { depth.set(t, depth.get(f) + 1); queue.push(t); }
  }
}

const inbound = new Map();
for (const p of pages.values()) for (const t of linksOf(p)) if (t !== p.file) inbound.set(t, (inbound.get(t) || 0) + 1);

const pub = [...pages.values()].filter(isPublic);
const orphans = pub.filter((p) => !depth.has(p.file)).map((p) => p.url);
const deep = pub.filter((p) => depth.get(p.file) > maxDepth).map((p) => `${p.url} (${depth.get(p.file)})`);
const hist = {};
for (const p of pub) { const d = depth.has(p.file) ? depth.get(p.file) : "unreachable"; hist[d] = (hist[d] || 0) + 1; }
const max = Math.max(...pub.filter((p) => depth.has(p.file)).map((p) => depth.get(p.file)));

const sitemap = readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, "") || "/");
const locKeys = new Set(locs.map(key));
const notInSitemap = pub.filter((p) => !locKeys.has(key(p.url))).map((p) => p.url);
const sitemapMissingFile = locs.filter((u) => !resolveHref(u, home));
const fewInbound = pub.filter((p) => p.url !== "/" && (inbound.get(p.file) || 0) < 3).map((p) => `${p.url} (${inbound.get(p.file) || 0})`);

const report = { publicPages: pub.length, orphans, maxDepth: max, depthHistogram: hist, deeperThan: deep, notInSitemap, sitemapMissingFile, fewerThan3Inbound: fewInbound };
if (asJson) console.log(JSON.stringify(report, null, 2));
else {
  console.log(`Public pages: ${pub.length}   orphans: ${orphans.length}   max click depth: ${max}   depth histogram: ${JSON.stringify(hist)}`);
  if (orphans.length) console.log(`Orphans (not reachable from /):\n  ${orphans.join("\n  ")}`);
  if (deep.length) console.log(`Deeper than ${maxDepth} clicks:\n  ${deep.join("\n  ")}`);
  if (notInSitemap.length) console.log(`Public pages missing from sitemap.xml:\n  ${notInSitemap.join("\n  ")}`);
  if (sitemapMissingFile.length) console.log(`sitemap.xml entries with no page:\n  ${sitemapMissingFile.join("\n  ")}`);
  console.log(`Pages with fewer than 3 internal links pointing at them: ${fewInbound.length}${fewInbound.length ? "\n  " + fewInbound.join("\n  ") : ""}`);
}
if (orphans.length || deep.length) process.exitCode = 1;
