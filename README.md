# @louisbis/pitlog-tokens

Design tokens for the Pitlog design system, built with [Style Dictionary](https://amzn.github.io/style-dictionary/).

## Install

```bash
npm install @louisbis/pitlog-tokens
```

## Usage

Import the generated CSS in your entry point:

```js
import '@louisbis/pitlog-tokens/dist/tokens.css'
```

All tokens are exposed as CSS custom properties on `:root`:

```css
background: var(--background-base);
color: var(--text-primary);
border: 1px solid var(--border-default);
```

Or consume the JS tokens directly:

```js
import { BackgroundBase } from '@louisbis/pitlog-tokens/dist/tokens.js'
```

## Token structure

```
tokens/
  color.primitive.json   ← raw palette (slate, orange, red, amber, green)
  color.semantic.json    ← semantic aliases (background, text, accent, status)
  typography.json        ← font families
  shadow.json            ← elevation shadows
```

Semantic tokens reference primitives — the relationship is preserved in the CSS output via `var()`.

## Build

```bash
npm run build
```

Outputs `dist/tokens.css` and `dist/tokens.js`.
