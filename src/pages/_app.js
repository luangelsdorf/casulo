import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'src/styles/styles.scss';
import { Calistoga } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';

const calistoga = Calistoga({ subsets: ['latin'], weight: ['400'] });
const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          --calistoga: ${calistoga.style.fontFamily};
          --nunito: ${nunito.style.fontFamily};
        }
      `}
      </style>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
