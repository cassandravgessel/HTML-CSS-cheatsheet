# Week 2 - Start HTML

**Breadcrumb:** Home / Week 2  
**Eyebrow:** Week 2  
**Tags:** HTML, CSS, HTML-tags, documentstructuur, kleur

## Introductie

HTML en CSS vormen samen de basis van een website. HTML beschrijft welke inhoud op de pagina staat. CSS bepaalt hoe die inhoud eruitziet. In deze week leer je de structuur van een HTML-document en de eerste veelgebruikte HTML-tags kennen.

## Lesdoelen

- Ik leg uit wat HTML is.
- Ik leg uit wat CSS is.
- Ik pas de HTML-tags `<h1>`, `<h2>`, `<h3>`, `<p>`, `<img>` en `<a>` toe.
- Ik geef met CSS een HTML-tag een kleur.

## Inhoudsopgave

- [HTML en CSS](#html-en-css)
- [HTML-bestanden en de browser](#html-bestanden-en-de-browser)
- [Het HTML-document](#het-html-document)
- [Anatomie van een HTML-element](#anatomie-van-een-html-element)
- [Koppen en alinea's](#koppen-en-alineas)
- [Afbeeldingen](#afbeeldingen)
- [Links](#links)
- [Een kleur geven met CSS](#een-kleur-geven-met-css)
- [Kort onthouden](#kort-onthouden)

## HTML en CSS

HTML staat voor **HyperText Markup Language**. HTML beschrijft de inhoud en de structuur van een webpagina, zoals teksten, titels, afbeeldingen en links naar andere pagina's.

CSS staat voor **Cascading Style Sheets**. CSS verzorgt de vormgeving van het HTML-document. Met CSS verander je bijvoorbeeld kleuren, lettertypes, afstanden en de plaats van elementen.

```text
HTML = inhoud en structuur
CSS  = vormgeving
```

HTML en CSS hebben dus ieder een andere taak, maar worden samen gebruikt om een complete website te maken.

## HTML-bestanden en de browser

HTML schrijf je in een bestand met de extensie `.html`. Een browser leest de instructies in dat bestand en zet ze om in een zichtbare webpagina.

De eerste pagina van een website heet meestal `index.html`. De naam `index` verwijst naar de startpagina of inhoudsopgave van de website.

```text
mijn-website/
└── index.html
```

## Het HTML-document

Een HTML-pagina heeft een vaste basisstructuur:

```html
<!doctype html>
<html lang="nl">
  <head>
    <meta charset="UTF-8">
    <title>Mijn eerste website</title>
  </head>
  <body>
    <h1>Welkom op mijn website</h1>
    <p>Dit is mijn eerste webpagina.</p>
  </body>
</html>
```

- `<!doctype html>` vertelt de browser dat het document HTML5 gebruikt.
- `<html>` bevat het volledige HTML-document.
- `<head>` bevat informatie over het document, zoals de titel en links naar stylesheets.
- `<title>` bepaalt de tekst die in het browsertabblad verschijnt.
- `<body>` bevat alles wat zichtbaar wordt op de webpagina.

## Anatomie van een HTML-element

HTML bestaat uit HTML-tags. Veel elementen hebben een openingstag, inhoud en een sluittag.

```html
<p>Een stukje tekst</p>
```

- `<p>` is de openingstag.
- `Een stukje tekst` is de inhoud.
- `</p>` is de sluittag. De schuine streep geeft aan dat het element wordt afgesloten.

Sommige elementen, zoals `<img>`, hebben geen aparte sluittag. Deze elementen krijgen hun informatie via attributen.

## Koppen en alinea's

Met heading-tags maak je koppen. `<h1>` is de belangrijkste kop van de pagina. `<h2>` en `<h3>` zijn subkoppen. Gebruik de niveaus in een logische volgorde.

```html
<h1>Recepten</h1>
<h2>Ontbijt</h2>
<h3>Pannenkoeken</h3>
<p>Hier staat een korte beschrijving van het recept.</p>
```

- Gebruik bij voorkeur één `<h1>` als hoofdtitel van de pagina.
- Gebruik `<h2>` voor hoofdonderdelen onder de titel.
- Gebruik `<h3>` voor onderdelen binnen een `<h2>`-sectie.
- Gebruik `<p>` voor een alinea met gewone tekst.

## Afbeeldingen

Met `<img>` plaats je een afbeelding op de pagina. Het attribuut `src` verwijst naar het bestand. Het attribuut `alt` beschrijft wat op de afbeelding staat.

```html
<img src="images/kat.jpg" alt="Een slapende oranje kat">
```

- `src` betekent source en bevat het pad naar de afbeelding.
- `alt` geeft een tekstalternatief als de afbeelding niet zichtbaar is en helpt gebruikers van een schermlezer.

## Links

Met `<a>` maak je een link. Het attribuut `href` bevat het webadres of het pad van de doelpagina.

```html
<a href="https://casscodes.com">Bekijk Casscodes</a>
```

Een interne link verwijst naar een bestand binnen dezelfde website:

```html
<a href="contact.html">Naar de contactpagina</a>
```

Gebruik linktekst die duidelijk maakt waar de link naartoe gaat.

## Een kleur geven met CSS

Een CSS-regel kiest eerst welk HTML-element je wilt aanpassen. Daarna geef je aan wat er moet veranderen. In dit voorbeeld kiest `p` alle alinea's en verandert `color` de tekstkleur.

```css
p {
  color: blue;
}
```

- `p` is de selector.
- `color` is de eigenschap. In CSS heet dit een **property**.
- `blue` is de ingestelde waarde. In CSS heet dit een **value**.
- De declaratie eindigt met een puntkomma.

De CSS staat meestal in een apart bestand, bijvoorbeeld `style.css`. Dat bestand koppel je in de `<head>` van het HTML-document:

```html
<link rel="stylesheet" href="style.css">
```

## Kort onthouden

- HTML beschrijft de inhoud en structuur; CSS verzorgt de vormgeving.
- De startpagina van een website heet meestal `index.html`.
- Zichtbare inhoud staat in de `<body>` van het HTML-document.
- Met `<h1>`, `<h2>`, `<h3>` en `<p>` structureer je tekst.
- `<img>` plaatst een afbeelding en `<a>` maakt een link.
- Met de CSS-eigenschap `color` verander je de tekstkleur.

## Paginanavigatie

- Vorige: [Terug naar home](../index.html)
- Volgende: [Week 3 - HTML-tags, formulieren en tabellen](week-3.html)
