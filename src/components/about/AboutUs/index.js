import styles from './AboutUs.module.scss';
import Seal from 'public/images/brand/seal-dark.svg';
import Img from 'src/components/common/Img';
import { getSizesString } from 'src/utils/images';

export default function AboutUs({ content }) {
  const paragraphs = content.content.text.split('\n\n');
  const first = paragraphs[0];
  const second = [paragraphs[1], paragraphs[2]].join('\n\n');

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.image}>
              <Seal className="d-none d-lg-inline" />
              <Img {...content.image} fill sizes={getSizesString('col-12 col-lg-6')} />
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.textContent}>
              <h2>{content.content.title}</h2>
              <p>{first}</p>
              <p>{second}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
