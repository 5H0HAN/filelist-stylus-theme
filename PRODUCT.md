# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Stylus UserCSS for presentation and an optional userscript that adds a small
tool panel inside Filelist pages.

## Users

Filelist users who want a more legible interface and deliberate public metadata
lookup or selected-text translation.

## Product Purpose

Improve browse, forum, thread, and torrent-detail reading while preserving
Filelist's native site actions.

## Operating Context

The UserCSS applies to `https://filelist.io/`. The optional userscript matches
`https://filelist.io/*` only and renders its panel inside those pages. Users
continue to use Filelist's native search, category, sort, forum, and torrent
controls.

## Capabilities and Constraints

The UserCSS is visual only. The userscript filters rendered browse-result rows
locally, offers user-triggered searches on web engines, public catalogs,
IMDb/TMDB, and open software/research indexes, and sends user-entered or
currently selected text to Google Translate only after a direct click.
External searches and translation open in a new tab. It does not submit
Filelist forms, call tracker APIs, scrape results, automate downloads,
translate in the background, or make background requests. It does not query
private endpoints or read credentials, cookies, hidden fields, or session
state. It uses no external scripts, analytics, or persistent storage.

## Product Principles

- Preserve Filelist's existing actions and information.
- Keep new controls in the Filelist page and disclose external destinations.
- Send only the text the user reviews and explicitly submits.
- Keep the theme scoped to Filelist and free of remote resources.
- Use only poster artwork already rendered by Filelist; browse cards use its
  native category art and do not trigger additional detail-page or metadata
  requests.
