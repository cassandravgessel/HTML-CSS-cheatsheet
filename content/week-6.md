# Week 6 - Flexbox

**Breadcrumb:** Home / Week 6  
**Eyebrow:** Week 6  
**Tags:** Flexbox, flexcontainer, flexitems, main axis, cross axis

## Introductie

Flexbox is een CSS-layouttechniek waarmee je elementen snel en overzichtelijk naast of onder elkaar plaatst. De beschikbare ruimte kan automatisch over de elementen worden verdeeld, ook wanneer hun afmetingen verschillen.

## Lesdoelen

- Ik leg uit wat Flexbox is.
- Ik pas Flexbox toe om elementen te positioneren.
- Ik weet hoe en wanneer Flexbox wordt toegepast.

## Inhoudsopgave

- [Flexbox in het kort](#flexbox-in-het-kort)
- [Flexcontainer en flexitems](#flexcontainer-en-flexitems)
- [Hoofdas en dwarsas](#hoofdas-en-dwarsas)
- [Flex direction](#flex-direction)
- [Flex wrap](#flex-wrap)
- [Justify content](#justify-content)
- [Align items](#align-items)
- [Align content](#align-content)
- [Gap](#gap)
- [Instellingen voor flexitems](#instellingen-voor-flexitems)
- [Wanneer Flexbox past](#wanneer-flexbox-past)
- [Kort onthouden](#kort-onthouden)

## Flexbox in het kort

Flexbox regelt de plaats van elementen die direct binnen één omliggend element staan. Het is vooral geschikt voor één richting: een rij naast elkaar of een kolom onder elkaar.

```css
.container {
  display: flex;
}
```

Zodra het omliggende element `display: flex` krijgt, worden de elementen die er direct in staan flexitems. De items worden standaard naast elkaar geplaatst.

## Flexcontainer en flexitems

Het omliggende element met `display: flex` heet de **flexcontainer**. De elementen die daar direct in staan, heten **flexitems**.

```html
<div class="card-row">
  <article class="card">HTML</article>
  <article class="card">CSS</article>
  <article class="card">Flexbox</article>
</div>
```

```css
.card-row {
  display: flex;
}
```

`.card-row` is de flexcontainer. De drie `.card`-elementen zijn flexitems. Elementen die binnen een card staan, horen bij die card en zijn niet automatisch flexitems van `.card-row`.

CSS-instellingen voor de container regelen de groep als geheel. Instellingen voor flexitems regelen één afzonderlijk item.

## Hoofdas en dwarsas

Flexitems worden langs twee assen geplaatst:

- De **main axis** is de hoofdas waarlangs de items worden verdeeld.
- De **cross axis** staat dwars op de hoofdas.
- **main-start** en **main-end** zijn het begin en einde van de hoofdas.
- **cross-start** en **cross-end** zijn het begin en einde van de dwarsas.

Bij `flex-direction: row` loopt de hoofdas normaal horizontaal en de dwarsas verticaal. Bij `flex-direction: column` draait dit om. De hoofdas is dus niet altijd horizontaal.

## Flex direction

`flex-direction` bepaalt de richting van de hoofdas.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

De mogelijke waarden zijn:

- `row` - items staan in een rij; dit is de standaardwaarde.
- `row-reverse` - items staan in omgekeerde rijrichting.
- `column` - items staan onder elkaar in een kolom.
- `column-reverse` - items staan in omgekeerde kolomrichting.

De visuele volgorde veranderen met `reverse` verandert niet de volgorde in de HTML. Houd de HTML-volgorde logisch voor toetsenbord- en schermlezers.

## Flex wrap

Standaard probeert Flexbox alle items op één regel te plaatsen. Met `flex-wrap: wrap` mogen items naar een volgende regel doorschuiven wanneer er onvoldoende ruimte is.

```css
.card-row {
  display: flex;
  flex-wrap: wrap;
}
```

Veelgebruikte waarden zijn `nowrap`, `wrap` en `wrap-reverse`. Voor een flexibel kaartenoverzicht is `wrap` meestal de bruikbare keuze.

De eigenschappen `flex-direction` en `flex-wrap` kunnen samen kort worden geschreven met `flex-flow`:

```css
.card-row {
  display: flex;
  flex-flow: row wrap;
}
```

## Justify content

`justify-content` verdeelt flexitems langs de hoofdas.

```css
.navigation {
  display: flex;
  justify-content: space-between;
}
```

Veelgebruikte waarden zijn:

- `flex-start` - items staan aan het begin van de hoofdas.
- `center` - items staan in het midden.
- `flex-end` - items staan aan het einde.
- `space-between` - vrije ruimte staat tussen de items.
- `space-around` - ieder item krijgt ruimte eromheen.
- `space-evenly` - alle tussenruimtes zijn even groot.

## Align items

`align-items` lijnt alle items langs de dwarsas uit.

```css
.navigation {
  display: flex;
  align-items: center;
}
```

Veelgebruikte waarden zijn `stretch`, `flex-start`, `center`, `flex-end` en `baseline`. `stretch` is standaard en kan items op de dwarsas uitrekken wanneer ze daar geen vaste afmeting hebben.

## Align content

`align-content` verdeelt meerdere rijen of kolommen binnen de beschikbare ruimte. Deze eigenschap heeft alleen zichtbaar effect als de items over meerdere regels staan en er extra ruimte in de container is.

```css
.card-row {
  display: flex;
  min-height: 500px;
  flex-wrap: wrap;
  align-content: center;
}
```

Gebruik `align-items` voor de uitlijning van items binnen een regel en `align-content` voor de verdeling van meerdere regels.

## Gap

Met `gap` maak je gelijke ruimte tussen flexitems zonder losse margins op ieder item.

```css
.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
```

Je kunt rij- en kolomruimte apart instellen:

```css
.card-row {
  row-gap: 16px;
  column-gap: 24px;
}
```

## Instellingen voor flexitems

Een flexitem kan eigen instellingen krijgen.

```css
.card {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 240px;
}
```

- `flex-grow` bepaalt hoeveel een item mag groeien wanneer ruimte overblijft.
- `flex-shrink` bepaalt hoeveel een item mag krimpen wanneer er te weinig ruimte is.
- `flex-basis` bepaalt de beginmaat langs de hoofdas.

De korte schrijfwijze `flex` combineert deze drie waarden:

```css
.card {
  flex: 1 1 240px;
}
```

Andere eigenschappen voor een flexitem zijn:

```css
.belangrijk {
  order: -1;
  align-self: flex-start;
}
```

- `order` verandert de visuele volgorde. Gebruik dit terughoudend, omdat de HTML- en toetsenbordvolgorde niet meeveranderen.
- `align-self` wijkt voor één item af van de `align-items`-waarde van de container.

## Wanneer Flexbox past

Flexbox is geschikt wanneer een groep elementen hoofdzakelijk in één richting wordt verdeeld of uitgelijnd, bijvoorbeeld:

- een navigatiebalk;
- knoppen die naast elkaar staan;
- kaarten die mogen doorlopen naar een volgende regel;
- een element horizontaal en verticaal centreren;
- ruimte verdelen tussen een logo en navigatielinks.

```css
.centered {
  display: flex;
  min-height: 300px;
  align-items: center;
  justify-content: center;
}
```

Flexbox vervangt veel pagina-indelingen waarvoor vroeger `float` of ingewikkelde andere oplossingen werden gebruikt. Je kunt Flexbox ook combineren met media queries om de indeling op verschillende schermformaten aan te passen.

## Kort onthouden

- Het omliggende element met `display: flex` is de flexcontainer; de elementen die er direct in staan zijn flexitems.
- `flex-direction` bepaalt de hoofdas.
- `justify-content` werkt langs de hoofdas en `align-items` langs de dwarsas.
- Met `flex-wrap` mogen items naar een volgende regel.
- `gap` maakt consistente ruimte tussen items.
- Gebruik Flexbox vooral voor layouts in één richting: een rij of een kolom.

## Paginanavigatie

- Vorige: [Week 5 - Box model, position, float, dropdown en z-index](week-5.html)
- Volgende: [Week 7 - Responsive webdesign](week-7.html)
