import Button from 'src/components/common/Button';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Img from 'src/components/common/Img';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <Img {...content.cover} fill alt="" />
        <div className="row justify-content-center">
          <div className="co-12 col-lg-8">
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
