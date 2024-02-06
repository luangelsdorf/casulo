import Head from "next/head";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Content from "src/components/links/Content";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";

export default function Links({ linkTree }) {
  return (
    <>
      <Head>
        <title>Links | Casulo</title>
        <meta property="og:title" content="Links | Casulo" />
      </Head>

      <main>
        <Section id="conteudo">
          <Content links={linkTree.link} cta={linkTree.cta} />
        </Section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const linkTree = await fetchAPI('link-tree');
  const layout = await getLayoutContent();

  return {
    props: {
      linkTree,
      layout,
    },

    revalidate: 60,
  }
}