import React from 'react'

export default function Blog() {
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
        <img src="/images/gambi/blog/hero.jpg" alt="" />
        <img src="/images/gambi/blog/content.jpg" alt="" />
        <img src="/images/gambi/social-media.jpg" alt="" />
        <img src="/images/gambi/footer.jpg" alt="" />
      </main>
    </>
  )
}
