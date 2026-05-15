<div align="center">

# Interactive Developer Portfolio

**A production-grade, immersive web experience** showcasing modern front-end engineering, real-time 3D graphics, and polished product execution.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=0a0a0a)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

*Immersive UI · Type-safe codebase · Performance-conscious builds*

</div>

---

## Executive summary

| Audience | What you will find |
|----------|-------------------|
| **Hiring managers & recruiters** | A **single, reviewable artifact** that demonstrates **UI/UX craft**, **technical depth** (3D, animation, routing), and **attention to delivery** (build pipeline, linting, deployable output). |
| **Engineering reviewers** | A **React + TypeScript** SPA with **Vite**, **code splitting**, **WebGL / R3F** integration, and a **deterministic local run**—no secret configuration required for development. |
| **Candidates & contributors** | Clear **setup**, **scripts**, and a **central config** so you can rebrand and extend the site without reverse-engineering the entire tree. |

> **Bottom line:** Clone, install, run—then explore a portfolio that reads as **intentional product work**, not a static slide deck.

---

## Capabilities at a glance

- **Immersive presentation layer** — 3D scene, motion design, and scroll experience aligned with a professional personal brand.
- **Structured information architecture** — Dedicated routes for the **main narrative**, **selected work**, and an **interactive chess** experience (browser-based engine integration).
- **Engineering hygiene** — TypeScript project references, ESLint, and a **Vite** production build with sensible chunking and minification strategy.
- **Operational clarity** — Documented commands, environment expectations, and deployment notes suitable for **handoff** to DevOps or platform teams.

---

## Quick start (local environment)

**Prerequisites:** Node.js **LTS** (20.x or 22.x recommended) and **npm** (bundled with Node). [Download Node.js](https://nodejs.org/)

```bash
node -v && npm -v
```

**From the repository root** (folder containing `package.json`):

```bash
npm install
npm run dev
```

| Step | Action |
|------|--------|
| 1 | Install dependencies with `npm install` (first clone, or after dependency changes). |
| 2 | Start the dev server with `npm run dev`. |
| 3 | Open **http://localhost:5173/** in your browser. |
| 4 | Stop the server with **Ctrl+C** in that terminal. |

The dev script uses **`vite --host`**, so you may also see a **network URL**—useful for **device testing** on the same corporate or home network (subject to your firewall policy).

---

## NPM scripts reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server with **hot module replacement** and **LAN exposure** (`--host`). |
| `npm run build` | **TypeScript** compile (`tsc -b`) followed by **optimized production bundle** → `dist/`. |
| `npm run preview` | Serves the **production** build locally (run `npm run build` first). |
| `npm run lint` | Static analysis via **ESLint**—supports quality gates in CI. |

---

## Application map (routes)

| Route | Experience |
|-------|------------|
| **`/`** | Primary portfolio: narrative, 3D presence, professional story, and contact pathways. |
| **`/myworks`** | Curated **work and projects** presentation. |
| **`/play`** | **Chess** interaction layer (`chess.js`, `stockfish.js`)—demonstrates integration of complex client-side logic. |

---

## Customization & white-labeling

**Single source of truth for copy and profile data:** `src/config.ts`

Update names, titles, bios, social handles, timelines, and messaging there to **align with your résumé and employer brand**—without scattering edits across dozens of files.

---

## Technology stack (professional framing)

| Layer | Technologies |
|-------|----------------|
| **UI framework** | React 18 |
| **Language & safety** | TypeScript 5 |
| **Tooling** | Vite 5, ESLint |
| **3D & graphics** | Three.js, React Three Fiber, Drei, post-processing |
| **Motion & UX** | GSAP, Lenis (smooth scrolling) |
| **Routing** | React Router |
| **Observability (optional)** | Vercel Analytics & Speed Insights (no `.env` required for local development) |

---

## Production build & release

```bash
npm run build
```

Artifacts land in **`dist/`** and are suitable for **static hosting** (Vercel, Netlify, Cloudflare Pages, enterprise CDN origins, etc.).

**Single-page application routing:** Ensure the host **rewrites unknown paths to `index.html`** so deep links such as `/myworks` and `/play` resolve correctly. Major static hosts provide one-click SPA mode or equivalent rewrite rules.

---

## Reliability & performance notes

| Topic | Guidance |
|-------|----------|
| **Dependency install failures** | Confirm Node **LTS**; retry `npm install`. Escalate only after aligning Node version with team standards. |
| **Port conflict (5173)** | Run on an alternate port, e.g. `npx vite --host --port 5174`. |
| **Heavy 3D / engine workloads** | WebGL and Stockfish are **GPU- and CPU-intensive**; performance reflects client hardware—test on representative machines for demos. |

---

## License

Distributed under the **[MIT License](LICENSE)**. Use, fork, and adapt in line with license terms and organizational open-source policy.

---

## Attribution

This repository builds upon work by **[Yashav Shukla](https://github.com/yashav-shukla)**. If you fork or redistribute substantial portions of the project, **please retain appropriate credit** to the original author in line with community norms and your internal compliance guidelines.

**Live reference:** [yashavshukla](https://interactive-developer-portfolio-two.vercel.app/)

---

<div align="center">

**Built to be reviewed—in the terminal, in the browser, and in the hiring room.**

</div>
