# Personal Resume Platform

Minimal, professional, English-language resume website built with Next.js and Tailwind CSS.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- GitHub Actions + GitHub Pages deployment

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to `main`.
2. In repository settings, go to `Pages` and set source to `GitHub Actions`.
3. Push to `main` again (or run workflow manually).
4. The workflow `.github/workflows/deploy-pages.yml` will publish `out/`.

## Customize content

Edit `src/app/page.tsx`:

- Personal summary and contact links
- Experience timeline
- Projects
- Skills and education
