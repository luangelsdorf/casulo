import Button from 'src/components/common/Button';
import styles from './Case.module.scss';
import Img from 'src/components/common/Img';
import Dog from 'public/images/icons/ui/dog.svg';
import Mars from 'public/images/icons/ui/mars.svg';
import Venus from 'public/images/icons/ui/venus.svg';
import DogFace from 'public/images/icons/ui/dog-face.svg';
import X from 'public/images/icons/ui/x.svg';
import Image from 'next/image';
import { apiURL } from 'src/utils/env';
import LightGallery from 'lightgallery/react';
import Quote from 'public/images/icons/Quote.svg';

export default function Case({ name, breed, sex, size, photos, services, quote, tutor }) {

  const modalEvent = new Event('close-modal', { bubbles: true });

  return (
    <div className="container">
      <div className={styles.case}>
        <button id="close-modal" title="Fechar" onClick={e => e.currentTarget.dispatchEvent(modalEvent)}>
          <X />
        </button>
        <div className="row justify-content-center justify-content-xl-start">
          <div className="col-12 col-lg-6">
            <div className={styles.photos}>
              <div className={styles.cover}>
                <Image onClick={() => document.querySelector(`.${styles.thumbnails}`).firstChild.click()} width={500} height={500} src={apiURL + photos[0].photo.data.attributes.url} sizes="(max-width: 992px) 80vw, 41vw" alt="Foto do cão" />
              </div>
              <LightGallery elementClassNames={styles.thumbnails} download={false}>
                {
                  photos.map((photo, i) => (
                    <div key={i} data-src={apiURL + photo.photo.data.attributes.url}>
                      <Img {...photo.photo} width={100} height={100} />
                    </div>
                  ))
                }
              </LightGallery>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <p>{services}</p>
              <h2>{name}</h2>
              <div className={styles.tags}>
                <Button LeftIcon={Dog} btnElement className="folha inverted sm">{breed}</Button>
                <Button LeftIcon={sex === 'Macho' ? Mars : Venus} btnElement className="folha inverted sm">{sex}</Button>
                <Button LeftIcon={DogFace} btnElement className="folha inverted sm">Porte {size}</Button>
              </div>
              <figure className={styles.testimonial}>
                <Quote />
                <blockquote>{quote}</blockquote>
                <figcaption>
                  <p>{tutor}</p>
                  <p>Tutor(a) d{sex === 'Macho' ? 'o' : 'a'} {name}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
