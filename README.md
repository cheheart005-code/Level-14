Level 14 Unlocked 🎮⚽
A animated, mobile-friendly birthday web page styled like a video game level-up screen. It plays a short intro sequence (match result → XP bonus → "Level 14" reveal), then scrolls into a player card, a set of "side quests" with advice, and a confetti finale.
Project Structure
```
level14/
├── index.html      # Page structure and content
├── styles.css      # All styling, animations and responsive rules
├── script.js       # Photo placeholder handling and confetti replay
├── README.md
└── photos/         # You create this (see below)
    ├── praise-1.jpg
    ├── praise-2.jpg
    ├── praise-3.jpg
    └── praise-4.jpg
```
Getting Started
Keep `index.html`, `styles.css` and `script.js` in the same folder.
Create a `photos/` folder next to them and add four images named `praise-1.jpg` to `praise-4.jpg`.
Open `index.html` in any modern browser. No build step or dependencies are needed.
If a photo is missing, its slot shows a dashed placeholder labelled with the expected file name, so the page still looks intentional.
An internet connection is needed for the Google Fonts (Teko and Rubik). Without it, the page falls back to Impact / system fonts.
Sections
Section	ID	Description
Hero	`#hero`	Three-scene animated intro with four polaroid-style corner photos
Player Card	`#card`	FIFA-style card with animated stat bars
Side Quests	`#quests`	Four advice cards
Finale	`#finale`	Birthday message, signature, and a "Run It Back" confetti button
Customizing
Text and names: edit the content directly in `index.html` (match score, stats, quest text, birthday message, signature).
Colors and fonts: change the CSS variables at the top of `styles.css`:
```css
:root{
  --bg:#0a0e18; --bg2:#121833;
  --lime:#c6ff3c; --blue:#2fd3ff; --pink:#ff4fa3; --orange:#ff8a3d;
  --text:#f4f6ff; --muted:#a9b0cc;
}
```
Stat bars: each bar uses two inline variables in `index.html`:
```html
<div class="bar-fill" style="--w:95%;--c:var(--blue);"></div>
```
`--w` is the fill width and `--c` is the color.
Intro timing: the hero sequence is driven by CSS animation delays in `styles.css` (`.scene-match`, `.scene-xp`, `.scene-level` and `.xp-fill`). Adjust the durations and delays together so the scenes still hand off cleanly.
Photos: to use different file names, update the `src` and `data-slot` attributes on the four `.corner-photo` figures in `index.html`.
Features
Fully responsive, with safe-area support for notched phones
Respects `prefers-reduced-motion`: animations are disabled and the intro skips straight to the final "Level 14" scene
Confetti can be replayed with the button in the finale
No frameworks or libraries, just plain HTML, CSS and JavaScript
Browser Support
Works in current versions of Chrome, Edge, Firefox and Safari. It uses `100svh`, `aspect-ratio` and `background-clip: text`.
Sharing
To send it to someone, host the folder on any static host (GitHub Pages, Netlify, Vercel and similar) or zip the folder with the `photos/` directory included.
