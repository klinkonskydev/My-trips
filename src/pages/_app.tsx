import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styles-Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
