import "@saeris/typeface-beleren-bold";
import "keyrune/css/keyrune.min.css";
import "mana-font/css/mana.min.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";
import "tippy.js/dist/tippy.css";

import Layout from "components/common/Layout";
import { GA_TRACKING_ENABLED, GA_TRACKING_ID, pageview } from "lib/gtag";
import "styles/global.css";

const UMAMI_SITE_ID = process.env.NEXT_PUBLIC_UMAMI_SITE_ID;
const UMAMI_SCRIPT_URL = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {GA_TRACKING_ENABLED && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}",{page_path:window.location.pathname});`,
            }}
            strategy="afterInteractive"
          />
        </>
      )}
      {UMAMI_SITE_ID && UMAMI_SCRIPT_URL && (
        <Script
          src={UMAMI_SCRIPT_URL}
          data-website-id={UMAMI_SITE_ID}
          strategy="afterInteractive"
        />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
