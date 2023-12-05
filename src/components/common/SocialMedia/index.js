import { apiURL } from 'src/utils/env';
import Button from '../Button';
import styles from './SocialMedia.module.scss';
import Insta from 'public/images/icons/ui/instagram.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { useContext } from 'react';
import { LayoutContext } from 'src/utils/contexts';

export default function SocialMedia({ blog, content, videos }) {
  const { info } = useContext(LayoutContext);
  
  return (
    <div className={`${styles.section}${blog ? ' ' + styles.blog : ''}`}>
      <header>
        <div className="container">
          <div className="row">
            <div className={`col-12${blog ? '' : ' col-lg-6'}`}>
              <div className={styles.headline}>
                <p className="overline light">{content.headline.overline}</p>
                <h2>{content.headline.title}</h2>
              </div>
            </div>
            <div className={`col-12 col-lg-3 offset-lg-3 ${blog ? 'd-none' : 'd-block'}`}>
              <div className={styles.button}>
                <Button LeftIcon={Insta} target="_blank" href={`https://instagram.com/${info.instagram}`}>{`@${info.instagram}`}</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.videos}>
        <div className="container">
          <div className="row">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              initialSlide={2}
              slidesPerView="auto"
              grabCursor
              loop
              speed={800}
              onTransitionEnd={self => self.params.speed = 800}
              onTouchStart={self => self.params.speed = 300}
              autoplay={{
                delay: 800,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
            >
              {
                videos.map((video, index) => (
                  <SwiperSlide key={index} className="col-12 col-lg-3">
                    <video src={apiURL + video.attributes.url} loop autoPlay muted />
                  </SwiperSlide>
                ))
              }
              {
                videos.length < 10 && videos.map((video, index) => (
                  <SwiperSlide key={index} className="col-12 col-lg-3">
                    <video src={apiURL + video.attributes.url} loop autoPlay muted />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
      <Button LeftIcon={Insta} target="_blank" href="https://instagram.com/casulo.adestra">@casulo.adestra</Button>
    </div>
  )
}
