import Head from "next/head";
import CallToAction from "src/components/about/CallToAction";
import Hero from "src/components/blog/Hero";
import List from "src/components/cases/List";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";

export default function CasesPage({ cases, dogs, faq, info, footer }) {
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

        <Section id="chamada" pt="72" pb="96" mt="120">
          <CallToAction variant="cases" content={cases.cta} info={info} />
        </Section>

        <Section id="faq" pt="96 80" pb="120 80">
          <FAQ content={faq} />
        </Section>
      </main>

      <Footer content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const cases = await fetchAPI('cases-page');
  const dogs = await fetchAPI('cases', 'populate=photo');
  const faq = await fetchAPI('faq');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');
  
  const layout = await getLayoutContent();

  return {
    props: {
      cases,
      dogs,
      faq,
      info,
      footer,
      
      layout
    },

    revalidate: 60,
  }
}