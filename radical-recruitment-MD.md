# Radical Recruitment — Website MD File
## Version 0.1 — Scope Draft (pending technical review)

> 🔵 **Blue comments** = open questions to discuss with technical lead

---

## Role

You are a legendary senior UI designer and front-end architect. You design with intention: every spacing decision, every typographic choice, every interaction state exists for a reason. You do not decorate — you communicate. When this specification is ambiguous, you make the strongest reasonable decision, state your assumption inline, and flag open questions at the end. You never ask for clarification mid-build.

---

## Project Overview

**Radical Recruitment** is a next-generation AI recruitment company. This website is their primary conversion surface — it must work equally hard for two audiences simultaneously: companies hiring AI talent, and AI professionals seeking to join an elite community.

The website is not a brochure. It is a precision instrument. Every section has one job. Every CTA has one destination.

---

## Scope

Full front-end implementation of a marketing website across six pages:

- Home *(logo routes here)*
- For Companies
- Become a Radical
- Community *(phase 2 — placeholder built in phase 1)*
- About Us
- Contact

---

## Target Audiences

**Companies** — they are impatient, skeptical of recruitment agencies, and have been burned by bad hires. They need to feel within 10 seconds that this is different. They respond to clarity, specificity, and evidence of process rigor.

**Candidates (AI professionals)** — they are selective, values-driven, and do not want to be treated as a CV. They respond to community, growth, and being seen as a whole person. They will leave immediately if it feels like a job board.

Each page routes one of these audiences toward a single conversion action. There is no middle ground.

---

## Core Design Principle

**Human-first. Technology-supported. Never the other way around.**

The visual language must carry this. Warmth without softness. Precision without coldness. The design should feel like it was made by people who deeply understand both AI and humanity — not a tech startup trying to seem human, and not a traditional agency trying to seem modern.

---

## Design Language

**Mood:** Premium, calm, intentional. Think editorial — closer to a high-end consultancy or a serious publication than a SaaS product.

**Whitespace:** Generous. Sections breathe. Content does not compete for attention.

**Typography:** The hierarchy does the heavy lifting. H1 is dominant and rare. Body copy is readable at pace. Nothing is small for the sake of looking refined.

**Color:** Dark background with high-contrast type as the default register. Accent color used sparingly and with purpose — never decoratively.

**Motion:** Subtle and purposeful. Entrance animations on scroll (fade + slight upward translate). Interactive elements respond immediately. No looping animations except the testimonial strip. Nothing that makes the user wait.

**Imagery:** Real people, never stock. No abstract AI visuals (no circuit boards, no floating orbs, no neural network renders). If an image doesn't show a real human face or a real environment, it doesn't belong on this site.

---

## Branding & Design Tokens

✅ Confirmed — aligned with RadicalNetwork portal branding document. All tokens below are direct from the live codebase.

---

### Design Principles

- **Dark-first** — dark mode is the default, light mode supported
- **Modern and clean** — generous whitespace, subtle transitions, uncluttered interface
- **Consistent accents** — Smaragd for primary/positive actions, Coral for secondary accents
- **Mobile-first responsive** — all layouts work on mobile and scale up to desktop

---

### Color Palette

#### Primary Accent Colors

| Token | Hex | Tailwind | Usage |
|---|---|---|---|
| Smaragd | `#2ed573` | `text-smaragd` / `bg-smaragd` | Primary CTAs, active states, success |
| Smaragd Dark | `#22b85a` | `text-smaragd-dark` | Hover states |
| Smaragd Light | `#5ee89a` | `text-smaragd-light` | Gradient endpoint, light accents |
| Coral | `#E6734F` | `text-coral` / `bg-coral` | Secondary accents |
| Coral Dark | `#d45a35` | `text-coral-dark` | Hover states |
| Coral Light | `#f09e85` | `text-coral-light` | Light accents |

#### Backgrounds — Dark Mode (default)

| Token | Hex | Tailwind |
|---|---|---|
| Page background | `#0D0D14` | `bg-page` |
| Surface (cards, modals) | `#13131F` | `bg-surface` |
| Surface Light (inputs, hover) | `#1A1A2E` | `bg-surface-light` |
| Surface Border | `#252538` | `border-surface-border` |

#### Backgrounds — Light Mode

| Token | Hex | Tailwind |
|---|---|---|
| Page background | `#F4F6F9` | `bg-page` |
| Surface | `#FFFFFF` | `bg-surface` |
| Surface Light | `#F0F2F5` | `bg-surface-light` |
| Surface Border | `#E2E5EB` | `border-surface-border` |

#### Text — Dark Mode

| Role | Hex | Tailwind |
|---|---|---|
| Headings | `#F0F2F8` | `text-heading` |
| Body | `#B8BDD4` | `text-body` |
| Muted / labels | `#5D6280` | `text-muted` |

#### Text — Light Mode

| Role | Hex | Tailwind |
|---|---|---|
| Headings | `#0D1117` | `text-heading` |
| Body | `#4B5563` | `text-body` |
| Muted / labels | `#6B7280` | `text-muted` |

#### APAC Dimension Colors

| Dimension | Hex | Usage |
|---|---|---|
| Adaptability | `#2ed573` | Scores, badges, radar chart |
| Personality | `#E6734F` | Scores, badges, radar chart |
| Awareness | `#3B82F6` | Scores, badges, radar chart |
| Connection | `#8B5CF6` | Scores, badges, radar chart |

---

### Typography

| Application | Font | Weight | Tailwind |
|---|---|---|---|
| Headings (H1–H6) | Afacad Flux | 700 Bold | `font-heading font-bold` |
| Body text | Inter | 400 Regular | `font-body` |
| Buttons / labels | Inter | 500–700 | `font-medium` / `font-semibold` / `font-bold` |

**Loading:** Afacad Flux via Google Fonts CDN (wght 400, 700) · Inter via `next/font/google`

