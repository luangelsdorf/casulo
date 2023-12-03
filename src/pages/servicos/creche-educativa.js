import Head from "next/head";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Hero from "src/components/services/Hero";
import fetchAPI from "src/utils/fetch";

export default function Consultancy({ nursery, info, faq, footer }) {
  return (
    <>
      <Head>
        <title>Creche Educativa | Casulo</title>
        <meta property="og:title" content="Creche Educativa | Casulo" />
      </Head>

      <Header info={info} />

      <main>
        <Section id="home" pt="16" pb="72 80">
          <Hero
            service="nursery"
            content={{
              ...nursery.hero,
              benefits: nursery.benefits,
              details: {
                ...nursery.details,
                button: nursery.button
              }
            }}
          />
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
  const nursery = await fetchAPI('nursery');
  const info = await fetchAPI('info');
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  return {
    props: {
      nursery,
      info,
      faq,
      footer,
    },

    revalidate: 60,
  }
}