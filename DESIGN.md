---
name: Filelist Night Archive
description: A calm dark reading surface for Filelist.
colors:
  canvas: "#111411"
  surface: "#191e19"
  raised: "#222920"
  hover: "#2a3026"
  border: "#394238"
  text: "#eee9dc"
  muted: "#b9bdaf"
  amber: "#f0bd69"
  amber-bright: "#ffd18a"
typography:
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    lineHeight: 1.25
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
rounded:
  control: "7px"
  panel: "9px"
spacing:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "#241b10"
    rounded: "{rounded.control}"
    padding: "{spacing.sm} {spacing.md}"
    height: "2.5rem"
  button-secondary:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "{spacing.sm} {spacing.md}"
    height: "2.5rem"
  input-search:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "{spacing.sm} {spacing.md}"
    height: "2.5rem"
---

## Overview

**Creative North Star: "Night Archive"**

Filelist is a dense, task-focused site. Night Archive gives it a quiet reading
surface: charcoal panels, warm paper text, and amber wayfinding. The site's
content, links, and existing actions remain recognizable.

**Key Characteristics:**
- Amber highlights only the browse action, links, and keyboard focus.
- Dense result data uses clear row separators and tabular numerals.
- Serif headings add a restrained editorial note; the interface stays compact.
- No external assets or motion are needed to carry the visual identity.

## Colors

Use `canvas` for the page, `surface` for browse controls and quoted content,
and `raised` for table headers and secondary controls. `text` carries primary
content; `muted` is reserved for secondary information. `amber` and
`amber-bright` mark links, the browse action, and focus. Keep the amber accents
against dark surfaces for clear contrast.

## Typography

Body text uses the platform sans stack at 14px with 1.5 line height. Headings
use Georgia or the browser's Times fallback, retaining Filelist's existing
semantic sizes and weights. Code uses the platform monospace stack. Tables use
tabular numerals for easier comparison.

## Layout

Keep Filelist's page structure and navigation. The browse form wraps naturally,
with a flexible text or search field and filters that remain usable on narrow
screens. On touch-sized screens, controls reach 44px high and compact filters
share a row when space allows. Keep result tables inside the main content column
and allow horizontal scrolling on small screens.

## Elevation & Depth

Surfaces stay flat. A thin border separates panels, controls, and table rows;
amber focus outlines show keyboard position. Do not stack decorative shadows
onto bordered surfaces.

## Shapes

Use 7px corners for controls and 9px for larger panels. Keep controls at least
2.5rem tall, increasing them to 2.75rem on narrow screens, and use the shared
half-rem, three-quarter-rem, and one-rem spacing steps.

## Components

### Primary action

Amber background, dark text, 7px corners, and a brighter hover state. Use for
Filelist's existing browse/search submission only.

### Secondary action

Raised charcoal surface with a quiet border and light text. Reset and utility
actions stay secondary.

### Search controls

Keep the site's existing input, category, match-field, sort, and direction
controls. The query field expands first; controls wrap without changing form
submission or search behavior.

### Results table

Muted row rules, restrained alternating rows, and a subtle hover or
keyboard-focus surface make long lists easier to follow without turning every
row into a card. On narrow screens, keep columns readable and let the result
table scroll horizontally.

## Do's and Don'ts

### Do

- Do preserve native Filelist links, forms, and labels.
- Do keep focus visible and respect reduced-motion preferences.
- Do scope future script-based features separately and make them opt in.

### Don't

- Don't add JavaScript, remote fonts, images, analytics, or automatic requests
  to this UserCSS.
- Don't use CSS-generated text as a substitute for working controls.
- Don't style every site action as a primary action.
