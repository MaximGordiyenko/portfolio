import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
import { domAnimation, LazyMotion } from 'framer-motion';
import "../styles/globals.css";

export const metadata = {
  description: 'A frontend developer with backend experience (sometimes), passionate about building dynamic, user-centric web applications. I specialize in React and Next.js, always striving to create engaging, seamless, and interactive user experiences.',
  manifest: '/manifest.json',
  title: `Maxim Hordiienko`,
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
        <title>Maxim Hordiienko</title>
        <meta name="title" content="Maxim Hordiienko" />
        <meta name="description" content="Maxim Hordiienko" />

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maxim Hordiienko" />
        <meta property="og:description" content="Maxim Hordiienko" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/maxigord/image/upload/v1661180876/avatar_w7go3l.png"
        />

        {/* Twitter meta tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Maxim Hordiienko" />
        <meta property="twitter:description" content="Maxim Hordiienko" />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/maxigord/image/upload/v1661180876/avatar_w7go3l.png"
        />

        {/* Mobile web app meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="google-site-verification" content="Yj-V116Ht1akd41tGQHYwrzT_qiYUrYJpKX9aYAsBHQ" />
      </head>
      <LazyMotion features={domAnimation}>
        <body>
          {children}
          <GoogleAnalytics gaId="G-KSH3LN7PQV" />
        </body>
      </LazyMotion>
    </html>
  );
}