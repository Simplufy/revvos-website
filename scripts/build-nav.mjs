#!/usr/bin/env node
// Rewrite the header and footer of every page from one definition (scripts/lib/blocks.mjs), between
// <!-- site-nav --> and <!-- site-footer --> markers, and link assets/site-nav.css. Safe to run repeatedly.
import { pathToFileURL } from "node:url";
import { loadSite, replaceBetween, block, writeHtml } from "./lib/site.mjs";
import { marketingHeader, marketingFooter, baseHeader, baseFooter, cssHref } from "./lib/blocks.mjs";

function setRegion(html, name, re, content) {
  const r = replaceBetween(html, name, content);
  if (r !== null) return r;
  if (!re.test(html)) return null;
  return html.replace(re, () => block(name, content));
}

export function run(site = loadSite()) {
  const href = cssHref();
  let changed = 0;
  const skipped = [];
  for (const p of site.pages) {
    let html = p.html;
    if (p.variant === "marketing") {
      html = setRegion(html, "site-nav", /<header class="site-header">[\s\S]*?<\/header>/, marketingHeader(p.url)) ?? html;
      html = setRegion(html, "site-footer", /<footer class="site-footer">[\s\S]*?<\/footer>/, marketingFooter(p.url)) ?? html;
    } else if (p.variant === "base") {
      html = setRegion(html, "site-nav", /<header class="nav" id="nav">[\s\S]*?<\/header>/, baseHeader(p.url)) ?? html;
      html = setRegion(html, "site-footer", /<footer>[\s\S]*?<\/footer>/, baseFooter(p.url)) ?? html;
    } else { skipped.push(p.rel); continue; }
    if (p.url !== "/") { // the home page carries these styles inline
      const link = `<link rel="stylesheet" href="${href}" data-site-nav>`;
      html = /<link rel="stylesheet" href="[^"]*" data-site-nav>/.test(html)
        ? html.replace(/<link rel="stylesheet" href="[^"]*" data-site-nav>/, link)
        : html.replace(/(\s*)<\/head>/, `$1  ${link}$1</head>`);
    }
    if (writeHtml(p.file, html)) changed++;
    p.html = html;
  }
  console.log(`nav: ${changed} pages updated${skipped.length ? `; no known header on: ${skipped.join(", ")}` : ""}`);
  return changed;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) run();
