# Week 4 - CSS, kleuren en fonts

**Breadcrumb:** Home / Week 4  
**Eyebrow:** Week 4  
**Tags:** CSS-syntax, selectors, kleuren, fonts, Google Fonts

## Introductie

CSS staat voor Cascading Style Sheets en bepaalt de vormgeving van een HTML-document. Deze week leer je hoe een CSS-regel is opgebouwd, hoe je HTML-elementen kiest voor styling en hoe je kleur en tekst aanpast.

## Lesdoelen

- Ik leg uit hoe CSS-syntax is opgebouwd.
- Ik pas kleuren aan met CSS.
- Ik pas tekststijlen aan met CSS.
- Ik leg uit wat fonts zijn en hoe je ze aanpast.
- Ik laad fonts uit een externe bron in.

## Inhoudsopgave

- [CSS-syntax](#css-syntax)
- [Tagselectors](#tagselectors)
- [Class selectors](#class-selectors)
- [ID selectors](#id-selectors)
- [Tekstkleur](#tekstkleur)
- [HEX-kleuren](#hex-kleuren)
- [RGB en RGBA](#rgb-en-rgba)
- [Font family](#font-family)
- [Font weight](#font-weight)
- [Font size](#font-size)
- [Externe fonts](#externe-fonts)
- [Kort onthouden](#kort-onthouden)

## CSS-syntax

Een CSS-regel vertelt welk HTML-element je wilt aanpassen en welke vormgeving het krijgt. Het deel vóór de accolades heet de **selector**. Tussen de accolades staan één of meer instellingen.

```css
p {
  color: gray;
  font-size: 18px;
}
```

- `p` is de selector en bepaalt welk HTML-element wordt geselecteerd.
- Tussen de accolades staan de CSS-instellingen. Dit deel heet ook het **declaration block**.
- `color` en `font-size` zijn eigenschappen. In CSS worden die **properties** genoemd.
- `gray` en `18px` zijn de ingestelde waarden. In CSS worden die **values** genoemd.
- Iedere declaratie eindigt met een puntkomma.

## Tagselectors

Een tagselector kiest alle elementen met dezelfde HTML-tag zodat je ze dezelfde vormgeving kunt geven.

```css
h1 {
  color: navy;
}
```

Deze regel geeft alle `<h1>`-elementen een donkerblauwe tekstkleur. Een tagselector is handig voor een algemene basisstijl.

## Class selectors

Met een class geef je één of meerdere elementen een herbruikbare naam. In CSS herken je een class selector aan de punt.

```html
<p class="intro">Dit is de introductie.</p>
<p>Dit is een gewone alinea.</p>
```

```css
.intro {
  font-weight: bold;
}
```

De class `intro` mag op meerdere elementen worden gebruikt. Gebruik classes voor styling die je wilt herhalen.

## ID selectors

Een id identificeert één uniek element op een pagina. In CSS herken je een ID selector aan het hekje.

```html
<header id="page-header">...</header>
```

```css
#page-header {
  background-color: lightblue;
}
```

Een class kan meerdere keren worden gebruikt. Een id moet uniek zijn binnen dezelfde HTML-pagina.

## Tekstkleur

Met de property `color` verander je de tekstkleur.

```css
p {
  color: gray;
}
```

De property heet `color`, niet `font-color`. Voor een achtergrondkleur gebruik je `background-color`.

```css
section {
  color: navy;
  background-color: lightyellow;
}
```

## HEX-kleuren

CSS kent kleurnamen zoals `red`, `gray` en `blue`. Met een HEX-code kun je veel nauwkeuriger een kleur kiezen. Een HEX-code begint met `#` en bevat zes tekens.

```css
h1 {
  color: #36559e;
}
```

De eerste twee tekens bepalen rood, de volgende twee groen en de laatste twee blauw. Waarden lopen van `00` tot `ff`.

## RGB en RGBA

RGB staat voor red, green en blue. Iedere kleurwaarde ligt tussen 0 en 255.

```css
p {
  color: rgb(54, 85, 158);
}
```

RGBA voegt alpha toe. Alpha bepaalt de doorzichtigheid en loopt van 0 tot 1.

```css
.overlay {
  background-color: rgba(54, 85, 158, 0.5);
}
```

Bij `0` is de kleur volledig doorzichtig. Bij `1` is de kleur volledig zichtbaar.

## Font family

Een font is een lettertype. Met `font-family` bepaal je welk lettertype de browser gebruikt. Zet daarna een reservelettertype, voor het geval het eerste font niet beschikbaar is. Zo'n reservelettertype heet een **fallback**.

```css
p {
  font-family: Verdana, sans-serif;
}
```

De browser probeert eerst Verdana. Als dit lettertype ontbreekt, gebruikt de browser een beschikbaar sans-seriflettertype.

## Font weight

Met `font-weight` bepaal je hoe dik tekst wordt weergegeven.

```css
h2 {
  font-weight: bold;
}

p {
  font-weight: normal;
}
```

Naast woorden zoals `normal` en `bold` ondersteunen veel fonts numerieke diktes, bijvoorbeeld `400` voor normaal en `700` voor vet.

## Font size

Met `font-size` verander je de grootte van tekst.

```css
p {
  font-size: 20px;
}
```

De waarde `20px` betekent twintig pixels. Kies een tekstgrootte die prettig leesbaar blijft.

## Externe fonts

Een extern font, bijvoorbeeld van Google Fonts, wordt eerst in de `<head>` van het HTML-document geladen.

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
```

Daarna gebruik je de fontnaam in CSS:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

Laad alleen de fontdiktes die je daadwerkelijk gebruikt. Kies voor gewone tekst altijd een goed leesbaar lettertype.

## Kort onthouden

- Een CSS-regel bevat een selector, eigenschappen en ingestelde waarden.
- Een class is herbruikbaar; een id is uniek op de pagina.
- Tekstkleur stel je in met `color`.
- CSS ondersteunt kleurnamen, HEX, RGB en RGBA.
- Gebruik `font-family`, `font-weight` en `font-size` voor typografie.
- Een extern font moet eerst worden geladen voordat CSS het kan toepassen.

## Paginanavigatie

- Vorige: [Week 3 - HTML-tags, formulieren en tabellen](week-3.html)
- Volgende: [Week 5 - Box model, position, float, dropdown en z-index](week-5.html)
