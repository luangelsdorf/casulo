import LightGallery from 'lightgallery/react';
import styles from './Gallery.module.scss';
import Img from 'src/components/common/Img';
import Image from 'next/image';
import { apiURL } from 'src/utils/env';

export default function Gallery({ headline, images }) {
  if (images) {
    return (
      <div className={styles.section}>
        <div className="col-12">
          <header>
            <p className="overline">{headline.overline}</p>
            <h2>{headline.title}</h2>
          </header>
        </div>
        <div className="container">
          <LightGallery download={false} speed={500} elementClassNames="row gy-lg-4">
            {
              images.map((img) => {
                return (
                  <div key={img.id} className="col-6 col-lg-4 col-xl-3" data-src={apiURL + img.attributes.url}>
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
