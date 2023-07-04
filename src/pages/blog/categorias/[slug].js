import Head from "next/head";
import Hero from "src/components/blog/Hero";
import PostList from "src/components/blog/PostList";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import fetchAPI from "src/utils/fetch";

export default function Category({ category, posts, footer }) {
  return (
    <>
      <Head>
        <title>{`${category.name} | Blog Casulo`}</title>
        <meta property="og:title" content={`${category.name} | Blog Casulo`} />
      </Head>

      <Header />

      <main>
        <Section id="inicio" pt="16 24" pb="48 24">
          <Hero content={{ topic: { title: category.name } }} />
        </Section>

        <Section id="lista">
          <PostList posts={posts} />
        </Section>
      </main>

      <Footer content={footer} />
    </>
  )
}

export async function getStaticPaths() {
  const categories = await fetchAPI('categorias', '', false);
  const paths = categories.map(cat => ({
    params: { slug: cat.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { slug } }) {
  const singleCategory = await fetchAPI('categorias', `filters[slug][$eq]=${slug}`, false);
  const posts = await fetchAPI('posts', `filters[categories][slug][$contains]=${slug}&pagination[start]=${0}&pagination[limit]=${6}`, '*');
  const footer = await fetchAPI('footer');

  return {
    props: {
      category: singleCategory[0].attributes,
      posts,
      footer,
    },

    revalidate: 60,
  }
}