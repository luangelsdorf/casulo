import Button from 'src/components/common/Button';
import styles from './Case.module.scss';
import Img from 'src/components/common/Img';
import { getSizesString } from 'src/utils/images';
import Dog from 'public/images/icons/ui/dog.svg';
import Mars from 'public/images/icons/ui/mars.svg';
import Venus from 'public/images/icons/ui/venus.svg';
import DogFace from 'public/images/icons/ui/dog-face.svg';
import X from 'public/images/icons/ui/x.svg';

export default function Case({ name, breed, sex, size, photo, services, testimonial }) {

  const modalEvent = new Event('close-modal', { bubbles: true });

  return (
    <div className="container">
      <div className={styles.case}>
        <button id="close-modal" title="Fechar" onClick={e => e.currentTarget.dispatchEvent(modalEvent)}>
          <X />
        </button>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.photos}>
              <Img {...photo} sizes={getSizesString('col-12 col-lg-5')} />
              <div className={styles.thumbnails}>
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <p>{services}</p>
              <h2>{name}</h2>
              <div className={styles.tags}>
                <Button LeftIcon={Dog} btnElement className="folha inverted sm">{breed}</Button>
                <Button LeftIcon={sex === 'Macho' ? Mars : Venus} btnElement className="folha inverted sm">{sex}</Button>
                <Button LeftIcon={DogFace} btnElement className="folha inverted sm">Porte {size}</Button>
              </div>
              <div className={styles.testimonial} dangerouslySetInnerHTML={{ __html: testimonial }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
