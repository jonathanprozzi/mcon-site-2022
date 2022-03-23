import Head from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import SiteLayout from "../components/SiteLayout";
import theme from "../theme";
import Fonts from "../components/Fonts";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel="preload"
          href="/fonts/DisposableDroidBB/DisposableDroidBB_bld.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Invasion2000/INVASION2000.TTF"
          as="font"
          crossOrigin=""
        />
      </Head>
      <DefaultSeo
        title="MetaCartel | MCON Denver 2022"
        description="Bring the Meta Network together for a rare cryptopalooza of fun, learning, and experimental growth in every direction."
        canonical="https://mcon.fun"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://mcon.fun",
          site_name: "MetaCartel MCON",
          title: "MetaCartel MCON Denver 2022",
          description:
            "Bring the Meta Network together for a rare cryptopalooza of fun, learning, and experimental growth in every direction.",
          images: [
            {
              url: "/mcon-22.png",
              // url:
              //   "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>:hot_pepper:</text></svg>",
              width: 1200,
              height: 627,
              alt: "MetaCartel Chili"
            }
          ]
        }}
      />
      <Fonts />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  );
};
export default MyApp;
