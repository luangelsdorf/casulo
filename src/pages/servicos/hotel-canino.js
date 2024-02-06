import Head from "next/head";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";
import AboutUs from "src/components/services/AboutUs";
import CallToAction from "src/components/about/CallToAction";
import Hero from "src/components/services/Hero";
import Gallery from "src/components/services/Gallery";
import Area from "src/components/common/Area";

export default function Consultancy({ hotel, about, info, faq, footer }) {
  return (
    <>
      <Head>
        <title>Hotel Canino | Casulo</title>
        <meta property="og:title" content="Hotel Canino | Casulo" />
      </Head>

      <Header />

      <main>
        <style jsx>{`
          #home {
            background-color: rgb(var(--orvalho))
          }
        `}</style>

        <Section id="home" pt="16 0" pb="72 80">
          <Hero
            service="hotel"
            content={{
              ...hotel.hero,
              benefits: hotel.benefits,
              offer: hotel.offer,
              details: {
                ...hotel.details,
                button: hotel.button
              }
            }}
          />
        </Section>

        <Section id="sobre" pt="208 80" pb="96 80">
          <AboutUs content={hotel.aboutUs} />
        </Section>

        <Section id="chamada" pt="80" pb="96" mt="48">
          <CallToAction variant="hotel" content={hotel.cta} />
        </Section>

        <Gallery headline={hotel.gallery.headline} images={hotel.gallery.photos.data} />

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
  const hotel = await fetchAPI('hotel');
  const about = await fetchAPI('about');
  const info = await fetchAPI('info');
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  const layout = await getLayoutContent();

  return {
    props: {
      hotel,
      about,
      info,
      faq,
      footer,

      layout
    },

    revalidate: 60,
  }
}