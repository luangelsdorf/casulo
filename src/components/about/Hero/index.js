import Button from 'src/components/common/Button';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Img from 'src/components/common/Img';
import { getSizesString } from 'src/utils/images';
import { useContext } from 'react';
import { LayoutContext } from 'src/utils/contexts';

export default function Hero({ content }) {
  const { info } = useContext(LayoutContext);

  return (
    <div className={styles.section}>
      <div className="container">
        <Img {...content.cover} fill alt="" priority sizes="(max-width: 576px) 1vw, (max-width: 992px) 66vw, 100vw" />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={styles.textContent}>
              <h1>{content.title}</h1>
              {content.text && <p>{content.text}</p>}
              {content.text && <Button href={`https://wa.me/${info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre os serviços.`} RightIcon={Arrow}>Fale Conosco</Button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
