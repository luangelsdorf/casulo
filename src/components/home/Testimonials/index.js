import TestimonialCard from 'src/components/common/TestimonialCard';
import styles from './Testimonials.module.scss';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Prev from 'public/images/icons/ui/arrow-left.svg';
import Next from 'public/images/icons/ui/arrow-right.svg';

export default function Testimonials({ content, cases }) {

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row flex-nowrap">
          <div className="col-12 col-lg-5">
            <header className={styles.textContent}>
              <p className="overline">{content.headline.overline}</p>
              <h2>{content.headline.title}</h2>
              <p>{content.text}</p>
              <div className={styles.controls}>
                <div role="button" className={styles.prev}>
                  <Prev />
                </div>
                <div role="button" className={styles.next}>
                  <Next />
                </div>
              </div>
            </header>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Swiper
              className="col-12 col-lg-5 m-0"
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              grabCursor
              speed={800}
              onTransitionEnd={self => self.params.speed = 800}
              onTouchStart={self => self.params.speed = 300}
              navigation={{ prevEl: `.${styles.prev}`, nextEl: `.${styles.next}` }}
            /* autoplay={{
              delay: 2100,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }} */
            >
              {
                cases.map((slide, index) => (
                  <SwiperSlide key={index} className="col-12 col-lg-5">
                    <TestimonialCard {...slide.attributes} short />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
