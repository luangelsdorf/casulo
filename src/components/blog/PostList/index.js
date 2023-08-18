import Button from 'src/components/common/Button';
import PostCard from '../PostCard';
import styles from './PostList.module.scss';
import { useState } from 'react';
import useSWR from 'swr';
import fetchAPI from 'src/utils/fetch';
import Spinner from 'src/components/common/Spinner';

export default function PostList({ initialPosts, pagination }) {
  const [currentPage, setCurrentPage] = useState(pagination.page);

  const Page = ({ page }) => {
    const { data, isLoading } = useSWR(
      page > 1 ? `posts?pagination[page]=${page}` : null,
      url => fetchAPI(url, { populate: '*', 'pagination[pageSize]': 3, sort: 'createdAt:DESC' }),
      { fallbackData: initialPosts }
    );
    return (
      <div className="row justify-content-center">
        {data.map((post, index) => (
          <div className={`col-12 col-lg-4 ${!isLoading ? 'ready' : 'loading'}`} key={index}>
            <PostCard {...post.attributes} />
          </div>
        ))}
        {
          isLoading && <Spinner className="spinner" height={40} width={40} style={{ color: 'rgb(var(--borboleta))', marginBottom: '48px' }} />
        }
      </div>
    );
  }

  const pages = [];
  for (let i = 0; i < currentPage; i++) {
    pages.push(<Page page={i + 1} key={i} />)
  }

  return (
    <div className={styles.section}>
      <div className="container">{pages}</div>
      {
        currentPage < pagination.pageCount && (
          <Button onClick={() => setCurrentPage(currentPage + 1)} btnElement>Ver Mais Publicações</Button>
        )
      }
    </div>
  )
}
