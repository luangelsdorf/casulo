import Button from 'src/components/common/Button';
import styles from './Blog.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import PostCard from 'src/components/blog/PostCard';

export default function Blog({ content, posts }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <header className={styles.textContent}>
              <p className="overline">Posts & Artigos</p>
              <h2>Nosso Blog</h2>
              <p>{'Uma descrição do seu blog e o que o \nvisitante pode esperar encontrar nele.'}</p>
              <Button href="/blog" RightIcon={Arrow}>Ver Blog Completo</Button>
            </header>
          </div>
          {
            posts.map((post, index) => (
              <div key={index} className="col-12 col-lg-4">
                <PostCard {...post.attributes} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
