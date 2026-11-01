# Public search and translation helper

## Scope

Optional standalone HTML helper, separate from Stylus. Mode: Operate.

## Audience and task

Filelist users who want to enter a title or filename and deliberately send it
to one public search or metadata provider, or copy visible text for translation.

## Constraints

- Do not read Filelist pages, cookies, credentials, or session data.
- Do not make background requests or persist queries.
- Search and metadata queries go to the selected provider only after form submit.
- Translation text stays local until copied; the user pastes it into the provider.
- The research torrent index is clearly identified as an academic dataset source.

## Direction contract

**THESIS:** A small local search desk gives each external lookup a visible,
deliberate destination.

**OWN-WORLD:** Inherit Night Archive's charcoal surfaces, parchment text, and
amber action color. Keep the interface quiet and task-first.

**STORY:** Enter a title, choose one provider, review the disclosure, and submit.
For translation, paste visible text, copy it locally, then paste it into the
chosen service yourself.

**FIRST VIEWPORT:** Show the title search first, with one query field, one
provider selector, and one submit action. Keep the translation workflow below it.

**FORM:** Static HTML, local CSS, and a small local script. No packages, APIs,
host permissions, storage, content scripts, analytics, or remote assets.

**FINISH:** Search and translation data flows are stated beside their actions;
keyboard focus, small screens, and empty input have clear behavior.
