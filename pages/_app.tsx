import { ApolloProvider } from '@apollo/client';
import Container from '../src/components/Container';
import Navbar from '../src/components/Navbar';
import GQLClient from '../src/libs/GQLClient';
import '../src/styles/global.css';
import NextNProgress from 'nextjs-progressbar';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color='#b54be7' height={5}/>
      <ApolloProvider client={GQLClient}>
        <Navbar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    </>
  );
}
