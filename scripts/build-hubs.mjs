#!/usr/bin/env node
// One hub per silo. New hubs (/use-cases/, /guides/, /solutions/, /compare/) are created from the copy in
// scripts/silos.json if missing; their page lists and CollectionPage JSON-LD are regenerated between
// <!-- hub:start/end --> and <!-- hub-ld:start/end --> on every run, so new pages show up automatically.
// Existing custom hubs (/platform/, /resources/) get a generated list section before </main>.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { ROOT, ORIGIN, SILOS, manifest, loadSite, replaceBetween, block, writeHtml, esc, key, listTitle } from "./lib/site.mjs";
import { marketingHeader, marketingFooter, cssHref } from "./lib/blocks.mjs";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const CORE = new Set(manifest.core.map(key));
const byTitle = (a, b) => listTitle(a).localeCompare(listTitle(b));

export function groupsFor(siloKey, pages) {
  const s = SILOS[siloKey];
  const members = pages.filter((p) => p.silo === siloKey && !p.isHub && !p.noindex).sort(byTitle);
  const g = s.page?.groupBy || "none";
  if (g === "none") return [[s.page?.groupName || s.name, members]];
  if (g === "path") {
    return Object.entries(s.page.groups).map(([prefix, name]) => [name, members.filter((p) => p.url.startsWith(prefix))])
      .concat([["Other", members.filter((p) => !Object.keys(s.page.groups).some((x) => p.url.startsWith(x)))]]).filter(([, l]) => l.length);
  }
  const out = [];
  let rest = members;
  if (g === "core-topic") {
    out.push(["Core RevvOS use cases", members.filter((p) => CORE.has(key(p.url)))]);
    rest = members.filter((p) => !CORE.has(key(p.url)));
  }
  for (const [topic] of manifest.topics) {
    const l = rest.filter((p) => p.topic === topic);
    if (l.length) out.push([topic, l]);
  }
  return out.filter(([, l]) => l.length);
}

function listHtml(groups, { jump = false, level = "h2" } = {}) {
  const parts = [];
  if (jump && groups.length > 2) parts.push(`<ul class="hub-jump" aria-label="Topics">${groups.map(([n]) => `<li><a href="#${slug(n)}">${esc(n)}</a></li>`).join("")}</ul>`);
  for (const [name, list] of groups) {
    parts.push(`<section class="hub-group" aria-labelledby="${slug(name)}"><${level} id="${slug(name)}">${esc(name)}</${level}><p class="hub-count">${list.length} ${list.length === 1 ? "page" : "pages"}</p><ul class="hub-list">${list.map((p) =>
      `<li><a href="${p.url}">${esc(listTitle(p))}</a>${p.description ? `<p>${esc(p.description)}</p>` : ""}</li>`).join("")}</ul></section>`);
  }
  return parts.join("\n");
}

function collectionLd(s, groups) {
  const items = groups.flatMap(([, l]) => l);
  return JSON.stringify({
    "@context": "https://schema.org", "@type": "CollectionPage", name: s.page.h1, description: s.page.description, url: ORIGIN + s.hub,
    isPartOf: { "@type": "WebSite", name: "RevvOS", url: ORIGIN + "/" },
    mainEntity: { "@type": "ItemList", numberOfItems: items.length,
      itemListElement: items.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: ORIGIN + p.url, name: listTitle(p) })) },
  }).replace(/<\//g, "<\\/");
}

