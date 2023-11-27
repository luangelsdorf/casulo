import Head from "next/head";
import FAQ from "src/components/common/FAQ";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Hero from 'public/images/gambi/creche/Hero.svg';
import fetchAPI from "src/utils/fetch";

export default function Consultancy({ info, faq, footer }) {
  return (
    <>
      <Head>
        <title>Adestramento | Casulo</title>
        <meta property="og:title" content="Adestramento | Casulo" />
      </Head>

      <Header info={info} />

      <main>
        <Section id="home" pt="16" pb="72 80">
          <Hero style={{ width: '100%', color: '#FFF' }} />
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
  const info = await fetchAPI('info');
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');

  return {
    props: {
      info,
      faq,
      footer,
    },

    revalidate: 60,
  }
}