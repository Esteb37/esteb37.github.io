# Esteban Padilla Cerdio — Portfolio

Personal portfolio website presenting my work as a Robotics Research Engineer focused on **robot learning**, **semantic navigation**, and **dexterous manipulation**.

Built with **Vite + React + TypeScript + Tailwind CSS** and deployed automatically to **GitHub Pages**.

## Stack 

- **React 18 + TypeScript** components, content-driven from typed modules under `src/content/`.
- **Tailwind CSS** for a dark, robotics/lab aesthetic.
- **Framer Motion** for scroll/hover animations.
- **lucide-react** icons.
- Single content layer — no backend, no CMS.

## Local development

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Editing the content

All content is in plain TypeScript files (typed) so you get autocomplete and refactor support:

- `src/content/profile.ts` — name, tagline, bio, focus areas, social links, hero portrait
- `src/content/experience.ts` — research and industry timeline
- `src/content/publications.ts` — papers (OpenFrontier) and current Master Thesis card
- `src/content/projects.ts` — categorized projects (Learning & manipulation, Semantic Navigation & SLAM, Aerial Robotics & Control, ML Systems & Performance)
- `src/content/education.ts` — schools/degrees
- `src/content/skills.ts` — skill groups and languages

Images live in `public/assets/` and are referenced by filename in those content files. The `asset()` helper in `src/lib/asset.ts` automatically prepends Vite's `BASE_URL`, so paths work both locally and when deployed under a sub-path on GitHub Pages.

To add a new project:

1. Drop the image(s) into `public/assets/`.
2. Append a new entry to the `projects` array in `src/content/projects.ts`, picking one of the existing `ProjectCategory` values.

## Deploy to GitHub Pages

A GitHub Actions workflow is included at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It builds the site on every push to `main` and publishes it via GitHub Pages.

One-time setup on GitHub:

1. Create a repo (e.g. `portfolio` or `esteb37.github.io`) and push this folder to the `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow runs and deploys to `https://<user>.github.io/<repo>/` (or to the domain root if the repo is named `<user>.github.io`).

The workflow auto-detects the base path:

- `<user>.github.io` → `BASE_PATH=/`
- `<user>/<repo>`    → `BASE_PATH=/<repo>/`

No manual edits to `vite.config.ts` required.

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI: build + deploy-pages
├── public/
│   ├── assets/                    # images / gifs used by the site
│   └── favicon.svg
├── src/
│   ├── components/                # Hero, About, Research, Experience, Projects, …
│   ├── content/                   # typed content modules (single source of truth)
│   ├── lib/                       # types, asset(), useScrollSpy()
│   ├── App.tsx, main.tsx, index.css
├── index.html
├── vite.config.ts                 # base from $BASE_PATH (defaults to '/')
├── tailwind.config.ts, postcss.config.js
├── tsconfig.json, package.json
└── README.md
```

## License

The source code in this repository is for personal portfolio use. The reference materials (CV, papers, project READMEs) under `references/` remain owned by their respective authors.
