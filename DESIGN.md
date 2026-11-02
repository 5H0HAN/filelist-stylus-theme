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
surface: charcoal panels, warm paper text, and amber wayfinding. Browse results
use a library-style card grid; torrent detail pages emphasize the poster
already supplied by Filelist. The site's content, links, and existing actions
remain recognizable.

**Key Characteristics:**
- Amber highlights only the browse action, links, and keyboard focus.
- Browse cards give release names priority, with category art and compact stats.
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

Keep Filelist's page structure and navigation. The browse search spans the
content width; native category and sort controls wrap naturally. Results use an
auto-fitting card grid and become a single column on small screens. Torrent
details keep Filelist's own poster beside the description on desktop and center
it above the content on mobile. Do not fetch poster art or metadata for browse
cards.

## Elevation & Depth

Panels and controls use thin borders. Browse cards get a soft shadow and a small
lift on hover; amber focus outlines show keyboard position. Keep the depth
subtle so the release art and names remain the focus.

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

### Browse library cards

Prioritize the release name and native category image. Place the existing
tracker stats in compact, labeled tiles. Cards keep keyboard focus visible and
collapse to one column on narrow screens.

### Torrent poster

Use the poster already present on Filelist's detail page as the main visual.
Give it a portrait crop and enough width to read clearly beside the native
metadata, then stack it above the content on mobile. Never substitute a remote
poster lookup.

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
