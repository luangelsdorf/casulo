import Head from "next/head";
import Hero from "src/components/blog/Hero";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Body from "src/components/post/Body";
import fetchAPI, { getLayoutContent } from "src/utils/fetch";

export default function Termos({ content, info, footer }) {
  return (
    <>
      <Head>
        <title>Termos de Uso | Casulo</title>
        <meta property="og:title" content="Termos de Uso | Casulo" />
      </Head>

      <Header />

      <main>
        <Section id="inicio" pt="16 24" pb="48 24">
          <Hero content={{ topic: { title: content.title } }} />
        </Section>

        <Section id="conteudo">
          <div className="container">
            <Body content={content.content} />
          </div>
        </Section>
      </main>

      <Footer content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const content = await fetchAPI('termos-de-uso');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');
  
  const layout = await getLayoutContent();

  return {
    props: {
      content,
      info,
      footer,
      
      layout
    },

    revalidate: 60,
  }
}