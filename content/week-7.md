# Week 7 - Responsive webdesign

**Breadcrumb:** Home / Week 7  
**Eyebrow:** Week 7  
**Tags:** Responsive, flexibele maten, media queries, breakpoints, media types

## Introductie

Responsive webdesign zorgt ervoor dat een website zich aanpast aan verschillende schermformaten. Dezelfde inhoud blijft bruikbaar en leesbaar op telefoons, tablets, laptops en grote beeldschermen. Hiervoor gebruik je flexibele maten, Flexbox en media queries.

## Lesdoelen

- Ik toon aan wat een breakpoint op een website is.
- Ik pas een breakpoint toe in CSS.
- Ik benoem het verschil tussen de media types `all`, `print`, `screen` en `speech`.
- Ik pas Flexbox toe om een element responsive te maken voor mobiel.
- Ik maak met media types een website responsive.

## Inhoudsopgave

- [Responsive webdesign](#responsive-webdesign)
- [De bouwstenen](#de-bouwstenen)
- [Flexibele pagina-indeling](#flexibele-pagina-indeling)
- [Flexbox in een responsive layout](#flexbox-in-een-responsive-layout)
- [Media queries](#media-queries)
- [Media types](#media-types)
- [Breakpoints](#breakpoints)
- [Mobile first](#mobile-first)
- [Responsive controleren](#responsive-controleren)
- [Kort onthouden](#kort-onthouden)

## Responsive webdesign

Responsive webdesign is een methode waarbij de layout en inhoud meeveranderen met de beschikbare schermruimte. Een pagina die alleen voor een breed desktopscherm is ontworpen, kan op een telefoon moeilijk leesbaar en bedienbaar worden.

Een responsive website voorkomt bijvoorbeeld dat tekst te klein wordt, onderdelen buiten het scherm vallen of gebruikers van links naar rechts moeten scrollen.

Plaats deze regel in de `<head>`. Hiermee vertel je de mobiele browser dat de pagina even breed moet zijn als het scherm. De zichtbare ruimte van de browser heet de **viewport**.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## De bouwstenen

De les behandelt drie belangrijke bouwstenen:

1. **Flexibele pagina-indeling** - afmetingen passen mee met de beschikbare ruimte. Dit heet ook een **fluid layout**.
2. **Flexbox-layouts** - items kunnen flexibel verdelen, krimpen en doorlopen.
3. **Media queries** - CSS wordt toegepast wanneer aan een voorwaarde wordt voldaan.

Deze technieken vullen elkaar aan. De basis kan flexibele breedtes en Flexbox gebruiken. Een media query kan de richting of afmetingen veranderen zodra daar meer of minder ruimte voor is.

## Flexibele pagina-indeling

Een vaste waarde blijft altijd even groot. Een flexibele waarde past zich aan de beschikbare ruimte van het omliggende element of het scherm aan. Zo'n aanpasbare indeling wordt ook een **fluid layout** genoemd.

```css
/* Vaste breedte */
.container {
  width: 600px;
}

/* Flexibele breedte */
.container {
  width: 90%;
  max-width: 1200px;
  margin-inline: auto;
}
```

De tweede container gebruikt 90 procent van de beschikbare breedte, maar wordt nooit breder dan 1200 pixels. Daardoor past de container zich aan zonder op grote schermen onbeperkt uit te rekken.

Afbeeldingen kunnen op dezelfde manier flexibel worden gemaakt:

```css
img {
  display: block;
  max-width: 100%;
  height: auto;
}
```

## Flexbox in een responsive layout

Met Flexbox kunnen items hun breedte aanpassen en naar een volgende regel gaan.

```css
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 260px;
}
```

Iedere card heeft een gewenste basisbreedte van 260 pixels. De cards mogen groeien, krimpen en doorlopen naar een volgende regel. Hierdoor past de layout zich al aan zonder een media query.

Een media query kan de richting gericht aanpassen:

```css
.navigation {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media screen and (min-width: 768px) {
  .navigation {
    flex-direction: row;
  }
}
```

Op een smal scherm staat de navigatie onder elkaar. Vanaf 768 pixels staan de items naast elkaar.

## Media queries

Een media query controleert een kenmerk van het medium of scherm en past CSS toe wanneer de voorwaarde klopt.

```css
@media screen and (min-width: 768px) {
  .page {
    display: flex;
    gap: 32px;
  }
}
```

- `@media` start de media query.
- `screen` is het media type.
- `(min-width: 768px)` is de voorwaarde.
- De CSS tussen de accolades geldt vanaf een viewportbreedte van 768 pixels.

Plaats media queries onder de basisregels waarop ze voortbouwen. Daardoor staan de oorspronkelijke en aangepaste styles in een voorspelbare volgorde binnen de cascade.

Met `max-width` geldt de CSS tot en met een bepaalde breedte:

```css
@media screen and (max-width: 767px) {
  .desktop-only {
    display: none;
  }
}
```

## Media types

Een media type geeft aan waar de CSS voor bedoeld is, bijvoorbeeld een beeldscherm, printer of voorleessoftware.

### All

`all` geldt voor alle media types en is de standaard wanneer geen type wordt genoemd.

```css
@media all and (min-width: 768px) {
  .container {
    width: 90%;
  }
}
```

### Screen

`screen` is bedoeld voor beeldschermen, zoals desktops, laptops, tablets en telefoons.

```css
@media screen and (min-width: 992px) {
  .sidebar {
    display: block;
  }
}
```

### Print

`print` past styles toe wanneer een pagina wordt afgedrukt of als printvoorbeeld wordt getoond.

```css
@media print {
  nav,
  footer {
    display: none;
  }

  body {
    color: black;
    background: white;
  }
}
```

### Speech

`speech` is bedoeld voor speech synthesizers die inhoud voorlezen. Ondersteuning en praktisch gebruik kunnen per browser en hulpmiddel verschillen.

```css
@media speech {
  .decorative-label {
    display: none;
  }
}
```

## Breakpoints

Een breakpoint is een schermbreedte waarop de layout een aanpassing nodig heeft. De les noemt deze veelgebruikte voorbeeldwaarden:

| Breakpoint | Voorbeeldapparaat |
|---:|---|
| 576 px | verticale telefoons |
| 768 px | tablets |
| 992 px | laptops |
| 1200 px | grotere apparaten |

Deze waarden zijn richtlijnen, geen vaste regels. Kies een breakpoint op het punt waar de inhoud niet meer goed past.

```css
@media screen and (min-width: 576px) {
  /* Aanpassing voor meer beschikbare ruimte */
}

@media screen and (min-width: 768px) {
  /* Tablet-layout */
}

@media screen and (min-width: 992px) {
  /* Brede layout */
}
```

## Mobile first

Bij mobile first schrijf je eerst de basis-CSS voor een smal scherm. Daarna voeg je met `min-width` extra layout toe wanneer meer ruimte beschikbaar is.

```css
.layout {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media screen and (min-width: 768px) {
  .layout {
    flex-direction: row;
  }

  .main-content {
    flex: 2;
  }

  .sidebar {
    flex: 1;
  }
}
```

De HTML blijft gelijk. Alleen de presentatie verandert op basis van de beschikbare breedte.

## Responsive controleren

De apparaatweergave in de browsertools toont een pagina op verschillende schermbreedtes. Een breakpoint is nodig wanneer bijvoorbeeld:

- tekstregels oncomfortabel breed of smal worden;
- navigatielinks niet meer naast elkaar passen;
- kaarten te smal worden;
- inhoud buiten het scherm valt;
- onderdelen elkaar overlappen.

Controleer niet alleen een paar apparaatformaten, maar ook de breedtes ertussen. Een goede responsive layout verandert op basis van de inhoud en niet alleen op basis van apparaatnamen.

## Kort onthouden

- Responsive webdesign houdt een website bruikbaar op verschillende schermformaten.
- Flexibele afmetingen passen mee met de beschikbare ruimte.
- Flexbox kan items verdelen, laten krimpen en laten doorlopen.
- Een media query past CSS toe wanneer een voorwaarde klopt.
- `all`, `screen`, `print` en `speech` zijn verschillende media types.
- Een breakpoint kies je wanneer de inhoud een layoutaanpassing nodig heeft.

## Paginanavigatie

- Vorige: [Week 6 - Flexbox](week-6.html)
- Volgende: [Terug naar het weekoverzicht](../index.html)
