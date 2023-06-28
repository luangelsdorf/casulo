import TestimonialCard from 'src/components/common/TestimonialCard';
import styles from './Testimonials.module.scss';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Prev from 'public/images/icons/ui/arrow-left.svg';
import Next from 'public/images/icons/ui/arrow-right.svg';

export default function Testimonials({ content }) {
  const slides = [
    {
      image: '/images/hero/dog1.jpg',
      name: 'Simba',
      services: 'Adestramento | Comportamental',
    },
    {
      image: '/images/hero/dog2.jpg',
      name: 'Zeca',
      services: 'Hotel Canino',
    },
    {
      image: '/images/hero/dog3.jpg',
      name: 'Nome do Dog',
      services: 'Serviços Prestados',
    },
  ];

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row flex-nowrap">
          <div className="col-12 col-lg-5">
            <header className={styles.textContent}>
              <p className="overline">Depoimentos</p>
              <h2>Histórias de Transformação</h2>
              <p>Descubra como a Casulo tem ajudado cães e seus tutores a alcançarem uma relação equilibrada e harmoniosa.</p>
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
                slides.map((slide, index) => (
                  <SwiperSlide key={index} className="col-12 col-lg-5">
                    <TestimonialCard {...slide} short />
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
