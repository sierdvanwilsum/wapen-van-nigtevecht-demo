# Het Wapen van Nigtevecht

Een compacte, Nederlandstalige demowebsite voor Het Wapen van Nigtevecht. Gebouwd met React, TypeScript en Vite; zonder database, CMS of reserveringssysteem.

## Lokaal starten

Installeer eerst Node.js (LTS), daarna:

```sh
npm install
npm run dev
```

Maak een productiebuild met `npm run build`. Bekijk die build lokaal met `npm run preview`.

## Demo-inhoud vervangen

Vervang de teksten tussen blokhaken in `src/App.tsx` door gecontroleerde bedrijfsinformatie. De sfeerfoto's in de hero, over-ons- en reserveringssectie zijn externe voorbeeldfoto's. Vervang die door eigen fotografie en werk de alt-teksten bij. De menupdf-knop is bewust nog niet actief.

## Deploy

De Vite-build kan op Vercel worden gedeployed met `npm run build` als build command en `dist` als output directory.