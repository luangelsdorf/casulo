import Button from 'src/components/common/Button';
import styles from './Case.module.scss';
import Img from 'src/components/common/Img';
import { getSizesString } from 'src/utils/images';
import Dog from 'public/images/icons/ui/dog.svg';
import Mars from 'public/images/icons/ui/mars.svg';
import Venus from 'public/images/icons/ui/venus.svg';
import DogFace from 'public/images/icons/ui/dog-face.svg';
import X from 'public/images/icons/ui/x.svg';
import { useState } from 'react';
import Image from 'next/image';
import { apiURL } from 'src/utils/env';

export default function Case({ name, breed, sex, size, photo, photos, services, testimonial }) {
  const [coverURL, setCoverURL] = useState(photos[0].photo.data.attributes.url);

  const modalEvent = new Event('close-modal', { bubbles: true });

  function handleThumbnailClick(photo) {
    document.querySelector(`.${styles.cover}`).style.opacity = 0;
    setTimeout(() => {
      setCoverURL(photo.photo.data.attributes.url);
    }, 350);
  }

  return (
    <div className="container">
      <div className={styles.case}>
        <button id="close-modal" title="Fechar" onClick={e => e.currentTarget.dispatchEvent(modalEvent)}>
          <X />
        </button>
        <div className="row justify-content-center justify-content-xl-end">
          <div className="col-12 col-lg-6">
            <div className={styles.photos}>
              <div className={styles.cover}>
                <Image onLoadingComplete={img => img.parentElement.style.opacity = 1} width={500} height={500} src={apiURL + coverURL} sizes="(max-width: 992px) 80vw, 41vw" alt="Foto do cão" />
              </div>
              <div className={styles.thumbnails}>
                {
                  photos.map((photo, i) => (
                    <div key={i}>
                      <Img className={photo.photo.data.attributes.url === coverURL ? styles.active : undefined} onClick={() => handleThumbnailClick(photo)} {...photo.photo} width={100} height={100} />
                    </div>
                  ))
                }
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
