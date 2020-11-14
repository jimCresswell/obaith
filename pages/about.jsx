import Head from "next/head";

import Description from "../components/Description";
import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <>
      <Head>
        <title>Obaith | About</title>
      </Head>

      <PageTitle>About Obaith</PageTitle>
      <Description>Community For You</Description>
    </>
  );
}
