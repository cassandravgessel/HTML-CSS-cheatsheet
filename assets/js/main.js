const menuButton = document.querySelector(".nav-toggle");
const weekNavigation = document.querySelector("#week-navigation");

if (menuButton && weekNavigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    weekNavigation.classList.toggle("is-open", !isOpen);
  });
}

const searchInput = document.querySelector("#site-search-input");
const searchResults = document.querySelector("#search-results");
let activeSearchResult = -1;

function normalizeSearch(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function closeSearch() {
  if (!searchInput || !searchResults) return;
  searchResults.hidden = true;
  searchResults.innerHTML = "";
  searchInput.setAttribute("aria-expanded", "false");
  searchInput.removeAttribute("aria-activedescendant");
  activeSearchResult = -1;
}

function showSearchResults(query) {
  if (!searchInput || !searchResults) return;
  const words = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    closeSearch();
    return;
  }

  const matches = (window.SEARCH_INDEX || [])
    .map((item) => {
      const title = normalizeSearch(item.title);
      const haystack = normalizeSearch(`${item.title} ${item.week} ${item.text}`);
      if (!words.every((word) => haystack.includes(word))) return null;
      const score = words.reduce((total, word) => total + (title.startsWith(word) ? 4 : title.includes(word) ? 2 : 1), 0);
      return { ...item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const siteRoot = document.body.dataset.root || "";
  searchResults.innerHTML = matches.length
    ? matches.map((item, index) => `<li id="search-result-${index}" role="option"><a href="${siteRoot}${item.url}"><span>${item.title}</span><small>${item.week}</small></a></li>`).join("")
    : '<li class="search-empty">Geen resultaat. Probeer een ander woord.</li>';
  searchResults.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
  activeSearchResult = -1;
}

if (searchInput && searchResults) {
  searchInput.addEventListener("input", () => showSearchResults(searchInput.value));
  searchInput.addEventListener("keydown", (event) => {
    const links = [...searchResults.querySelectorAll("a")];
    if (event.key === "Escape") {
      closeSearch();
      return;
    }
    if (event.key === "Enter" && activeSearchResult >= 0) {
      event.preventDefault();
      links[activeSearchResult].click();
      return;
    }
    if (!["ArrowDown", "ArrowUp"].includes(event.key) || links.length === 0) return;
    event.preventDefault();
    activeSearchResult = event.key === "ArrowDown"
      ? (activeSearchResult + 1) % links.length
      : (activeSearchResult - 1 + links.length) % links.length;
    searchResults.querySelectorAll("li").forEach((item) => item.classList.remove("is-active"));
    links[activeSearchResult].parentElement.classList.add("is-active");
    searchInput.setAttribute("aria-activedescendant", `search-result-${activeSearchResult}`);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-box")) closeSearch();
  });
}

document.querySelectorAll("pre").forEach((codeBlock) => {
  const code = codeBlock.querySelector("code");
  if (!code) return;

  const wrapper = document.createElement("div");
  wrapper.className = "code-example";
  codeBlock.parentNode.insertBefore(wrapper, codeBlock);
  wrapper.appendChild(codeBlock);

  const button = document.createElement("button");
  button.className = "copy-button";
  button.type = "button";
  button.textContent = "Kopieer";
  button.setAttribute("aria-label", "Kopieer dit codevoorbeeld");
  wrapper.appendChild(button);

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = "Gekopieerd!";
      window.setTimeout(() => { button.textContent = "Kopieer"; }, 1800);
    } catch {
      button.textContent = "Selecteer de code";
    }
  });
});
