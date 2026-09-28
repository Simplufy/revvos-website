import { access, readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = [
  ["/platform", "action-hero", "pages-flow.css"],
  ["/solutions/multi-location", "atlas-shell", "pages-leadership.css"],
  ["/solutions/daily-operations", "dispatch-scene", "pages-flow.css"],
  ["/solutions/executive-visibility", "brief-paper", "pages-leadership.css"],
  ["/roles/owner", "owner-horizon", "pages-leadership.css"],
  ["/roles/operations", "dispatch-shell", "pages-teams.css"],
  ["/roles/marketing", "proof-desk", "pages-teams.css"],
  ["/use-cases/reputation", "case-file", "pages-teams.css"],
  ["/use-cases/local-seo", "map-scene", "pages-local.css"],
  ["/use-cases/social-media", "contact-sheet", "pages-local.css"],
  ["/use-cases/customer-engagement", "relay-scene", "pages-local.css"],
  ["/use-cases/operational-visibility", "lens-scene", "pages-flow.css"],
  ["/use-cases/compliance", "evidence-book", "pages-trust.css"],
  ["/integrations", "switchyard", "pages-trust.css"],
  ["/security", "authority-boundary", "pages-trust.css"],
  ["/pricing", "scope-sheet", "pages-commercial.css"],
  ["/demo", "working-table", "pages-commercial.css"],
  ["/case-studies", "scenario-file", "pages-commercial.css"],
  ["/resources", "field-guide", "pages-commercial.css"],
];
const errors = [];

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries
    .filter((entry) => entry.name !== "node_modules" && !entry.name.startsWith("."))
    .map(async (entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) return htmlFiles(target);
      return entry.name.endsWith(".html") ? [target] : [];
    }));
  return nested.flat();
}

function localTarget(href, currentFile) {
  const [withoutHash, hash = ""] = href.split("#");
  const clean = withoutHash.split("?")[0];
  let target;
  if (!clean) {
    target = currentFile;
  } else if (clean.startsWith("/")) {
    target = path.join(root, clean.slice(1));
  } else {
    target = path.resolve(path.dirname(currentFile), clean);
  }
  return { target, hash };
}

for (const [slug] of pages) {
  const file = path.join(root, slug.slice(1), "index.html");
  if (!(await exists(file))) errors.push(`Missing custom page: ${file}`);
}

if (pages.length !== 19) errors.push(`Expected 19 custom pages, found ${pages.length}`);

const supportFile = path.join(root, "support", "index.html");
if (!(await exists(supportFile))) {
  errors.push(`Missing support page: ${supportFile}`);
} else {
  const supportHtml = await readFile(supportFile, "utf8");
  if (!supportHtml.includes("support@revvos.xyz")) errors.push("Branded support destination is missing from /support");
  if (!supportHtml.includes('<style id="support-styles">')) errors.push("Support styles are missing from /support");
  if (!supportHtml.includes('<script src="/assets/marketing.js?v=8" defer></script>')) errors.push("Shared navigation script is missing from /support");
}

for (const file of await htmlFiles(root)) {
  const html = await readFile(file, "utf8");
  const relative = path.relative(root, file);
  if (!/^<!doctype html>/i.test(html)) errors.push(`Missing doctype: ${relative}`);
  if ((html.match(/<title>/gi) || []).length !== 1) errors.push(`Expected one title: ${relative}`);
  if ((html.match(/<h1[ >]/gi) || []).length !== 1) errors.push(`Expected one h1: ${relative}`);
  if (!/<meta name="description" content="[^"]+">/i.test(html)) errors.push(`Missing meta description: ${relative}`);

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) errors.push(`Duplicate IDs in ${relative}: ${[...new Set(duplicateIds)].join(", ")}`);

  const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(?:https?:|mailto:|tel:|data:)/.test(href) || href === "#") continue;
    const { target, hash } = localTarget(href, file);
    let resolved = target;
    if (!(await exists(resolved))) resolved = path.join(target, "index.html");
    else if ((await access(resolved).then(() => true, () => false)) && !path.extname(resolved)) resolved = path.join(resolved, "index.html");
    if (!(await exists(resolved))) {
      errors.push(`Broken link in ${relative}: ${href}`);
      continue;
    }
    if (hash) {
      const targetHtml = await readFile(resolved, "utf8");
      if (!targetHtml.includes(`id="${hash}"`)) errors.push(`Missing anchor in ${relative}: ${href}`);
    }
  }
}

for (const [slug, visualMarker, pageStyles] of pages) {
  const html = await readFile(path.join(root, slug.slice(1), "index.html"), "utf8");
  if (!html.includes('<link rel="stylesheet" href="/assets/marketing.css?v=6">')) errors.push(`Missing shared styles: ${slug}`);
  if (!html.includes(`<link rel="stylesheet" href="/assets/${pageStyles}">`)) errors.push(`Missing page styles: ${slug}`);
  if (!html.includes('<link rel="stylesheet" href="/assets/os-story.css?v=9">')) errors.push(`Missing OS story styles: ${slug}`);
  if (!html.includes('<script src="/assets/marketing.js?v=8" defer></script>')) errors.push(`Missing shared script: ${slug}`);
  if (!html.includes('<script src="/assets/plain-pages.js?v=9" defer></script>')) errors.push(`Missing OS story script: ${slug}`);
  if (!html.includes('<meta name="robots" content="noindex">')) errors.push(`Staging noindex missing: ${slug}`);
  if (!html.includes(visualMarker)) errors.push(`Missing unique visual marker ${visualMarker}: ${slug}`);
  if (html.includes("Revvos")) errors.push(`Incorrect brand casing: ${slug}`);

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]+)">/i)?.[1] ?? "";
  if (title.length > 65) errors.push(`Meta title is too long (${title.length}): ${slug}`);
  if (description.length < 100 || description.length > 170) errors.push(`Meta description length is ${description.length}: ${slug}`);

  const schema = html.match(/<script type="application\/ld\+json">(.+)<\/script>/)?.[1];
  if (schema) {
    try {
      JSON.parse(schema);
    } catch {
      errors.push(`Invalid JSON-LD: ${slug}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${pages.length} custom pages, the support page, and all internal site links.`);
}
