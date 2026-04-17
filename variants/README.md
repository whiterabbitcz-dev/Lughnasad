# Lughnasad 2026 — 3 designové varianty homepage

## Přehled variant

### V1 — KVIFF / Festivalový čistý minimalismus
Čistá, moderní, galerijní estetika inspirovaná filmovými festivaly. Hodně vzduchu, bílé rámečky s červeným dashed ohraničením, mizející červená linka jako separátor sekcí. Minimální dekorace, sans-serif typografie (Inter), žádné barevné bubliny.

**Soubory:** `v1-kviff/index.html` + `v1-kviff/styles.css`

### V2 — Bohyně / Keltská mystika
Teplá, mystická, ručně dělaná estetika inspirovaná Sonnentor stylem. Motiv bohyně jako hlavní ornament, keltské spirální krucánky, zaoblené rámečky s jemným stínem, voskové pečeti s klíčovými informacemi, teplé krémové pozadí. Cormorant Garamond pro nadpisy.

**Soubory:** `v2-bohyne/index.html` + `v2-bohyne/styles.css`

### V3 — Editorial / Magazinový program
Redakční magazínový layout s důrazem na typografii. Zvýrazněná klíčová slova highlighterovým efektem, drop caps, velké tučné číslice ve statistikách, informační bubliny, FAQ stylizované jako časopisový obsah. Playfair Display pro nadpisy.

**Soubory:** `v3-editorial/index.html` + `v3-editorial/styles.css`

## Jak otevřít pro preview

Každá varianta je **samostatná** — stačí otevřít `index.html` v prohlížeči:

```bash
# Z kořenového adresáře projektu:
open variants/v1-kviff/index.html
open variants/v2-bohyne/index.html
open variants/v3-editorial/index.html
```

Nebo přes Python HTTP server (pro správné načítání fontů):
```bash
cd /cesta/k/Lughnasad
python3 -m http.server 8000
# Pak v prohlížeči:
# http://localhost:8000/variants/v1-kviff/
# http://localhost:8000/variants/v2-bohyne/
# http://localhost:8000/variants/v3-editorial/
```

## TODO

- [ ] **Motiv bohyně (V2)** — aktuálně je inline SVG placeholder, je potřeba dodat finální grafiku od klienta
- [ ] **Fotky merche** — nejsou v repozitáři, potřeba stáhnout z Google Drive
- [ ] **Krucánky / ornamentální prvky** — aktuálně jako inline SVG, klient může dodat vlastní grafiku z OneDrive
- [ ] **Fonty** — Cormorant Garamond (V2) a Playfair Display (V3) jsou z Google Fonts zdarma, žádný nákup nutný

## Doporučení

**Doporučuji prezentovat V2 (Bohyně) jako první** — nejlépe vystihuje keltskou atmosféru festivalu, je dostatečně odlišná od současné verze a zároveň zachovává teplo a příběhovost, které klient ve zpětné vazbě zdůrazňoval (krucánky, rámečky, motiv bohyně). V1 je skvělá jako kontrast (moderní alternativa) a V3 jako kompromis (editorial styl s vyšší informační hodnotou).
