import TestimonialCard from 'src/components/common/TestimonialCard';
import styles from './Testimonials.module.scss';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        <div className="row">
          <div className="col-12">
            <header>
              <p className="overline">Depoimentos</p>
              <h2>Histórias de Transformação</h2>
            </header>
          </div>
          <Swiper
            slidesPerView="auto"
            modules={[Autoplay]}
            spaceBetween={24}
            initialSlide={2}
            grabCursor
            loop
            speed={1200}
            onTransitionEnd={self => self.params.speed = 1200}
            onTouchStart={self => self.params.speed = 300}
            autoplay={{
              delay: 800,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
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
  )
}