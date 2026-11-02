# Filelist Night Archive

A charcoal and amber theme for Filelist, paired with an optional in-page tool
panel for local browse filtering, public title search, metadata lookup, and
user-selected text translation.

Browse results use a responsive library-style card grid with Filelist's native
category artwork, release names, and tracker stats. Torrent detail pages give
the poster already supplied by Filelist more room. Browse rows do not provide
poster art, so the theme does not make extra detail-page requests or fetch art
from TMDB or another service.

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

- Search a title or filename you enter or explicitly select with Google,
  DuckDuckGo, Bing, IMDb, TMDB, the Internet Archive, or Academic Torrents.
  Google scoped searches are also available for public FOSS Torrents and Linux
  distribution pages.
- Filter Filelist's currently rendered browse results locally by visible text;
  the filter query stays on the page and does not change Filelist's native
  search, category, or sort controls.
- Select forum text, review it in the panel, then choose whether to send it to
  Google Translate in a new tab or copy it locally.
- Search and translation open only after you press their buttons. The
  destination and data flow are disclosed in the panel.

The search options use public web/catalog pages only. They do not query tracker
APIs, scrape pages, access private indexes, or automate downloads. Translation
is user-selected and never runs in the background. Search or translation text
is sent in a URL to the selected service; avoid sending private or sensitive
text.

## Scope and privacy

- The UserCSS has no scripts, external assets, analytics, storage, or network
  requests.
- The optional userscript matches only `https://filelist.io/*`, declares no
  privileged userscript-manager APIs, and makes no external request until you
  press Search or Translate. The manager still needs the exact-host page
  permission described above.
- On browse pages, the local filter reads rendered `.torrentrow` result text
  (or details-linked result table rows on other layouts) as you type; the query
  stays in that tab.
- On other pages, the current text selection is read only after you press
  **Use selected text** and is shown for review before any external action.
  The script does not read cookies, credentials, hidden fields, or session
  state.
- Search and translation use fixed HTTPS destinations, URL-encoded text, and
  new tabs with `noopener` and `noreferrer`. Search terms can appear in
  browser history and service logs.
- Filelist retains control of its native search, filters, forum actions, and
  links.

## License

MIT. See [LICENSE](LICENSE).
