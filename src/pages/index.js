import Head from 'next/head';
import React from 'react';
import Area from 'src/components/common/Area';
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
import fetchAPI, { getLayoutContent } from 'src/utils/fetch';

export default function Home({ home, cases, gallery, posts, faq, footer, info }) {

  const highlights = cases.filter(item => item.attributes.highlight);

  return (
    <>
      <Head>
        <title>Casulo</title>
        <meta property="og:title" content="Casulo" />
      </Head>

      <Header home />

      <main className="home">
        <Section id="inicio" pt="0 120" pb="0 80">
          <Hero content={home.banner} highlights={highlights} />
        </Section>

        <Section id="servicos" pt="160 80" pb="160 80">
          <Services content={home.services} />
        </Section>

        <Section id="depoimentos" pt="80 80" pb="160 160">
          <Testimonials content={home.testimonials} cases={cases} />
        </Section>

        <Section id="sobre" pt="96 96" pb="96 96" style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <AboutUs content={home.aboutUs} />
        </Section>

        <Section style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <Div />
        </Section>

        <Section id="redes-sociais" pt="48 48" pb="160 80" style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <SocialMedia content={home.socialMedia} videos={gallery} />
        </Section>

        <Section id="chamada" className="d-none d-lg-block">
          <CallToAction content={home.cta} />
        </Section>

        <Section id="blog" pt="120 80" pb="96 56">
          <Blog content={home.blog} posts={posts} />
        </Section>

        <Section id="faq" pt="96 56" pb="120 80">
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
  const home = await fetchAPI('home');
  const cases = await fetchAPI('cases', { populate: 'deep' });
  const gallery = await fetchAPI('gallery');
  const posts = await fetchAPI('posts', { populate: '*', sort: 'createdAt:DESC', 'pagination[page]': 1, 'pagination[pageSize]': 2 });
  const faq = await fetchAPI('faq');
  const footer = await fetchAPI('footer');
  const info = await fetchAPI('info');

  const layout = await getLayoutContent();

  return {
    props: {
      home,
      cases,
      gallery: gallery.videos.data,
      posts,
      faq,
      footer,
      info,

      layout
    },

    revalidate: 60,
  }
}