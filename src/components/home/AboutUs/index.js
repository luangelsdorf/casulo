import Button from 'src/components/common/Button';
import styles from './AboutUs.module.scss';
import Heart from 'public/images/icons/ui/heart.svg';
import { useContext } from 'react';
import { LayoutContext } from 'src/utils/contexts';

export default function AboutUs({ content }) {
  const { whatsapp } = useContext(LayoutContext);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <header className={styles.headline}>
              <p className="overline light">{content.headline.overline}</p>
              <h2>{content.headline.title}</h2>
              <Button href={`https://wa.me/${whatsapp}?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre os serviços.`} className="inverted" LeftIcon={Heart}>Conheça mais</Button>
            </header>
          </div>

          <div className="col-12 offset-lg-1 col-lg-5">
            <div className={styles.textContent}>
              <p>{content.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
