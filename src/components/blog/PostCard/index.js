import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { apiURL } from 'src/utils/env';
import { getExcerpt } from 'src/utils/helpers';
import styles from './PostCard.module.scss';
import Button from 'src/components/common/Button';

export default function PostCard(props) {
  const category = props.categories.data[0]?.attributes;

  return (
    <article className={styles.card}>

      <div>
        {
          category && (
            <div className={styles.badge}>
              <Button className="tag folha inverted" href={`/blog/categorias/${category.slug}`}>
                {category.name}
              </Button>
            </div>
          )
        }
        <Link href={`/blog/posts/${props.slug}`} className={`link-image ${styles.thumbnail}`}>
          <div>
            <Image
              fill
              src={apiURL + props.cover.data.attributes.url}
              alt="Thumbnail"
              sizes="
                  (max-width: 576px) 100vw,
                  (max-width: 992px) 50vw, 33vw
              "
            />
          </div>
        </Link>
      </div>

      <div className={styles.body}>
        <Link className="link-image" href={`/blog/posts/${props.slug}`}>
          <h3>{props.title}</h3>
        </Link>
        <p>
          {props.body ? getExcerpt(props.body) : null}
        </p>
        <Button href={`/blog/posts/${props.slug}`} className="transparent sm">Ler Mais</Button>
      </div>
    </article>
  )
}