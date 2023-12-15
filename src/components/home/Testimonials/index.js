import TestimonialCard from 'src/components/common/TestimonialCard';
import styles from './Testimonials.module.scss';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Prev from 'public/images/icons/ui/arrow-left.svg';
import Next from 'public/images/icons/ui/arrow-right.svg';
import { getSizesString } from 'src/utils/images';
import Case from 'src/components/cases/Case';
import { useRouter } from 'next/router';
import Modal from 'src/components/common/Modal';

export default function Testimonials({ content, cases }) {

  const cardGrid = 'col-12 col-lg-5 col-xxl-4';
  const cardSizes = getSizesString(cardGrid);

  const router = useRouter();

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row flex-lg-nowrap">
          <div className={cardGrid}>
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
              className={`${cardGrid} m-0`}
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
              disableOnInteraction: true,
            }} */
            >
              {
                cases.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard {...slide.attributes} short sizes={cardSizes} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            {
              (router.query.dog && router.query.short === 'true') && (
                <Modal open={(router.query.dog && router.query.short === 'true')} toggleOpen={() => {
                  console.log('testimonials');
                  
                }}>
                  {
                    (router.query.dog && router.query.short === 'true') && (
                      <Case {...(cases.filter(dog => dog.attributes.slug === router.query.dog)[0].attributes)} />
                    )
                  }
                </Modal>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
