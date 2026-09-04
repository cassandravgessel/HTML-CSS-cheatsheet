const fs = require("node:fs");
const path = require("node:path");
const { marked } = require("marked");

const root = path.resolve(__dirname, "..");
const htmlWeeks = [2, 3, 4, 5, 6, 7];
const jsWeeks = [1, 2, 3, 4, 5, 6, 7, 8];
const phpWeeks = [1, 2, 3, 4, 5, 6, 7, 8];
const searchIndex = [];

const jsMeta = [
  ["Eerste stappen met JavaScript", "Variabelen, datatypes en je eerste uitvoer.", ["variabelen", "datatypes", "DOM"]],
  ["Functies en onclick", "Maak een pagina interactief met functies en klik-events.", ["functies", "onclick", "style"]],
  ["If/else en state", "Laat code keuzes maken en waarden onthouden.", ["if/else", "vergelijken", "state"]],
  ["Toets en addEventListener", "Herhaal de basis en koppel events aan elementen.", ["herhaling", "events", "addEventListener"]],
  ["Arrays en willekeurige keuzes", "Werk met lijsten en laat JavaScript een keuze maken.", ["arrays", "Math.random", "value"]],
  ["Timers", "Voer code na een bepaalde tijd of steeds opnieuw uit.", ["setInterval", "clearInterval", "timer"]],
  ["Quiz en Tamagotchi", "Combineer lijsten, logica en meerdere waarden.", ["loops", "quiz", "state"]],
  ["Tamagotchi eindchallenge", "Combineer de JavaScript-onderdelen in één toepassing.", ["combineren", "debuggen", "demo"]],
];

const phpMeta = {
  3: ["PHP Basics", "Projectstructuur & Includes", "Database & READ", "Forms (GET & POST)", "Backend Validatie", "INSERT & Redirect (PRG)", "Sessions & Feedback", "Overzicht & Uitleggen"],
  4: ["Editpagina & item ophalen", "UPDATE queries", "DELETE", "CRUD overzicht", "Registreren", "Login", "Loginstatus & beveiligde pagina's", "Dynamisch menu"],
};

marked.setOptions({ gfm: true, breaks: false });
const escapeHtml = (value = "") => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const decodeHtml = (value = "") => value.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&#39;", "'").replaceAll("&quot;", '"');
const plainText = (value = "") => decodeHtml(value.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const slugify = (value) => plainText(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const ensureDir = (dir) => fs.mkdirSync(path.join(root, dir), { recursive: true });

function addHeadingLinks(html) {
  return html.replace(/<h2(?: id="[^"]*")?>(.*?)<\/h2>/gs, (_, content) => {
    const id = slugify(content);
    return `<h2 id="${id}">${content}<a class="heading-link" href="#${id}" aria-label="Link naar ${escapeHtml(plainText(content))}">#</a></h2>`;
  });
}

function extractClassInner(html, className) {
  const open = new RegExp(`<div[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>`, "i").exec(html);
  if (!open) throw new Error(`Element .${className} niet gevonden`);
  const token = /<div\b[^>]*>|<\/div>/gi;
  token.lastIndex = open.index + open[0].length;
  let depth = 1;
  let match;
  while ((match = token.exec(html))) {
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(open.index + open[0].length, match.index);
  }
  throw new Error(`Element .${className} is niet gesloten`);
}

function extractArticleInner(html, className) {
  const open = new RegExp(`<article[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>`, "i").exec(html);
  if (!open) throw new Error(`Element article.${className} niet gevonden`);
  const close = html.indexOf("</article>", open.index + open[0].length);
  if (close < 0) throw new Error(`Element article.${className} is niet gesloten`);
  return html.slice(open.index + open[0].length, close);
}

function normalizeLegacyContent(html, language) {
  let output = html
    .replace(/<header class="page-header">([\s\S]*?)<\/header>/i, "")
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "")
    .replace(/<section[^>]*id="video-coming-soon"[\s\S]*?<\/section>/gi, "")
    .replace(/\sstyle="[^"]*"/gi, "")
    .replace(/\sclass="(?:page-title|section)"/gi, "");

  output = output.replace(/<div class="code-block"[^>]*>([\s\S]*?)<\/div>/gi, (_, code) => {
    const raw = decodeHtml(code.replace(/<br\s*\/?>/gi, "\n").replace(/<span[^>]*>/gi, "").replace(/<\/span>/gi, "").replace(/<[^>]+>/g, ""));
    return `<pre><code class="language-${language}">${escapeHtml(raw.trim())}</code></pre>`;
  });
  output = output
    .replace(/<div class="(?:tip|highlight|explanation)">/gi, '<div class="callout">')
    .replace(/<div class="error">/gi, '<div class="callout callout--warning">')
    .replace(/<span class="(?:keyword|string|number|comment|function|property)">/gi, "")
    .replace(/<\/span>/gi, "");
  return addHeadingLinks(output.trim());
}

