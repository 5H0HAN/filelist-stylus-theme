# Security and privacy

## UserCSS

`filelist.user.css` is CSS only. It has no scripts, remote assets, analytics,
storage, API calls, or network requests.

## Optional userscript

`filelist.user.js` is an optional browser userscript that matches only
`https://filelist.io/*`. Its manager needs permission to run and modify pages
on that host; it declares no additional userscript-manager API grants or
network connect permissions. It adds a collapsed launcher after page load, but
does not scan the page for titles or posts, submit Filelist forms, automate
downloads, read cookies or credentials, or query private endpoints.

The script reads the current text selection only when the user presses **Use
selected text**. The selection is copied into a visible field for review. It
sends the reviewed field value to IMDb or TMDB only after
**Search**, and reviewed text to Google Translate only after **Translate**.
These are top-level HTTPS navigations with `noopener` and `noreferrer`; there
are no fetch/XHR calls or background lookups. Search and translation text is
included in the destination URL and can appear in browser history or service
logs. Do not send private or sensitive text.

Report a security concern through a private GitHub Security Advisory after the
repository is published, or contact the repository owner directly.
