import { useState } from "react";
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
  const res = await fetch(
    "https://api.github.com/search/users?q=location:tanzania&per_page=100"
  );
  const data = await res.json();
  const devs = data.items;
}
