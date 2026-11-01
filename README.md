# Filelist Night Archive

A dark, amber-accented Stylus theme for Filelist. The first release improves
the site's existing browse controls, result tables, and reading surfaces while
keeping Filelist's own actions and links intact.

## Install

1. Open the Stylus manager and click **+**.
2. Enable **Write new style as UserCSS** in the editor.
3. Paste the contents of `filelist.user.css` and save.
4. Confirm the style is scoped to `https://filelist.io/`.

## Optional public search helper

Download the repository and open [`companion/index.html`](companion/index.html)
in a browser to search one provider at a time or copy visible text for
translation. It does not read the Filelist page. A submitted title goes to the
selected search provider; copied translation text stays local until you paste
and submit it at Google Translate.

## Scope and privacy

- The Stylus UserCSS is CSS only: no JavaScript, analytics, external fonts,
  remote images, or network requests.
- The theme applies only to pages under `https://filelist.io/`.
- It improves Filelist's existing browse form and result table while preserving
  the site's native search and filter submission.
- Does not bypass authentication, site rules, or access controls.

## Future integrations

Page-aware search, metadata, translation, and richer forum views remain future
ideas for a separate opt-in add-on. Any such feature must use documented public
sources, act only after a user gesture, disclose what leaves the browser, and
avoid credentials, private endpoints, background crawling, and Filelist actions.
See [SECURITY.md](SECURITY.md).

## Development

Edit `filelist.user.css` and reopen or reinstall it in Stylus to load changes.
Keep selectors scoped to Filelist and avoid scripts, credentials, trackers, or
unnecessary external requests.

## License

MIT. See [LICENSE](LICENSE).
