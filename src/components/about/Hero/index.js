import Button from 'src/components/common/Button';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Img from 'src/components/common/Img';
import { getSizesString } from 'src/utils/images';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <Img {...content.cover} fill alt="" priority sizes={getSizesString('col-ext-8', true)} />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={styles.textContent}>
              <h1>{content.title}</h1>
              {content.text && <p>{content.text}</p>}
              {content.text && <Button RightIcon={Arrow}>Fale Conosco</Button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
