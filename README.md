# RITP Website

Modern institutional website for RIT Polytechnic Pune, built with Next.js App Router, Tailwind CSS, TypeScript, and Framer Motion.

## Overview

This project provides a premium, structured, and responsive college website experience designed around a Swiss-grid inspired visual system. The implementation focuses on:

- Strong institutional branding (navy, slate, gold)
- Clean academic layout hierarchy
- Smooth, restrained motion for section reveals and menu transitions
- Modular components for maintainability
- Production-ready build configuration

## Core Features

- Sticky responsive navbar with:
	- Desktop mega-menu style grouped navigation
	- Mobile drawer menu with built-in search
- Legacy-inspired hero section with strong CTA emphasis
- Metrics/impact bar for quick credibility highlights
- Interactive department grid (bento style)
- Latest news/notice feed cards
- Recruiter ticker carousel and wall-of-fame section
- Multi-column footer with:
	- Institutional address
	- Quick links
	- Contact details
	- Newsletter form

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BentoGrid.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ImpactBar.tsx
│   ├── Navbar.tsx
│   ├── NoticeFeed.tsx
│   └── RecruiterCarousel.tsx
├── constants/
│   └── data.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Design System

### Color Tokens

- `navy`: `#002147`
- `slate`: `#334155`
- `gold`: `#D4AF37`

### Typography

- Body: Inter
- Headings: Roboto

### Layout Principles

- Consistent max grid width (`1280px`)
- Clear section rhythm and vertical spacing
- Subtle borders and card shadows for depth
- Decorative grid overlay where useful

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## NPM Scripts

- `npm run dev`: Start development server
- `npm run build`: Create optimized production build
- `npm run start`: Start production server after build
- `npm run lint`: Run lint checks

## Content Management Notes

Most homepage text-driven content is centralized in:

- `constants/data.ts`

You can update:

- Navigation groups and links
- Metrics
- Department cards
- Notices
- Recruiters
- Topper/wall-of-fame entries

This keeps UI components clean and makes updates faster.

## Accessibility and UX Notes

- Semantic sections and headings
- ARIA labels for key nav and footer controls
- Keyboard-accessible links/buttons
- Balanced motion usage to avoid distraction

## Deployment

This app is compatible with standard Next.js hosting targets:

- Vercel
- Netlify (with Next.js support)
- Docker or Node-based VPS

Recommended production command sequence:

```bash
npm ci
npm run build
npm run start
```

## Future Enhancements

- Add full Admissions and Department detail pages
- Integrate CMS-backed notices/events
- Add real newsletter backend integration
- Add analytics and SEO refinements per page
- Add optimized image strategy per section

## License

Private/internal use unless specified otherwise by repository owner.