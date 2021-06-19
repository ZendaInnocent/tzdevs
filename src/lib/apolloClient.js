import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
