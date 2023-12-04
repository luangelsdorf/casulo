import Img from 'src/components/common/Img';
import styles from './AboutUs.module.scss';
import { getSizesString } from 'src/utils/images';

export default function AboutUs({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.image}>
              <Img {...content.image} fill sizes={getSizesString('col-12 col-lg-6')} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <header>
                <p className="overline">{content.headline.overline}</p>
                <h2>{content.headline.title}</h2>
              </header>
              <p>{content.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