function nav(course, current, prefix) {
  const items = course === "html-css"
    ? htmlWeeks.map((w) => [`week-${w}.html`, `Week ${w}`, w])
    : course === "javascript"
      ? jsWeeks.map((w) => [`week-${w}.html`, `Week ${w}`, w])
      : [];
  const links = [["index.html", "Overzicht", null], ...items]
    .map(([href, label, id]) => `<li><a href="${href}"${current === id ? ' aria-current="page"' : ""}>${label}</a></li>`).join("");
  return `<ul>${links}<li class="nav-courses"><a href="${prefix}index.html">Alle cursussen</a></li></ul>`;
}

function template({ title, courseName, course, content, current = null, depth = 1, bodyClass = "" }) {
  const prefix = "../".repeat(depth);
  const localPrefix = "../".repeat(Math.max(0, depth - 1));
  const phpPeriod = String(current).startsWith("4-") ? 4 : 3;
  const phpWeekLinks = phpWeeks.map((week) => `<li><a href="${localPrefix}periode-${phpPeriod}/week-${String(week).padStart(2, "0")}.html"${current === `${phpPeriod}-${week}` ? ' aria-current="page"' : ""}>Week ${week}</a></li>`).join("");
  const navHtml = course === "portal"
    ? `<ul><li><a href="html-css/index.html">HTML &amp; CSS</a></li><li><a href="javascript/index.html">JavaScript</a></li><li><a href="php/index.html">PHP</a></li></ul>`
    : course === "php"
    ? `<ul><li><a href="${localPrefix}index.html"${current === null ? ' aria-current="page"' : ""}>Overzicht</a></li>${current === null ? `<li><a href="#periode-3">Periode 3</a></li><li><a href="#periode-4">Periode 4</a></li>` : phpWeekLinks}<li class="nav-courses"><a href="${prefix}index.html">Alle cursussen</a></li></ul>`
    : nav(course, current, prefix);
  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${escapeHtml(title)} uit de ${escapeHtml(courseName)} cheatsheet."><meta name="theme-color" content="#e8f2eb">
<title>${escapeHtml(title)} | ${escapeHtml(courseName)} Cheatsheet</title>
<link rel="stylesheet" href="${prefix}assets/css/styles.css?v=20260904-5">
<script src="${prefix}assets/js/search-index.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js" defer></script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-css.min.js" defer></script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js" defer></script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-sql.min.js" defer></script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup-templating.min.js" defer></script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-php.min.js" defer></script>
<script src="${prefix}assets/js/main.js" defer></script></head>
<body class="${bodyClass}" data-root="${prefix}"><a class="skip-link" href="#main-content">Ga direct naar de inhoud</a>
<header class="site-header"><div class="brand-row container"><a class="brand" href="${prefix}index.html">casscodes<span aria-hidden="true">*</span></a><p class="course-label">Cursus <strong>${courseName}</strong></p><button class="nav-toggle" type="button" aria-expanded="false" aria-controls="week-navigation">Menu</button></div><div class="site-search container" role="search"><label class="visually-hidden" for="site-search-input">Zoek in alle cheatsheets</label><div class="search-box"><span class="search-icon" aria-hidden="true">⌕</span><input id="site-search-input" type="search" placeholder="Zoek een term..." autocomplete="off" aria-controls="search-results" aria-expanded="false"><span class="search-shortcut" aria-hidden="true">/</span><ul class="search-results" id="search-results" role="listbox" hidden></ul></div></div><nav class="week-nav" id="week-navigation" aria-label="Cheatsheet navigatie"><div class="container">${navHtml}</div></nav></header>
${content}<footer class="site-footer"><div class="site-footer__inner container"><div><a class="footer-brand" href="${prefix}index.html">casscodes*</a><p>Code helder uitgelegd.</p></div><nav><a href="${prefix}index.html">Alle cursussen</a> <span aria-hidden="true">·</span> <a href="https://casscodes.com">casscodes.com</a></nav></div></footer></body></html>`;
}

function detailsCard({ number, title, description, topics, href, color }) {
  return `<details class="week-card card card--${color}"><summary><span class="week-card__number">${String(number).padStart(2, "0")}</span><span class="week-card__summary"><span class="eyebrow">Week ${number}</span><strong>${escapeHtml(title)}</strong><span class="week-card__topics">${topics.map(escapeHtml).join(" · ")}</span></span><span class="week-card__toggle" aria-hidden="true"></span></summary><div class="week-card__details"><p>${escapeHtml(description)}</p><ul class="tag-list">${topics.map((t) => `<li class="tag">${escapeHtml(t)}</li>`).join("")}</ul><a class="card-link" href="${href}">Bekijk week ${number} <span aria-hidden="true">→</span></a></div></details>`;
}

function courseHome({ course, courseName, eyebrow, intro, cards, startHref, art }) {
  const content = `<main id="main-content"><section class="home-hero"><div class="container home-hero__grid"><div class="home-hero__content"><p class="eyebrow">${eyebrow}</p><h1>${courseName}<br><span>Cheatsheet</span></h1><p class="hero-copy">${intro}</p><a class="button" href="${startHref}">Begin bij de eerste week <span aria-hidden="true">→</span></a></div><div class="hero-art" aria-hidden="true"><span class="code-sticker">${art}</span></div></div></section><section class="week-overview section section--white"><div class="container"><div class="section-heading"><p class="eyebrow">Alle lesstof bij elkaar</p><h2>Kies je week</h2><p>Open een kaart om te zien welke onderwerpen je die week kunt opzoeken.</p></div><div class="card-grid">${cards}</div></div></section></main>`;
  fs.writeFileSync(path.join(root, course, "index.html"), template({ title: "Overzicht", courseName, course, content, bodyClass: "home-page", depth: 1 }));
}

function lessonContent({ courseName, course, week, title, html, hrefBack, current, depth = 1, label = `Week ${week}` }) {
  const localPrefix = depth === 1 ? "" : "../".repeat(depth - 1);
  const content = `<main id="main-content"><div class="container"><nav class="breadcrumb"><a href="${localPrefix}${hrefBack}">Overzicht</a><span aria-hidden="true">/</span><span>${label}</span></nav></div><header class="lesson-hero"><div class="container"><p class="eyebrow">${label}</p><h1>${escapeHtml(title)}</h1></div></header><article class="lesson-content container">${html}</article></main>`;
  return template({ title: `${label} - ${title}`, courseName, course, content, current, depth, bodyClass: "week-page" });
}

function buildPortal() {
  const cards = [
    ["HTML & CSS", "Bouw webpagina’s en geef ze vorm met CSS.", "html-css/index.html", "&lt;/&gt;", "mint", "Periode 1 · week 2 t/m 7"],
    ["JavaScript", "Maak webpagina’s interactief met logica, events en timers.", "javascript/index.html", "JS", "lavender", "Periode 2 · week 1 t/m 8"],
    ["PHP", "Werk server-side met formulieren, databases, CRUD en login.", "php/index.html", "PHP", "sky", "Periode 3 en 4"],
  ].map(([title, text, href, icon, color, meta]) => `<a class="course-card card card--${color}" href="${href}"><span class="course-card__icon">${icon}</span><p class="eyebrow">${meta}</p><h2>${title}</h2><p>${text}</p><span class="card-link">Open cheatsheet <span aria-hidden="true">→</span></span></a>`).join("");
  const content = `<main id="main-content"><section class="portal-hero"><div class="container"><p class="eyebrow">Software Development · Naslagwerk</p><h1>Kies je<br><span>cheatsheet</span></h1><p>Zoek uitleg en codevoorbeelden terug voor HTML &amp; CSS, JavaScript en PHP.</p></div></section><section class="section section--white"><div class="container portal-grid">${cards}</div></section></main>`;
  fs.writeFileSync(path.join(root, "index.html"), template({ title: "Cheatsheets", courseName: "Alle cheatsheets", course: "portal", content, depth: 0, bodyClass: "portal-page" }));
}

function buildHtmlCss() {
  ensureDir("html-css");
  const home = fs.readFileSync(path.join(root, "content/home.md"), "utf8");
  const cards = [...home.matchAll(/### Week (\d+) - ([^\n]+)\s+([\s\S]*?)(?=\n### Week|\n## Zo gebruik)/g)].map((m, i) => {
    const topics = (m[3].match(/\*\*Onderwerpen:\*\* ([^\n]+)/)?.[1] || "").split(", ").filter(Boolean).slice(0, 4);
    return detailsCard({ number: +m[1], title: m[2], description: m[3].split(/\n\n/)[0].trim(), topics, href: `week-${m[1]}.html`, color: ["mint", "lavender", "sky", "butter"][i % 4] });
  }).join("");
  courseHome({ course: "html-css", courseName: "HTML &amp; CSS", eyebrow: "Programmeren P1 · Naslagwerk", intro: "Alles wat je per week nodig hebt om HTML en CSS terug te zoeken, met korte uitleg en duidelijke codevoorbeelden.", cards, startHref: "week-2.html", art: "&lt;/&gt;" });
  for (const week of htmlWeeks) {
    const source = fs.readFileSync(path.join(root, `content/week-${week}.md`), "utf8");
    const title = source.split("\n")[0].replace(/^# Week \d+ - /, "").trim();
    const start = source.indexOf("## Introductie");
    const html = addHeadingLinks(marked.parse(source.slice(start)).replaceAll('href="../index.html"', 'href="index.html"'));
    fs.writeFileSync(path.join(root, `html-css/week-${week}.html`), lessonContent({ courseName: "HTML &amp; CSS", course: "html-css", week, title, html, hrefBack: "index.html", current: week }));
    addSearch("HTML & CSS", `Week ${week}`, title, `html-css/week-${week}.html`, html);
  }
}

function buildJavascript() {
  ensureDir("javascript");
  const cards = jsMeta.map(([title, description, topics], i) => detailsCard({ number: i + 1, title, description, topics, href: `week-${i + 1}.html`, color: ["mint", "lavender", "sky", "butter"][i % 4] })).join("");
  courseHome({ course: "javascript", courseName: "JavaScript", eyebrow: "Programmeren P2 · Naslagwerk", intro: "Van variabelen en functies tot events, arrays en timers. Gebruik deze pagina’s om JavaScript snel terug te zoeken.", cards, startHref: "week-1.html", art: "JS" });
  jsWeeks.forEach((week) => {
    const legacyPath = path.join(root, `old_content/JavaScript-Cheatsheet-main/pages/week${week}.html`);
    const currentPath = path.join(root, `javascript/week-${week}.html`);
    const html = fs.existsSync(legacyPath)
      ? normalizeLegacyContent(extractClassInner(fs.readFileSync(legacyPath, "utf8"), "content"), "javascript")
      : extractArticleInner(fs.readFileSync(currentPath, "utf8"), "lesson-content");
    const title = jsMeta[week - 1][0];
    fs.writeFileSync(path.join(root, `javascript/week-${week}.html`), lessonContent({ courseName: "JavaScript", course: "javascript", week, title, html, hrefBack: "index.html", current: week }));
    addSearch("JavaScript", `Week ${week}`, title, `javascript/week-${week}.html`, html);
  });
}

function buildPhp() {
  ensureDir("php/periode-3"); ensureDir("php/periode-4");
  const periodSections = [3, 4].map((period) => {
    const cards = phpMeta[period].map((title, index) => {
      const week = index + 1;
      const descriptions = period === 3
        ? ["PHP, server-side code, variabelen en output.", "Werk overzichtelijk met bestanden en includes.", "Maak verbinding met een database en lees gegevens.", "Verwerk gegevens uit GET- en POST-formulieren.", "Controleer invoer veilig op de server.", "Voeg gegevens toe en stuur daarna door.", "Bewaar meldingen en gegevens met sessions.", "Herhaal en combineer de onderdelen uit periode 3."]
        : ["Haal één item op en vul een bewerkformulier.", "Pas bestaande gegevens aan met UPDATE.", "Verwijder gegevens veilig uit de database.", "Breng Create, Read, Update en Delete samen.", "Maak accounts aan en sla wachtwoorden veilig op.", "Controleer inloggegevens en start een session.", "Toon loginstatus en bescherm pagina’s.", "Pas het menu aan op basis van de ingelogde gebruiker."];
      return detailsCard({ number: week, title, description: descriptions[index], topics: title.split(/\s+&\s+|\s+/).filter((word) => word.length > 3).slice(0, 3), href: `periode-${period}/week-${String(week).padStart(2, "0")}.html`, color: ["mint", "lavender", "sky", "butter"][index % 4] });
    }).join("");
    return `<section class="section php-period${period === 3 ? " section--white" : ""}" id="periode-${period}"><div class="container"><div class="section-heading"><p class="eyebrow">Periode ${period}</p><h2>${period === 3 ? "PHP-basis, Create & Read" : "CRUD, login & sessions"}</h2><p>${period === 3 ? "Van de basis van PHP tot formulieren, databases en gegevens toevoegen." : "Van gegevens aanpassen en verwijderen tot accounts en beveiligde pagina’s."}</p></div><div class="card-grid">${cards}</div></div></section>`;
  }).join("");
  const content = `<main id="main-content"><section class="home-hero"><div class="container home-hero__grid"><div><p class="eyebrow">Eerstejaars Software Development</p><h1>PHP<br><span>Cheatsheet</span></h1><p class="hero-copy">Praktische uitleg over server-side code, databases, formulieren, CRUD en inloggen.</p><a class="button" href="#periode-3">Bekijk alle weken <span aria-hidden="true">↓</span></a></div><div class="hero-art" aria-hidden="true"><span class="code-sticker">PHP</span></div></div></section>${periodSections}</main>`;
  fs.writeFileSync(path.join(root, "php/index.html"), template({ title: "Overzicht", courseName: "PHP", course: "php", content, depth: 1, bodyClass: "home-page" }));
  [3, 4].forEach((period) => phpWeeks.forEach((week) => {
    const legacyPath = path.join(root, `old_content/PHP-cheatsheet-main/periode-${period}/week-${String(week).padStart(2, "0")}.html`);
    const title = phpMeta[period][week - 1];
    const target = `php/periode-${period}/week-${String(week).padStart(2, "0")}.html`;
    const html = fs.existsSync(legacyPath)
      ? normalizeLegacyContent(extractClassInner(fs.readFileSync(legacyPath, "utf8"), "content"), "php")
      : extractArticleInner(fs.readFileSync(path.join(root, target), "utf8"), "lesson-content");
    fs.writeFileSync(path.join(root, target), lessonContent({ courseName: "PHP", course: "php", week, title, html, hrefBack: "index.html", current: `${period}-${week}`, depth: 2, label: `Periode ${period} · Week ${week}` }));
    addSearch("PHP", `Periode ${period} · Week ${week}`, title, target, html);
  }));
}

function addSearch(course, week, title, url, html) {
  searchIndex.push({ title, week: `${course} · ${week}`, url, text: plainText(html) });
  [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<a class="heading-link"[\s\S]*?<\/h2>([\s\S]*?)(?=<h2|$)/g)].forEach((m) => searchIndex.push({ title: plainText(m[2]), week: `${course} · ${week}`, url: `${url}#${m[1]}`, text: plainText(m[3]) }));
}

buildPortal(); buildHtmlCss(); buildJavascript(); buildPhp();
fs.writeFileSync(path.join(root, "assets/js/search-index.js"), `window.SEARCH_INDEX = ${JSON.stringify(searchIndex)};\n`);
console.log(`Gebouwd: portal, 3 cursusoverzichten en ${htmlWeeks.length + jsWeeks.length + phpWeeks.length * 2} lespagina's.`);
