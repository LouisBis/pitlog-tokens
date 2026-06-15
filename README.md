# @louisbis/pitlog-tokens

> Design tokens for the Pitlog design system — dark-first, two-layer architecture.

[![npm](https://img.shields.io/npm/v/@louisbis/pitlog-tokens?style=flat-square)](https://www.npmjs.com/package/@louisbis/pitlog-tokens)
[![license](https://img.shields.io/npm/l/@louisbis/pitlog-tokens?style=flat-square)](LICENSE)

## Install

```bash
npm install @louisbis/pitlog-tokens
```

## Usage

```js
import '@louisbis/pitlog-tokens/dist/tokens.css'
```

All tokens are CSS custom properties on `:root`. Components consume the **semantic layer only** — never the primitives.

```css
.button {
  background: var(--brand-accent);
  color: var(--color-text-on-brand);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
}

.status-badge {
  color: var(--status-success-text);
  background: var(--status-success-bg);
}
```

---

## Color tokens

Two layers: **primitives** hold raw values, **semantic** tokens point at primitives via `var()`.
Components read the semantic layer only. A light theme will override the semantic layer on `[data-theme="light"]`.

### Primitives

#### Brass (brand identity)

| Token | Value | |
| --- | --- | :---: |
| `--brass-300` | `#DEC18E` | ![color swatch](https://img.shields.io/badge/-%20-DEC18E?style=flat-square) |
| `--brass-400` | `#C8A368` | ![color swatch](https://img.shields.io/badge/-%20-C8A368?style=flat-square) |
| `--brass-500` | `#B28A49` | ![color swatch](https://img.shields.io/badge/-%20-B28A49?style=flat-square) |
| `--brass-700` | `#8A6A38` | ![color swatch](https://img.shields.io/badge/-%20-8A6A38?style=flat-square) |
| `--brass-800` | `#443A26` | ![color swatch](https://img.shields.io/badge/-%20-443A26?style=flat-square) |
| `--brass-900` | `#2E2A22` | ![color swatch](https://img.shields.io/badge/-%20-2E2A22?style=flat-square) |

#### Gray (neutrals)

| Token | Value | |
| --- | --- | :---: |
| `--gray-100` | `#E2E6EA` | ![color swatch](https://img.shields.io/badge/-%20-E2E6EA?style=flat-square) |
| `--gray-400` | `#A6ABB2` | ![color swatch](https://img.shields.io/badge/-%20-A6ABB2?style=flat-square) |
| `--gray-500` | `#6E6E6E` | ![color swatch](https://img.shields.io/badge/-%20-6E6E6E?style=flat-square) |
| `--gray-700` | `#3E3E3E` | ![color swatch](https://img.shields.io/badge/-%20-3E3E3E?style=flat-square) |
| `--gray-800` | `#323232` | ![color swatch](https://img.shields.io/badge/-%20-323232?style=flat-square) |
| `--gray-850` | `#292929` | ![color swatch](https://img.shields.io/badge/-%20-292929?style=flat-square) |
| `--gray-900` | `#222222` | ![color swatch](https://img.shields.io/badge/-%20-222222?style=flat-square) |
| `--gray-950` | `#1B1B1B` | ![color swatch](https://img.shields.io/badge/-%20-1B1B1B?style=flat-square) |

#### Status

| Token | Value | |
| --- | --- | :---: |
| `--green-300` | `#7ED3A1` | ![color swatch](https://img.shields.io/badge/-%20-7ED3A1?style=flat-square) |
| `--green-500` | `#46B36E` | ![color swatch](https://img.shields.io/badge/-%20-46B36E?style=flat-square) |
| `--green-950` | `#1E2A22` | ![color swatch](https://img.shields.io/badge/-%20-1E2A22?style=flat-square) |
| `--amber-300` | `#F5C170` | ![color swatch](https://img.shields.io/badge/-%20-F5C170?style=flat-square) |
| `--amber-500` | `#F0A93B` | ![color swatch](https://img.shields.io/badge/-%20-F0A93B?style=flat-square) |
| `--amber-950` | `#2E2516` | ![color swatch](https://img.shields.io/badge/-%20-2E2516?style=flat-square) |
| `--red-300` | `#F08A86` | ![color swatch](https://img.shields.io/badge/-%20-F08A86?style=flat-square) |
| `--red-500` | `#E5544E` | ![color swatch](https://img.shields.io/badge/-%20-E5544E?style=flat-square) |
| `--red-950` | `#2E1D1C` | ![color swatch](https://img.shields.io/badge/-%20-2E1D1C?style=flat-square) |

---

### Semantic

#### Surfaces & borders

| Token | Primitive | Value |
| --- | --- | --- |
| `--color-bg` | `--gray-950` | `#1B1B1B` |
| `--color-bg-raised` | `--gray-900` | `#222222` |
| `--color-surface` | `--gray-850` | `#292929` |
| `--color-surface-raised` | `--gray-800` | `#323232` |
| `--color-border` | `--gray-700` | `#3E3E3E` |

#### Text

| Token | Primitive | Value |
| --- | --- | --- |
| `--color-text-primary` | `--gray-100` | `#E2E6EA` |
| `--color-text-secondary` | `--gray-400` | `#A6ABB2` |
| `--color-text-muted` | `--gray-500` | `#6E6E6E` |
| `--color-text-on-brand` | `--gray-850` | `#292929` — ink on brass fills |

#### Brand

Brass is brand chrome only — CTAs, wordmark, category tags. Never encodes a status.

| Token | Primitive |
| --- | --- |
| `--brand-accent` | `--brass-500` |
| `--brand-accent-hover` | `--brass-400` |
| `--brand-accent-active` | `--brass-700` |
| `--brand-accent-highlight` | `--brass-300` |

Primary button pattern: `background: var(--brand-accent)` + `color: var(--color-text-on-brand)`.

#### Category tags

| Token | Primitive |
| --- | --- |
| `--tag-bg` | `--brass-900` |
| `--tag-border` | `--brass-800` |
| `--tag-text` | `--brass-400` |

#### Status / alerts

Deliberately more saturated than brass — signal beats decor.
Mileage alert mapping: up-to-date → success · approaching → warning · overdue → danger.

| Token | | |
| --- | --- | --- |
| `--status-success` | `--status-success-bg` | `--status-success-text` |
| `--status-warning` | `--status-warning-bg` | `--status-warning-text` |
| `--status-danger` | `--status-danger-bg` | `--status-danger-text` |

---

## Typography

Self-hosted via `@fontsource` — offline-safe, no Google Fonts CDN (GDPR).

| Role | Token | Font |
| --- | --- | --- |
| Headings · wordmark · column labels | `--font-heading` | **Chakra Petch** 500/600 |
| Body · UI | `--font-body` | **Schibsted Grotesk** 400/500 |
| Numbers · counters · km | `--font-mono` | **IBM Plex Mono** 400/500 |

### Type scale

| Token | Value | Use |
| --- | --- | --- |
| `--text-xs` | `11px` | Chips, meta |
| `--text-sm` | `12px` | Counters, km readouts |
| `--text-base` | `14px` | Body, card titles |
| `--text-md` | `15px` | Emphasized body |
| `--text-lg` | `18px` | Section headings |
| `--text-xl` | `22px` | Page headings |
| `--text-2xl` | `27px` | Wordmark |

### Weights

| Token | Value |
| --- | --- |
| `--weight-regular` | `400` |
| `--weight-medium` | `500` |
| `--weight-semibold` | `600` |

---

## Spacing

4px base scale, values in `rem`.

| Token | Value | px |
| --- | --- | --- |
| `--space-1` | `0.25rem` | 4px |
| `--space-2` | `0.5rem` | 8px |
| `--space-3` | `0.75rem` | 12px |
| `--space-4` | `1rem` | 16px |
| `--space-5` | `1.25rem` | 20px |
| `--space-6` | `1.5rem` | 24px |
| `--space-8` | `2rem` | 32px |
| `--space-10` | `2.5rem` | 40px |
| `--space-12` | `3rem` | 48px |
| `--space-16` | `4rem` | 64px |

---

## Border radius

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | `6px` | Tags, dots |
| `--radius-md` | `8px` | Buttons |
| `--radius-lg` | `10px` | Cards |
| `--radius-xl` | `12px` | Panels |

---

## Z-index

| Token | Value |
| --- | --- |
| `--z-base` | `0` |
| `--z-raised` | `10` |
| `--z-dropdown` | `100` |
| `--z-sticky` | `200` |
| `--z-overlay` | `300` |
| `--z-modal` | `400` |
| `--z-toast` | `500` |
| `--z-tooltip` | `600` |

---

## Transitions

| Token | Value |
| --- | --- |
| `--duration-fast` | `100ms` |
| `--duration-base` | `200ms` |
| `--duration-slow` | `300ms` |
| `--easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--easing-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--easing-out` | `cubic-bezier(0, 0, 0.2, 1)` |

---

## Token structure

```
tokens/
  color.primitive.json   ← raw palette (brass, gray, green, amber, red)
  color.semantic.json    ← semantic aliases (color-*, brand-*, status-*, tag-*)
  typography.json        ← font stacks + type scale + weights
  spacing.json           ← space-* scale
  border-radius.json     ← radius-*
  z-index.json           ← z-*
  transition.json        ← duration-* + easing-*
  shadow.json            ← shadow-*
```

Built with [Style Dictionary](https://styledictionary.com). Outputs `dist/tokens.css` and `dist/tokens.js`.

```bash
npm run build       # rebuild dist/
npm test            # verify output matches snapshots
npm run test:update # update snapshots after intentional changes
```
