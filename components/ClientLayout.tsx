'use client'
import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { domAnimation, LazyMotion } from 'framer-motion';

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <body>
      {children}
      <GoogleAnalytics gaId="G-KSH3LN7PQV" />
      <Analytics />
      </body>
    </LazyMotion>
  );
}
