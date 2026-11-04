# Pranav Shukla Portfolio

A personal portfolio and project showcase built with Next.js and deployed as a static site for GitHub Pages. The project is designed to present software engineering work, resume access, and contact information across four plain pages.

## Overview

A personal site with four plain pages: home, projects, resume and contact, in one narrow column of serif text with monospace details.

The app uses the App Router pattern in Next.js and is optimized for both local development and static hosting.

## Technical architecture

### Frontend stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS base reset, with the styles in `src/app/globals.css`

### App composition
- `src/app/layout.tsx` renders the top bar and applies the stored or system theme before first paint
- `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/resume/page.tsx` and `src/app/contact/page.tsx` are the four pages
- `src/components/Navigation.tsx` contains the top bar and theme toggle
- `src/components/Contact.tsx` contains the email copy button, contact links and Ann Arbor clock

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
    contact/page.tsx
    projects/page.tsx
    resume/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    Contact.tsx
    Navigation.tsx
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
