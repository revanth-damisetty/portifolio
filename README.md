# ML Engineer Portfolio

A production-ready portfolio website built with Next.js 14+, Tailwind CSS, and TypeScript. Designed for Machine Learning Engineers to showcase projects, experience, and skills.

## Features

- **Project Case Studies**: Structured MDX-based project pages.
- **Filtering & Search**: Client-side filtering for projects.
- **Experience Timeline**: JSON-driven experience page.
- **Dark/Light Mode**: Fully themable UI using `next-themes`.
- **Responsive**: Mobile-first design.
- **SEO Optimized**: Metadata and semantic HTML.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Managing Content

### Profile & Skills
Edit `content/profile.json` to update your:
- Name, Title, Tagline
- Social Links
- Skills (Languages, Frameworks, etc.)

### Projects
Projects are stored as MDX files in `content/projects/`. To add a new project:
1. Create a new file, e.g., `content/projects/my-new-project.mdx`.
2. Add the frontmatter:
   ```yaml
   ---
   title: "Project Title"
   date: "2024-01-01"
   excerpt: "Short description"
   tags: ["Tag1", "Tag2"]
   githubUrl: "https://..."
   featured: true
   ---
   ```
3. Write your case study content using Markdown.

### Experience
Edit `content/experience.json` to update your work history.

## Deployment

This project is set up to be deployed on Vercel:
1. Push your code to GitHub.
2. Import the project in Vercel.
3. Vercel will automatically detect the Next.js setup and build it.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, Shadcn UI (inspired)
- **Language**: TypeScript
- **Content**: MDX, JSON
- **Icons**: Lucide React
