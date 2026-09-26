# Shopwell repository rules

This repository is an independently maintained Shopwell npm dependency fork. Every AI
coding agent must read this file before changing files in this repository.

## Hard rules

- Preserve UTF-8 and existing user changes.
- Shopwell-owned code and publishable packages use Apache License 2.0.
- Every project-owned package manifest must declare `Apache-2.0`.
- Root `LICENSE` contains the standard, unmodified Apache License 2.0 text.
- Original upstream legal text remains verbatim in root `NOTICE`; do not brand,
  shorten, or move it into `LICENSE.upstream-*` files.
- Do not merge or cherry-pick unrelated upstream history, copy upstream tags, or force-push.
- Runtime code and workflows must not depend on `shopware/*`, `shopwarelabs/*`,
  `@shopware-ag/*`, or their GitHub repositories.
- This package is not released until the exact version is queryable from
  `registry.npmjs.org`. A Git tag, GitHub Release, or green workflow alone is insufficient.
- Consumers must use the published semver version. Never commit a Git URL, `github:`,
  GitHub archive/tarball URL, commit, branch, `file:`, `link:`, or `workspace:` fallback
  to make installation pass while npm publication is missing.
- Before commit, push, release, or sync completion, run:
  `../sync-upstream/bin/syncctl audit-license gh-project-automation` and
  `../sync-upstream/bin/syncctl audit-upstream-dependencies gh-project-automation`.
- A failed audit blocks commit, push, release, and sync completion.
