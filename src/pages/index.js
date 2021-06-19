import DevsCards from '../components/DevsCards';
import Header from '../components/Header';
import { gql } from '@apollo/client';
import client from '../lib/apolloClient';

const QUERY = gql`
  query SearchGitHubUsers {
    search(
      type: USER
      query: "location:tanzania"
      first: 100
      after: "Y3Vyc29yOjMwMQ=="
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          ... on User {
            login
            name
            location
            avatarUrl
            databaseId
          }
        }
      }
    }
  }
`;

export default function Home({ devs }) {
  return (
    <>
      <Header />
      <DevsCards currentDevs={devs} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: QUERY,
  });

  return {
    props: {
      devs: data.search.edges,
    },
  };
}
