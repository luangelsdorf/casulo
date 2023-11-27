import Head from "next/head";
import Hero from "src/components/blog/Hero";
import List from "src/components/cases/List";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import fetchAPI from "src/utils/fetch";

export default function Category({ dogs, info, footer, fields }) {
  return (
    <>
      <Head>
        <title>Cases de Sucesso | Casulo</title>
        <meta property="og:title" content="Cases de Sucesso | Casulo" />
      </Head>

      <Header info={info} />

      <main>
        <Section id="inicio" pt="16 24" pb="96 80">
          <Hero content={{ topic: { title: 'Cases de Sucesso' } }} />
        </Section>

        <Section id="lista">
          <List cases={dogs} />
        </Section>
      </main>

      <Footer content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const dogs = await fetchAPI('cases', 'populate=photo');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');
  const fields = await fetchAPI('content-type-builder/content-types/api::case.case', '', false);

  return {
    props: {
      dogs,
      info,
      footer,
      fields,
    },

    revalidate: 60,
  }
}