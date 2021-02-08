import { useState } from "react";
import Head from "next/head";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import DevsCards from "../components/DevsCards";
import Header from "../components/Header";

export default function Home({ devs }) {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [devsPerPage, setdevsPerPage] = useState(15);
  const indexOfLastDev = currentPage * devsPerPage;
  const indexOfFirstDev = indexOfLastDev - devsPerPage;
  const currentDevs = devs.slice(indexOfFirstDev, indexOfLastDev);

  for (let i = 1; i <= Math.ceil(devs.length / devsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  return (
    <>
      <Head>
        <title>TzDev</title>
        <meta property="og:title" content="Tanzania Developers" key="title" />
      </Head>
      <Header />
      <DevsCards
        currentDevs={currentDevs}
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        handleClick={handleClick}
      />
    </>
  );
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = process.env.GH_TOKEN;
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        search(query: "location:tanzania", type: USER, first: 100) {
          userCount
          edges {
            node {
              ... on User {
                login
                name
                location
                email
                company
                avatarUrl
              }
            }
          }
        }
      }
    `,
  });

  let devs = data.search.edges;

  return {
    props: {
      devs,
    },
  };
}
