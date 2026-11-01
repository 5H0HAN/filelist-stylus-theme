// ==UserScript==
// @name         Filelist Night Archive Tools
// @namespace    https://github.com/5H0HAN/filelist-stylus-theme
// @version      0.1.0
// @description  Optional in-page metadata search and selected-text translation tools for Filelist.
// @match        https://filelist.io/*
// @run-at       document-idle
// @noframes
// @grant        none
// ==/UserScript==

(() => {
  "use strict";

  if (window.top !== window.self || document.getElementById("filelist-night-archive-tools")) return;

  const providers = Object.freeze({
    imdb: { name: "IMDb", url: "https://www.imdb.com/find/", parameter: "q" },
    tmdb: { name: "TMDB", url: "https://www.themoviedb.org/search", parameter: "query" }
  });

  const host = document.createElement("div");
  host.id = "filelist-night-archive-tools";
  const shadow = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = `
    :host { all: initial; color-scheme: dark; --na-canvas: #111411; --na-surface: #191e19; --na-raised: #222920; --na-hover: #2a3026; --na-border: #394238; --na-text: #eee9dc; --na-muted: #b9bdaf; --na-amber: #f0bd69; --na-focus: #ffd18a; font: 14px/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    * { box-sizing: border-box; }
    .launcher { position: fixed; z-index: 2147483646; right: 1rem; bottom: 1rem; width: auto; min-width: 7.5rem; }
    .panel { position: fixed; z-index: 2147483646; right: 1rem; bottom: 4.25rem; width: min(23rem, calc(100vw - 2rem)); max-height: min(80vh, 46rem); overflow: auto; padding: 1rem; border: 1px solid var(--na-border); border-radius: 9px; background: var(--na-surface); color: var(--na-text); }
    [hidden] { display: none !important; }
    h2 { margin: 0 0 .75rem; color: var(--na-focus); font-size: 14px; }
    p { margin: .5rem 0; color: var(--na-muted); }
    label { display: block; margin: .7rem 0 .3rem; color: var(--na-text); font-weight: 650; }
    input, select, textarea, button { width: 100%; min-height: 2.75rem; border: 1px solid var(--na-border); border-radius: 7px; background: var(--na-canvas); color: var(--na-text); font: inherit; }
    input, select, textarea { padding: .55rem .65rem; }
    textarea { min-height: 6rem; resize: vertical; }
    button { padding: .55rem .7rem; background: var(--na-raised); cursor: pointer; font-weight: 650; }
    button:hover { border-color: var(--na-amber); background: var(--na-hover); }
    button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid var(--na-focus); outline-offset: 2px; }
    .primary { border-color: var(--na-amber); background: var(--na-amber); color: var(--na-canvas); }
    .primary:hover { border-color: var(--na-focus); background: var(--na-focus); color: var(--na-canvas); }
    .actions { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; margin-top: .55rem; }
    .actions.single { grid-template-columns: 1fr; }
    .status { min-height: 1.5em; color: #ffd18a; }
    .disclosure { padding: .55rem; border: 1px solid var(--na-border); border-radius: 7px; background: var(--na-raised); }
    @media (max-width: 520px) {
      .launcher { right: .65rem; bottom: .65rem; }
      .panel { right: .65rem; bottom: 4rem; width: calc(100vw - 1.3rem); }
    }
  `;

  const launcher = document.createElement("button");
  launcher.className = "launcher";
  launcher.type = "button";
  launcher.textContent = "Page tools";
  launcher.setAttribute("aria-expanded", "false");
  launcher.setAttribute("aria-controls", "filelist-tools-panel");

  const panel = document.createElement("section");
  panel.id = "filelist-tools-panel";
  panel.className = "panel";
  panel.setAttribute("aria-label", "Optional page tools");
  panel.hidden = true;

  const heading = document.createElement("h2");
  heading.textContent = "Filelist page tools";
  const searchDisclosure = document.createElement("p");
  searchDisclosure.className = "disclosure";
  searchDisclosure.textContent = "IMDb or TMDB receives the title below in a URL only after you press Search.";

  const searchLabel = document.createElement("label");
  searchLabel.htmlFor = "flna-search-query";
  searchLabel.textContent = "Title or name to search";
  const searchInput = document.createElement("input");
  searchInput.id = searchLabel.htmlFor;
  searchInput.type = "search";
  searchInput.maxLength = 300;
  searchInput.autocomplete = "off";
  searchInput.placeholder = "Enter a title";

  const providerLabel = document.createElement("label");
  providerLabel.htmlFor = "flna-search-provider";
  providerLabel.textContent = "Metadata provider";
  const providerSelect = document.createElement("select");
  providerSelect.id = providerLabel.htmlFor;
  for (const [value, provider] of Object.entries(providers)) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = provider.name;
    providerSelect.append(option);
  }

  const searchUseSelection = document.createElement("button");
  searchUseSelection.type = "button";
  searchUseSelection.textContent = "Use selected text";
  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.className = "primary";
  searchButton.textContent = "Search";
  const searchStatus = document.createElement("p");
  searchStatus.className = "status";
  searchStatus.setAttribute("role", "status");
  searchStatus.setAttribute("aria-live", "polite");

  const translationHeading = document.createElement("h2");
  translationHeading.textContent = "Translate selected text";
  const translationDisclosure = document.createElement("p");
  translationDisclosure.className = "disclosure";
  translationDisclosure.textContent = "Google Translate receives the reviewed text in a URL only after you press Translate. Avoid private text.";

  const translationLabel = document.createElement("label");
  translationLabel.htmlFor = "flna-translation-text";
  translationLabel.textContent = "Review visible text before sending";
  const translationText = document.createElement("textarea");
  translationText.id = translationLabel.htmlFor;
  translationText.maxLength = 12_000;
  translationText.placeholder = "Select text on the page and choose Use selected text, or type text here.";

  const languageLabel = document.createElement("label");
  languageLabel.htmlFor = "flna-target-language";
  languageLabel.textContent = "Translate into";
  const languageSelect = document.createElement("select");
  languageSelect.id = languageLabel.htmlFor;
  for (const [value, name] of [["en", "English"], ["bn", "Bengali"], ["de", "German"], ["es", "Spanish"], ["fr", "French"], ["ja", "Japanese"], ["pt", "Portuguese"], ["zh-CN", "Chinese (Simplified)"]]) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = name;
    languageSelect.append(option);
  }

  const translationUseSelection = document.createElement("button");
  translationUseSelection.type = "button";
  translationUseSelection.textContent = "Use selected text";
  const translateButton = document.createElement("button");
  translateButton.type = "button";
  translateButton.className = "primary";
  translateButton.textContent = "Translate";
  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.textContent = "Copy text";
  const translationStatus = document.createElement("p");
  translationStatus.className = "status";
  translationStatus.setAttribute("role", "status");
  translationStatus.setAttribute("aria-live", "polite");

  const appendChildren = (parent, children) => parent.append(...children);
  appendChildren(panel, [
    heading, searchDisclosure, searchLabel, searchInput, providerLabel, providerSelect,
    createActions([searchUseSelection, searchButton]), searchStatus,
    translationHeading, translationDisclosure, translationLabel, translationText,
    languageLabel, languageSelect, createActions([translationUseSelection, translateButton]),
    createActions([copyButton]), translationStatus
  ]);
  shadow.append(style, launcher, panel);
  document.documentElement.append(host);

  function createActions(buttons) {
    const group = document.createElement("div");
    group.className = "actions";
    if (buttons.length === 1) group.classList.add("single");
    group.append(...buttons);
    return group;
  }

  launcher.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    launcher.setAttribute("aria-expanded", String(!panel.hidden));
    if (!panel.hidden) searchInput.focus();
  });

  panel.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      panel.hidden = true;
      launcher.setAttribute("aria-expanded", "false");
      launcher.focus();
    }
  });

  function captureSelection(target, status) {
    const selected = window.getSelection()?.toString().trim() ?? "";
    if (!selected) {
      status.textContent = "Select visible page text first, or type it into the field.";
      return;
    }
    target.value = selected.slice(0, target.maxLength);
    target.focus();
    status.textContent = selected.length > target.maxLength
      ? `Selection has ${selected.length.toLocaleString()} characters; only the first ${target.maxLength.toLocaleString()} were captured. Review and edit before submitting.`
      : `Captured ${selected.length.toLocaleString()} characters. Review before submitting.`;
  }

  searchUseSelection.addEventListener("click", () => captureSelection(searchInput, searchStatus));
  translationUseSelection.addEventListener("click", () => captureSelection(translationText, translationStatus));
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
  });

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    const provider = providers[providerSelect.value];
    if (!provider) {
      searchStatus.textContent = "Choose IMDb or TMDB before searching.";
      return;
    }
    if (!query) {
      searchStatus.textContent = "Enter a title or use selected text before searching.";
      searchInput.focus();
      return;
    }

    const destination = new URL(provider.url);
    destination.searchParams.set(provider.parameter, query);
    window.open(destination.href, "_blank", "noopener,noreferrer");
    searchStatus.textContent = `Opening ${provider.name}. Only the text in this search box is sent. If no tab opens, check your browser's popup settings.`;
  });

  translateButton.addEventListener("click", () => {
    const text = translationText.value.trim();
    if (!text) {
      translationStatus.textContent = "Select visible page text or type text into the box first.";
      translationText.focus();
      return;
    }

    const destination = new URL("https://translate.google.com/");
    destination.searchParams.set("sl", "auto");
    destination.searchParams.set("tl", languageSelect.value);
    destination.searchParams.set("text", text);
    destination.searchParams.set("op", "translate");
    if (destination.href.length > 6_000) {
      translationStatus.textContent = "This passage is too long for a safe URL. Use Copy text and paste it into your chosen translator.";
      return;
    }

    window.open(destination.href, "_blank", "noopener,noreferrer");
    translationStatus.textContent = "Opening Google Translate with the reviewed text. If no tab opens, check your browser's popup settings.";
  });

  copyButton.addEventListener("click", async () => {
    const text = translationText.value.trim();
    if (!text) {
      translationStatus.textContent = "Select visible text or type text into the box first.";
      translationText.focus();
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      translationStatus.textContent = "Copied locally. No text was sent to a translation service.";
    } catch {
      translationText.focus();
      translationText.select();
      translationStatus.textContent = "Clipboard access is unavailable. The text is selected for manual copying.";
    }
  });
})();
