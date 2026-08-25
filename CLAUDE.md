# Portifolio (Personal Portfolio Site)

## Purpose
Personal developer portfolio with HackerRank-inspired dark theme.

## Stack
Next.js 15 + React 19 + TypeScript (strict) + Tailwind CSS + Framer Motion + Lucide React

## Structure
```
app/              ← Next.js App Router pages
  page.tsx        ← Homepage
  experience/     ← Experience section
  projects/       ← Projects section
  blog/           ← Blog section
  resume/         ← Resume page
  contact/        ← Contact page
components/       ← Reusable components
content/          ← Static content data (update here, not in page files)
lib/              ← Utilities
public/           ← Static assets (logos, images — use next/image)
```

## Commands
```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Conventions
- All content data lives in `content/` — never hardcode text in page components
- Framer Motion for all page transitions and element reveals
- Tailwind only — no custom CSS files
- Named exports only (no default exports)
- Use `next/image` for all project logos and images in public/
- TypeScript strict mode — no `any` types

## Gotchas
- node_modules/ is large — don't try to search it
- Image assets in public/ include institution logos (Cornell, GEHC, etc.)
