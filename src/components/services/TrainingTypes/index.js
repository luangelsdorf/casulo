import Button from 'src/components/common/Button';
import styles from './TrainingTypes.module.scss';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import { useContext } from 'react';
import { LayoutContext } from 'src/utils/contexts';

export default function TrainingTypes({ content }) {
  const { info } = useContext(LayoutContext);

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
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor
            speed={800}
            onTransitionEnd={self => self.params.speed = 800}
            onTouchStart={self => self.params.speed = 300}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}

            breakpoints={{
              992: {
                slidesPerView: 2,
              }
            }}
          >
            {
              content.list.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.card}>
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                    <Button RightIcon={Arrow} className="transparent" href={`https://wa.me/${info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre o serviços de Adestramento/${slide.title}.`}>Solicitar Serviço</Button>
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
