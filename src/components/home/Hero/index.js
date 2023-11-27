import styles from './Hero.module.scss';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from 'src/components/common/TestimonialCard';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Calendar from 'public/images/icons/ui/calendar.svg';
import LogoType from 'public/images/brand/horizontal-dark.svg';
import Link from 'next/link';
import { getSizesString } from 'src/utils/images';

export default function Hero({ content, highlights, info }) {

  const cardGrid = 'col-12 col-lg-6';
  const cardSizes = getSizesString(cardGrid);

  return (
    <div className={styles.section}>
      <div className="container" style={{ position: 'relative' }}>
        <div className={styles.upperHeader}>
          <Link href="/" className="link-image">
            <LogoType />
          </Link>
          <Button link href="/sobre-nos">Sobre Nós</Button>
          <Button link href="/servicos/adestramento">Adestramento</Button>
          <Button href={`https://wa.me/${info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de marcar uma avaliação.`} LeftIcon={Calendar}>Marque uma Avaliação</Button>
        </div>
        <div className={styles.lowerHeader}>
          <Button href="/servicos/creche-educativa" link>Creche Educativa</Button>
          <Button href="/servicos/hotel-canino" link>Hotel Canino</Button>
          <Button href="/servicos/consultoria" link>Consultoria</Button>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <h1>{content.topic.title}</h1>
              <p>{content.topic.text}</p>
              <Button href={`https://wa.me/${info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre os serviços.`} className="folha" RightIcon={Arrow}>Fale Conosco</Button>
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
              style={{ overflow: 'hidden' }}
            >
              {
                highlights.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard {...slide.attributes} sizes={cardSizes} />
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
