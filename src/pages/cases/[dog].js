import Head from "next/head";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Case from "src/components/cases/Case";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";

export default function SingleCase({ dog }) {
  const r = useRouter();

  useEffect(() => {
    function beforeUnloadHandler(e) {
      e.preventDefault();
      r.push('/');
    }

    window.addEventListener('beforeunload', beforeUnloadHandler);
    return () => window.removeEventListener('beforeunload', beforeUnloadHandler);
  }, []);

  return (
    <div style={{
      /* height: '100vh', */
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(var(--folha-escura))',
    }}>
      <Head>
        <title>{`${dog.name} | Casulo`}</title>
        <meta property="og:title" content={`${dog.name} | Casulo`} />
      </Head>

      <Case {...dog} />
    </div>
  )
}

export async function getStaticPaths() {
  const cases = await fetchAPI('cases', { populate: false });
  const paths = cases.map(dog => ({
    params: { dog: dog.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { dog: slug } }) {
  const dog = await fetchAPI('cases', { populate: 'deep', "filters[slug]": slug });
  
  const layout = await getLayoutContent();

  return {
    props: {
      dog: dog[0].attributes,
      
      layout
    },

    revalidate: 60,
  }
}