import Head from "next/head";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import fetchAPI from "src/utils/fetch";
import AboutUs from "src/components/services/AboutUs";
import CallToAction from "src/components/about/CallToAction";
import Hero from "src/components/services/Hero";

export default function Consultancy({ hotel, about, info, faq, footer }) {
  return (
    <>
      <Head>
        <title>Hotel Canino | Casulo</title>
        <meta property="og:title" content="Hotel Canino | Casulo" />
      </Head>

      <Header info={info} />

      <main>
        <Section id="home" pt="16" pb="72 80">
          <Hero
            service="hotel"
            content={{
              ...hotel.hero,
              benefits: hotel.benefits,
              details: {
                ...hotel.details,
                button: hotel.button
              }
            }}
          />
        </Section>

        <Section id="sobre" pt="96 80" pb="96 80">
          <AboutUs content={hotel.aboutUs} />
        </Section>

        <Section id="chamada" pt="80" pb="96" mt="48">
          <CallToAction variant="hotel" content={hotel.cta} info={info} />
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
  const hotel = await fetchAPI('hotel');
  const about = await fetchAPI('about');
  const info = await fetchAPI('info');
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  return {
    props: {
      hotel,
      about,
      info,
      faq,
      footer,
    },

    revalidate: 60,
  }
}