# Toriq Habil Fadhila — Personal Portfolio

A personal portfolio built with React and Vite. It presents my projects, technical skills, and background as a Business Information Systems student.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ESLint](https://img.shields.io/badge/ESLint-configured-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![Live](https://img.shields.io/badge/Live-GitHub%20Pages-222222?style=flat-square&logo=github)](https://toriqqhabilfadhilaa.github.io/)

**[Live site](https://toriqqhabilfadhilaa.github.io/)** · **[LinkedIn](https://www.linkedin.com/in/toriqhabilfadhila21/)**

<!-- Add a screenshot once available:
![Portfolio preview](public/media/preview.png)
-->

## Overview

The site combines software development with a business-systems perspective. Each project is presented as a problem, a solution, and the value it was meant to deliver, rather than only a list of technologies.

Focus areas: system analysis and design, business process modeling, database design and SQL, web application development, and business analytics.

## Features

- **Single-page layout** with Hero, About, Skills, Projects, Journey, and Contact sections
- **Dark and light theme** via design tokens, switchable from the header
- **Active section tracking** in the navigation while scrolling
- **Scroll-triggered reveals** that respect `prefers-reduced-motion`
- **Project reels**: short rendered clips of each project, played in a custom player
- **Responsive** across desktop, tablet, and mobile

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, JavaScript (ES6+), HTML5, CSS3 |
| Build | Vite 7 |
| Motion | CSS transitions, Remotion (project reels only, not bundled into the app) |
| Quality | ESLint |
| Workflow | Git, GitHub, GitHub Pages, VS Code |

## Getting Started

Requires Node.js 20.19+ (the minimum for Vite 7).

```bash
git clone https://github.com/ToriqqHabilFadhilaa/MyPortofolio.git
cd MyPortofolio
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot module replacement |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

Before pushing, run `npm run lint` and `npm run build`.

## Project Structure

```text
MyPortofolio/
├── public/
│   └── media/            Rendered reels (webm) and posters
├── src/
│   ├── content/          data.js (copy and assets), projects.json (project text, shared with Remotion)
│   ├── styles/           tokens.css, base.css, motion.css, components.css
│   ├── hooks/            useTheme, useInView, useActiveSection, useReducedMotion
│   ├── components/       Header, Hero, About, Skills, Projects, ReelPlayer, Journey, Contact, Footer
│   ├── App.jsx
│   └── main.jsx
├── motion/               Remotion compositions (separate from the app, see motion/README.md)
├── eslint.config.js
├── index.html
├── vite.config.js
└── package.json
```

Content lives in `src/content/`, so text and project details can change without touching components.

## Motion

In-app animation is plain CSS. Tokens in `tokens.css` define one easing curve, one travel distance, and three durations, so every transition feels consistent. All of it is disabled when the user prefers reduced motion.

Remotion is used only to render the project reels. Its output goes to `public/media/`, and `projects.json` is shared so the reel text and the site text never drift apart.

<!--
## Featured Projects

| Project | Description | Stack |
| --- | --- | --- |
| TODO | TODO | TODO |
-->

## Deployment

The site is a static build deployed to GitHub Pages.

```bash
npm run build
```

Publish the contents of `dist/`. If the site is served from a project repository (for example `user.github.io/MyPortofolio`), set `base: '/MyPortofolio/'` in `vite.config.js`. A user site served from the domain root needs no `base`.

## Roadmap

- [ ] Detailed project pages
- [ ] Project filtering
- [ ] Downloadable CV
- [ ] SEO and Open Graph metadata
- [ ] Accessibility audit
- [ ] Image optimization

## Contact

- Portfolio: [toriqqhabilfadhilaa.github.io](https://toriqqhabilfadhilaa.github.io/)
- Source: [github.com/ToriqqHabilFadhilaa/MyPortofolio](https://github.com/ToriqqHabilFadhilaa/MyPortofolio)
- LinkedIn: [toriqhabilfadhila21](https://www.linkedin.com/in/toriqhabilfadhila21/)

## License

Personal portfolio, shared for educational purposes. Feel free to take inspiration from it, but please do not copy the content or design as your own.

---

<p align="center">Built with React and Vite by <strong>Toriq</strong></p>