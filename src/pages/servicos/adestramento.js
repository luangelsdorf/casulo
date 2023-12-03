import Head from "next/head";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Hero from "src/components/services/Hero";
import fetchAPI from "src/utils/fetch";

export default function Consultancy({ training, info, faq, footer }) {
  return (
    <>
      <Head>
        <title>Adestramento | Casulo</title>
        <meta property="og:title" content="Adestramento | Casulo" />
      </Head>

      <Header info={info} />

      <main>
        <Section id="home" pt="16" pb="72 80">
          <Hero
            service="training"
            content={{
              ...training.hero,
              benefits: training.benefits,
              details: {
                ...training.details,
                button: training.button
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
  const training = await fetchAPI('training');
  const info = await fetchAPI('info');
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  return {
    props: {
      training,
      info,
      faq,
      footer,
    },

    revalidate: 60,
  }
}