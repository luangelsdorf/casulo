import Head from "next/head";
import Area from "src/components/common/Area";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Gallery from "src/components/services/Gallery";
import Hero from "src/components/services/Hero";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";

export default function Consultancy({ nursery, info, faq, footer }) {
  return (
    <>
      <Head>
        <title>Creche Educativa | Casulo</title>
        <meta property="og:title" content="Creche Educativa | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="home" pt="16 0" pb="64 80">
          <Hero
            service="nursery"
            content={{
              ...nursery.hero,
              benefits: nursery.benefits,
              offer: nursery.offer,
              details: {
                ...nursery.details,
                button: nursery.button
              }
            }}
          />
        </Section>

        <Gallery headline={nursery.gallery.headline} images={nursery.gallery.photos.data} />

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
  const nursery = await fetchAPI('nursery');
  const info = await fetchAPI('info');
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  const layout = await getLayoutContent();

  return {
    props: {
      nursery,
      info,
      faq,
      footer,

      layout
    },

    revalidate: 60,
  }
}