import Head from 'next/head';
import React from 'react';
import Div from 'src/components/common/Div';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import SocialMedia from 'src/components/common/SocialMedia';
import AboutUs from 'src/components/home/AboutUs';
import Blog from 'src/components/home/Blog';
import CallToAction from 'src/components/home/CallToAction';
import Hero from 'src/components/home/Hero';
import Services from 'src/components/home/Services';
import Testimonials from 'src/components/home/Testimonials';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import fetchAPI from 'src/utils/fetch';

export default function Home({ home, cases, gallery, posts, footer, info }) {

  return (
    <>
      <Head>
        <title>Casulo</title>
        <meta property="og:title" content="Casulo" />
      </Head>

      <Header home />

      <main>
        <Section id="home">
          <Hero />
        </Section>

        <Section id="servicos" pt="160 80" pb="160 80">
          <Services />
        </Section>

        <Section id="depoimentos" pt="80 80" pb="160 160">
          <Testimonials />
        </Section>

        <Section id="sobre" pt="96 96" pb="96 96" style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <AboutUs />
        </Section>

        <Section style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <Div />
        </Section>

        <Section id="redes-sociais" pt="48 48" pb="160 80" style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <SocialMedia videos={gallery} />
        </Section>

        <Section id="chamada" pt="140 80" pb="140 80" style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <CallToAction />
        </Section>

        <Section id="blog" pt="120 80" pb="96 80">
          <Blog posts={posts} />
        </Section>

        <Section id="faq" pt="96 80" pb="120 80">
          <FAQ />
        </Section>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const home = await fetchAPI('home');
  const cases = await fetchAPI('cases', '', false);
  const gallery = await fetchAPI('gallery');
  const posts = await fetchAPI('posts', `&pagination[start]=${0}&pagination[limit]=${2}`, false);
  const footer = await fetchAPI('footer');
  const info = await fetchAPI('info');

  return {
    props: {
      home,
      cases,
      gallery: gallery.videos.data,
      posts,
      footer,
      info,
    },

    revalidate: 60,
  }
}