#### Typography Scale

| Level | Size | Weight | Usage |
|---|---|---|---|
| H1 | 72–96px | 700 | Hero headlines only |
| H2 | 40–52px | 700 | Section headers |
| H3 | 24–28px | 700 | Sub-section headers, card titles |
| H4 | 18–20px | 500 | Labels, small headers |
| Body | 16–18px | 400 | All paragraph copy |
| Caption | 13–14px | 400 | Metadata, footnotes, timestamps |

---

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Small buttons, close icons |
| `--radius-default` | `8px` | Standard elements, inputs |
| `--radius-lg` | `12px` | Cards, modals |
| `--radius-xl` | `16px` | Large containers |
| `--radius-full` | `9999px` | Badges, pills, avatars, buttons |

---

### Shadows & Glow Effects

#### Glow (Dark Mode)

| Effect | Value |
|---|---|
| Smaragd glow | `0 0 40px rgba(46, 213, 115, 0.18)` |
| Smaragd glow strong | `0 0 64px rgba(46, 213, 115, 0.30)` |
| Coral glow | `0 0 40px rgba(230, 115, 79, 0.18)` |

#### Card Shadows

| State | Value |
|---|---|
| Default | `0 0 0 1px #27272A, 0 2px 8px rgba(0,0,0,0.4)` |
| Hover | `0 0 0 1px rgba(46,213,115,0.2), 0 4px 24px rgba(0,0,0,0.5)` |

---

### Gradients & Effects

```css
/* Gradient text — Smaragd */
.gradient-text {
  background: linear-gradient(135deg, #2ed573 0%, #5ee89a 50%, #2ed573 100%);
  -webkit-background-clip: text;
  color: transparent;
}

/* Gradient text — Smaragd to Coral */
.gradient-text-warm {
  background: linear-gradient(135deg, #2ed573 0%, #E6734F 100%);
}

/* Glass morphism */
.glass {
  backdrop-filter: blur(16px);
  background: color-mix(in srgb, var(--bg-surface) 60%, transparent);
  border: 1px solid var(--bg-surface-border);
}
```

**Background patterns:**
- Grid pattern: 40×40px lines, `rgba(255,255,255,0.03)`
- Dot pattern: 24×24px dots, `rgba(255,255,255,0.06)`
- Radial overlays: Smaragd & Coral radial gradients

---

### Animation

| Name | Duration | Usage |
|---|---|---|
| `float` | 8s | Decorative elements |
| `float-slow` | 12s | Slow decorations |
| `shimmer` | 3s | CTA button glow pulse |
| Hover scale | instant | `hover:scale-[1.02]` / `active:scale-95` |

**Transitions:** `duration-150` fast · `duration-200` standard · `duration-300` smooth

**Reduced motion:** All animations disabled at `prefers-reduced-motion: reduce`

---

### Component Specifications

#### Buttons

| Variant | Background | Text | Hover |
|---|---|---|---|
| Primary | `bg-smaragd` | `text-white` | `hover:bg-smaragd-dark` |
| Secondary | `bg-surface-light` | `text-heading` | `hover:bg-surface-border` |
| Ghost | Transparent | `text-heading` | `hover:bg-surface-light` |
| Danger | `bg-red-500` | `text-white` | `hover:bg-red-600` |

All buttons: `rounded-full` · `px-5 py-2.5` · `text-sm font-semibold` · `transition-all duration-150`

#### Badges

| Variant | Background | Text |
|---|---|---|
| Default | `bg-surface-light` | `text-body` |
| Smaragd | `bg-smaragd/15` | `text-smaragd` |
| Coral | `bg-coral/15` | `text-coral` |
| Warning | `bg-yellow-500/15` | `text-yellow-400` |
| Danger | `bg-red-500/15` | `text-red-400` |

All badges: `rounded-full` · `px-3 py-1` · `text-xs font-semibold`

#### Cards

- Background: `bg-surface`
- Border radius: `rounded-[12px]`
- Shadow: `shadow-md`
- Hover: `-translate-y-0.5 shadow-lg`
- Padding: `p-4` (sm) · `p-7` (md) · `p-8` (lg)

#### Form Inputs

```css
width: 100%;
border-radius: 0.5rem;
border: 1px solid var(--bg-surface-border);
background: var(--bg-surface-light);
padding: 0.5rem 0.75rem;
font-size: 0.875rem;
color: var(--text-body);
/* Focus: */
border-color: #2ed573;
```

---

### Spacing System

Base unit: `8px`. All spacing, padding, margin, and gap values are multiples of this unit.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `8px` | Tight internal gaps |
| `--space-2` | `16px` | Component internal padding |
| `--space-3` | `24px` | Between related elements |
| `--space-4` | `32px` | Between components |
| `--space-6` | `48px` | Section sub-divisions |
| `--space-8` | `64px` | Between major sections (mobile) |
| `--space-12` | `96px` | Between major sections (desktop) |
| `--space-16` | `128px` | Hero and closing section vertical padding |

---

### Layout

- **Max content width:** `1280px`
- **Content column width:** `720px` (text-heavy sections)
- **Grid:** 12-column, `24px` gutters on desktop, `16px` on mobile
- **Breakpoints:** `sm: 640px` / `md: 768px` / `lg: 1024px` / `xl: 1280px`

---

### Accessibility

- **Focus states:** `focus-visible:ring-2 focus-visible:ring-smaragd focus-visible:ring-offset-2`
- **Reduced motion:** All animations disabled
- **Color contrast:** Text on surface meets WCAG AA
- **Keyboard navigation:** All interactive elements reachable via Tab

---

### Scrollbar

```css
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--bg-surface-border); border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }
```

---

## Technical Stack

✅ Versions confirmed — aligned with portal codebase.

