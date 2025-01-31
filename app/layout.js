import "../styles/globals.css";
import { domAnimation, LazyMotion } from 'framer-motion';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <LazyMotion features={domAnimation}>
      <body>{children}</body>
    </LazyMotion>
    </html>
  );
}
