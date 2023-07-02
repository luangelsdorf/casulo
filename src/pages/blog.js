import Head from "next/head";
import Hero from "src/components/blog/Hero";
import PostList from "src/components/blog/PostList";
import Section from "src/components/common/Section";
import SocialMedia from "src/components/common/SocialMedia";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import fetchAPI from "src/utils/fetch";

export default function Blog({ blog, gallery, posts, footer, info, }) {
  return (
    <>
      <Head>
        <title>Nosso Blog | Casulo</title>
        <meta property="og:title" content="Nosso Blog | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="inicio" pt="16 24" pb="96 80">
          <Hero content={blog.banner} />
        </Section>

        <Section id="lista" pt="0" pb="80 80">
          <PostList posts={posts} />
        </Section>

        <Section id="redes-sociais" pt="64 48" pb="56 80" mb="56" style={{ backgroundColor: 'rgb(var(--folha))' }}>
          <SocialMedia blog content={blog.socialMedia} videos={gallery} info={info} />
        </Section>
      </main>

      <Footer content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const blog = await fetchAPI('blog');
  const posts = await fetchAPI('posts', `&pagination[start]=${0}&pagination[limit]=${6}`, false);
  const gallery = await fetchAPI('gallery');
  const footer = await fetchAPI('footer');
  const info = await fetchAPI('info');

  return {
    props: {
      blog,
      gallery: gallery.videos.data,
      posts,
      footer,
      info,
    },

    revalidate: 60,
  }
}