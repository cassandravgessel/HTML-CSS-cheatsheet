# Week 5 - Box model, position, float, dropdown en z-index

**Breadcrumb:** Home / Week 5  
**Eyebrow:** Week 5  
**Tags:** Box model, padding, margin, position, float, z-index

## Introductie

Elk HTML-element wordt door de browser als een rechthoekig vak behandeld. Het box model beschrijft hoe de inhoud, binnenruimte, rand en buitenruimte van dat vak samenwerken. Met `position`, `float` en `z-index` bepaal je vervolgens hoe elementen op de pagina worden geplaatst en gestapeld.

## Lesdoelen

- Ik benoem het verschil tussen padding en margin.
- Ik pas padding en margin toe op de website.
- Ik positioneer elementen in een website met `position` en `float`.
- Ik maak een dropdownmenu met alleen CSS.
- Ik leg uit waarvoor je `z-index` gebruikt.

## Inhoudsopgave

- [Het box model](#het-box-model)
- [Padding](#padding)
- [Margin](#margin)
- [Meerdere zijden op één regel](#meerdere-zijden-op-een-regel)
- [Een basisreset](#een-basisreset)
- [Position](#position)
- [Static](#static)
- [Relative](#relative)
- [Absolute](#absolute)
- [Fixed](#fixed)
- [Sticky](#sticky)
- [Float](#float)
- [Een CSS-dropdownmenu](#een-css-dropdownmenu)
- [Z-index](#z-index)
- [Kort onthouden](#kort-onthouden)

## Het box model

Het box model beschrijft de ruimte die een element inneemt. Van binnen naar buiten bestaat de box uit vier lagen:

1. **Content** - de tekst, afbeelding of andere inhoud van het element.
2. **Padding** - de transparante ruimte tussen de content en de border.
3. **Border** - de rand rond de content en padding.
4. **Margin** - de transparante ruimte buiten de border.

```css
.card {
  width: 240px;
  padding: 20px;
  border: 2px solid black;
  margin: 24px;
}
```

De browsertools tonen het box model van een geselecteerd element. Daar zijn de afmetingen van content, padding, border en margin afzonderlijk zichtbaar.

## Padding

Padding maakt ruimte **binnen** een element, tussen de inhoud en de rand. De achtergrond van het element loopt door achter de padding.

```css
button {
  padding: 20px;
  border: 2px solid black;
}
```

Door de padding wordt de knop groter en komt de tekst verder van de rand te staan.

Je kunt iedere zijde apart instellen:

```css
.card {
  padding-top: 15px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 5px;
}
```

## Margin

Margin maakt ruimte **buiten** een element. Hierdoor ontstaat afstand tussen de border van het element en omliggende elementen.

```css
button {
  margin: 20px;
}
```

Margin heeft geen eigen achtergrondkleur. Het gebied is doorzichtig, waardoor je de achtergrond van het omliggende element ziet.

```css
.card {
  margin-top: 15px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 5px;
}
```

## Meerdere zijden op één regel

Je kunt de ruimte voor meerdere zijden op één regel schrijven. Deze korte schrijfwijze heet in CSS **shorthand**. Bij vier waarden loopt de volgorde met de klok mee: boven, rechts, onder en links.

```css
.card {
  margin: 15px 20px 10px 5px;
  padding: 12px 24px 16px 8px;
}
```

De verschillende vormen zijn:

```css
/* Alle zijden */
margin: 20px;

/* Boven/onder en links/rechts */
margin: 20px 10px;

/* Boven, links/rechts en onder */
margin: 20px 10px 5px;

/* Boven, rechts, onder en links */
margin: 20px 10px 5px 15px;
```

Dezelfde schrijfwijze geldt voor `padding`.

## Een basisreset

Browsers geven verschillende HTML-elementen standaard padding of margin. Met een basisreset verwijder je die standaardruimte en bepaal je zelf de afstanden.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- `*` is de universele selector en selecteert alle elementen.
- `box-sizing: border-box` zorgt ervoor dat padding en border worden meegerekend binnen de ingestelde breedte en hoogte.

## Position

De CSS-eigenschap `position` bepaalt hoe een element op de pagina wordt geplaatst. Sommige waarden laten de gewone volgorde van de pagina intact; andere halen een element uit die volgorde. De vijf behandelde waarden zijn `static`, `relative`, `absolute`, `fixed` en `sticky`.

De properties `top`, `right`, `bottom` en `left` verplaatsen een positioned element vanaf de bijbehorende zijde.

```css
.element {
  position: relative;
  top: 10px;
  left: 20px;
}
```

## Static

`static` is de standaardwaarde. De browser plaatst elementen in de normale document flow: block-elementen meestal onder elkaar en inline-elementen binnen dezelfde tekstregel.

```css
.element {
  position: static;
}
```

Offsets zoals `top` en `left` hebben geen effect op een static element.

## Relative

Een relatively positioned element blijft onderdeel van de normale document flow. Het element kan worden verschoven ten opzichte van zijn oorspronkelijke positie. De oorspronkelijke ruimte blijft gereserveerd.

```css
.badge {
  position: relative;
  top: 8px;
  left: 12px;
}
```

`position: relative` wordt ook vaak op een parent gezet. Een absoluut geplaatst element dat er direct of indirect in staat, kan die parent dan als startpunt gebruiken.

## Absolute

Een absolutely positioned element wordt uit de normale document flow gehaald. Andere elementen houden geen ruimte voor dit element vrij.

```html
<div class="card">
  <span class="badge">Nieuw</span>
  <h2>Product</h2>
</div>
```

```css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

De badge wordt vanaf de randen van `.card` geplaatst, omdat `.card` `position: relative` heeft. Zonder zo'n omliggend element gebruikt de browser meestal de pagina als startpunt.

## Fixed

Een fixed element wordt uit de document flow gehaald en ten opzichte van het browservenster geplaatst. Het blijft op dezelfde plek wanneer de pagina scrolt.

```css
.back-to-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
```

Fixed position is geschikt voor een element dat voortdurend zichtbaar moet blijven, maar kan inhoud bedekken als er onvoldoende ruimte wordt vrijgehouden.

## Sticky

`sticky` combineert eigenschappen van `relative` en `fixed`. Het element beweegt eerst mee in de normale flow en blijft vanaf een ingestelde grens op zijn plek staan.

```css
.section-title {
  position: sticky;
  top: 0;
  background: white;
}
```

Een sticky element werkt binnen de grenzen van zijn scrollende container. Een waarde zoals `top: 0` is nodig om te bepalen vanaf welk punt het element blijft plakken.

## Float

Met `float` plaats je een element links of rechts, waarna tekst en inline-inhoud eromheen kunnen lopen.

```html
<img class="article-image" src="foto.jpg" alt="Beschrijving van de foto">
<p>Deze tekst loopt naast en daarna onder de afbeelding.</p>
```

```css
.article-image {
  float: left;
  width: 200px;
  margin: 0 20px 10px 0;
}
```

Float werd vroeger veel gebruikt voor complete layouts. Voor moderne pagina-indelingen zijn Flexbox en Grid meestal duidelijker en beter beheersbaar. Float blijft geschikt om tekst rond een afbeelding te laten lopen.

## Een CSS-dropdownmenu

Een dropdownmenu kan worden gemaakt met een lijst binnen een andere lijst. Het submenu is standaard verborgen. Het verschijnt wanneer de gebruiker met de muis over het menu gaat of met de Tab-toets een link in het menu selecteert.

```html
<nav aria-label="Hoofdnavigatie">
  <ul class="menu">
    <li><a href="index.html">Home</a></li>
    <li class="dropdown">
      <a href="weken.html">Weken</a>
      <ul class="submenu">
        <li><a href="week-2.html">Week 2</a></li>
        <li><a href="week-3.html">Week 3</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

```css
.menu,
.submenu {
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu {
  display: flex;
}

.dropdown {
  position: relative;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  min-width: 180px;
  background: white;
}

.dropdown:hover .submenu,
.dropdown:focus-within .submenu {
  display: block;
}
```

`:focus-within` zorgt ervoor dat het submenu ook geopend blijft wanneer een link erin toetsenbordfocus heeft.

## Z-index

`z-index` bepaalt welk overlappend element vooraan staat. Een element met een hogere waarde staat meestal vóór een element met een lagere waarde.

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
}

.decoratie {
  position: absolute;
  z-index: 1;
}
```

`z-index` werkt bij elementen met een ingestelde `position` en ook bij flex- en griditems. Soms vormt een omliggend element een eigen stapelgroep. Daardoor kan een hoge waarde toch niet boven elk element op de hele pagina komen.

## Kort onthouden

- Padding is ruimte binnen de border; margin is ruimte buiten de border.
- Bij vier waarden op één regel is de volgorde boven, rechts, onder en links.
- `position` bepaalt of een element op zijn gewone plek in de pagina blijft.
- Een absoluut geplaatst element gebruikt het dichtstbijzijnde omliggende element met een ingestelde `position` als startpunt.
- Float is vooral geschikt om tekst rond inhoud te laten lopen.
- Een CSS-dropdown gebruikt naast `:hover` ook `:focus-within` voor toetsenbordbediening.
- `z-index` bepaalt de stapelvolgorde van overlappende elementen.

## Paginanavigatie

- Vorige: [Week 4 - CSS, kleuren en fonts](week-4.html)
- Volgende: [Week 6 - Flexbox](week-6.html)
