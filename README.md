# Emrich-Michael Perrier — Portfolio

Personal portfolio site for **Emrich-Michael Perrier**, a Top Rated Plus full stack developer based in Los Angeles.

**Live site:** [www.emrichperrier.com](https://www.emrichperrier.com)

## Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS** (custom `brand` / `ink` design tokens)
- **Framer Motion** (section animations, project modals, page loader)
- **react-intersection-observer** (scroll-triggered reveals)
- **EmailJS** (contact form)

## Features

- Full-screen hero with video background (R2) and Cloudinary poster frame
- Page load animation (`Loader`)
- Project grid with detail modals and demo videos
- Experience section with desktop vertical tabs and mobile horizontal tabs + arrow navigation
- Beyond Code (coaching) section
- Contact form, fixed social links, mobile nav with social row
- SEO: meta tags, Open Graph, Twitter cards, JSON-LD in `index.html`, dynamic updates via `SEO.tsx`

## Project structure

```
├── public/                 # Static assets (images, videos, favicon, sitemap)
│   ├── About/
│   ├── BeyondCode/
│   ├── Experience/         # Experience tab screenshots (Upwork, BUCK)
│   └── Projects/           # Project images and demo videos
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Coaching.tsx    # Beyond Code section (#coaching)
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Loader.tsx
│   │   ├── SEO.tsx
│   │   └── ScrollToTop.tsx
│   ├── data/
│   │   ├── projects.ts     # Project copy, media paths, links
│   │   └── experience.ts   # Work history, stack sidebar, images
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Global styles, design tokens, utilities
├── index.html              # Base SEO + structured data
└── tailwind.config.js
```

## Getting started

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/emrichmp/Emrich-Michael-Perrier.git
cd Emrich-Michael-Perrier
npm install
npm run dev
```

Other scripts:

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run build`   | Typecheck + production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint`    | ESLint                   |

## Customization

| What to change        | Where |
| --------------------- | ----- |
| Projects & media      | `src/data/projects.ts`, `public/Projects/` |
| Work experience       | `src/data/experience.ts`, `public/Experience/` |
| About copy & photo    | `src/components/About.tsx`, `public/About/` |
| Hero video            | `src/components/Hero.tsx` (R2 `src`, Cloudinary `poster`) |
| Coaching / Beyond Code| `src/components/Coaching.tsx`, `public/BeyondCode/` |
| Nav & social links    | `src/components/Navbar.tsx` |
| Colors & typography   | `tailwind.config.js`, `src/index.css` |
| Default SEO           | `index.html`, `src/components/SEO.tsx` |
| Sitemap & robots      | `public/sitemap.xml`, `public/robots.txt` |

The contact form uses EmailJS credentials in `src/components/Contact.tsx` (service ID, template ID, public key).

## Deployment

Built for static hosting (e.g. **Vercel**):

1. Connect the GitHub repo
2. Build command: `npm run build`
3. Output directory: `dist`

Ensure `public/sitemap.xml` and `public/robots.txt` use your canonical domain (`https://www.emrichperrier.com`).

## Contact

- **Portfolio:** [www.emrichperrier.com](https://www.emrichperrier.com)
- **Upwork:** [freelancers/emrichperrier](https://www.upwork.com/freelancers/emrichperrier)
- **LinkedIn:** [emrich-michael-perrier](https://www.linkedin.com/in/emrich-michael-perrier/)
- **GitHub:** [emrichmp](https://github.com/emrichmp)

---

Built by Emrich-Michael Perrier with React, TypeScript, and Vite.
