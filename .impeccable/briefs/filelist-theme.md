# Filelist theme

## Scope

Stylus UserCSS plus an optional, narrowly scoped userscript for the Filelist
website. Both render their controls inside Filelist. Mode: Operate.

## Audience and task

Filelist users who want to scan browse results and use the site's existing
search, category, sort, and forum controls more comfortably.

## Constraints

Preserve Filelist content, links, and existing behavior. Keep the UserCSS
limited to `https://filelist.io/`, with no remote resources or tracking. Keep
the optional userscript limited to the exact Filelist host, the current
selection or user-entered text, and direct user actions. No background lookup,
automatic translation, tracker search, or download action.

## Direction contract

**THESIS:** A quiet night-reading surface makes dense browse results easier to
compare. Keep the site's existing actions and information.

**OWN-WORLD:** Deep charcoal surfaces, warm parchment text, and amber used for
links, focus, and the primary search action. A restrained serif heading gives
the archive its voice; compact data stays legible through clear row separation
and tabular numerals.

**STORY:** Users can find the existing search and filter controls quickly,
refine their query with Filelist's own options, then scan result metadata.

**FIRST VIEWPORT:** Keep the site header and navigation recognizable. Give the
browse form a full-width, wrapped control row above the results; use calm table
headers, readable row spacing, and visible keyboard focus.

**FORM:** Code-led UserCSS and one optional userscript. New actions stay inside
Filelist, keep local filtering on the page, show external destinations, send
data only after a direct user action, and use fixed public metadata/translation
providers.

**FINISH:** Preserve keyboard access, narrow-screen layouts, and the native
Filelist controls. Document the exact userscript permissions and text flows.
