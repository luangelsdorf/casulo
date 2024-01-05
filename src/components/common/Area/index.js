import { useContext } from 'react';
import styles from './Area.module.scss';
import { LayoutContext } from 'src/utils/contexts';
import Map from 'public/images/map.svg';
import Button from '../Button';
import Whats from '@icons/whatsapp.svg';

export default function Area() {
  const { info } = useContext(LayoutContext);

  const paragraphs = info.area.text.split('\n\n');
  const first = paragraphs[0];
  const second = [paragraphs[1], paragraphs[2]].join('\n\n');

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-lg-6">
            <div className={styles.map}>
              <Map />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <header>
                <p className="overline">{info.area.headline.overline}</p>
                <h2>{info.area.headline.title}</h2>
              </header>
              <p>{first}</p>
              <p>{second}</p>
              <Button LeftIcon={Whats} href={`https://wa.me/${info.whatsapp}`}>Fale Conosco</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
