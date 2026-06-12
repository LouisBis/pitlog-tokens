# Changelog <!-- markdownlint-disable MD024 -->

All notable changes to `@louisbis/pitlog-tokens` will be documented here.

## [1.1.0] - 2026-06-12

### Added

- Typography scale: `--font-size-{xs|sm|base|lg|xl|2xl}`, `--font-weight-{regular|medium|semibold|bold}`, `--font-line-height-{tight|normal|relaxed}`
- Spacing scale (4px base, rem): `--space-{1|2|3|4|5|6|8|10|12|16}`
- Border radius: `--radius-{none|sm|base|md|lg|xl|full}`
- Z-index scale: `--z-{base|raised|dropdown|sticky|overlay|modal|toast|tooltip}`
- Transitions: `--duration-{fast|base|slow}`, `--easing-{default|in|out}`

## [1.0.0] - 2026-06-12

### Breaking changes

- Complete token set rewrite — all 0.1.0 token names are removed
- Neutral scale replaces slate: `--color-neutral-{200–900}` (dark-first, 900 = deepest)
- Brass replaces orange accent: `--brand-brass`, `--brand-brass-hover`, `--brand-brass-pressed`, `--brand-brass-highlight`
- Status chip tokens added: `--chip-{success|warning|danger}-{background|text}`
- Brand tag tokens added: `--brand-tag-{background|border|text}`
- `--text-on-brand` added for ink text on brass fills

### Changed

- `--background-base` → now maps to `#222222` (was `#0f172a`)
- `--background-surface` → now maps to `#292929` (was `#1e293b`)
- `--status-*` accent colors replaced with Pitlog functional palette (green/yellow/red)

### Removed

- All `--color-slate-*` primitives
- `--accent-*` tokens
- `--border-subtle`

## [0.1.0] - 2026-06-12

### Added

- Initial token set: primitive colors (slate, orange, red, amber, green)
- Semantic layer: background, border, text, accent, status
- Typography tokens: font families (sans, mono)
- Shadow tokens: card, card-hover
- CSS output (`dist/tokens.css`) with `outputReferences: true`
- JS/ES6 output (`dist/tokens.js`)