- **Framework:** React with TypeScript
- **Routing / SSR:** Next.js (App Router)
- **Styling:** Tailwind CSS **v4** (via `@tailwindcss/postcss`) with CSS variable theme system + `.dark` class
- **Animation:** Framer Motion — confirmed for all UI transitions, scroll-triggered entrance animations, and the testimonial strip loop
- **3D / Immersive elements:** Three.js — included in architecture for phase 1. Most likely placement is the hero section. Exact implementation and asset scope to be decided during build.

- **Font loading:** `next/font/google` for Inter · Google Fonts CDN for Afacad Flux
- **Forms:** React Hook Form
- **Data:** Supabase (`@supabase/supabase-js`)
- **Component architecture:** Atomic — atoms → molecules → organisms → page templates
- **Naming convention:** PascalCase components, kebab-case files, semantic prop names

All components must be:
- Fully typed (no `any`)
- Responsive from 320px to 1440px
- Accessible (WCAG AA minimum — keyboard navigation, focus states, aria labels on all interactive elements)
- Independently testable (no business logic inside UI components)

---

## Interactive Components — Specification Summary

The following components require explicit interaction logic. Each page spec defines them in detail, but build them as reusable, configurable components:

- **Infinite scroll testimonial strip** — auto-scrolling horizontal loop, pauses on hover, touch-swipeable on mobile
- **Role selector** (For Companies page) — click-to-reveal panel, updates left column content dynamically
- **Accordion** — single-open, smooth height transition, icon toggles between + and ×
- **Step timeline** — vertical, sequential, icon per step
- **Contact form** — two variants (companies / professionals), validation inline, submit triggers a clear success state

---

## Navigation

Global header contains:
- **Logo (left):** clicking the logo routes to Home (`/`)
- **Nav links (centre):** `For Companies` · `Become a Radical` · `Community` · `About Us`
- **CTA button (right):** `Contact` — Smaragd filled button, routes to Contact page

Header is sticky. Background transitions from transparent to solid on scroll. On mobile: hamburger → full-screen overlay menu with all nav links stacked and the Contact CTA button at the bottom.

**Notes:**
- `Community` links to the phase 2 placeholder page in phase 1 — visible and accessible, not hidden
- `About Us` is the nav label for the About Radical page
- `Contact` is treated as a CTA button, not a plain nav link — it is always the most visually prominent element in the header

---

## Conversion Logic

Every page ends with a conversion moment. The global rule:

- **Companies** always land on a form or a "Hire a Radical" CTA
- **Candidates** always land on "Start your journey" → `https://radicalnetwork.nl`

No page ends without a next step.

---

## Data Architecture

### Data Layer

**Confirmed: Supabase** — single data layer for all content, media, and dynamic data.

No separate headless CMS is needed. Supabase handles structured data via Postgres tables, semi-structured data via JSON/JSONB fields, and media assets (images, video) via Supabase Storage. It is free within generous usage limits and integrates cleanly with Next.js via the `@supabase/supabase-js` client and server-side helpers for the App Router.

**Content stored in Supabase:**

- Testimonials (quote, name, role, location, photo URL, rating)
- Community events (title, date, time, type, location, description)
- Team members (name, role, photo URL, bio, LinkedIn URL)
- Job roles / Radical profiles (title, description, responsibilities, image URL)
- FAQ items (question, answer, page context)
- Media assets — images and video via Supabase Storage, referenced by URL in content tables

**Content types that stay in code (static):**

- Navigation structure
- APAC framework definitions (stable, rarely changes)
- Design tokens and component variants

---

### Structured Data

Relational, typed tables in Supabase Postgres:

- `team_members` → linked to About page team grid
- `events` → linked to community section on Homepage and Community page
- `roles` → linked to For Companies interactive role selector
- `testimonials` → linked to infinite scroll strip on Become a Radical
- `faq_items` → linked to FAQ accordion on Become a Radical

Fetched server-side via Next.js App Router `async` components where possible. Dynamic content (events, testimonials) uses ISR with a short revalidation window — fast site, always fresh data.

---

### Semi-Structured Data

Content with consistent shape but variable depth — stored as JSONB fields in Supabase:

- Founder bios (variable paragraph structure)
- Role descriptions with optional bullet lists
- FAQ answers with optional embedded links

The front-end renders JSONB content through controlled components that enforce the visual system — editors have flexibility within defined bounds.

---

### Unstructured Data

Free-form content with no predictable schema:

- **Contact form submissions** — not stored in the CMS. Routed through a transactional email service (Resend recommended) and optionally piped to a CRM or Notion database via webhook. No sensitive data at rest in the front-end layer.
- **APAC test entries** — out of scope for this front-end build. Handled externally at `https://radicalnetwork.nl`. The website links out — it does not own the data.

---

### External Integrations

Vacancy display is **phase 2**. Candidates cannot apply directly through the website — they must first go through the Radical selection process via the portal. Direct vacancy applications are intentionally not supported on this site.

However, the Supabase schema is designed now to support vacancies in phase 2 without architectural changes. A `vacancies` table will be created in Supabase as part of the initial schema setup — structure defined, but the front-end component that displays it is not built in phase 1. This keeps the codebase modular and ready to scale.

**Phase 2 scope (not in current build):**
- `vacancies` table in Supabase (schema defined in phase 1)
- Vacancy display component on website
- Logic to surface relevant roles without enabling direct applications

---

### Admin Panel

A protected internal admin section is built into the website at `/admin`. This is not publicly accessible — authentication required (Supabase Auth).

**Phase 1 — managed via `/admin`:**
- Testimonials — add, edit, delete
- Community events — add, edit, delete
- Team members — add, edit, delete, reorder
- Job roles — add, edit, delete

**Access:** Radical team only. No external user accounts.

**Phase 2:** Admin functionality migrates into the portal once it is fully developed and secured. The `/admin` route can be deprecated at that point with no impact on the public-facing website.

---



All form submissions (contact form + hire a Radical form) follow the same flow:

