# Why this folder is (almost) empty

PLAN.md's original sketch called for static `head.html` / `header.html` /
`footer.html` fragments here, synced into every page by a separate
`tools/sync-chrome.mjs` script.

The actual build consolidates that into **one source of truth**:
`tools/build-pages.mjs` exports `head()`, `headerNav()` and `footer()` as
plain JS template functions, and every page in `tools/generate/*.mjs` calls
them. Regenerating (`node tools/generate-all.mjs`) rewrites every page from
those functions, which gives the same guarantee the partials approach was
after — change the chrome once, it updates everywhere — without a second
copy of the markup that could drift out of sync with a regex-based sync
step. See `README.md` → "Changing the header, footer or nav" for the
day-to-day workflow.
