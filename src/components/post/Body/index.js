import styles from './Body.module.scss';
import { apiURL } from 'src/utils/env';
import parse from 'html-react-parser';
import Image from 'next/image';
import { getSizesString } from 'src/utils/images';

export default function Body({ content }) {

  function replaceImg(el) {
    let sizing;
    if (el.name === 'img') {
      if (el.parent.attribs.class?.includes('image-style-side')) {
        sizing = 'col-12 col-md-6';
      } else {
        sizing = 'col-12 col-lg-8';
      }
      return <Image src={apiURL + el.attribs.src} alt={el.attribs.alt} fill sizes={getSizesString(sizing)} />
    }
  }

  const html = parse(content, { replace: replaceImg });

  return (
    <article className={`ck-content ${styles.article}`}>
      {html}
    </article>
  )
}