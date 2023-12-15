import Head from 'next/head';
import React from 'react';
import AboutUs from 'src/components/about/AboutUs';
import Benefits from 'src/components/about/Benefits';
import CallToAction from 'src/components/about/CallToAction';
import Hero from 'src/components/about/Hero';
import Purpose from 'src/components/about/Purpose';
import Testimonials from 'src/components/about/Testimonials';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function About({ about, cases, faq, footer, info }) {
  return (
    <>
      <Head>
        <title>Sobre Nós | Casulo</title>
        <meta property="og:title" content="Sobre Nós | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="home" pt="16" pb="72 40">
          <Hero content={about.banner} />
        </Section>

        <Section id="sobre" pt="176 40" pb="120 80">
          <AboutUs content={about.about} />
        </Section>

        <Section id="proposito" pt="0 80" pb="96 80">
          <Purpose content={about.purpose} />
        </Section>

        <Section id="beneficios" pt="80 80" pb="88 80" style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <Benefits content={about.benefits} />
        </Section>

        <Section id="depoimentos" pt="64 80" pb="80 80">
          <Testimonials content={about.testimonials} cases={cases} />
        </Section>

        <Section id="chamada" pt="112 80" pb="96 80">
          <CallToAction content={about.cta} />
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
  const cases = await fetchAPI('cases', { populate: 'deep' });
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');
  const info = await fetchAPI('info');

  const layout = await getLayoutContent();

  return {
    props: {
      about,
      cases,
      faq,
      footer,
      info,

      layout
    },

    revalidate: 60,
  }
}