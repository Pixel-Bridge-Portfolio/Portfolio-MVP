# Pixel Bridge Portfolio MVP

Minimal 4-day MVP for a team portfolio website built with **Next.js** and **MUI**.

## Project Goal
Build a clean, fast, and modern portfolio website for a multidisciplinary team, with:
- Primary color: **White**
- Secondary accent: **Black**
- Subtle, performant animations
- Strong content structure across 8 core pages

## Tech Stack
- Next.js (App Router)
- TypeScript
- MUI (Material UI)
- Emotion (`@emotion/react`, `@emotion/styled`)
- ESLint

## Main Pages (Site Architecture)
1. Home
2. About Us
3. Services
4. Portfolio / Work
5. Team
6. Testimonials
7. Blog / Insights
8. Contact + Global Footer

## UI/UX Direction
- Fixed top navbar with glassmorphism effect
- White-first interface with black accents
- Subtle hover/scroll interactions
- Responsive layout for desktop/tablet/mobile
- Accessible interaction patterns (`prefers-reduced-motion` support)

## Suggested Folder Structure
```txt
src/
  app/
    page.tsx
    about/page.tsx
    services/page.tsx
    work/page.tsx
    team/page.tsx
    testimonials/page.tsx
    blog/page.tsx
    contact/page.tsx
    layout.tsx
  components/
    common/
    layout/
    home/
    about/
    services/
    work/
    team/
    testimonials/
    blog/
    contact/
  data/
    skills.ts
    services.ts
    featuredProjects.ts
    about.ts
  theme/
    theme.ts
  styles/
    globals.css
  lib/
    animations.ts
```

## Getting Started
### 1) Install dependencies
```bash
npm install
```

### 2) Run development server
```bash
npm run dev
```

## 4-Day MVP Plan (High-Level)


## Definition of Done
- All 8 pages implemented and routable
- Shared navbar/footer on all pages
- Theme consistency (white primary, black accent)
- Responsive on common breakpoints
- Basic accessibility checks complete
- No blocking console errors
- Production build passes

## Notes
- Keep animations subtle and lightweight.
- Prefer reusable components and data-driven sections.
- Avoid overengineering; this is an MVP.
