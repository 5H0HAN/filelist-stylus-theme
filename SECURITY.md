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
result rows through their details links and reads their rendered text only
while the user types into the local filter. That query stays in the tab. It
does not submit Filelist forms, automate downloads, read cookies or
credentials, or query private endpoints.

The script reads the current text selection only when the user presses **Use
selected text**. The selection is copied into a visible field for review. It
opens IMDb or TMDB in a new tab only after **Search**, and opens Google
Translate with reviewed text only after **Translate**. These are top-level
HTTPS navigations with `noopener` and `noreferrer`; there are no fetch/XHR
calls or background lookups. Search and translation text is included in the
destination URL and can appear in browser history or service logs. Do not send
private or sensitive text.

Report a security concern through a private GitHub Security Advisory after the
repository is published, or contact the repository owner directly.
