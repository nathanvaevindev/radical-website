# Radical Recruitment Website

## Project Overview
Marketing website for Radical Recruitment — an AI recruitment company. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and Supabase.

## Key Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server

## Project Structure
- `src/app/(marketing)/` — Public marketing pages (Home, For Companies, Become a Radical, Community, About, Contact)
- `src/app/admin/` — Protected admin routes
- `src/app/api/` — API routes (contact, hire, webhooks)
- `src/components/atoms/` — Basic building blocks (Button, Logo, ParticleRCanvas)
- `src/components/molecules/` — Combinations of atoms (LanguageSwitcher, MobileMenu)
- `src/components/organisms/` — Complex UI sections (Header, Footer, page sections)
- `src/components/templates/` — Page-level layouts
- `src/lib/supabase/` — Supabase client/server configuration
- `src/types/` — TypeScript type definitions
- `src/hooks/` — Custom React hooks

## Design System
- **Dark-first** — `.dark` class on `<html>` is default
- **Colors** — Smaragd (#2ed573) primary, Coral (#E6734F) secondary
- **Fonts** — Afacad Flux (headings), Inter (body)
- **Design tokens** — defined in `src/app/globals.css` via Tailwind v4 `@theme inline`
- **Component architecture** — Atomic design (atoms → molecules → organisms → templates)

## Conventions
- PascalCase components, kebab-case files
- All components must be fully typed (no `any`)
- Responsive from 320px to 1440px
- WCAG AA accessibility minimum
- Content from Supabase where specified; static content stays in code

## Specification
The full design and page specification is in `radical-recruitment-MD.md` at the project root. Always reference this file for page layouts, copy, and component specifications.
