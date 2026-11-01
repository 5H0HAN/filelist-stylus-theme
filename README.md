# Filelist Night Archive

A charcoal and amber theme for Filelist, paired with an optional in-page tool
panel for title metadata lookup and user-selected text translation.

## Install the theme

1. Open Stylus and choose **Write new style**.
2. Paste [`filelist.user.css`](filelist.user.css) and save it.
3. Confirm the style applies only to `https://filelist.io/`.

## Optional in-page tools

Installing the optional userscript adds a collapsed tool-panel launcher
inside Filelist. The code is in [`filelist.user.js`](filelist.user.js), not a
separate webpage. Install it through a compatible userscript manager by opening the
[raw script](https://raw.githubusercontent.com/5H0HAN/filelist-stylus-theme/main/filelist.user.js).
Review the source and its `https://filelist.io/*` match before enabling it. The
manager must be allowed to read and modify pages on that exact host; grant no
broader site access. Stylus itself supports the CSS theme; it does not run
this script.

- Search a title you enter or explicitly select on the page with IMDb or TMDB;
  results open in a new tab.
- Filter the currently rendered browse rows by visible text; this query stays
  on the page and does not change Filelist's native search or filters.
- Select forum text, review it in the panel, then choose whether to send it to
  Google Translate in a new tab or copy it locally.
- Search and translation open only after you press their buttons. The
  destination and data flow are disclosed in the panel.

This project does not search torrent trackers, automate downloads, or
translate forum posts in the background. Search or translation text is sent in
a URL to the selected service; avoid sending private or sensitive text.

## Scope and privacy

- The UserCSS has no scripts, external assets, analytics, storage, or network
  requests.
- The optional userscript matches only `https://filelist.io/*`, declares no
  privileged userscript-manager APIs, and makes no request until you press
  Search or Translate. The manager still needs the exact-host page permission
  described above.
- On browse pages, the local filter reads the rendered text of result rows
  only while you type; the query stays in that tab.
- On other pages, the current text selection is read only after you press
  **Use selected text** and is shown for review before any external action.
  The script does not read cookies, credentials, hidden fields, or session
  state.
- Filelist retains control of its native search, filters, forum actions, and
  links.

## License

MIT. See [LICENSE](LICENSE).
