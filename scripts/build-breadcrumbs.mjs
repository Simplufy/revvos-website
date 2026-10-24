#!/usr/bin/env node
// Visible breadcrumbs (Home > Hub > Page) and matching BreadcrumbList JSON-LD (hub at position 2) on every page
// that belongs to a silo. Hubs get Home > Hub. Utility pages (contact, support, legal, 404) and home get none.
import { pathToFileURL } from "node:url";
import { ORIGIN, SILOS, loadSite, replaceBetween, block, writeHtml } from "./lib/site.mjs";
import { crumbsGuide, crumbsSite, breadcrumbLd, pyDumps } from "./lib/blocks.mjs";

export function trailFor(p) {
  if (!p.silo) return null;
  const s = SILOS[p.silo];
  const home = { name: "Home", url: "/" };
  if (p.isHub) return [home, { name: s.name, url: s.hub }];
  return [home, { name: s.name, url: s.hub }, { name: p.label, url: p.url }];
}

const LD_RE = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
const isCrumbs = (o) => o && typeof o === "object" && o["@type"] === "BreadcrumbList";

function serializeLike(original, value) {
  const raw = original.trim();
  let parsed;
  try { parsed = JSON.parse(raw); } catch { return null; }
  const unesc = (s) => s.replace(/<\//g, "<\\/");
  if (unesc(pyDumps(parsed)) === raw) return unesc(pyDumps(value));
  return unesc(JSON.stringify(value));
}

function setLd(html, ld) {
  const json = JSON.stringify(ld).replace(/<\//g, "<\\/");
  const own = replaceBetween(html, "crumbs-ld", `<script type="application/ld+json">${json}</script>`);
  if (own !== null) return own;
  // Replace a BreadcrumbList already inside the page's JSON-LD (the content factory writes one).
  let done = false;
  const out = html.replace(LD_RE, (m, body) => {
    if (done) return m;
    let data;
    try { data = JSON.parse(body); } catch { return m; }
    let next = null;
    if (isCrumbs(data)) next = ld;
    else if (Array.isArray(data) && data.some(isCrumbs)) next = data.map((o) => (isCrumbs(o) ? ld : o));
    else if (data && Array.isArray(data["@graph"]) && data["@graph"].some(isCrumbs)) {
      const { "@context": _c, ...rest } = ld;
      next = { ...data, "@graph": data["@graph"].map((o) => (isCrumbs(o) ? rest : o)) };
    }
    if (!next) return m;
    const s = serializeLike(body, next);
    if (s === null) return m;
    done = true;
    return `<script type="application/ld+json">${s}</script>`;
  });
  if (done) return out;
  return html.replace(/(\s*)<\/head>/, (m, ws) => `${ws}  ${block("crumbs-ld", `<script type="application/ld+json">${json}</script>`)}${ws}</head>`);
}

function setVisible(html, p, trail) {
  if (/<nav class="guide-crumbs"/.test(html)) {
    const c = crumbsGuide(trail);
    const r = replaceBetween(html, "crumbs", c);
    if (r !== null) return r;
    return html.replace(/<nav class="guide-crumbs"[^>]*>[\s\S]*?<\/nav>/, () => block("crumbs", c));
  }
  const flow = !/<main[\s>]/.test(html);
  const c = crumbsSite(trail, flow);
  const r = replaceBetween(html, "crumbs", c);
  if (r !== null) return r;
  if (!flow) return html.replace(/<main[^>]*>/, (m) => `${m}\n${block("crumbs", c)}`);
  return html.replace(/<!-- site-nav:end -->/, (m) => `${m}\n${block("crumbs", c)}`);
}

export function run(site = loadSite()) {
  let changed = 0;
  for (const p of site.pages) {
    const trail = trailFor(p);
    if (!trail) continue;
    const canonical = p.canonical || ORIGIN + p.url;
    let html = setVisible(p.html, p, trail);
    html = setLd(html, breadcrumbLd(trail, canonical));
    if (writeHtml(p.file, html)) changed++;
    p.html = html;
  }
  console.log(`breadcrumbs: ${changed} pages updated`);
  return changed;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) run();
