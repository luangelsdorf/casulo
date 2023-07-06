import styles from './Body.module.scss';
import { apiURL, env } from 'src/utils/env';
import Head from 'next/head';

export default function Body({ content }) {

  let newContent = content/* .replaceAll('<a', '<a class="greenery"') */;

  if (env === 'dev') {
    newContent = newContent.replaceAll('/uploads', `${apiURL}/uploads`);
  }

  return (
    <article className={`ck-content ${styles.article}`} dangerouslySetInnerHTML={{ __html: newContent }} />
  )
}