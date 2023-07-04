import Head from "next/head";
import Hero from "src/components/blog/Hero";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import fetchAPI from "src/utils/fetch";

export default function Post({ post, info, footer }) {
  console.log(post, info, footer);
  return (
    <>
      <Head>
        <title>Post | Casulo</title>
        <meta property="og:title" content="Post | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="inicio" pt="16 24" pb="96 80">
          <Hero content={{ topic: { title: 'Título do Post', text: 'Lorem Ipsum dolor sit amet.' } }} />
        </Section>
      </main>

      <Footer content={footer} />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await fetchAPI('posts', '', false);
  const paths = posts.map(post => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { slug } }) {
  const singlePost = await fetchAPI('posts', `filters[slug][$eq]=${slug}`, false);
  /* const recentPosts = await fetchAPI('posts', `&pagination[start]=${0}&pagination[limit]=${5}`, false); */
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      post: singlePost[0].attributes,
      /* recentPosts, */
      info,
      footer,
    },

    revalidate: 60,
  }
}