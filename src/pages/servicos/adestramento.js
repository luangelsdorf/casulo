import Head from "next/head";
import CallToAction from "src/components/about/CallToAction";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import AboutUs from "src/components/services/AboutUs";
import Gallery from "src/components/services/Gallery";
import Hero from "src/components/services/Hero";
import TrainingTypes from "src/components/services/TrainingTypes";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";

export default function Training({ training, info, faq, footer }) {
  return (
    <>
      <Head>
        <title>Adestramento | Casulo</title>
        <meta property="og:title" content="Adestramento | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="home" pt="16" pb="160 80">
          <Hero
            service="training"
            content={{
              ...training.hero,
              benefits: training.benefits,
              offer: training.offer,
              details: {
                ...training.details,
                button: training.button
              }
            }}
          />
        </Section>

        <Section id="sobre" pt="96 80" pb="96 80">
          <AboutUs content={training.trainingIntro} />
        </Section>

        <Section id="tipos-de-adestramento" pt="64 80" pb="80 80">
          <TrainingTypes content={training.trainingTypes} />
        </Section>

        <Section id="chamada" pt="72" pb="96" mt="120 16">
          <CallToAction variant="cases" content={training.cta} />
        </Section>

        <Gallery images={training.gallery.data} />

        <Section id="faq" pt="96 80" pb="120 80">
          <FAQ content={faq} />
        </Section>

        <Section pt="32" pb="80" id="area-de-atuacao">
          <Area />
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

  const layout = await getLayoutContent();

  return {
    props: {
      training,
      info,
      faq,
      footer,

      layout
    },

    revalidate: 60,
  }
}