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

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Nós | Casulo</title>
        <meta property="og:title" content="Sobre Nós | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="home" pt="16" pb="72 80">
          <Hero />
        </Section>

        <Section id="sobre" pt="176 80" pb="120 80">
          <AboutUs />
        </Section>

        <Section id="proposito" pt="0" pb="96 80">
          <Purpose />
        </Section>

        <Section id="beneficios" pt="80 80" pb="88 80" style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <Benefits />
        </Section>

        <Section id="depoimentos" pt="64 80" pb="80 80">
          <Testimonials />
        </Section>

        <Section id="chamada" pt="112 80" pb="96 80">
          <CallToAction />
        </Section>

        <Section id="faq" pt="96 80" pb="120 80">
          <FAQ />
        </Section>
      </main>

      <Footer />
    </>
  )
}