**1. Write to Supabase**
Every submission is stored in a `form_submissions` table in Supabase. Fields: form type, name, email, company name, request/message, timestamp, status.

**2. Email notification via Infomaniak KSuite**
On submission, a transactional email is sent to the Radical team via Infomaniak KSuite SMTP. This is the immediate human notification layer.

**3. Webhook to portal**
A webhook fires on each new submission to notify the recruitment portal. The portal API connection is not yet defined — prepare the webhook handler as a Next.js API route (`/api/webhooks/form-submission`) so it is ready to connect when the portal API spec is delivered. The route should be structured to accept a payload and forward it — no portal-specific logic hardcoded.

**4. Phase 2 — Portal API integration**
Once the portal API is defined, the webhook handler is updated to POST structured submission data directly into the portal. No front-end changes required — only the webhook handler is extended.

**API routes to prepare (phase 1):**
- `POST /api/contact` — handles contact form submission
- `POST /api/hire` — handles hire a Radical form submission
- `POST /api/webhooks/form-submission` — webhook handler, ready for portal connection

---



**Per-page metadata** managed through Next.js App Router's native `generateMetadata` function. Every page exports:

```ts
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Page Title | Radical Recruitment',
    description: '...',
    openGraph: { ... },
    twitter: { ... },
  }
}
```

**What gets defined per page:**

- `title` — unique, keyword-relevant, under 60 characters
- `description` — conversion-aware, under 155 characters
- `canonical` URL
- `og:image` — per-page social share image (1200×630), generated via Next.js `ImageResponse` or stored in Supabase Storage
- `og:title` / `og:description` — can differ from meta title/description
- `twitter:card` set to `summary_large_image`

**Global SEO layer:**

- `robots.txt` — generated via Next.js route handler
- `sitemap.xml` — auto-generated, includes all static pages and dynamic Supabase-sourced content
- `schema.org` structured data — `Organization`, `WebSite`, and `JobPosting` types where relevant, injected as `<script type="application/ld+json">` in page `<head>`
- Canonical tags on all pages to prevent duplicate content issues

**Performance as SEO:**

- All images through `next/image` — automatic WebP conversion, lazy loading, explicit width/height to prevent layout shift
- Core Web Vitals targets: LCP under 2.5s, CLS under 0.1, INP under 200ms
- Google Search Console integration from day one

---

## Open Questions (full list)

> 🔵 All items below require confirmation from technical lead before build begins.

1. **CMS choice** — ✅ Resolved. Supabase is the confirmed data layer for all structured, semi-structured, and media content. No separate headless CMS needed.
2. **Vacancy display** — ✅ Resolved. Phase 2. `vacancies` table created in Supabase schema now for future scaling, but no front-end component built in phase 1. Direct applications not supported — candidates must go through the portal.
3. **Brand color tokens** — ✅ Resolved. Full branding confirmed and aligned with RadicalNetwork portal. See Branding & Design Tokens section.
4. **Typography** — ✅ Resolved. Afacad Flux (headings) + Inter (body). Confirmed from portal codebase.
5. **3D / Immersive layer** — ✅ Resolved. Three.js confirmed. Included in architecture. Hero section is the likely placement. Final implementation scoped during build.
6. **Dependency versions** — ✅ Resolved. Tailwind CSS v4 confirmed. Aligned with portal stack.
7. **Form submission endpoint** — ✅ Resolved. See Form Submission Architecture below.
8. **APAC test** — ✅ Resolved. External link to `https://radicalnetwork.nl` — no embed. All "Start your journey" and "Apply to the program" CTAs link there.
9. **Content editors** — ✅ Resolved. A lightweight internal admin panel is built into the website for phase 1. Admins manage testimonials, events, team members, and roles directly through a protected admin section of the site (`/admin`). Route is authentication-gated — not publicly accessible. Phase 2: admin functionality migrates into the portal once it is fully developed and secured.

---

---

# Page Specifications

---

## Page 1: Home

### Page Goal

The homepage functions as a high-impact elevator pitch for both companies and candidates. Within minutes, the visitor must understand who Radical is, what they do, and why it is relevant to them. The page attracts attention, builds trust, and routes visitors toward their next step.

Three things are communicated on this page:
1. Our positioning — clear and direct, no noise
2. What makes us unique — introducing the APAC framework at headline level, not in full detail
3. Clear next steps — multiple conversion points for both audiences

---

### Section 1: Hero

**Purpose:** Immediate, powerful entry point. AI is everywhere — Radical is about the human factor. Two clear paths open from this moment.

**Layout:** Full-width. H1 dominant. Two CTAs directly visible below.

**Copy:**
- Small label above H1 (optional): `Radical Recruitment`
- H1: `AI is everywhere. The human factor is rare.`
- Subtext: One supporting sentence clarifying the proposition (max 1 line)

**Components:**
- 2 CTA buttons: `Find a Radical` → companies / `Become a Radical` → talent

**Design notes:**
- H1 must dominate the viewport. Nothing competes with it.
- CTAs are equal weight — neither audience is primary at this moment
- No imagery in the hero. Typography carries the full weight.

---

### Section 2: APAC Framework

**Purpose:** Text-driven section introducing the APAC framework with clarity and conviction. The visitor understands why this framework is unique and what it selects for.

**Layout:** Vertical stack. Text-led. No visual distraction.

**Copy:**
- H2: `The APAC Framework`
- Subtext: 2–3 sentences explaining the value of the framework
- 4 stacked items:
  - Adaptability
  - Personality
  - Awareness
  - Connection
- 1 short, sharp sentence per item

**Components:**
- Text blocks (no cards)
- Stacked list for APAC items
- 2 CTAs: `Hire a Radical` → companies / `Apply to the program` → `https://radicalnetwork.nl`

**Design notes:**
- No icons, no illustrations. The copy must carry this section.
- APAC items are typographically differentiated from body text — larger, bolder label

