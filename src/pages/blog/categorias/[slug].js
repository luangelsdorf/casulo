import fetchAPI from "src/utils/fetch";

export default function Category({ category, posts, info, footer }) {
  console.log(category, posts, info, footer);
  return (
    <div>Category</div>
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
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      category: singleCategory[0].attributes,
      posts,
      info,
      footer,
    },

    revalidate: 60,
  }
}