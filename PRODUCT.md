# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Stylus UserCSS (`.user.css`) for the site theme, plus a standalone local HTML
helper for explicit public search and copy-based translation.

## Users

Filelist users who install the theme in Stylus.

## Product Purpose

Make Filelist easier to scan and use, with the first release focused on the site UI and existing browse search and filters.

## Positioning

A user-installed theme improves Filelist's existing interface without changing the site's behavior or requiring changes to Filelist itself.

## Operating Context

The theme runs in a user's browser through the Stylus extension on Filelist pages. The optional helper runs separately and never reads the Filelist page. Users keep using Filelist's own search, category, sort, and forum controls.

## Capabilities and Constraints

The UserCSS is visual-only. The helper allows manual title searches on public search/metadata sites and copy-based translation; it makes no request until the user submits a search or opens a provider link. Translation text stays local unless the user copies it and pastes it into that provider. Any later page-aware feature must be separately installed and start from an explicit user action. Search and metadata use documented public sources; translation and forum views may use only content already rendered in the user's authorized page. Disclose any text sent off-site. Do not read credentials or session data, query private endpoints, bypass authentication, submit tracker actions, or crawl pages in the background.

## Product Principles

- Preserve Filelist's existing actions and information.
- Make search controls and result details easier to scan.
- Keep the theme narrowly scoped to Filelist and free of scripts, tracking, and external requests.
- Keep future integrations separate and opt in.