---

### Section 3: Talent & Companies Split

**Purpose:** Two clear audience paths side by side. Fast recognition, direct routing.

**Layout:** Two columns side by side. Equal visual weight.

**Block 1 — Talent (left):**
- H2: `Stop being a commodity. Become a Radical.`
- Optional subtext (max 1 line)
- 3 USPs:
  1. Personal guidance
  2. Professional career coaching
  3. Peer-to-peer learning within the community of top AI experts + events
- CTA: `Become a Radical`

**Block 2 — Companies (right):**
- H2: `Hire AI talent that doesn't expire`
- Optional subtext (max 1 line)
- 2 USPs:
  1. Only the best candidates from our community
  2. Sharpest rates in the market
- CTA: `Hire a Radical`

**Design notes:**
- Both blocks must feel visually paired — same height, same rhythm
- On mobile: stack vertically, Talent first

---

### Section 4: Radical Community

**Purpose:** The community becomes visible as an active, living environment with real events. Visitors see what's happening and how to participate.

**Layout:** Two columns. Left: event list. Right: community visual.

**Copy:**
- H2: `The Radical Community`
- Subtext: `Our community is built on a curated selection process, centered around our proprietary APAC framework and individual assessments. This ensures that every member brings not only technical excellence but also the human-centric qualities essential for leadership in AI.`

**Block 1 — Community agenda (left):**
- Optional label: `Upcoming Events`
- 3–5 events visible in a vertical list
- Per event: date/time · title · short context (optional) · location or type (online/offline)
- Event types (not shown as labels, embedded in content): group events, learning events, workshops, meetups, talks/sessions

**Block 2 — Community values (below agenda or integrated left):**
- We learn together
- We make each other better
- We build the foundation for ethical AI in Europe

**Block 3 — Visual (right):**
- 1 image of community / people together
- Context: event, collaboration, interaction

**CTA:** `Go to Community`

**Data note:** Events are stored in Supabase. The component must be built to render dynamic content, not hardcoded.

---

### Section 5: Radical Manifest

**Purpose:** A human, visual moment that puts the founders front and centre before the final conversion section. No header, no marketing language — just the people and the proof.

**Layout:** Two founder portraits side by side, full width of the content column. Checklist of 3 points centred below the images.

**Components:**
- 2 portrait images side by side: Nelieke (left) · Oscar (right)
- Images are equal size, equal height, consistent rounded corners
- No names, no titles, no captions on or below the images — the faces speak
- Below the images, centred: 3 checkmarked points
  - ✔ 30+ years of experience and network
  - ✔ Strong connection with Gen Z and AI natives
  - ✔ Selective entry and personal development

**Design notes:**
- No section header. No subtext. The images open the section cold — that is intentional.
- Checkmarks are typographically light, not bold. The list supports the images, it does not compete.
- Generous spacing between the images and the checklist — let the portraits breathe.
- No CTA in this section.

---

### Section 6: Get in Touch

**Purpose:** Simple closing section. One clear choice: companies or professionals.

**Layout:** Two clickable blocks side by side.

**Copy:**
- H2: `Get in touch`
- Block 1: `For Companies` → hiring flow
- Block 2: `For Professionals` → candidate flow

**Design notes:**
- No form on the homepage. This section routes only.
- Both blocks are equal weight, equal size
- Final conversion moment — no distractions

---

## Page 2: For Companies

### Page Goal

This page shows companies exactly what the value of the Radical community is for them. They understand: how Radical selects and develops AI professionals via the APAC framework, why this approach is fundamentally different from traditional recruitment, what AI roles they can hire for (junior to senior), and how the matching process works. The page builds trust and routes toward conversion via a low-friction form.

---

### Section 1: Hero

**Purpose:** Introduce the page with a strong quote that frames the need for a radical approach in AI recruitment. Human and vision-led.

**Layout:** Two columns. Left: quote (leading). Right: image (human / Nelieke).

**Copy:**
- Quote at H2 scale, large and readable
- Theme: speed of AI vs. market, failure of traditional recruitment, need for a radical approach
- Copy to be finalised and sharpened separately

**Components:** Text block (quote) + portrait image. No abstract visuals.

---

### Section 2: How Radicals Are Selected

**Purpose:** Transparent, step-by-step view of the selection process. Focus on selection rigour, not marketing.

**Layout:** Vertical timeline, 4 steps stacked.

**Steps:**
1. **Applications arrive** — sourcing via network and community
2. **APAC test** — candidates complete the APAC assessment
3. **Human assessment** — evaluation on human qualities: adaptability, ethics, character
4. **Joins the Radical community** — candidate enters the community

**Components:** Vertical step list. Per step: title + 1-line description + icon (replaceable).

---

### Section 3: What Your Radicals Bring

**Purpose:** Concrete value of Radical professionals. Scannable, no visuals, pure content.

**Layout:** Checklist, 3 items vertical.

**Copy:**
- ✔ **Direct impact on your projects** — Junior, medior or senior, trained to create value immediately
- ✔ **Ethical compass in every decision** — Professionals who build responsible and transparent AI
- ✔ **Built for tomorrow's challenges** — We match talent to the skills and vision you need ahead

**Components:** Checklist with green checkmarks.

---

### Section 4: Roles We Place

**Purpose:** Interactive section showing companies which AI roles are available. Selecting a role reveals a human profile with concrete role details.

**Layout:** Two columns. Right: clickable role list. Left: dynamic content block that updates on selection.

**Role list (right):**
- AI engineer
- AI ethicist
- Data scientist
- LLM specialist
- ML engineer
- Product lead
- *(expandable to 8 roles)*

**Role detail block (left) — updates on click:**
- Portrait image (human, not stock)
- H3: Short role description (e.g. `Designs and deploys scalable systems`)
- Intro: 1–2 sentences on role and impact
- 3–5 bullet points: tasks and responsibilities

