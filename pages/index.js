import { useState } from "react";
import DevsCards from "../components/DevsCards";
import Header from "../components/Header";


const devs = [
  {
    login: "lykmapipo",
    id: 1610857,
    node_id: "MDQ6VXNlcjE2MTA4NTc=",
    avatar_url: "https://avatars.githubusercontent.com/u/1610857?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lykmapipo",
    html_url: "https://github.com/lykmapipo",
    followers_url: "https://api.github.com/users/lykmapipo/followers",
    following_url:
      "https://api.github.com/users/lykmapipo/following{/other_user}",
    gists_url: "https://api.github.com/users/lykmapipo/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lykmapipo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lykmapipo/subscriptions",
    organizations_url: "https://api.github.com/users/lykmapipo/orgs",
    repos_url: "https://api.github.com/users/lykmapipo/repos",
    events_url: "https://api.github.com/users/lykmapipo/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lykmapipo/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "gernest",
    id: 6039952,
    node_id: "MDQ6VXNlcjYwMzk5NTI=",
    avatar_url: "https://avatars.githubusercontent.com/u/6039952?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/gernest",
    html_url: "https://github.com/gernest",
    followers_url: "https://api.github.com/users/gernest/followers",
    following_url:
      "https://api.github.com/users/gernest/following{/other_user}",
    gists_url: "https://api.github.com/users/gernest/gists{/gist_id}",
    starred_url: "https://api.github.com/users/gernest/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/gernest/subscriptions",
    organizations_url: "https://api.github.com/users/gernest/orgs",
    repos_url: "https://api.github.com/users/gernest/repos",
    events_url: "https://api.github.com/users/gernest/events{/privacy}",
    received_events_url: "https://api.github.com/users/gernest/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "alphaolomi",
    id: 10551599,
    node_id: "MDQ6VXNlcjEwNTUxNTk5",
    avatar_url: "https://avatars.githubusercontent.com/u/10551599?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/alphaolomi",
    html_url: "https://github.com/alphaolomi",
    followers_url: "https://api.github.com/users/alphaolomi/followers",
    following_url:
      "https://api.github.com/users/alphaolomi/following{/other_user}",
    gists_url: "https://api.github.com/users/alphaolomi/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/alphaolomi/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/alphaolomi/subscriptions",
    organizations_url: "https://api.github.com/users/alphaolomi/orgs",
    repos_url: "https://api.github.com/users/alphaolomi/repos",
    events_url: "https://api.github.com/users/alphaolomi/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/alphaolomi/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
];

export default function Home() {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [devsPerPage, setdevsPerPage] = useState(1);
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
        handleClick={handleClick}
       />
    </>
  );
}
