import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { LazyMotion, domAnimation } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/favicon-16x16.png" sizes="16x16"/>
        <link rel="apple-touch-icon" href="/favicon-32x32.png" sizes="32x32"/>
        <link rel="apple-touch-icon" href="/favicon-96x96.png" sizes="96x96"/>
        
        <title>{`Maxim Hordiienko`}</title>
        
        <meta name="title" content="Maxim Hordiienko"/>
        <meta name="description" content="Maxim Hordiienko"/>
        
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Maxim Hordiienko"/>
        <meta
          property="og:description"
          content="Maxim Hordiienko"
        />
        <meta property="og:image" content="https://res.cloudinary.com/maxigord/image/upload/v1661180876/avatar_w7go3l.png"/>
        
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="Maxim Hordiienko"/>
        <meta
          property="twitter:description"
          content="Maxim Hordiienko"
        />
        <meta property="twitter:image" content="https://res.cloudinary.com/maxigord/image/upload/v1661180876/avatar_w7go3l.png"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="mobile-web-app-capable" content="yes"/>
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}

export default MyApp;