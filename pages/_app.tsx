import "../styles/app.scss";
import Head from "next/head";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <title>Shortly</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
