import fetchAPI from "src/utils/fetch";

export default function Category({ dogs, info, footer, fields }) {
  console.log(dogs, info, footer, fields);
  return (
    <h1>Dogs</h1>
  )
}

export async function getStaticProps() {
  const dogs = await fetchAPI('cases');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');
  const fields = await fetchAPI('content-type-builder/content-types/api::case.case', '', false);

  return {
    props: {
      dogs,
      info,
      footer,
      fields,
    },

    revalidate: 60,
  }
}