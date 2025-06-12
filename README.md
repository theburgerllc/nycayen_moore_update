# NYC Ayen - Luxury Hair Salon Website

A modern, responsive website for NYC Ayen luxury hair salon built with Next.js 15, featuring elegant animations, Instagram integration, and optimized performance.

## Features

- **Modern Design**: Elegant design system with Mocha Mousse color palette and premium typography
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **Accessibility**: WCAG 2.2 AA compliant with skip navigation and semantic HTML
- **Instagram Integration**: Live feed of latest salon transformations
- **SEO Optimized**: Structured data, meta tags, and optimized images
- **Smooth Animations**: Framer Motion animations for enhanced user experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Typography**: Playfair Display + Inter fonts
- **Images**: Next.js Image optimization with WebP/AVIF support
- **TypeScript**: Full type safety throughout the application

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your environment variables in `.env.local`:
   - `INSTAGRAM_ACCESS_TOKEN`: Your Instagram Basic Display API token

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the site

## Environment Variables

See `.env.example` for all available environment variables. The only required variable for basic functionality is `INSTAGRAM_ACCESS_TOKEN`.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── sections/       # Page sections
├── lib/                # Utilities and type definitions
└── styles/             # Global styles and Tailwind config
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, INP, and CLS
- **Image Optimization**: Next.js Image with WebP/AVIF support
- **Code Splitting**: Automatic route-based code splitting

## Deployment

The site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every commit

## License

© 2024 NYC Ayen. All rights reserved.