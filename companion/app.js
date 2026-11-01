const providers = {
  google: {
    label: "Google",
    action: "https://www.google.com/search",
    queryName: "q"
  },
  bing: {
    label: "Bing",
    action: "https://www.bing.com/search",
    queryName: "q"
  },
  imdb: {
    label: "IMDb",
    action: "https://www.imdb.com/find",
    queryName: "q",
    scopeName: "s",
    scopeValue: "all"
  },
  tmdb: {
    label: "TMDB",
    action: "https://www.themoviedb.org/search",
    queryName: "query"
  }
};

const searchForm = document.querySelector("#search-form");
const titleQuery = document.querySelector("#title-query");
const providerSelect = document.querySelector("#provider");
const imdbScope = document.querySelector("#imdb-scope");
const searchStatus = document.querySelector("#search-status");

function setSearchProvider() {
  const provider = providers[providerSelect.value];
  if (!provider) return;

  searchForm.action = provider.action;
  titleQuery.name = provider.queryName;
  imdbScope.disabled = !provider.scopeName;
  searchStatus.textContent = `${provider.label} receives your query when you submit.`;
}

providerSelect.addEventListener("change", setSearchProvider);
setSearchProvider();

const translationText = document.querySelector("#translation-text");
const copyTextButton = document.querySelector("#copy-text");
const translationStatus = document.querySelector("#translation-status");

copyTextButton.addEventListener("click", async () => {
  const text = translationText.value.trim();
  if (!text) {
    translationStatus.textContent = "Paste visible text here first.";
    translationText.focus();
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    translationStatus.textContent = "Copied to your clipboard. Paste it into Google Translate when you are ready.";
  } catch {
    translationText.focus();
    translationText.select();
    translationStatus.textContent = "Clipboard access is unavailable. The text is selected so you can copy it manually.";
  }
});
