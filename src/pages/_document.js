import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <meta name="description" content="A Casulo é um centro de treinamento canino nasceu do anseio por criar uma conexão mais profunda entre os seres humanos e os animais." />
        <meta property="og:description" content="A Casulo é um centro de treinamento canino nasceu do anseio por criar uma conexão mais profunda entre os seres humanos e os animais." />
        <meta property="og:image" content="/images/cover.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}