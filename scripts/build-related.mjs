#!/usr/bin/env node
// "More <silo>" block on every page in a silo: 3 to 6 sibling pages, most related first, plus the hub link.
// Written between <!-- related:start --> and <!-- related:end -->; in-body links are left alone.
import { pathToFileURL } from "node:url";
import { SILOS, manifest, loadSite, replaceBetween, block, writeHtml, key, listTitle } from "./lib/site.mjs";
import { moreBlock } from "./lib/blocks.mjs";

const STOP = new Set("auto autos repair shop shops the and for with your you how what revvos from that this into when why are can does need guide guides use case cases page".split(" "));
const tokens = (p) => new Set((key(p.url) + " " + p.title.replace(/\|.*$/, "")).toLowerCase().split(/[^a-z0-9]+/)
  .filter((w) => w.length > 2 && !STOP.has(w)).map((w) => w.replace(/(ing|es|s)$/, "")));

const CORE = new Set(manifest.core.map(key));

// used: how often each page was already picked, so links spread across the silo instead of piling onto a few pages.
export function relatedFor(p, pages, n = 5, used = new Map()) {
  const mine = tokens(p);
  const sibs = pages.filter((q) => q.silo === p.silo && !q.isHub && q.file !== p.file && !q.noindex);
  return sibs.map((q) => {
    let score = 0;
    if (q.topic && q.topic === p.topic) score += 10;
    for (const t of tokens(q)) if (mine.has(t)) score += 3;
    if (CORE.has(key(p.url)) && CORE.has(key(q.url))) score += 4;
    score -= 2 * (used.get(q.url) || 0);
    return { q, score };
  }).sort((x, y) => y.score - x.score || x.q.url.localeCompare(y.q.url))
    .slice(0, Math.min(6, Math.max(3, n))).map(({ q }) => {
      used.set(q.url, (used.get(q.url) || 0) + 1);
      return { url: q.url, linkText: listTitle(q) };
    });
}

// Small silos: top up with the other hubs so the block is never thinner than 3 links.
function topUp(p, items) {
  for (const [k, s] of Object.entries(SILOS)) {
    if (items.length >= 3) break;
    if (k !== p.silo && !items.some((i) => key(i.url) === key(s.hub))) items.push({ url: s.hub, linkText: s.name });
  }
  return items;
}

export function run(site = loadSite()) {
  let changed = 0;
  const thin = [];
  const used = new Map();
  for (const p of site.pages) {
    if (!p.silo || p.isHub) continue;
    const items = topUp(p, relatedFor(p, site.pages, 5, used));
    if (items.length < 3) thin.push(p.url);
    let html = p.html;
    const isGuide = /class="guide-wrap"/.test(html);
    const content = isGuide ? moreBlock(p.silo, items) : `<div class="wrap silo-more-wrap">${moreBlock(p.silo, items, true)}</div>`;
    const r = replaceBetween(html, "related", content);
    if (r !== null) html = r;
    else if (isGuide && /<aside class="guide-cta">/.test(html)) html = html.replace(/(\s*)<aside class="guide-cta">/, (m, ws) => `${ws}${block("related", content)}${m}`);
    else if (isGuide) html = html.replace(/(\s*)<\/article>/, (m, ws) => `${ws}  ${block("related", content)}${m}`);
    // after </main>: assets/plain-pages.js re-renders the inside of <main> on the custom marketing pages
    else if (/<\/main>/.test(html)) html = html.replace(/<\/main>/, (m) => `${m}\n${block("related", content)}`);
    else html = html.replace(/<!-- site-footer:start -->/, (m) => `${block("related", content)}\n${m}`);
    if (writeHtml(p.file, html)) changed++;
    p.html = html;
  }
  console.log(`related: ${changed} pages updated${thin.length ? `; fewer than 3 siblings: ${thin.join(", ")}` : ""}`);
  return changed;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) run();
