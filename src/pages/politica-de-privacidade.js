import Head from "next/head";
import Hero from "src/components/blog/Hero";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import Body from "src/components/post/Body";
import fetchAPI from "src/utils/fetch";

export default function Politica({ content, footer }) {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Casulo</title>
        <meta property="og:title" content="Política de Privacidade | Casulo" />
      </Head>

      <Header info={info} />

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
  const content = await fetchAPI('politica-de-privacidade');
  const footer = await fetchAPI('footer');

  return {
    props: {
      content,
      footer,
    },

    revalidate: 60,
  }
}