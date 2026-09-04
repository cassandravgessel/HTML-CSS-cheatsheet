# HTML & CSS Cheatsheet — projectinstructies

Deze map is de bron van waarheid voor het ontwerp en de bouw van de HTML & CSS Cheatsheet. De website bestaat uit één homepagina en zes weekpagina's: week 2 tot en met week 7. De site is uitsluitend een naslagwerk: er komen geen opdrachten, oefeningen, quizvragen of inleverinstructies in.

## Bestanden in deze map

- `site-specs.md` — doelen, pagina's, navigatie en technische eisen.
- `design-system.md` — visuele stijl, kleuren, typografie en componenten.
- `content-template.md` — vaste inhoudsopbouw en vastgestelde theorie voor iedere weekpagina.
- `styles.css` — de gedeelde stylesheet voor de homepagina en alle weekpagina's.
- `../content/home.md` — de volledige tekst en weekomschrijvingen voor de homepagina.
- `../content/week-2.md` t/m `../content/week-7.md` — de volledige, publicatieklare tekst voor iedere weekpagina.

## Beoogde websitestructuur

```text
/
├── index.html
├── week-2.html
├── week-3.html
├── week-4.html
├── week-5.html
├── week-6.html
├── week-7.html
├── content/
│   ├── home.md
│   ├── week-2.md
│   ├── week-3.md
│   ├── week-4.md
│   ├── week-5.md
│   ├── week-6.md
│   └── week-7.md
└── instructions/
    ├── README.md
    ├── site-specs.md
    ├── design-system.md
    ├── content-template.md
    └── styles.css
```

Elke HTML-pagina koppelt dezelfde stylesheet:

```html
<link rel="stylesheet" href="instructions/styles.css">
```

## Bouwvolgorde

1. Bouw eerst de gedeelde header, hoofdnavigatie en footer.
2. Bouw daarna `index.html` met een duidelijke kaart voor iedere week.
3. Maak de weekkaarten compact en uitklapbaar; toon de uitgebreide informatie pas na het openen.
4. Genereer een zoekindex waarmee studenten vanaf iedere pagina naar een term of onderdeel kunnen zoeken.
5. Neem de homecontent over uit `content/home.md` en de weekcontent uit `content/week-2.md` t/m `content/week-7.md`; gebruik `content-template.md` als redactionele leidraad voor latere wijzigingen.
6. Controleer iedere pagina op mobiel, tablet en desktop.
7. Test toetsenbordnavigatie, focusstijlen, kleurcontrast, zoeken en alle links.

De content mag per week groeien, maar de navigatie, vormgeving en hoofdstructuur blijven overal hetzelfde. Formuleer koppen als onderwerpen of handelingen en niet als vragen.
