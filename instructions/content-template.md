# Contentplan voor de weekpagina's

## Redactionele hoofdregel

De website is alleen een cheatsheet met theorie, definities, syntax en compacte codevoorbeelden. Neem geen opdrachten, oefeningen, vragen, huiswerk, deadlines of inleverinstructies uit de presentaties over. Zet een vraag uit het lesmateriaal waar nodig om in een feitelijke tussenkop met direct daaronder het antwoord.

Gebruik de aangeleverde les-PDF's als inhoudelijke bron. Voeg geen onderwerpen toe die studenten nog niet in de lessen hebben gehad.

## Vaste opbouw van een weekpagina

### Paginakop

- Breadcrumb: `Home / Week [nummer]`
- Eyebrow: `Week [nummer]`
- H1: de titel uit het contentplan
- Intro: twee of drie zinnen over de behandelde theorie
- Tags: drie tot vijf hoofdonderwerpen

### Lesdoelen

Neem de lesdoelen onder een korte, herkenbare kop over. Formuleer ze in de ik-vorm, in natuurlijk Nederlands en zonder ze als vragen te presenteren.

### Inhoudsopgave

Link naar iedere hoofdsectie op de pagina. Gebruik korte, permanente ids zoals `#html-document`, `#box-model` en `#media-queries`.

### Theorieblok

Herhaal onderstaande opbouw voor ieder onderwerp:

1. **Onderwerptitel** — een korte, beschrijvende kop.
2. **Uitleg** — maximaal twee korte alinea's in gewone taal.
3. **Syntax of codevoorbeeld** — klein, correct en direct herkenbaar.
4. **Betekenis** — leg de belangrijke tags, CSS-eigenschappen en waarden puntsgewijs uit. Zet een Engelse vakterm er pas bij nadat de Nederlandse uitleg duidelijk is.
5. **Resultaat** — toon waar nuttig een kleine visuele demo naast de code.
6. **Let op** — alleen voor een belangrijk verschil, veelgemaakte fout of beperking.

Voorbeeldmarkup:

```html
<section class="lesson-section" id="voorbeeld">
  <p class="eyebrow">Onderwerp</p>
  <h2>Een duidelijke sectietitel</h2>
  <p class="measure">Leg het concept kort en concreet uit.</p>

  <div class="example-grid">
    <pre><code>&lt;p class="intro"&gt;Hallo wereld&lt;/p&gt;</code></pre>
    <div class="demo" aria-label="Resultaat van het codevoorbeeld">
      <p class="intro">Hallo wereld</p>
    </div>
  </div>
</section>
```

### Samenvatting en paginanavigatie

Sluit af met drie tot vijf kernpunten onder `Kort onthouden`. Daaronder staat een `.pager` met een betekenisvolle link naar de vorige en volgende week. Week 2 linkt terug naar home; week 7 linkt terug naar het overzicht.

## Week 2 — Start HTML

### Introductie

De student maakt kennis met de computer, browser en hulpmiddelen die nodig zijn om websites te maken. De theorie introduceert HTML, CSS, het HTML-document en de eerste zichtbare webpagina.

### Lesdoelen

- Ik leg uit wat HTML is.
- Ik leg uit wat CSS is.
- Ik pas de HTML-tags `<h1>`, `<h2>`, `<h3>`, `<p>`, `<img>` en `<a>` toe.
- Ik geef met CSS een HTML-tag een kleur.

### Contentsecties

1. **HTML en CSS** — HTML bepaalt de inhoud en structuur; CSS bepaalt de vormgeving.
2. **Bestanden en de browser** — HTML wordt in een `.html`-bestand geschreven; de eerste pagina heet meestal `index.html`.
3. **Structuur van een HTML-document** — `<!doctype html>`, `<html>`, `<head>` en `<body>`; alleen de inhoud van `<body>` is zichtbaar op de pagina.
4. **Anatomie van een HTML-element** — openingstag, inhoud, sluittag en het verschil met een element zonder aparte sluittag zoals `<img>`.
5. **Koppen en alinea's** — `<h1>`, `<h2>`, `<h3>` en `<p>` met een logische kopvolgorde.
6. **Afbeeldingen** — `<img>` met `src` en beschrijvende `alt`-tekst.
7. **Links** — `<a>` met `href` en duidelijke linktekst.
8. **Eerste CSS-regel** — tagselector, `color` property en value, bijvoorbeeld `p { color: blue; }`.

## Week 3 — Pagina-indeling, formulieren en tabellen

