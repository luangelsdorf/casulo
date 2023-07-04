import Head from "next/head";
import Hero from "src/components/blog/Hero";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Body from "src/components/post/Body";
import fetchAPI from "src/utils/fetch";

export default function Post({ post, info, footer }) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Blog Casulo`}</title>
        <meta property="og:title" content={`${post.title} | Blog Casulo`} />
      </Head>

      <Header />

      <main>
        <Section id="inicio" pt="16 24" pb="48 24">
          <Hero content={{ topic: { title: post.title } }} />
        </Section>

        <div className="col-12 col-lg-8 mx-auto">
          <Section pt="0" pb="120">
            <Body content={post.body} />
          </Section>
        </div>
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