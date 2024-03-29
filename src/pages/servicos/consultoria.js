import Head from "next/head";
import Testimonials from "src/components/about/Testimonials";
import Area from "src/components/common/Area";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Gallery from "src/components/services/Gallery";
import Hero from "src/components/services/Hero";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";

export default function Consultancy({ consultancy, about, info, cases, faq, footer }) {
  return (
    <>
      <Head>
        <title>Consultoria | Casulo</title>
        <meta property="og:title" content="Consultoria | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="home" pt="16 0" pb="80 80">
          <Hero
            service="consultancy"
            content={{
              ...consultancy.hero,
              benefits: consultancy.benefits,
              offer: consultancy.offer,
              details: {
                ...consultancy.details,
                button: consultancy.button
              }
            }}
          />
        </Section>

        <Section id="depoimentos" pt="64 80" pb="80 80">
          <Testimonials content={about.testimonials} cases={cases} />
        </Section>

        <Gallery headline={consultancy.gallery.headline} images={consultancy.gallery.photos.data} />

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
  const consultancy = await fetchAPI('consultancy');
  const about = await fetchAPI('about');
  const info = await fetchAPI('info');
  const cases = await fetchAPI('cases', { populate: 'deep' });
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  const layout = await getLayoutContent();

  return {
    props: {
      consultancy,
      about,
      info,
      cases,
      faq,
      footer,

      layout
    },

    revalidate: 60,
  }
}