De identieke week-3-tekst uit de briefing is vervangen door de inhoud van `P1-W3-L1.pdf`, `P1-W3-L2.pdf` en `HTML-Tags.pdf`.

### Introductie

Deze week gaat dieper in op de structuur van een HTML-pagina. Daarnaast behandelt de cheatsheet formulieren met verschillende inputtypes en tabellen die later bij PHP nodig zijn.

### Lesdoelen

- Ik gebruik minimaal zeven HTML-tags in mijn website.
- Ik leg uit wanneer je een `<div>` gebruikt.
- Ik maak een formulier met verschillende inputtypes.
- Ik maak een tabel met HTML5.
- Ik leg de begrippen `parent` en `child` uit.
- Ik benoem welk element een parent en/of child is.

### Contentsecties

1. **Een pagina in duidelijke onderdelen verdelen** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` en `<footer>`. Leg daarna uit dat zulke tags ook `semantische HTML` worden genoemd.
2. **`<head>` en `<header>`** — `<head>` bevat documentinformatie en links naar stylesheets; `<header>` bevat zichtbare introductie- of kopinhoud in de `<body>`.
3. **Gebruik van `<div>`** — een algemeen vak waarmee je elementen bij elkaar zet voor CSS of JavaScript wanneer geen duidelijkere HTML-tag past.
4. **Parent, child en sibling** — elementen die binnen andere elementen staan. Leg de Engelse termen uit als ouder, kind en elementen op hetzelfde niveau, met een eenvoudig codevoorbeeld.
5. **Formulieren** — doel van `<form>` en de elementen `<input>`, `<label>`, `<select>`, `<textarea>`, `<button>`, `<fieldset>`, `<legend>`, `<datalist>`, `<output>`, `<option>` en `<optgroup>`.
6. **Inputtypes** — toon de belangrijkste types uit het lesmateriaal met hun syntax en functie, zonder invulopdracht.
7. **Tabellen** — `<table>`, rijen met `<tr>`, datacellen met `<td>` en kopcellen met `<th>`.
8. **Tabelgroepen** — `<thead>`, `<tbody>` en optioneel `<tfoot>` voor de logische groepering van tabelinhoud.

## Week 4 — CSS, kleuren en fonts

### Introductie

Deze week introduceert de opbouw van CSS-regels. Studenten leren elementen selecteren en tekst vormgeven met kleuren, lettertypes, diktes en formaten.

### Lesdoelen uit het lesmateriaal

- Ik leg uit hoe CSS-syntax is opgebouwd.
- Ik pas kleuren aan met CSS.
- Ik pas tekststijlen aan met CSS.
- Ik leg uit wat fonts zijn en hoe je ze aanpast.
- Ik laad fonts uit een externe bron in.

### Contentsecties

1. **CSS-syntax** — leg eerst in het Nederlands uit welk HTML-element wordt gekozen en welke instelling en waarde het krijgt. Noem daarna de termen selector, declaration block, property en value.
2. **Tagselector** — rechtstreeks een HTML-tag selecteren.
3. **Class selector** — herbruikbare styling met een punt, bijvoorbeeld `.intro`.
4. **ID selector** — een unieke identifier met een hekje, bijvoorbeeld `#menu`; leg het verschil met een class uit.
5. **Tekstkleur** — de property `color`, niet `font-color`.
6. **Kleurwaarden** — kleurnamen, HEX, RGB en RGBA; alpha bepaalt de transparantie.
7. **Lettertype** — `font-family` met een fallback zoals `Verdana, sans-serif`.
8. **Tekstdikte en tekstgrootte** — `font-weight` en `font-size`.
9. **Externe fonts** — een font via Google Fonts in de `<head>` laden en daarna met `font-family` toepassen; benadruk leesbaarheid.

## Week 5 — Box model, position, float, dropdown en z-index

### Introductie

Deze week behandelt ruimte binnen en buiten elementen en verschillende manieren om elementen te positioneren. Float hoort bij de aangeboden theorie, maar vermeld dat moderne layouts meestal Flexbox gebruiken.

### Lesdoelen

- Ik benoem het verschil tussen padding en margin.
- Ik pas padding en margin toe op de website.
- Ik positioneer elementen met `position` en `float`.
- Ik maak een dropdownmenu met alleen CSS.
- Ik leg uit waarvoor je `z-index` gebruikt.

### Contentsecties

