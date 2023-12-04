import Button from 'src/components/common/Button';
import styles from './TrainingTypes.module.scss';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Arrow from 'public/images/icons/ui/arrow-right.svg';

export default function TrainingTypes({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className={styles.headline}>
              <p className="overline">{content.headline.overline}</p>
              <h2>{content.headline.title}</h2>
            </header>
          </div>
          <Swiper
            className="col-12 col-lg-6 m-0"
            modules={[Autoplay]}
            spaceBetween={24}
            grabCursor
            speed={800}
            onTransitionEnd={self => self.params.speed = 800}
            onTouchStart={self => self.params.speed = 300}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
          >
            {
              content.list.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.card}>
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                    <Button RightIcon={Arrow} className="transparent" href={`https://wa.me/5551999142232?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre o serviços de Adestramento/${slide.title}.`}>Solicitar Serviço</Button>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}
