#!/usr/bin/env node
// Run before every deploy:  node scripts/prebuild.mjs
// 1. hubs (create missing hub pages, refresh their lists)  2. header/footer  3. breadcrumbs  4. "More" blocks
// 5. add missing public pages to sitemap.xml  6. architecture check (orphans / click depth).
// Idempotent: a second run changes nothing. Pass --check to also fail (exit 1) on orphans or pages deeper than 3 clicks.
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT, ORIGIN, loadSite, saveManifestGuides, key } from "./lib/site.mjs";
import { run as hubs } from "./build-hubs.mjs";
import { run as nav } from "./build-nav.mjs";
import { run as crumbs } from "./build-breadcrumbs.mjs";
import { run as related } from "./build-related.mjs";

const first = loadSite();
if (first.newLeadMagnets.length) {
  saveManifestGuides(first.newLeadMagnets);
  console.log(`guides: added new lead magnets to scripts/silos.json: ${first.newLeadMagnets.join(", ")}`);
}
hubs(loadSite());
const site = loadSite(); // reload: hubs may have been created
nav(site);
crumbs(site);
related(site);

// sitemap: add public pages that are missing (existing entries and their lastmod are left alone)
const smPath = path.join(ROOT, "sitemap.xml");
const sm = readFileSync(smPath, "utf8");
const have = new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => key(m[1].replace(ORIGIN, "") || "/")));
const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
const add = site.pages.filter((p) => p.rel !== "404.html" && !p.noindex && !have.has(key(p.url)))
  .map((p) => `  <url><loc>${p.canonical || ORIGIN + p.url}</loc><lastmod>${today}</lastmod></url>`);
if (add.length) {
  const eol = sm.includes("\r\n") ? "\r\n" : "\n";
  writeFileSync(smPath, sm.replace(/\s*<\/urlset>/, `${eol}${add.join(eol)}${eol}</urlset>`));
}
console.log(`sitemap: ${add.length} pages added`);

try {
  execFileSync(process.execPath, [path.join(ROOT, "scripts", "check-architecture.mjs")], { stdio: "inherit" });
} catch {
  if (process.argv.includes("--check")) process.exit(1);
}
