# Website-specificaties

## Doel

De website is een toegankelijke, visuele HTML & CSS Cheatsheet met pagina's voor week 2 tot en met week 7. Bezoekers moeten snel een onderwerp kunnen terugvinden, een voorbeeld kunnen kopiëren en tussen weken kunnen navigeren. De website bevat alleen theorie en voorbeelden; het is geen opdrachten- of toetsomgeving.

## Doelgroep

Beginnende webdevelopers die uitleg in gewone taal, kleine codevoorbeelden en direct zichtbare resultaten nodig hebben. Voorkennis van programmeren is niet vereist. De inhoud sluit aan op de theorie die studenten tijdens Programmeren P1 HTML/CSS ontvangen.

## Pagina's

### Home — `index.html`

De homepagina bevat:

- een compacte header met het woordmerk `casscodes` en een link naar de homepagina;
- een hero met de titel `HTML & CSS Cheatsheet`, een korte introductie en een knop naar week 2;
- een zoekbalk die in alle weekpagina's zoekt en rechtstreeks naar het juiste onderwerp linkt;
- een raster met zes compacte, uitklapbare weekkaarten voor week 2 tot en met week 7;
- per gesloten weekkaart: weeknummer, titel en een korte onderwerpregel;
- per geopende weekkaart: een concrete omschrijving van de lesstof, onderwerplabels en een duidelijke link;
- een blok `Zo gebruik je deze cheatsheet`;
- een footer met copyright, een home-link en een link naar `casscodes.com`.

### Weekpagina's — `week-2.html` t/m `week-7.html`

Iedere weekpagina bevat:

- een breadcrumb met een link terug naar home;
- weeknummer, paginatitel, samenvatting en onderwerplabels;
- een inhoudsopgave met ankerlinks;
- lessecties volgens `content-template.md`;
- onderaan vorige/volgende-navigatie;
- dezelfde footer als de homepagina.

## Vastgestelde weekindeling

De theorie voor week 2 t/m 7 is gebaseerd op het aangeleverde lesmateriaal. Voeg geen onderwerpen toe die studenten nog niet hebben gehad. De gedetailleerde inhoud en lesdoelen staan in `content-template.md`.

1. **Week 2 — Start HTML** — wat HTML en CSS doen, hoe een HTML-pagina is opgebouwd en hoe je koppen, tekst, afbeeldingen en links toevoegt.
2. **Week 3 — Pagina-indeling, formulieren en tabellen** — hoe je een pagina in duidelijke onderdelen verdeelt, hoe elementen binnen elkaar staan en hoe je formulieren en tabellen opbouwt.
3. **Week 4 — CSS, kleuren en lettertypes** — hoe een CSS-regel werkt en hoe je kleuren, tekstgrootte, tekstdikte en externe lettertypes instelt.
4. **Week 5 — Ruimte en positie** — het verschil tussen padding en margin, vijf manieren van positioneren, float, een CSS-dropdown en de stapelvolgorde met `z-index`.
5. **Week 6 — Flexbox** — hoe een parent de positie en verdeling van de elementen die er direct in staan regelt.
6. **Week 7 — Responsive websites** — hoe een website zich aanpast aan mobiel, tablet en desktop met flexibele maten, Flexbox, media queries en breakpoints.

## Navigatie

- De homepagina is altijd bereikbaar via het woordmerk.
- De desktopheader toont `Home` en `Week 2` t/m `Week 7`.
- Op kleine schermen mag de weeknavigatie horizontaal scrollen; er is geen JavaScript-menu nodig.
- De actieve pagina gebruikt `aria-current="page"` en heeft een zichtbare actieve stijl.
- Iedere weekpagina heeft zowel bovenaan als onderaan een route terug of verder.

## Functionele eisen

- De site werkt zonder JavaScript; JavaScript is alleen een optionele verbetering, bijvoorbeeld voor een kopieerknop.
- De zoekfunctie gebruikt een statische zoekindex en werkt na publicatie op GitHub Pages zonder server of database.
- De site bevat geen opdrachten, oefeningen, quizzen, reflectievragen, huiswerk, deadlines of inleverinformatie.
- Vragende zinnen uit presentaties worden niet overgenomen; zet de bijbehorende kennis om in korte, feitelijke uitleg.
- Interne links werken ook wanneer de site statisch wordt gehost.
- Codevoorbeelden staan in `<pre><code>` en lopen horizontaal door zonder de pagina breder te maken.
- Iedere zichtbare interactieve component is met het toetsenbord bedienbaar.
- Focus mag nooit alleen door kleur worden aangegeven.
- Bewegende effecten respecteren `prefers-reduced-motion`.
- Afbeeldingen hebben beschrijvende `alt`-tekst; decoratieve beelden gebruiken `alt=""`.

## Technische afspraken

- Gebruik HTML5-tags die de functie van een paginaonderdeel duidelijk maken, zoals `header`, `nav`, `main`, `section`, `article`, `aside` en `footer`.
- Eén `<h1>` per pagina; sla geen kopniveaus over.
- Gebruik kebab-case voor bestandsnamen en CSS-klassen.
- Gebruik herbruikbare klassen; vermijd inline styles en `!important`.
- Gebruik de herbruikbare CSS-variabelen uit `styles.css` voor kleuren, afstanden, afgeronde hoeken en schaduwen.
- Richtbreedte: maximaal `72rem`, met minimaal `1rem` zijmarge op mobiel.
- Kies een breakpoint wanneer de inhoud niet meer goed past. Schrijf de basis eerst voor kleine schermen en breid die daarna uit voor grotere schermen.
- Minimaal WCAG AA-contrast voor gewone tekst.

## Klaar-definitie

Een pagina is klaar wanneer:

- alle inhoud en links kloppen;
- de pagina bruikbaar is vanaf 320 px breed;
- er geen horizontale paginascroll ontstaat;
- navigatie met Tab logisch verloopt en focus zichtbaar is;
- koppen een logische documentstructuur vormen;
- voorbeelden leesbaar en kopieerbaar zijn;
- alleen theorie uit de vastgestelde lesinhoud is opgenomen;
- er nergens een opdracht, oefening of vraag aan de student staat;
- de pagina geen fouten in de HTML-validator geeft.
