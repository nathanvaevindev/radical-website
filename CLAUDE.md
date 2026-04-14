# CLAUDE.md — Radical Recruitment Website

## Project
Marketing website for Radical Recruitment. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Three.js, Supabase.

## Spec
All pages and sections are fully specified in radical-recruitment-MD.md. Always read this file before building anything. Never deviate from it without flagging it.

## Output Contract
- Always explain what files you created or modified
- Always show full file paths (e.g. src/app/page.tsx)
- Never give partial snippets — always full files unless explicitly asked
- If unsure about something in the spec, stop and flag it instead of guessing
- Keep responses concise and implementation-focused

## Project Structure
- src/app → Next.js App Router pages
- src/components/atoms → smallest reusable elements (buttons, badges, inputs)
- src/components/molecules → combinations of atoms (cards, form fields)
- src/components/organisms → full sections (hero, nav, footer)
- src/components/templates → page-level layout wrappers
- src/lib → utilities, Supabase clients, helpers
- src/hooks → custom React hooks
- src/types → TypeScript type definitions
- public → static assets (logo, images)

Always place files in the correct directory. Never create files in the wrong location.

## Rules
- Never kill or restart the dev server. User runs it separately.
- Never use icons or decorative elements unless explicitly specified in the MD.
- Never install or run commands unless explicitly asked.
- All components must be fully typed — no `any`.
- Always use the brand tokens defined in globals.css — never redefine them inline.
- Commit-ready code only — no console.logs, no TODO comments in production code.
- Mobile-first. All layouts must work from 320px up.

## Design System
All brand tokens (colors, typography, spacing, shadows) are already defined in src/app/globals.css. Always reference these tokens. Never hardcode hex values or font names inline.

## Data Handling
- All dynamic content must come from Supabase
- Use typed queries — no untyped fetches
- Separate data fetching from UI components
- Use server components by default, client components only when needed
- Use placeholder/mock data for Supabase content during phase 1 build. Do not attempt live Supabase connections until environment variables are configured.

## Error Handling
- Validate all assumptions before implementing
- If a dependency is missing, state it explicitly
- If something may cause SSR issues, flag it before implementing
- Never install or run commands unless explicitly asked

## Iteration Mode
- Version 1 = functional, clean, spec-accurate
- Version 2 = refined, animated, optimized
- We are currently in Version 1. Prefer simple working implementations over complex ones.

## Known Issues
- Three.js hero animation had SSR conflicts in Next.js. Resolved by using Canvas API for the hero particle effect. Three.js remains available for other uses as specified in the MD.
- Dev server must not be touched by Claude Code — user manages it manually.

## Error Log
| Date | Issue | Fix |
|------|-------|-----|
| 2026-04-14 | Three.js SSR conflict in hero | Rewrote using Canvas API |
| 2026-04-14 | Dev server killed by Claude Code during testing | Added rule to never touch dev server |
