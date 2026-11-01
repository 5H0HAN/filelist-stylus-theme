# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Stylus UserCSS (`.user.css`), as requested. The initial release is CSS only.

## Users

Filelist users who install the theme in Stylus.

## Product Purpose

Make Filelist easier to scan and use, with the first release focused on the site UI and existing browse search and filters.

## Positioning

A user-installed theme improves Filelist's existing interface without changing the site's behavior or requiring changes to Filelist itself.

## Operating Context

The theme runs in a user's browser through the Stylus extension on Filelist pages. Users keep using Filelist's own search, category, sort, and forum controls.

## Capabilities and Constraints

The initial theme may restyle existing site controls and content. CSS cannot create working external search, metadata lookup, translation, or new forum controls. Keep the UserCSS visual-only. Any later companion feature must be separately installed, start from an explicit user action, disclose any off-site query or selected text, use documented public sources, and stay within each service's terms. Do not read credentials or session data, bypass authentication, submit tracker actions, or automatically fetch member-only content.

## Product Principles

- Preserve Filelist's existing actions and information.
- Make search controls and result details easier to scan.
- Keep the theme narrowly scoped to Filelist and free of scripts, tracking, and external requests.
- Keep future integrations separate and opt in.
