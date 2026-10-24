// HTML generators for the global header/footer, breadcrumbs and "More in this section" blocks.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { ROOT, ORIGIN, SILOS, esc, key } from "./site.mjs";

// ---------- global navigation (one definition for every template) ----------
export const NAV = [
  { label: "Platform", items: [["/platform/", "Platform overview"], ["/agents/", "Agents"], ["/integrations/", "Integrations"], ["/security/", "Security"], ["/pricing/", "Pricing"]] },
  { label: "Solutions", items: [["/solutions/", "All solutions"], ["/solutions/multi-location/", "Multi-location operations"], ["/solutions/daily-operations/", "Daily operations"], ["/solutions/executive-visibility/", "Executive visibility"], ["/roles/owner/", "For owners"], ["/roles/operations/", "For operations leaders"], ["/roles/marketing/", "For marketing leaders"]] },
  { label: "Use cases", items: [["/use-cases/", "All use cases"], ["/use-cases/reputation/", "Reputation"], ["/use-cases/local-seo/", "Local SEO"], ["/use-cases/social-media/", "Social media"], ["/use-cases/customer-engagement/", "Customer engagement"], ["/use-cases/operational-visibility/", "Operational visibility"], ["/use-cases/compliance/", "Compliance"]] },
  { label: "Guides", href: "/guides/" },
  { label: "Resources", items: [["/resources/", "Field guide and library"], ["/compare/", "Software comparisons"], ["/case-studies/", "Scenarios"], ["/guides/", "All guides"]] },
  { label: "Support", href: "/support/" },
];

export const FOOTER = [
  ["Platform", [["/platform/", "Overview"], ["/agents/", "Agents"], ["/integrations/", "Integrations"], ["/security/", "Security"], ["/pricing/", "Pricing"]]],
  ["Solutions", [["/solutions/", "All solutions"], ["/solutions/multi-location/", "Multi-location"], ["/solutions/daily-operations/", "Daily operations"], ["/solutions/executive-visibility/", "Executive visibility"], ["/roles/owner/", "Owners"], ["/roles/operations/", "Operations leaders"], ["/roles/marketing/", "Marketing leaders"]]],
  ["Library", [["/use-cases/", "Use cases"], ["/guides/", "Guides"], ["/compare/", "Software comparisons"], ["/resources/", "Resources"], ["/case-studies/", "Scenarios"]]],
  ["Company", [["/demo/", "Book a demo"], ["/contact/", "Contact"], ["/support/", "Support"], ["/legal/privacy/", "Privacy"], ["/legal/terms/", "Terms"]]],
];

const cur = (href, url) => (key(href) === key(url) ? ' aria-current="page"' : "");
const a = (href, label, url) => `<a href="${href}"${cur(href, url)}>${esc(label)}</a>`;

export function marketingHeader(url) {
  const links = NAV.map((n) => n.href
    ? `      ${a(n.href, n.label, url)}`
    : `      <details class="nav-group"><summary>${esc(n.label)}</summary><div class="nav-menu">${n.items.map(([h, l]) => a(h, l, url)).join("")}</div></details>`).join("\n");
  return `<header class="site-header">
  <div class="wrap nav-bar">
    <a class="brand" href="/" aria-label="RevvOS home"><img src="/assets/logos/revvos-lockup.svg?v=3" alt="RevvOS"></a>
    <nav class="nav-links" aria-label="Primary navigation">
${links}
    </nav>
    <div class="nav-actions">
      <a class="btn btn-secondary" href="/contact/">Contact</a>
      <a class="btn btn-primary" href="/demo/">Get an assessment</a>
      <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><span></span></button>
    </div>
  </div>
</header>`;
}

