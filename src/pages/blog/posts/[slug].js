import Head from "next/head";
import Hero from "src/components/about/Hero";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Body from "src/components/post/Body";
import RecentPosts from "src/components/post/RecentPosts";
import Share from "src/components/post/Share";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";

export default function Post({ post, recentPosts, footer }) {

  return (
    <>
      <Head>
        <title>{`${post.title} | Blog Casulo`}</title>
        <meta property="og:title" content={`${post.title} | Blog Casulo`} />
      </Head>

      <Header />

      <main>
        <Section id="inicio" pt="16 24" pb="48 24">
          <style>
            {`
              #inicio img {
                object-position: center !important;
              }
            `}
          </style>
          <Hero content={{ headline: {title: post.title, overline: post.categories.data[0].attributes.name}, cover: post.cover }} />
        </Section>

        <div className="col-12 col-lg-8 mx-auto">
          <Section>
            <Body content={post.body} />
            <Share />
          </Section>
        </div>

        <Section pt="96 80" pb="96 80">
          <RecentPosts posts={recentPosts} />
        </Section>
      </main>

      <Footer content={footer} />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await fetchAPI('posts', { populate: false });
  const paths = posts.map(post => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { slug } }) {
  const singlePost = await fetchAPI('posts', { populate: '*', "filters[slug]": slug });
  const recentPosts = await fetchAPI('posts', `&sort=createdAt:DESC&pagination[start]=${0}&pagination[limit]=${3}&populate=*`);
  const footer = await fetchAPI('footer');
  
  const layout = await getLayoutContent();

  return {
    props: {
      post: singlePost[0].attributes,
      recentPosts,
      footer,
      
      layout
    },

    revalidate: 60,
  }
}