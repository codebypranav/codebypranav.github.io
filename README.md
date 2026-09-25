# Pranav Shukla Portfolio

A personal portfolio and project showcase built with Next.js and deployed as a static site for GitHub Pages. The project is designed to present software engineering work, project architecture, resume access, and contact information in a polished single-page experience.

## Overview

This portfolio application is a personal landing page and engineering showcase. It emphasizes:

- a responsive, animated landing page
- curated project highlights and case studies
- a technical background and experience section
- embedded resume viewing and PDF download
- reusable UI components with a lightweight static-export build

The app uses the App Router pattern in Next.js and is optimized for both local development and static hosting.

## Technical architecture

### Frontend stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Custom `useScrollAnimation` hook for scroll-driven motion
- Component-driven layout using `src/app` and `src/components`

### App composition
- `src/app/page.tsx` renders the homepage sections and project content
- `src/components/Navigation.tsx` contains the header navigation and section scrolling
- `src/components/ProjectCarousel.tsx` handles the project tile carousel experience
- `src/components/ResumeViewer.tsx` embeds the PDF resume and provides download access
- `src/hooks/useScrollAnimation.ts` adds lightweight animation behavior for reveal effects

### Deployment model
The site is configured as a static export-friendly Next.js application. It is built with a production bundle and published via GitHub Pages using `gh-pages`.

Common build and deploy flow:

```bash
npm install
npm run build
npx gh-pages -d out
```

This makes the site suitable for a static hosting platform while keeping the source in a modern React/Next.js structure.

## Project structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    Navigation.tsx
    ProjectCarousel.tsx
    ResumeViewer.tsx
  hooks/
    useScrollAnimation.ts
public/
  Pranav_Shukla.pdf
```

## Local development

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Notes

This portfolio is intentionally designed as a lightweight personal brand site rather than a full CMS or database-backed application. The emphasis is on fast rendering, clean presentation, and easy deployment while keeping the codebase readable and maintainable.

## Contact

- Email: pranavshuklajobs@gmail.com
- LinkedIn: linkedin.com/in/pranavshuklafts
- GitHub: github.com/codebypranav
