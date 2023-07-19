import fetchAPI from "src/utils/fetch";

export default function Category({ dog, info, footer }) {
  /* console.log(dog, info, footer); */
  return (
    <div>Dog</div>
  )
}

export async function getStaticPaths() {
  const cases = await fetchAPI('cases', '', false);
  const paths = cases.map(dog => ({
    params: { dog: dog.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { dog: slug } }) {
  const dog = await fetchAPI('cases', `filters[slug][$eq]=${slug}`, '*');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      dog: dog[0].attributes,
      info,
      footer,
    },

    revalidate: 60,
  }
}