**Example content (AI engineer):**
- H3: `Designs and deploys scalable systems`
- Bullets: Builds and maintains production-ready AI systems · Translates models into scalable infrastructure · Works closely with product and data teams · Ensures performance, reliability, and adaptability

**Interaction:** Click role → left panel content transitions. Active state on selected role in list.

**Data note:** Roles and their content are stored in Supabase. Component must handle dynamic data, not hardcoded copy.

---

### Section 5: The APAC Framework

**Purpose:** Explain the APAC framework as the backbone of selection. Show companies what their Radicals are assessed on and why this leads to better hires.

**Layout:** Vertical list. 4 items. CTAs below.

**Copy:**
- H2: `The APAC Framework`
- Intro: 2–3 sentences on selecting for human qualities
- 4 items, each with label (A/P/A/C), title, and 1–2 sentence description:
  - **A — Adaptability:** Thrives in ambiguity and change. Learns fast, adapts quickly, and remains effective as environments evolve.
  - **P — Personality:** Brings ownership, energy, and initiative. Communicates clearly and contributes actively within teams.
  - **A — Awareness:** Understands context beyond the task. Acts with ethical responsibility and sees the broader impact of decisions.
  - **C — Connection:** Builds strong relationships across teams and stakeholders. Collaborates effectively and aligns with people and environment.

**CTAs:** `Hire a Radical` / `Read all about it here`

---

### Section 6: How We Match You With Your Radical

**Purpose:** Clear, linear process view. Shows companies how Radical works from intake to placement.

**Layout:** Vertical timeline. Left: visual steps. Right: title + description per step.

**Steps:**
1. **We receive your request** — company submits intake
2. **In-depth intake** — we visit for an interview about your organisation, challenges, and team
3. **We make the match** — selection of best-fit candidates from the community
4. **Profiles & interviews** — you receive 2–3 profiles and conduct selection conversations
5. **Placement** — candidate is placed

**Components:** Vertical timeline. Per step: title + 1-line description + optional icon.

---

### Section 7: How We Create the Perfect Match

**Purpose:** Distinguish Radical from traditional recruitment. Explain enriched profiles and AI + human validation.

**Layout:** Intro text + 3 blocks vertical (or grid).

**Copy:**
- H2: `We don't send CVs. We deliver matches.`
- Intro: We don't work with standard vacancy profiles and CVs. We build enriched profiles for both client and candidate.

**Block 1 — Client profile:**
- Based on intake and interview with organisation and team lead
- Insight into: challenges · team dynamics · culture and expectations

**Block 2 — Candidate profile:**
- Consists of: CV · interview · APAC test
- Insight into: skills · behaviour · human qualities

**Block 3 — Matching process:**
- AI matches enriched profiles
- Human-in-the-loop validation by recruiter
- Remaining uncertainties resolved before candidate is presented

---

### Section 8: Hire a Radical (Conversion)

**Purpose:** Strong visual closing section for companies. One clear action: start the process.

**Layout:** H2 + optional subtext + form directly visible.

**Copy:**
- H2: `Hire a Radical`
- Optional subtext: `Start your search for the right AI professional`

**Form fields:**
- Name
- Email
- Company name
- Request (open text field)

**Submit button:** `We will contact you within 24 hours`

**Design notes:** This is the most important conversion moment on the page. Form must be immediately visible, not behind a scroll. Low friction — 4 fields maximum.

---

## Page 3: Become a Radical

### Page Goal

This page makes candidates feel that Radical is not a traditional recruiter but a community where they — as a person and professional — are central. Visitors understand that joining the Radical community doesn't just help them find a job: it develops them through professional guidance, career coaching, personal growth, and peer-to-peer learning with other top AI professionals. Access is selective via the APAC test, which protects community quality. The page makes candidates feel seen, and continuously drives them toward one action: starting their journey via the APAC test.

---

### Section 1: Hero

**Purpose:** Strong, human entry point that communicates identity and belonging. Visually structured so that content below the hero is partially visible, signalling scroll.

**Layout:** Hero is NOT full 100vh. Height is limited to approximately 80–90% of viewport so the next section peeks up from below.

**Structure:**
- Background: one large portrait of a Radical (human, authentic)
- Top left: small domain list — AI Engineering · Design · Strategy · Innovation · Ethics · Product · Automations
- Centre: small intro line `Become a` + large title `Radical` + subtitle `Europe's thriving AI recruitment community`
- Bottom: next section visually clips into view — triggers scroll behaviour

---

### Section 2: How Radicals Are Selected

**Purpose:** Explain that Radical doesn't start from a vacancy — it starts from the person. Left: why Radical is different. Right: selection timeline.

**Layout:** Two columns. Left: introductory text. Right: vertical timeline.

**Copy (left):**
- Opening: `At Radical Recruitment, it's about who you are, not just what's on your résumé.`
- Core: a lasting career in AI begins with personality and ambition · Radical selects candidates before a role is found · companies already know someone is exceptional before the first conversation

**Timeline (right) — 4 steps:**
1. Applications arrive — sourcing via network and community
2. APAC test — candidates complete the APAC assessment
3. Human assessment — evaluation on human qualities: adaptability, ethics, character
4. Joins the Radical community — candidate enters the community

---

### Section 3: As a Radical You Gain

**Purpose:** Show the core value of community membership. Compact, clickable modules. Fast to scan. Detail expands on click.

**Layout:** H2 + 3 accordion items. First item open by default.

**H2:** `As a Radical you gain`

**Item 1 — Personal & professional 1-on-1 coaching** *(default open)*
- Monthly 1-on-1 sessions with a dedicated coach
- Honest, direct feedback on your growth and decisions
- Career strategy tailored to your ambitions
- A recruiter who stays after placement, not disappears
- Focus on long-term fit, not short-term placement

