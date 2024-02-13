import Button from 'src/components/common/Button';
import styles from './AboutUs.module.scss';
import Heart from 'public/images/icons/ui/heart.svg';
import { useContext } from 'react';
import { LayoutContext } from 'src/utils/contexts';
import Link from 'next/link';

export default function AboutUs({ content }) {
  const { info } = useContext(LayoutContext);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <header className={styles.headline}>
              <p className="overline light">{content.headline.overline}</p>
              <h2>{content.headline.title}</h2>
              <Button href="/sobre-nos" className="inverted d-none d-lg-inline-flex" LeftIcon={Heart}>Conheça mais</Button>
            </header>
          </div>

          <div className="col-12 offset-lg-1 col-lg-5">
            <div className={styles.textContent}>
              <p>{content.text}</p>
              <Button href="/sobre-nos" className="inverted d-lg-none d-inline-flex" LeftIcon={Heart}>Conheça mais</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
