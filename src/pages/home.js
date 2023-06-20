import React from 'react';
import Hero from 'src/components/home/Hero';

export default function Home() {
  return (
    <>
      <style jsx>{`
        .main img {
          vertical-align: middle;
          width: 100%;
          height: auto;
        }
      `}</style>

      <main className="main">
        {/* <Hero /> */}
        <img style={{ height: '100vh', objectFit: 'contain' }} src="/images/gambi/hero.jpg" alt="" />
        <img src="/images/gambi/services.jpg" alt="" />
        <img src="/images/gambi/testimonials.jpg" alt="" />
        <img src="/images/gambi/about-us.jpg" alt="" />
        <img src="/images/gambi/div.jpg" alt="" />
        <img src="/images/gambi/social-media.jpg" alt="" />
        <img src="/images/gambi/cta.jpg" alt="" />
        <img src="/images/gambi/blog.jpg" alt="" />
        <img src="/images/gambi/faq.jpg" alt="" />
        <img src="/images/gambi/footer.jpg" alt="" />
      </main>
    </>
  )
}
