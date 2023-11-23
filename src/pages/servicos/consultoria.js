import Head from "next/head";
import Testimonials from "src/components/about/Testimonials";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Hero from 'public/images/gambi/consultoria/Hero.svg';
import fetchAPI from "src/utils/fetch";

export default function Consultancy({ about, cases, faq, footer }) {
  return (
    <>
      <Head>
        <title>Consultoria | Casulo</title>
        <meta property="og:title" content="Consultoria | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="home" pt="16" pb="72 80">
          <Hero style={{ width: '100%' }} />
        </Section>

        <Section id="depoimentos" pt="64 80" pb="80 80">
          <Testimonials content={about.testimonials} cases={cases} />
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
  const cases = await fetchAPI('cases', { populate: 'photo' });
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  return {
    props: {
      about,
      cases,
      faq,
      footer,
    },

    revalidate: 60,
  }
}