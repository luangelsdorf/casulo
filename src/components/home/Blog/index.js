import Button from 'src/components/common/Button';
import styles from './Blog.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import PostCard from 'src/components/blog/PostCard';

export default function Blog({ content, posts }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-5 gy-lg-0 justify-content-center">
          <div className="col-12 col-lg-4">
            <header className={styles.textContent}>
              <p className="overline">{content.headline.overline}</p>
              <h2>{content.headline.title}</h2>
              <p>{content.text}</p>
              <Button className="d-none d-lg-inline-flex" href="/blog" RightIcon={Arrow}>Ver Blog Completo</Button>
            </header>
          </div>
          {
            posts.map((post, index) => (
              <div key={index} className="col-12 col-lg-4">
                <PostCard {...post.attributes} />
              </div>
            ))
          }
          <Button href="/blog" style={{width: 'max-content'}} className="d-inline-flex d-lg-none" RightIcon={Arrow}>Ver Blog Completo</Button>
        </div>
      </div>
    </div>
  )
}
