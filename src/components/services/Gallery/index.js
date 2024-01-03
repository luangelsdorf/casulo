import LightGallery from 'lightgallery/react';
import styles from './Gallery.module.scss';
import Img from 'src/components/common/Img';
import Image from 'next/image';
import { apiURL } from 'src/utils/env';

export default function Gallery({ images }) {
  if (images) {
    return (
      <div className={styles.section}>
        <div className="container">
          <LightGallery speed={500} elementClassNames="row gy-5">
            {
              images.map((img) => {
                return (
                  <div key={img.id} className="col-12 col-md-6 col-lg-4 col-xl-3" data-src={apiURL + img.attributes.url}>
                    <div className={styles.photo}>
                      <Image width={img.attributes.width} height={img.attributes.height} src={apiURL + img.attributes.url} alt={img.attributes.alternativeText && ''} />
                    </div>
                  </div>
                );
              })
            }
          </LightGallery>
        </div>
      </div>
    )
  } else {
    return null;
  }
}