**Item 2 — Peer-to-peer learning & community events**
- Access to a curated network of top AI professionals
- Peer-to-peer learning across companies and domains
- Community events designed for real connection and growth
- Exchange of ideas, challenges, and real-world experience
- A space where you stay human in a high-tech world

**Item 3 — Continuous development**
- Ongoing learning through Radical Academy
- Masterclasses, sessions, and practical learning formats
- Stay ahead of AI developments instead of catching up
- Structured growth alongside your career path
- Development focused on both technical and human skills

**CTA below section:** `Start your journey` → `https://radicalnetwork.nl`

**Optional microcopy:** `You're not joining a database. You're entering a system built around your growth.`

**Interaction rules:** Max 1 item open at a time. No images inside accordion.

---

### Section 4: What Radicals Say

**Purpose:** Dynamic social proof. Continuous motion — visitor doesn't need to click to see multiple testimonials.

**Layout:** No header or subheader. Full-width horizontal testimonial strip.

**Behaviour:**
- Infinite horizontal scroll, right → left
- Speed: slow and readable
- Seamless loop (no visible end)
- Hover: animation pauses
- Mobile: swipe-enabled + auto-scroll remains active

**Per testimonial card:**
- Quote (primary, largest text)
- Name
- Role + location
- Profile photo (visible, human)
- Stars: small format, subtle gold, not dominant

**Visual rules:**
- Cards: compact and wide (horizontal-friendly), generous whitespace
- No heavy borders or thick shadows
- Photo + quote are visually leading
- UI elements subordinate to text

**Data & scalability:**
- Testimonial count: dynamic (not limited to 3–4)
- Content sourced from Supabase
- Strip shows minimum 6–10 testimonials in rotation
- Infinite scroll must never show a hard end

---

### Section 5: The APAC Framework

**Purpose:** Explain APAC as the core of how Radical selects. Focus on human qualities that predict real-world impact — not CVs or certifications.

**Layout:** H2 + intro text + 4 vertical items + 3 CTAs below.

**Copy:**
- H2: `The APAC Framework`
- Intro: `We don't select on certifications or years of experience. We assess the human qualities that predict real-world impact. This is what separates good AI professionals from exceptional ones.`

**4 items:**
- **A — Adaptability:** Thrives in ambiguity and change. Learns fast, adapts quickly, and remains effective as environments evolve.
- **P — Personality:** Brings ownership, energy, and initiative. Communicates clearly and contributes actively within teams.
- **A — Awareness:** Understands context beyond the task. Acts with ethical responsibility and sees the broader impact of decisions.
- **C — Connection:** Builds strong relationships across teams and stakeholders. Collaborates effectively and aligns with people and environment.

**CTAs:**
- Primary: `Hire a Radical`
- Secondary: `Read all about it here`
- Conversion: `Start your journey here` → `https://radicalnetwork.nl`

**Implementation notes:**
- Only the section title is an H2 in the UI
- APAC item titles function as visual subheaders — typographically differentiated, not semantic H tags
- Vertical flow, maximum scannability, minimum text per item

---

### Section 6: FAQ

**Purpose:** Remove final doubts. Build trust through transparency. No pressure, no push.

**Layout:** H2 + accordion list. No CTA in this section. No extra text below.

**H2:** `FAQ`

**Accordion behaviour:**
- All items closed by default
- Max 1 item open at a time
- Icon right: `+` → `×` on open
- Smooth height transition on open/close

**FAQ items:**

**Q: What does the APAC test measure?**
The APAC test evaluates adaptability, personality, awareness, and connection. We're looking for people who can think, grow, and act responsibly in AI. It's not a technical exam. It's a conversation about who you are.

**Q: How long does the process take?**
The APAC test takes 10–20 minutes. If you are among the top 10%, the interview follows within a week. The entire process typically takes two to three weeks to enter the community and enjoy all benefits.

**Q: Is there a cost to join?**
No. Membership is free for selected candidates. We're building this community carefully, focusing on quality rather than volume.

**Q: What happens after I join?**
You gain access to the Radical community, job opportunities, and a dedicated career coach. We support your personal and professional development and stay involved in your growth.

**Q: Can I refer other candidates?**
Yes. If you know someone who fits the Radical standard, you can refer them. We actively encourage strong additions to the community.

**Design notes:**
- No CTA below (intentional — ends with calm, not pressure)
- Cards visually light, not heavy
- Max content width constrained for readability
- Final section: removes doubt, ends quietly

---

## Page 4: Community *(Phase 2 — Placeholder)*

### Page Goal

The Community page is a phase 2 deliverable. The full page — including event listings, member profiles, learning content, and community features — will be built once the portal is developed and secured.

In phase 1, the page exists as a polished placeholder. It is live, linked in the navigation, and on-brand — but communicates clearly that the full experience is coming.

---

### Phase 1: Placeholder Page

**Layout:** Centred, full-height, minimal. Dark background. No distractions.

**Copy:**
- No H1. No marketing language.
- One line, large and quiet: `Coming soon.`
- Optional subline: `We're building something worth waiting for.`

**Design notes:**
- Consistent with the site's dark, editorial aesthetic
- No countdown timer, no email capture form, no filler content
- The restraint is intentional — it reflects the selective, quality-first nature of Radical
- The page should feel like a room that is ready but not yet open

**Navigation:** The `Community` link in the nav routes here in phase 1. No link is hidden or disabled — the page is accessible and indexed.

---

### Phase 2: Full Community Page

To be fully specified when portal development is underway. Anticipated sections include:

- Community overview and values
- Upcoming events (dynamic, from Supabase)
- Member highlights
- Learning resources / Radical Academy
- Community application / entry via APAC test

---

## Page 5: About Us

### Page Goal

The About page tells the story behind Radical's founding — focused on Nelieke and Oscar and their shared ambition to set a new standard in recruitment in the AI era. The page shows why Radical exists, what beliefs underpin it, and how their experience and vision come together in a high-quality, selective community. Goal: build trust, show authenticity, make clear that Radical is not a traditional recruiter but a mission-driven initiative that wants to fundamentally improve how talent and organisations connect.

