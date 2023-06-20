import styles from './Hero.module.scss';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Prev from 'public/images/icons/ui/arrow-left.svg';
import Next from 'public/images/icons/ui/arrow-right.svg';

export default function Hero({ content }) {

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
  ]

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6">
            <Swiper
              modules={[Autoplay, Navigation, /* Pagination */ EffectFade]}
              effect="fade"
              noSwiping
              spaceBetween="auto"
              speed={1200}
              onTransitionEnd={self => self.params.speed = 1200}
              onTouchStart={self => self.params.speed = 300}
              /* pagination={{
                enabled: true,
                type: 'fraction',
              }} */
              navigation={{prevEl: '.prev', nextEl: '.next'}}
              loop
              autoplay={{
                delay: 2100,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
            >
              {
                slides.map((slide, index) => (
                  <SwiperSlide key={index} className="col-12 col-lg-6">
                    <div className={styles.slide}>
                      <Image src={slide.image} fill alt="" />
                      <div className={styles.infos}>
                        <h2>{slide.name}</h2>
                        <p>{slide.services}</p>
                      </div>
                      <div className={styles.controls}>
                        <div className="prev">
                          <Prev />
                        </div>
                        <div className="next">
                          <Next />
                        </div>
                      </div>
                    </div>
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
