import "../styles/globals.css";
import Head from "next/head";
import Layout from "../../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coração de Madeira</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
