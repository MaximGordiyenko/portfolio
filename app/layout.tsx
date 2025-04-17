import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { domAnimation, LazyMotion } from 'framer-motion';
import "../styles/globals.css";

export const metadata = {
  description: 'Frontend developer crafting responsive websites with React, modern UI/UX, and smooth animations. Check out my portfolio projects.',
  manifest: '/manifest.json',
  title: `Maxim Hordiienko | Frontend Developer`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://maximhordiienko.vercel.app" />
        <link rel="alternate" hrefLang="en-US" href="https://maximhordiienko.vercel.app/en-US" />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" sizes="32x32" />

        {/* Title and meta tags */}
        <title>Maxim Hordiienko | Frontend Developer</title>
        <meta name="title" content="Maxim Hordiienko | Frontend Developer" />
        <meta name="description" content="Frontend developer crafting responsive websites with React, modern UI/UX, and smooth animations. Check out my portfolio projects." />

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maxim Hordiienko | Frontend Developer" />
        <meta property="og:description" content="Frontend developer crafting responsive websites with React, modern UI/UX, and smooth animations. Check out my portfolio projects." />
        <meta property="og:url" content="https://maximhordiienko.vercel.app/" />
        <meta property="og:image" content="https://res.cloudinary.com/maxigord/image/upload/v1744849416/preview_xue6ae.png" />


        {/* Twitter meta tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Maxim Hordiienko | Frontend Developer" />
        <meta property="twitter:description" content="Frontend developer crafting responsive websites with React, modern UI/UX, and smooth animations. Check out my portfolio projects." />
        <meta property="twitter:image" content="https://res.cloudinary.com/maxigord/image/upload/v1744849416/preview_xue6ae.png" />

        {/* Optional Pinterest-Specific Meta */}
        <meta name="pinterest-rich-pin" content="true" />

        {/* Mobile web app meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="google-site-verification" content="Yj-V116Ht1akd41tGQHYwrzT_qiYUrYJpKX9aYAsBHQ" />
      </head>
      <LazyMotion features={domAnimation}>
        <body>
          {children}
          <GoogleAnalytics gaId="G-KSH3LN7PQV" />
          <Analytics />
        </body>
      </LazyMotion>
    </html>
  );
}