import Script from 'next/script';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17006092230"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17006092230');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
