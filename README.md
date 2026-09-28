# Floreza Technologies

A responsive Next.js website recreated from the supplied reference. Built with Node.js, React, TypeScript, and CSS.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run build
npm start
```

## Deploy to Vercel

Push this folder to a GitHub repository, then import the repository in Vercel. Vercel detects Next.js automatically. Keep the default build command (`npm run build`) and output settings. No environment variables are required.

Alternatively, run `npx vercel` from this folder and follow the Vercel prompts.

## Content

Edit `app/page.tsx` for copy, sections, service cards, and contact details. Edit `app/globals.css` for styling and `app/components.tsx` for navigation and SVG artwork.

The site includes Home, About, Businesses, Technology & Solutions, Careers, News, news article pages, and Contact routes. Shared navigation and footer components live in `app/site-ui.tsx` and `app/components.tsx`. Division details, regions, technology capabilities, platforms, job listings, and news announcements live in `app/site-content.ts`.

The statistics, business claims, job listings, announcements, and contact addresses reproduce the supplied references; confirm them before publishing. News article pages show the supplied announcement summaries. The Privacy Policy and Terms & Conditions pages render the supplied text from `content/privacy-policy.txt` and `content/terms-and-conditions.txt`. Complete the legal-entity details called out in those documents before publishing.

The contact form validates required fields and prepares an email draft, which the visitor reviews and sends in their own email app. It also offers a copy-message fallback. It does not send messages from the server or store submissions. No email API credentials are required. To support direct server delivery later, connect a verified sending domain and email provider with server-side validation and abuse protection.
