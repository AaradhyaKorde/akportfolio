import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Professional web development services including UI/UX design, e-commerce solutions, Web3 development, and no-code solutions. Transform your digital presence with our cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="web development, UI/UX design, e-commerce, Web3, blockchain, no-code, digital solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Professional Web Development Services"
        />
        <meta
          property="og:description"
          content="Transform your digital presence with our cutting-edge web development solutions."
        />
        <link rel="canonical" href="https://www.noxalgo.com" />
        <link rel="icon" href="/footerlogo.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
