# Week 3 - Pagina-indeling, formulieren en tabellen

**Breadcrumb:** Home / Week 3  
**Eyebrow:** Week 3  
**Tags:** Pagina-indeling, parent en child, formulieren, invoervelden, tabellen

## Introductie

Je kunt een webpagina verdelen in duidelijke onderdelen, zoals een header, navigatie, hoofdinhoud en footer. De HTML-tag vertelt wat de functie van ieder onderdeel is. Je leert ook hoe HTML-elementen binnen andere elementen kunnen staan, hoe een formulier gegevens verzamelt en hoe een tabel gegevens in rijen en kolommen toont.

## Lesdoelen

- Ik gebruik minimaal zeven HTML-tags in mijn website.
- Ik leg uit wanneer je een `<div>` gebruikt.
- Ik maak een formulier met verschillende inputtypes.
- Ik maak een tabel met HTML5.
- Ik leg de begrippen `parent` en `child` uit.
- Ik benoem welk element een parent en/of child is.

## Inhoudsopgave

- [Een pagina opdelen met HTML](#een-pagina-opdelen-met-html)
- [Head en header](#head-en-header)
- [Navigatie en hoofdinhoud](#navigatie-en-hoofdinhoud)
- [Section, article en aside](#section-article-en-aside)
- [Footer](#footer)
- [Div](#div)
- [Parent, child en sibling](#parent-child-en-sibling)
- [Formulieren](#formulieren)
- [Inputtypes](#inputtypes)
- [Tabellen](#tabellen)
- [Tabelgroepen](#tabelgroepen)
- [Kort onthouden](#kort-onthouden)

## Een pagina opdelen met HTML

HTML-tags zoals `<header>`, `<nav>` en `<footer>` vertellen welke functie een onderdeel van de pagina heeft. Dit wordt ook **semantische HTML** genoemd. `Semantisch` betekent hier: de naam van de tag maakt duidelijk wat voor soort inhoud erin staat.

```html
<body>
  <header>...</header>
  <nav>...</nav>
  <main>
    <section>...</section>
  </main>
  <footer>...</footer>
</body>
```

Door duidelijke tags te gebruiken, zie je sneller hoe de pagina is opgebouwd. Ook browsers en hulpmiddelen zoals schermlezers begrijpen de pagina daardoor beter.

## Head en header

`<head>` en `<header>` lijken qua naam op elkaar, maar hebben verschillende functies.

- `<head>` bevat algemene informatie over het document, zoals de paginatitel en links naar stylesheets. Dit onderdeel staat buiten de zichtbare pagina-inhoud.
- `<header>` staat in de `<body>` en introduceert een pagina of sectie. Een header kan bijvoorbeeld een kop, logo of korte introductie bevatten.

```html
<head>
  <title>Mijn website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Mijn website</h1>
  </header>
</body>
```

Een document kan meerdere `<header>`-elementen hebben, bijvoorbeeld één voor de pagina en één binnen een artikel.

## Navigatie en hoofdinhoud

`<nav>` bevat een groep belangrijke navigatielinks. Een navigatie bestaat vaak uit een lijst.

```html
<nav aria-label="Hoofdnavigatie">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

`<main>` bevat de unieke hoofdinhoud van de pagina. Gebruik één zichtbaar `<main>`-element per document. Herhaalde onderdelen zoals de hoofdnavigatie en de algemene footer staan buiten `<main>`.

## Section, article en aside

`<section>` groepeert een thematisch gedeelte van een document. Geef een section meestal een eigen kop.

```html
<section>
  <h2>Laatste nieuws</h2>
  <p>De nieuwste berichten staan hier.</p>
</section>
```

`<article>` bevat zelfstandige inhoud die op zichzelf gelezen kan worden, zoals een blogpost, forumbericht of nieuwsartikel.

```html
<article>
  <h2>Een nieuw bericht</h2>
  <p>De volledige tekst van het bericht.</p>
</article>
```

`<aside>` bevat aanvullende informatie die zijdelings bij de hoofdinhoud hoort, zoals een korte toelichting of gerelateerd blok.

```html
<aside>
  <h2>Extra informatie</h2>
  <p>Deze uitleg vult het hoofdonderwerp aan.</p>
</aside>
```

Een `<article>` kan sections bevatten en een `<section>` kan meerdere articles bevatten. Kies het element op basis van de betekenis van de inhoud.

## Footer

`<footer>` markeert het einde van een pagina of sectie. Een footer bevat vaak copyrightinformatie, contactinformatie, gerelateerde links of een link terug naar boven.

```html
<footer>
  <p>&copy; Casscodes</p>
  <address>contact@voorbeeld.nl</address>
</footer>
```

De algemene paginafooter staat buiten `<main>`. Een sectie of artikel kan daarnaast een eigen footer hebben.

## Div

`<div>` is een algemeen vak zonder vaste betekenis. Je gebruikt een div om meerdere elementen bij elkaar te zetten voor CSS of JavaScript. Gebruik eerst een duidelijke tag zoals `<nav>`, `<section>` of `<footer>` als die past bij de inhoud.

```html
<section>
  <h2>Team</h2>
  <div class="card-grid">
    <article class="card">...</article>
    <article class="card">...</article>
  </div>
</section>
```

Tags zoals `<nav>`, `<section>` en `<footer>` maken direct duidelijk wat er in het onderdeel staat. Gebruik daarom zo'n duidelijke tag wanneer die bij de inhoud past.

## Parent, child en sibling

HTML-elementen kunnen binnen andere HTML-elementen staan. Dit heet ook wel **nesten**. Zie het als dozen: een grote doos kan één of meer kleinere dozen bevatten. De buitenste tag en de tags die erin staan, hebben daardoor een relatie met elkaar.

```html
<body>
  <h1>Welkom</h1>
  <p>Dit is mijn website.</p>
</body>
```

- `<body>` is de **parent** (ouder) van `<h1>` en `<p>`, omdat deze tags direct binnen `<body>` staan.
- `<h1>` en `<p>` zijn **children** (kinderen) van `<body>`.
- `<h1>` en `<p>` zijn **siblings** (elementen op hetzelfde niveau), omdat ze dezelfde parent hebben.
- `<html>` is het buitenste element van het document en heeft zelf geen parent.

Een parent is dus het element dat een ander element direct bevat. Een child is het element dat direct binnen die parent staat.

## Formulieren

Een formulier verzamelt gegevens, bijvoorbeeld voor contact, registratie of inschrijving. Het `<form>`-element bevat de verschillende formuliervelden.

```html
<form action="/versturen" method="post">
  <label for="naam">Naam</label>
  <input type="text" id="naam" name="naam">

  <label for="bericht">Bericht</label>
  <textarea id="bericht" name="bericht"></textarea>

  <button type="submit">Versturen</button>
</form>
```

- `<label>` geeft een veld een zichtbaar label. De waarde van `for` komt overeen met de `id` van het veld.
- `<input>` maakt een invoerveld.
- `<textarea>` maakt een veld voor meerdere regels tekst.
- `<button type="submit">` verstuurt het formulier.
- `name` bepaalt onder welke naam de ingevoerde waarde wordt verstuurd.

Andere formulierelementen zijn `<select>`, `<option>`, `<optgroup>`, `<fieldset>`, `<legend>`, `<datalist>` en `<output>`.

```html
<fieldset>
  <legend>Contactvoorkeur</legend>
  <label for="kanaal">Kanaal</label>
  <select id="kanaal" name="kanaal">
    <option value="email">E-mail</option>
    <option value="telefoon">Telefoon</option>
  </select>
</fieldset>
```

## Inputtypes

Het attribuut `type` bepaalt welk soort invoer een `<input>` accepteert. De browser kan hierdoor een passend invoerveld tonen.

```html
<input type="text" name="naam">
<input type="email" name="email">
<input type="password" name="wachtwoord">
<input type="number" name="aantal">
<input type="date" name="datum">
<input type="checkbox" name="nieuwsbrief">
<input type="radio" name="keuze" value="a">
<input type="file" name="bestand">
<input type="submit" value="Versturen">
```

Veelgebruikte types zijn `text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`, `file` en `submit`. Gebruik altijd een bijbehorend `<label>` voor velden die de gebruiker moet begrijpen of bedienen.

## Tabellen

Een HTML-tabel ordent gegevens in rijen en kolommen. Gebruik tabellen voor gegevens, niet voor de layout van een pagina.

```html
<table>
  <tr>
    <th>Naam</th>
    <th>Punten</th>
  </tr>
  <tr>
    <td>Sam</td>
    <td>12</td>
  </tr>
</table>
```

- `<table>` bevat de volledige tabel.
- `<tr>` betekent table row en maakt een rij.
- `<th>` betekent table header en maakt een kopcel.
- `<td>` betekent table data en maakt een gewone datacel.

## Tabelgroepen

Met `<thead>`, `<tbody>` en `<tfoot>` groepeer je de verschillende delen van een tabel.

```html
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Prijs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Notitieboek</td>
      <td>&euro; 12</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Totaal</th>
      <td>&euro; 12</td>
    </tr>
  </tfoot>
</table>
```

- `<thead>` groepeert de kolomkoppen.
- `<tbody>` groepeert de belangrijkste gegevens.
- `<tfoot>` groepeert een afsluitende rij, bijvoorbeeld een totaal.

## Kort onthouden

- Tags zoals `<header>`, `<nav>` en `<footer>` beschrijven de functie van een paginaonderdeel.
- Gebruik `<div>` wanneer er geen duidelijkere HTML-tag bij de inhoud past.
- Elementen die binnen andere elementen staan, kunnen parent, child of sibling van elkaar zijn.
- Een formulier verzamelt gegevens met gelabelde invoervelden.
- Een tabel ordent gegevens met rijen, kopcellen en datacellen.

## Paginanavigatie

- Vorige: [Week 2 - Start HTML](week-2.html)
- Volgende: [Week 4 - CSS, kleuren en fonts](week-4.html)
