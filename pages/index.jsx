import Head from "next/head";

import Code from "../components/Code";
import Description from "../components/Description";
import Grid from "../components/Grid";
import GridCard from "../components/GridCard";
import PageTitle from "../components/PageTitle";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Obaith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </PageTitle>

      <Description>
        Get started by editing <Code>pages/index.js</Code>
      </Description>

      <Section title="A Section">
        <Grid>
          <GridCard href="https://nextjs.org/docs" title="Documentation &rarr;">
            <p>Find in-depth information about Next.js features and API.</p>
          </GridCard>

          <GridCard href="https://nextjs.org/learn" title="Learn &rarr;">
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </GridCard>

          <GridCard
            href="https://github.com/vercel/next.js/tree/master/examples"
            title="Examples &rarr;"
          >
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </GridCard>

          <GridCard
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy &rarr;"
          >
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </GridCard>
        </Grid>
      </Section>
    </>
  );
}
