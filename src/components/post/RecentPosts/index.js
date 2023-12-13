import Button from 'src/components/common/Button';
import styles from './RecentPosts.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import PostCard from 'src/components/blog/PostCard';

export default function RecentPosts({ posts }) {
  console.log(posts);
  return (
    <div className={styles.section}>
      <div className="container">
        <header>
          <h2>Posts Recentes</h2>
          <Button RightIcon={Arrow} href="/blog" className="folha inverted">Ver Blog Completo</Button>
        </header>
        <div className="row">
          {
            posts.map((post, i) => (
              <div key={i} className="col-12 col-lg-4">
                <PostCard {...post.attributes} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
