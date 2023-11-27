import Head from "next/head";
import Testimonials from "src/components/about/Testimonials";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Hero from 'public/images/gambi/hotel/Hero.svg';
import fetchAPI from "src/utils/fetch";
import AboutUs from "src/components/about/AboutUs";
import CallToAction from "src/components/about/CallToAction";

export default function Consultancy({ about, info, faq, footer }) {
  return (
    <>
      <Head>
        <title>Hotel Canino | Casulo</title>
        <meta property="og:title" content="Hotel Canino | Casulo" />
      </Head>

      <Header info={info} />

      <main>
        <Section id="home" pt="16" pb="72 80">
          <Hero style={{ width: '100%', color: '#FFF' }} />
        </Section>

        <Section id="sobre" pt="176 80" pb="120 80">
          <AboutUs content={about.about} />
        </Section>

        <Section id="chamada" pt="112 80" pb="96 80">
          <CallToAction content={about.cta} info={info} />
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
  const about = await fetchAPI('about');
  const info = await fetchAPI('info');
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  return {
    props: {
      about,
      info,
      faq,
      footer,
    },

    revalidate: 60,
  }
}