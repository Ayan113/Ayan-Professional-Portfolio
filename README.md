# Ayan Chatterjee Portfolio

A premium AI Engineer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

This project positions Ayan as an engineer focused on:

- AI/ML engineering
- Generative AI
- Agentic AI systems
- Full stack AI applications

The site is designed to feel closer to OpenAI, Vercel, and Anthropic-inspired product branding: dark, minimal, technical, and polished.

## Live Site

- Production: `https://ayan-portfolio-six.vercel.app/`
- Repository: `https://github.com/Ayan113/Ayan-Professional-Portfolio`

## Highlights

- Strong AI-focused hero section with rotating keyword ticker
- Product-style project case studies for GenAI, RAG, and agentic systems
- Categorized technical skills for AI, backend, data, and DevOps
- Outcome-driven experience section
- Custom "My AI Engineering Approach" system-design section
- SEO metadata and structured data for better discoverability
- Responsive dark UI with glassmorphism, gradients, and motion

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- TypeScript

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    portfolio/
      portfolio-page.tsx
  data/
    portfolio.ts
public/
  photo.png
  avatar-cartoon.jpg
  logos/
  certificates/
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Customization

Most portfolio content is centralized in:

- `src/data/portfolio.ts`

Update that file to edit:

- hero copy
- project case studies
- skills
- experience
- contact links
- SEO-facing profile details

## Deployment

This project is configured for Vercel deployment.

Typical deploy flow:

```bash
npm run build
npx vercel --prod
```

## Notes

- The contact email in `src/data/portfolio.ts` is still a placeholder and should be updated before long-term production use.
- The currently deployed Vercel site may lag behind the latest GitHub commit until a fresh production deployment is completed.
