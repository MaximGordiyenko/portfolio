import { domAnimation, LazyMotion } from 'framer-motion';
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-MXQQ7C7K');
            `
        }}
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/favicon-96x96.png" sizes="96x96" />
      
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
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MXQQ7C7K"
                height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      {children}
      </body>
    </LazyMotion>
    </html>
  );
}
