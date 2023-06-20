import React from 'react';

export default function AboutUs() {
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
        <img src="/images/gambi/about/hero.jpg" alt="" />
        <img src="/images/gambi/about/about-us.jpg" alt="" />
        <img src="/images/gambi/about/testimonials.jpg" alt="" />
        <img src="/images/gambi/about/cta.jpg" alt="" />
        <img src="/images/gambi/faq.jpg" alt="" />
        <img src="/images/gambi/footer.jpg" alt="" />
      </main>
    </>
  )
}