---

### Section 1: Hero

**Purpose:** Minimalist hero that immediately establishes Radical's identity. One powerful title + mission statement. No noise.

**Layout:** Everything centred. Large vertical spacing between title and text. No images, no icons. Dark background, white text.

**Copy:**
- H1: `Radical Recruitment`
- Mission statement (directly below, no subheader):

> We are here for the doers, the thinkers, and the builders who find that technology only creates valuable impact when the human factor is right: "human on the loop!"

**Typography notes:**
- Title: large, dominant (hero-level)
- Mission statement: slightly smaller but still prominent
- Line height generous for calm and readability

---

### Section 2: Nelieke Wismans

**Purpose:** Quiet, high-quality two-column section focused entirely on one person, one story, one message. Quote is the leading element.

**Layout:** Two columns. Left: portrait (Nelieke). Right: quote + body text.

**Left column:** One large, high-quality portrait of Nelieke. Rounded corners. No overlays or text on image.

**Right column:**
- H2 (quote): `"When you are connected to yourself, you can build the future with humanity in mind."`
- Body text:
  - With more than 20 years at the top of recruitment, Nelieke knows the market inside out. In 2024 she chose to change direction radically.
  - Her mission is clear: guiding AI-natives in balancing rational thinking with emotional awareness. Only when head, heart, and spirit align does real growth emerge.
  - This is what makes our professionals grounded and resilient in a rapidly changing world. Her strength lies in connecting people based on both substance and culture.
- Signature: `Nelieke Wismans` · `Founder of Radical`

**Design notes:** No icons. No bullet points. No extra visual elements. Generous whitespace. Large quote typography.

---

### Section 3: Oscar Voskuil

**Purpose:** Mirror of the Nelieke section. Same rhythm, same quality. Quote leads. Strategic and execution-oriented in tone.

**Layout:** Two columns, flipped. Left: quote + body text. Right: portrait (Oscar).

**Right column:** One large, high-quality portrait of Oscar. Rounded corners. Consistent with Nelieke section.

**Left column:**
- H2 (quote): `"When people are grounded, they will build technology that humanity actually benefits from."`
- Body text:
  - Oscar brings 25 years of experience in marketing and operations to Radical Recruitment. He designed the people-centric, technology-driven strategy that guides everything we do.
  - Built and scaled successful teams across telecom, retail, and digital industries. Deep understanding of what AI-driven organisations truly need to grow. Selects and develops talent that drives measurable, long-term impact.
- Signature: `Oscar Voskuil` · `Founder of Radical`

**Design notes:**
- Visually paired with Nelieke section — same proportions, rhythm, spacing
- Nelieke = human, awareness, direction / Oscar = strategy, execution, scale
- Together they tell the complete Radical story

---

### Section 4: Our Team

**Purpose:** Clean grid of team members. Person + role. No visual noise. Trust through faces.

**Layout:** 3-column grid, 2 rows (6 team members total). 1 column on mobile.

**Per card (top to bottom):**
1. Portrait image (rectangular or lightly rounded, consistent with site)
2. Name (first + last, primary text)
3. Role (subtitle, short and clear)
4. Short description (1 sentence, only for non-founders)
5. LinkedIn icon (clickable, only social icon shown)

**Current team:**

| Name | Role | Description |
|---|---|---|
| Nelieke Wismans | Founder | — |
| Oscar Voskuil | Co-founder | — |
| Vincent Zepeda | Digital Transformation Specialist | Connects ambitious professionals with companies that match their values and vision. |
| Nathan van Veen | Digital Transformation Specialist | Builds the spaces where AI-natives grow, learn, and find their people. |
| [Name] | Partner | Short description |
| [Name] | Advisor | Short description |

**Hover effect:** Subtle scale or shadow. Nothing heavy.

**Design rules:**
- LinkedIn icon only — remove X, globe, and all other social icons
- Consistent spacing throughout
- Photo + name carry the weight

---

### Section 5: Closing Statement

**Purpose:** Powerful closing that summarises the deepest conviction behind Radical. Not a CTA section — a manifesto moment.

**Layout:** Large header + constrained body paragraph. Centred or slightly left-aligned. Generous vertical spacing. No surrounding elements.

**Copy:**
- Title: `Love or money`
- Body:

> On a business website, you rarely read about love. Yet that is exactly what drives us: love for people and for humanity. Not as a "soft" concept, but as the foundation for the future.
>
> In a world full of AI and automation, human connection is the only guarantee that systems will not drive us further apart. That is why our starting point is not money, but love for people and for humanity.

**Typography notes:**
- Title: large and prominent (H2 scale minimum)
- Body text: larger than standard body copy used elsewhere on the site
- Generous line height — reads as a strong manifesto, not a caption
- No button required unless it genuinely adds value

---

## Page 6: Contact

### Page Goal

The contact page feels like the start of a conversation, not a form to complete. The focus is on humanity, involvement, and trust — while the structure remains clean and professional. The visitor must feel that real people are behind Radical who think along with them and listen — not a system that processes requests.

---

### Section 1: Contact Form

**Layout:** Header + 1-liner + form + submit button.

**Copy:**
- Header: `Get in touch`
- 1-liner: `We'll think along with you.`

**Form fields:**
- Name
- Company name
- Email address
- Your request (open text)

**Submit button:** `We'll get back to you within 24 hours`

**Design notes:**
- Clean and technically strong — but microcopy and spacing create the human feel
- No hard, cold form aesthetics
- No corporate distance
- The tone is the differentiator: not `Submit request` but `We'll get back to you`
- This is the moment where a visitor thinks: *"okay, these are people who get it"*

---

*End of page specifications. Open questions and technical decisions to be resolved with technical lead before build begins — see Open Questions section above.*
