import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';

function MyApp({ Component, pageProps }) {
  const apolloClient = client;

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
