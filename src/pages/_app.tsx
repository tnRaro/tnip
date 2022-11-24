import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <>
    <Head>
      <title>ip.tnraro.com</title>
      <meta name="description" content="Show your IP address" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
};

export default MyApp;
