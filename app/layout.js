import { domAnimation, LazyMotion } from 'framer-motion';
import GoogleAnalytics from '@next/third-parties/google'
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <LazyMotion features={domAnimation}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-6K3BBCSBJK" />
    </LazyMotion>
    </html>
  );
}