1. **Het box model** — content, padding, border en margin.
2. **Padding** — ruimte binnen de rand van een element.
3. **Margin** — ruimte buiten de rand van een element.
4. **Meerdere zijden op één regel** — één tot vier waarden en de volgorde boven, rechts, onder, links. Benoem dat deze korte schrijfwijze `shorthand` heet.
5. **Basisreset** — `* { margin: 0; padding: 0; box-sizing: border-box; }` en de betekenis van de universele selector.
6. **Position** — `static`, `relative`, `absolute`, `fixed` en `sticky`, inclusief document flow en positioned parent.
7. **Offsets** — `top`, `right`, `bottom` en `left` in combinatie met een passende `position`.
8. **Float** — wat `float` doet, waar het historisch voor werd gebruikt en waarom Flexbox voor moderne layouts vaak geschikter is.
9. **CSS-dropdown** — structuur en zichtbaarheid via hover en toetsenbordvriendelijke `:focus-within`; geen JavaScript vereist.
10. **Z-index** — stapelvolgorde bij overlappende, gepositioneerde elementen.

## Week 6 — Flexbox

### Introductie

Flexbox is een CSS-techniek om blokken efficiënt in een layout te plaatsen, ook wanneer hun afmetingen verschillen. De layout kan zich aanpassen aan de beschikbare ruimte.

### Lesdoelen

- Ik leg uit wat Flexbox is.
- Ik pas Flexbox toe om elementen te positioneren.
- Ik weet hoe en wanneer Flexbox wordt toegepast.

### Contentsecties

1. **Flexbox in het kort** — het doel van de layoutmodule en geschikte toepassingen zoals navigatie, kaarten en uitlijning op één as.
2. **Flexcontainer en flexitems** — het omliggende element krijgt `display: flex`; de elementen die er direct in staan worden flexitems.
3. **Hoofdas en dwarsas** — `main axis`, `cross axis`, `main-start`, `main-end` en de invloed van `flex-direction`.
4. **Instellingen voor de container** — behandel `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content` en `gap` in gewone taal.
5. **Instellingen voor de items** — behandel waar relevant `order`, `flex-grow`, `flex-shrink`, `flex-basis`, `flex` en `align-self`.
6. **Wanneer Flexbox past** — gebruik Flexbox voor verdeling in één richting, dus een rij of kolom, en koppel ieder voorbeeld aan een herkenbare pagina-indeling.

## Week 7 — Responsive webdesign

### Introductie

Responsive webdesign laat de inhoud en indeling meeveranderen met verschillende schermformaten. De theorie combineert flexibele maten, Flexbox en media queries voor bruikbare pagina's op mobiel, tablet en desktop.

### Lesdoelen

- Ik toon aan wat een breakpoint op een website is.
- Ik pas een breakpoint toe in CSS.
- Ik benoem het verschil tussen de media types `all`, `print`, `screen` en `speech`.
- Ik pas Flexbox toe om een element responsive te maken voor mobiel.
- Ik maak met media types een website responsive.

### Contentsecties

1. **Responsive webdesign** — definitie en belang voor de gebruikerservaring op verschillende apparaten.
2. **De drie bouwstenen** — media queries, Flexbox en flexibele pagina-indelingen.
3. **Flexibele pagina-indeling** — breedtes zoals percentages passen zich aan de beschikbare ruimte aan; een vaste pixelbreedte doet dat niet. Leg uit dat dit ook een `fluid layout` heet.
4. **Media queries** — syntax met `@media`, plaatsing onderaan het CSS-bestand en het aanpassen van styling op basis van voorwaarden.
5. **Media types** — `all`, `print`, `screen` en `speech`, met hun functie.
6. **Breakpoints** — leg uit dat een breakpoint het punt is waarop de layout aanpassing nodig heeft. Vermeld de lesvoorbeelden 576 px, 768 px, 992 px en 1200 px, maar benadruk dat de inhoud het uiteindelijke breakpoint bepaalt.
7. **Responsive Flexbox** — richting, wrapping en breedtes aanpassen voor een mobiele layout.
8. **Controleren in de browser** — gebruik de responsive weergave van de browser om te zien wanneer een layout niet meer goed past; formuleer dit als naslaginformatie, niet als opdracht.

## Eindcontrole van de content

- Elk voorbeeld gebruikt geldige HTML en CSS.
- Code en uitleg zeggen exact hetzelfde.
- Placeholdertekst is verwijderd.
- Nieuwe begrippen worden bij het eerste gebruik uitgelegd.
- De pagina bevat geen dubbele ids.
- Linkteksten zijn betekenisvol.
- Alle lesdoelen worden gedekt door de theorieblokken.
- De pagina bevat geen opdracht, oefening, vraag, huiswerk, deadline of inleverinformatie.
- De inhoud gaat niet verder dan de aangeleverde lesstof.
