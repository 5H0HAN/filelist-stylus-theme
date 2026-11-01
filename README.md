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
- Restyles Filelist's native search, category, sort, and forum controls; it does
  not submit searches or take actions for you.
- Does not bypass authentication, site rules, or access controls.

Search-engine and public metadata links, translation, and expanded forum tools
are future ideas. CSS cannot implement those functions; any later companion
script or extension must be separately opt-in, user-triggered, and limited to
public sources and the permissions it needs.

## Development

Edit `filelist.user.css` and reopen or reinstall it in Stylus to load changes.
Keep selectors scoped to Filelist and avoid scripts, credentials, trackers, or
unnecessary external requests.

## License

MIT. See [LICENSE](LICENSE).
