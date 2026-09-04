# Design system

## Creatieve richting

De sfeer is vrolijk, handgemaakt en redactioneel: alsof een zorgvuldig vormgegeven stationery shop en een moderne lesomgeving samenkomen. Het ontwerp verwijst naar het voorbeeld door het contrast tussen expressieve serifkoppen en kleine uppercase labels, brede kleurstroken, royale witruimte en speelse organische decoratie.

Het ontwerp kopieert geen merkonderdelen of exacte composities uit de referentie. Roze wordt niet gebruikt. De eigen identiteit bestaat uit crème, mint, lavendel, lichtblauw, zachtgeel en een klein oranje accent.

## Kleuren

| Token | Hex | Gebruik |
|---|---:|---|
| Ink | `#20211f` | Hoofdtekst en sterke lijnen |
| Paper | `#fffaf0` | Pagina-achtergrond |
| Surface | `#ffffff` | Kaarten en codeblokken |
| Mint | `#cfe2d5` | Navigatie en rustige vlakken |
| Lavender | `#d9d2f0` | Weekkaarten en labels |
| Sky | `#b9d9ee` | Informatieve accenten |
| Butter | `#f2dfa0` | Highlights en callouts |
| Peach | `#efad7f` | Klein accent, nooit voor lange tekst |
| Blue | `#5577c6` | Links, knoppen en focus |
| Muted | `#62665f` | Secundaire tekst |

Gebruik pastelkleuren als achtergrond met donkere tekst. Gebruik voor links en knoppen het diepere blauw zodat tekstcontrast behouden blijft.

## Typografie

- **Koppen:** `DM Serif Display`, Georgia, serif. Groot, vriendelijk en redactioneel.
- **Lopende tekst:** `Space Grotesk`, system-ui, sans-serif. Open en goed leesbaar.
- **Labels/navigatie:** dezelfde sans-serif in gewicht 700, uppercase en met extra letterafstand.
- **Code:** `SFMono-Regular`, Consolas, `Liberation Mono`, monospace.

Gebruik maximaal drie letterfamilies. Lopende tekst is minimaal `1rem` met een regelhoogte van ongeveer `1.7`. Lange tekstregels zijn maximaal 68 tekens breed.

## Vormtaal

- Kaarten hebben een donkere rand van 2 px, zachte afgeronde hoeken en een offset schaduw.
- Knoppen zijn pill-vormig, stevig en hebben een kleine lift bij hover.
- Secties mogen afwisselen tussen crème, wit en pastelvlakken.
- Decoratieve vormen zijn eenvoudige cirkels, blobs, sterren of golven die met CSS zijn gemaakt.
- Decoratie mag nooit tekst afdekken of de leesvolgorde beïnvloeden.
- Gebruik onderstrepingen die een handgetekend gevoel geven, maar houd tekst helder.

## Componenten

### Header en weeknavigatie

Een witte merkregel boven een mintkleurige navigatiestrook. De navigatie is compact, uppercase en op mobiel horizontaal scrollbaar. De actieve link heeft een donkere onderstreping of gevuld vlak.

### Hero

Een ruim crème vlak met een grote serifkop, korte introductie, primaire knop en één of twee abstracte decoratieve vormen. Op desktop kan de content in twee kolommen; op mobiel staat alles onder elkaar.

### Weekkaart

Een klikbare kaart met een weekbadge, serif titel, korte beschrijving en kleine tags. Varieer pastelachtergronden met `card--mint`, `card--lavender`, `card--sky` en `card--butter`. De hele kaart mag een link zijn, mits de focusstijl duidelijk blijft.

### Lessectie

Een sectie heeft een ankertitel, korte uitleg, een codevoorbeeld en waar nuttig een `tip`, `let op` of zichtbaar resultaat. Houd voorbeelden klein: één concept per blok.

### Codeblok

Donkere tekst op een bijna witte achtergrond, met duidelijke rand, voldoende padding en horizontale overflow. Gebruik geen kleurcodering als enige manier om betekenis over te brengen.

### Callout

Een blok met label, titel en korte tekst. Varianten: `.callout--tip`, `.callout--note` en `.callout--warning`. Een icoon is optioneel en altijd aanvullend op een tekstlabel.

## Interactie

- Hover-effecten ondersteunen de bediening, maar essentiële informatie verschijnt niet alleen bij hover.
- Transities duren ongeveer 160–220 ms.
- Klikbare elementen hebben een minimale bruikbare hoogte van 44 px.
- Focus krijgt een blauwe outline met ruimte rondom het element.
- Bij `prefers-reduced-motion: reduce` worden animaties en vloeiende scroll uitgezet.

## Schrijfstijl

Schrijf in vriendelijk, direct Nederlands. Spreek de lezer aan met `je`. Begin uitleg met het resultaat en leg daarna de code uit. Vermijd lange theoretische paragrafen en definieer vaktermen de eerste keer dat ze voorkomen.