export function marketingFooter(url) {
  const cols = FOOTER.map(([h, items]) => `        <div class="footer-column"><h3>${h}</h3>${items.map(([hr, l]) => a(hr, l, url)).join("")}</div>`).join("\n");
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-about"><a href="/" aria-label="RevvOS home"><img src="/assets/logos/revvos-lockup.svg?v=3" alt="RevvOS"></a><p>RevvOS shows your team what needs attention, prepares the next step, and keeps people in control.</p></div>
      <div class="footer-links">
${cols}
      </div>
    </div>
    <div class="footer-bottom"><span>&copy; 2026 RevvOS. All rights reserved.</span><span class="footer-bottom-links"><a href="/legal/security/">Legal security</a><a href="mailto:team@simplufy.com">team@simplufy.com</a></span></div>
  </div>
</footer>`;
}

// Home, agents, contact and legal pages use the base.css design: flat links (hidden under 900px, as on the home page).
export function baseHeader(url) {
  const flat = NAV.map((n) => [n.href || n.items[0][0], n.label]);
  const brandHref = url === "/" ? "#top" : "/";
  return `<header class="nav" id="nav"><div class="wrap bar">
  <a class="brand" href="${brandHref}" aria-label="RevvOS home"><img class="brandlogo" src="/assets/logos/revvos-lockup.svg?v=3" alt="RevvOS"></a>
  <nav class="navlinks" aria-label="Primary navigation">${flat.map(([h, l]) => a(h, l, url)).join("")}</nav>
  <div class="nav-cta"><a class="btn btn-ghost" href="https://revvos-demo.pages.dev">Log in</a><span class="mb"><a class="btn btn-primary mag" href="/demo/">Book a demo</a></span></div>
</div></header>`;
}

export function baseFooter(url) {
  const brandHref = url === "/" ? "#top" : "/";
  const cols = [...FOOTER.slice(0, 3), ["Company", [["/demo/", "Book a demo"], ["/contact/", "Contact"], ["/support/", "Support"]]],
    ["Legal", [["/legal/privacy/", "Privacy"], ["/legal/terms/", "Terms"], ["/legal/security/", "Legal security"]]]];
  return `<footer><div class="wrap">
  <div class="fgrid"><div class="about"><a class="brand" href="${brandHref}" aria-label="RevvOS home"><img class="brandlogo" src="/assets/logos/revvos-lockup.svg?v=3" alt="RevvOS"></a><p>RevvOS turns recommendations into clear work with an owner, a check, and proof it is done.</p></div>
  <div class="fcols">${cols.map(([h, items]) => `<div class="fcol"><h4>${h}</h4>${items.map(([hr, l]) => a(hr, l, url)).join("")}</div>`).join("")}</div></div>
  <div class="fbot"><span>&copy; 2026 RevvOS. All rights reserved.</span><span>Made for the people who keep the world moving.</span></div>
</div></footer>`;
}

export function cssHref() {
  const css = readFileSync(path.join(ROOT, "assets", "site-nav.css"));
  return `/assets/site-nav.css?v=${createHash("sha1").update(css).digest("hex").slice(0, 8)}`;
}

// ---------- breadcrumbs ----------
// trail: [{name, url}] from Home to the current page (last item = current page).
export function crumbsGuide(trail) {
  return `<nav class="guide-crumbs" aria-label="Breadcrumb">${trail.map((c, i) => i === trail.length - 1
    ? `<span aria-current="page">${esc(c.name)}</span>`
    : `<a href="${c.url}">${esc(c.name)}</a> <span>/</span> `).join("")}</nav>`;
}
export function crumbsSite(trail, flow = false) {
  return `<nav class="site-crumbs${flow ? " site-crumbs--flow" : ""}" aria-label="Breadcrumb"><div class="wrap">${trail.map((c, i) => i === trail.length - 1
    ? `<span aria-current="page">${esc(c.name)}</span>`
    : `<a href="${c.url}">${esc(c.name)}</a><span class="sep" aria-hidden="true">/</span>`).join("")}</div></nav>`;
}

export function breadcrumbLd(trail, currentCanonical) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name,
      item: i === trail.length - 1 && currentCanonical ? currentCanonical : ORIGIN + c.url })),
  };
}

// Python json.dumps(ensure_ascii=False) style, which is how the content factory writes its JSON-LD.
export function pyDumps(v) {
  if (Array.isArray(v)) return `[${v.map(pyDumps).join(", ")}]`;
  if (v && typeof v === "object") return `{${Object.entries(v).map(([k, x]) => `${JSON.stringify(k)}: ${pyDumps(x)}`).join(", ")}}`;
  return JSON.stringify(v);
}

// ---------- "More in this section" ----------
export function moreBlock(siloKey, items, wide = false) {
  const s = SILOS[siloKey];
  return `<aside class="silo-more${wide ? " silo-more--wide" : ""}" aria-labelledby="silo-more-h"><h2 id="silo-more-h">${esc(s.more)}</h2><ul>${items.map((p) => `<li><a href="${p.url}">${esc(p.linkText)}</a></li>`).join("")}</ul><p class="silo-more-all"><a href="${s.hub}">${esc(s.all)} <span aria-hidden="true">&rarr;</span></a></p></aside>`;
}