function skeleton(siloKey) {
  const s = SILOS[siloKey], pg = s.page, canonical = ORIGIN + s.hub;
  const icon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23080a14'/%3E%3Cpath d='M9 22V10h6.2a3.9 3.9 0 0 1 1.5 7.5L20 22h-3.3l-2.9-4.2H12V22H9Zm3-6.7h2.9a1.6 1.6 0 0 0 0-3.2H12v3.2Z' fill='%23eaf1ff'/%3E%3Ccircle cx='23' cy='11' r='2.4' fill='%232fe08e'/%3E%3C/svg%3E";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(pg.title)}</title>
  <meta name="description" content="${esc(pg.description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${esc(pg.title)}">
  <meta property="og:description" content="${esc(pg.description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta name="theme-color" content="#132419">
  <link rel="icon" href="${icon}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/marketing.css?v=6">
  <link rel="stylesheet" href="/assets/brand-alignment.css">
  <link rel="stylesheet" href="/assets/guides.css?v=1">
  <link rel="stylesheet" href="${cssHref()}" data-site-nav>
  ${block("hub-ld", "")}
</head>
<body class="page-guide page-hub">
<a class="skip-link" href="#main">Skip to content</a>
<div class="progress" aria-hidden="true"></div>
${block("site-nav", marketingHeader(s.hub))}
<main id="main" class="guide">
  <article class="guide-wrap">
    ${block("crumbs", `<nav class="guide-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span>/</span> <span aria-current="page">${esc(s.name)}</span></nav>`)}
    <p class="guide-kicker">RevvOS library</p>
    <h1>${esc(pg.h1)}</h1>
    <p class="hub-intro">${esc(pg.intro)}</p>
    ${block("hub", "")}
    <aside class="guide-cta">
      <h2>Get a RevvOS assessment</h2>
      <p>We review how your shop handles calls, estimates, follow-up and reporting today, and show where RevvOS agents would take work off the desk.</p>
      <a class="btn btn-primary" href="/demo/">Get an assessment</a>
    </aside>
  </article>
</main>
${block("site-footer", marketingFooter(s.hub))}
<script src="/assets/marketing.js?v=8" defer></script>
</body>
</html>
`;
}

// The library list on /resources/: every hub with what it holds.
function libraryGroups(pages) {
  const hubs = Object.entries(SILOS).filter(([k]) => k !== "resources").map(([k, s]) => ({
    url: s.hub, title: s.name, description: `${s.blurb} (${pages.filter((p) => p.silo === k && !p.isHub).length} pages)` }));
  const extra = pages.filter((p) => p.silo === "resources" && !p.isHub).map((p) => ({ url: p.url, title: listTitle(p), description: p.description }));
  return [["Browse by section", hubs.map((h) => ({ ...h, description: h.description }))], ["More resources", extra]].filter(([, l]) => l.length);
}

export function run(site = loadSite()) {
  let created = 0, changed = 0;
  for (const [k, s] of Object.entries(SILOS)) {
    const file = path.join(ROOT, s.hub.replace(/^\//, ""), "index.html");
    if (!existsSync(file)) {
      if (!s.page) { console.warn(`hubs: ${s.hub} has no page copy in silos.json and no file; skipped`); continue; }
      mkdirSync(path.dirname(file), { recursive: true });
      writeFileSync(file, skeleton(k));
      created++;
    }
    let html = readFileSync(file, "utf8");
    if (s.page) {
      const groups = groupsFor(k, site.pages);
      html = replaceBetween(html, "hub", "\n" + listHtml(groups, { jump: true }) + "\n    ") ?? html;
      html = replaceBetween(html, "hub-ld", `<script type="application/ld+json">${collectionLd(s, groups)}</script>`) ?? html;
    } else {
      // existing custom page acting as a hub: generated list section before </main>
      const groups = k === "resources" ? libraryGroups(site.pages)
        : [[s.listHeading || s.name, site.pages.filter((p) => p.silo === k && !p.isHub && !p.noindex).sort(byTitle)]];
      const asPages = groups.map(([n, l]) => [n, l.map((x) => ({ ...x, title: x.title.includes("|") ? x.title : `${x.title} | RevvOS` }))]);
      const inner = `<section class="hub-section" aria-label="${esc(s.listHeading || s.name)}"><div class="wrap"><div class="hub-inner">\n${listHtml(asPages, { level: "h2" })}\n</div></div></section>`;
      const r = replaceBetween(html, "hub", inner);
      // after </main>: assets/plain-pages.js re-renders the inside of <main> on these pages
      html = r ?? html.replace(/<\/main>/, (m) => `${m}\n${block("hub", inner)}`);
    }
    if (writeHtml(file, html)) changed++;
  }
  console.log(`hubs: ${created} created, ${changed} updated`);
  return created;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) run();
