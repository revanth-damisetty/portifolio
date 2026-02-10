# Portfolio Analysis & Reference

## What this repo is
- Next.js 16 (App Router) + TypeScript + Tailwind, tuned for an ML engineer portfolio.
- Content-driven: profile, experience, and projects come from local JSON/MDX files read via `fs` on the server side.
- Theming via `next-themes` with a HackerRank-inspired palette defined in CSS variables; fonts Open Sans (sans) and Source Code Pro (mono).

## Layout at a glance
- `app/layout.tsx` sets fonts, theme provider, global chrome (`Navbar`, `Footer`).
- Pages: `app/page.tsx` (home), `app/projects/page.tsx`, `app/projects/[slug]/page.tsx`, `app/experience/page.tsx`, `app/contact/page.tsx`, `app/resume/page.tsx`, `app/blog/page.tsx` (placeholder).
- Styling: `app/globals.css` for CSS variables + base styles; `tailwind.config.ts` extends tokens and enables typography plugin.
- Data loaders: `lib/data.ts` reads `content/profile.json`, parses MDX with `gray-matter`, and sorts projects by `date` desc.
- Types: `types/index.ts` defines `Project`, `Profile`, `Experience`, `Publication`, `Certification`.
- Components: section blocks in `components/sections/*`, shared UI in `components/ui/*`, layout pieces in `components/layout/*`, interactive grids/cards in `components/projects-grid.tsx` and `components/project-card.tsx`.
- Assets: logos and avatar in `public/`, downloadable resume at `public/resume.pdf`.

## Data & editing guide
- Profile (`content/profile.json`): name/title/tagline/email/avatar, social links, nested `skills` buckets, arrays for `publications` and `certifications` (each supports `logo` and optional `link`).
- Experience (`content/experience.json`): list of roles with `id`, `title`, `company`, `location`, `dates`, `description` (supports **bold** via simple HTML injection), optional `techStack`, `methodologies`, `logo`.
- Projects (`content/projects/*.mdx`): MDX frontmatter fields:
  - `title`, `date` (ISO string), `excerpt`, `tags` (array), optional `githubUrl`, `demoUrl`, `featured` (boolean), `techStack`, `methodologies`, `impact`, `workflow` (array of bullet strings).
  - Body is rendered as Markdown via `react-markdown` in `app/projects/[slug]/page.tsx`.
- Sorting: projects are sorted descending by `date`; `Home` shows up to 4 with `featured: true`.

## Page behaviors
- Home (`app/page.tsx`): server loads profile/projects, slices featured, and renders `Hero`, `FeaturedProjects`, `Publications`, `Certifications`, `Skills`.
- Projects index: `ProjectsGrid` (client) provides search (title/excerpt) and tag filter chips; uses `useMemo` to derive unique tags.
- Project detail: `generateStaticParams` prebuilds paths for each MDX slug; metadata title/description per project; Markdown rendered with prose styling.
- Experience: server reads JSON and renders cards with badges and inline bold support for bullet text.
- Contact: static CTA links (email, location, GitHub, LinkedIn, LeetCode); themed buttons and hover effects.
- Resume: embeds and links to `public/resume.pdf` for download/open.
- Blog: placeholder copy only (no posts yet).

## Styling & theming
- Theme tokens set in `app/globals.css`; dark/light toggled by `next-themes` switch in `components/layout/navbar.tsx`.
- Primary accent is green (`--primary: 146 100% 39%` light, softer in dark); sharp `--radius` for squared corners.
- Typography/spacing driven by Tailwind; prose styling for Markdown via `@tailwindcss/typography`.

## Content update recipes
1) Add project: copy an MDX file in `content/projects/`, adjust frontmatter + body; date controls order; set `featured: true` to surface on home.
2) Update profile/skills: edit `content/profile.json`; ensure socials are valid URLs; optional `twitter`/`leetcode` keys supported.
3) Update experience: edit `content/experience.json`; bold text works via `**...**` inside description strings.
4) Replace resume: drop new `resume.pdf` into `public/` (same name to avoid code changes).

## Commands
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build` then `npm start`

## Notable dependencies
- `next`, `react`, `typescript`, `tailwindcss`, `@tailwindcss/typography`
- UI/state: `next-themes`, `class-variance-authority`, `@radix-ui/react-slot`, `lucide-react`
- Content: `gray-matter` (frontmatter parsing), `react-markdown` (MD rendering)

## Known gaps / follow-ups
- Blog page has no post data or MDX pipeline yet.
- No MDX-specific components for rich embeds (all Markdown rendered plain via `react-markdown`).
- Tests are absent; smoke-test by running `npm run lint` or `npm run dev`.

## Architecture summary (one-liner)
Static content files + server-side loaders + client-side filters, wrapped in a themed Next.js App Router shell with Tailwind-driven UI.
