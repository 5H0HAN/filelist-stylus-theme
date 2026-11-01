# Filelist Night Archive

A dark, amber-accented Stylus theme for Filelist. The first release improves
the site's existing browse controls, result tables, and reading surfaces while
keeping Filelist's own actions and links intact.

## Install

1. Open the Stylus manager and click **+**.
2. Enable **Write new style as UserCSS** in the editor.
3. Paste the contents of `filelist.user.css` and save.
4. Confirm the style is scoped to `https://filelist.io/`.

## Scope and privacy

- CSS only: no JavaScript, analytics, external fonts, remote images, or network
  requests.
- Applies only to pages under `https://filelist.io/`.
- Improves Filelist's existing browse form and result table while preserving
  the site's native search and filter submission.
- Does not bypass authentication, site rules, or access controls.

## Future integrations

External search, public metadata, translation, and richer forum views do not
belong in this UserCSS. Any companion add-on must be separate and opt in. It
must act only after a user gesture, disclose the destination before sending a
title or selected text off-site, use documented public sources, and request
only the permissions it needs. It must not read cookies or credentials,
automatically fetch member-only content, or submit Filelist actions.

## Development

Edit `filelist.user.css` and reopen or reinstall it in Stylus to load changes.
Keep selectors scoped to Filelist and avoid scripts, credentials, trackers, or
unnecessary external requests.

## License

MIT. See [LICENSE](LICENSE).
