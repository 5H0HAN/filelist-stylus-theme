# Security and privacy

## UserCSS

`filelist.user.css` is CSS only. It has no scripts, remote assets, analytics,
storage, API calls, or network requests.

## Optional userscript

`filelist.user.js` is an optional browser userscript that matches only
`https://filelist.io/*`. Its manager needs permission to read and modify pages
on that host. This permission covers every page on Filelist, even though the
script only reads rendered browse-row text during local filtering and the
current text selection after an explicit button press. It declares no
additional userscript-manager API grants or network connect permissions. It
adds a collapsed launcher after page load. On `browse.php`, it identifies
rendered `.torrentrow` elements by their details links (with a table-row
fallback) and reads their rendered text as the user types into the local
filter. That query stays in the tab. It does not submit Filelist forms,
automate downloads, read cookies or credentials, or query private endpoints.

The script reads the current text selection only when the user presses **Use
selected text**. The selection is copied into a visible field for review. It
opens a fixed provider search destination only after **Search**. Choices
include general search engines, IMDb, TMDB, the Internet Archive, Academic
Torrents' public browse search, and Google site-scoped searches for FOSS
Torrents or LinuxTracker pages. It opens Google Translate with reviewed text
only after **Translate**. These are top-level HTTPS navigations with
`noopener` and `noreferrer`; there are no fetch/XHR calls or background
lookups. The script does not query tracker APIs, scrape results, or initiate
downloads. Search and translation text is included in the destination URL and
can appear in browser history or service logs. Do not send private or
sensitive text.

Report a security concern through a private GitHub Security Advisory after the
repository is published, or contact the repository owner directly.
