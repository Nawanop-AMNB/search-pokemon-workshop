import { ApolloProvider } from '@apollo/client';
import Container from '../src/components/Container';
import Navbar from '../src/components/Navbar';
import GQLClient from '../src/libs/GQLClient';
import '../src/styles/global.css';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color='#b54be7' height={5} />
      <ApolloProvider client={GQLClient}>
        <Navbar />
        <Container>
          <Head>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            />
          </Head>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    </>
  );
}
