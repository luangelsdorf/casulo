import Button from 'src/components/common/Button';
import styles from './Case.module.scss';
import Img from 'src/components/common/Img';
import { getSizesString } from 'src/utils/images';
import Dog from 'public/images/icons/ui/dog.svg';
import Mars from 'public/images/icons/ui/mars.svg';
import Venus from 'public/images/icons/ui/venus.svg';
import DogFace from 'public/images/icons/ui/dog-face.svg';
import { Lenis } from '@studio-freight/react-lenis';

export default function Case({ name, breed, sex, size, photo, services, testimonial }) {

  return (
    <div className={styles.case}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.photo}>
              <Img {...photo} sizes={getSizesString('col-12 col-lg-5')} />
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
              <Lenis>
                <div className={styles.testimonial} dangerouslySetInnerHTML={{ __html: testimonial }} />
              </Lenis>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
