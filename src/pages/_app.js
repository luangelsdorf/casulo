import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'public/css/ckeditor.min.css';
import 'src/styles/styles.scss';
import { Calistoga } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';
import Cookies from 'src/components/common/Cookies';
import { Lenis } from '@studio-freight/react-lenis';

const calistoga = Calistoga({ subsets: ['latin'], display: 'auto', weight: ['400'] });
const nunito = Nunito_Sans({ subsets: ['latin'], display: 'auto', weight: ['400', '600', '700'] });

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

      <Lenis root>
        <Component {...pageProps} />
      </Lenis>
      <Cookies />
    </>
  )
}

export default MyApp
