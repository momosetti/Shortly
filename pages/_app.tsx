import "../styles/app.scss";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
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
