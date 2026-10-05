---
name: reclaim
description: reclaim broken links, unlinked mentions and customer stories for revvos.xyz ONLY (brand pinned to revvos). Thin wrapper around the canonical marketing-department skill.
---

# reclaim (revvos, pinned)

This repository is **revvos** (revvos.xyz). The brand is fixed; never run this for another brand from this repo.

1. Run `python C:\Users\mcgui\founder-platform\marketing\seo\tools\seoctl.py resolve revvos --repo C:\Users\mcgui\revvos-website` and stop on any non-zero exit.
2. Read and follow `C:\Users\mcgui\founder-platform\marketing\.claude\skills\reclaim\SKILL.md` with argument `revvos`,
   after `C:\Users\mcgui\founder-platform\marketing\CLAUDE.md` and `...\marketing\seo\global\operating-rules.md`.
3. All ledgers, drafts and reports are written under `C:\Users\mcgui\founder-platform\marketing\seo\` (never in this repo),
   except site changes, which go on a `seo/<YYYY-MM-DD>-<slug>` branch here and are queued in FounderOS Approvals (lane seo). Never merge to main, never deploy.
4. Use only `seo\brands\revvos.yaml` and the Distribb project whose domain is revvos.xyz.