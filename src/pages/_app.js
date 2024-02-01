import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'public/css/ckeditor.min.css';
import 'lightgallery/css/lightgallery.css';
import 'src/styles/styles.scss';
import { Calistoga } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';
import Cookies from 'src/components/common/Cookies';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { env } from 'src/utils/env';
import { LayoutContext } from 'src/utils/contexts';
import Analytics from 'src/components/analytics/Analytics';

const calistoga = Calistoga({ subsets: ['latin'], display: 'swap', weight: ['400'] });
const nunito = Nunito_Sans({ subsets: ['latin'], display: 'auto', weight: ['400', '600', '700', '800'] });

function MyApp({ Component, pageProps }) {
  const lenis = useLenis();
  const router = useRouter();

  useEffect(() => {/* 
    const anchors = document.querySelectorAll('a[href*="#"]');

    function handleClick(e) {
      if ((e.currentTarget.pathname !== window.location.pathname) || !e.currentTarget.hash) return;
      e.preventDefault();
      lenis.scrollTo(e.currentTarget.hash);
      window.location.hash = e.currentTarget.hash;
    }

    anchors.forEach(a => a.addEventListener('click', handleClick));
    return () => anchors.forEach(a => a.removeEventListener('click', handleClick));
   */}, [lenis]);

  const prevRoute = useRef(null);

  useEffect(() => {
    prevRoute.current = router.asPath;
  }, [router.asPath]);

  useEffect(() => {
    const handleRouteChangeComplete = (url, { shallow }) => {
      if (shallow || url.includes('/cases/')) {
        return;
      } else {
        lenis.scrollTo(0);
      }
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    }
  }, [lenis]);

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
        <LayoutContext.Provider value={pageProps.layout}>
          <Component {...pageProps} />
        </LayoutContext.Provider>
      </Lenis>

      <Cookies />

      {env !== 'dev' && <Analytics />}

    </>
  )
}

export default MyApp
