import styles from './Hero.module.scss';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from 'src/components/common/TestimonialCard';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Calendar from 'public/images/icons/ui/calendar.svg';
import LogoType from 'public/images/brand/horizontal-dark.svg';
import Link from 'next/link';

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
      <div className="container" style={{ position: 'relative' }}>
        <div className={styles.upperHeader}>
          <Link href="#" className="link-image">
            <LogoType />
          </Link>
          <Button link>Serviços</Button>
          <Button link>Quem Somos</Button>
          <Button LeftIcon={Calendar}>Marque uma Avaliação</Button>
        </div>
        <div className={styles.lowerHeader}>
          <Button link>Adestramento</Button>
          <Button link>Consultoria</Button>
          <Button link>Hotel Canino</Button>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <h1>{'Um Local de \nConfiança'}</h1>
              <p>{'Nosso objetivo é garantir uma maior qualidade de \nvida e bem-estar para os cães e seus donos.'}</p>
              <Button className="folha" RightIcon={Arrow}>Fale Conosco</Button>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
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
              navigation={{ prevEl: '.prev', nextEl: '.next' }}
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
                    <TestimonialCard {...slide} />
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
