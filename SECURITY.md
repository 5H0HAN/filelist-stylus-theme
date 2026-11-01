# Security

This project is a CSS-only Stylus UserCSS. It contains no scripts, remote
assets, analytics, or network requests. Do not add credentials, session data,
or private tracker content to the repository.

For a security concern, open a private GitHub security advisory after this
repository is published, or contact the repository owner directly.

## Future integrations

Keep any search, metadata, or translation companion separate from this
UserCSS. Require a direct user action for every external lookup or translation.
Use documented public endpoints for search and metadata, and show the provider
and payload before sending a title or selected text off-site.

A translation or forum view may use only content Filelist has already rendered
in the user's authorized page. It must not query private endpoints, crawl other
pages, extract hidden fields, or replay the user's authenticated requests. Do
not read or store cookies, credentials, or session tokens, and do not submit
Filelist forms or automate downloads.
