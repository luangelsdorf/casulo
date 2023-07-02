import Button from 'src/components/common/Button';
import PostCard from '../PostCard';
import styles from './PostList.module.scss';

export default function PostList({ posts }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          {
            posts.map((post, index) => (
              <div className="col-12 col-lg-4" key={index}>
                <PostCard {...post.attributes} />
              </div>
            ))
          }
          {
            posts.map((post, index) => (
              <div className="col-12 col-lg-4" key={index}>
                <PostCard {...post.attributes} />
              </div>
            ))
          }
        </div>
      </div>
      <Button btnElement>Ver Mais Publicações</Button>
    </div>
  )
}
