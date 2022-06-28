import { useRouter } from "next/router";
import Head from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import SiteLayout from "../components/SiteLayout";
import theme from "../theme";
import Fonts from "../components/Fonts";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Basteleur/Basteleur-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Basteleur/Basteleur-Moonlight.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Dagheest/FT88-Gothique.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Dagheest/FT88-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Dagheest/FT88-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <DefaultSeo
        title="MetaCartel | MCON Denver 2022"
        description="Bringing together a limited number of attendees, MCON gives you an experience of valuable conversations, learnings and experimental growth all about DAOs."
        canonical="https://mcon.fun"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://mcon.fun",
          site_name: "MetaCartel MCON",
          title: "MetaCartel MCON Denver 2022",
          description:
            "Bringing together a limited number of attendees, MCON gives you an experience of valuable conversations, learnings and experimental growth all about DAOs.",
          images: [
            {
              url: "/spiral-static.png",
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
      {router.asPath !== "/invitation" ? (
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
};
export default MyApp;
