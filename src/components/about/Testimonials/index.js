import TestimonialCard from 'src/components/common/TestimonialCard';
import styles from './Testimonials.module.scss';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Case from 'src/components/cases/Case';
import Modal from 'src/components/common/Modal';
import { useRouter } from 'next/router';

export default function Testimonials({ content, cases }) {

  const router = useRouter();

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <p className="overline">{content.headline.overline}</p>
              <h2>{content.headline.title}</h2>
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
              disableOnInteraction: true,
            }}
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

        <Modal open={!!router.query.dog} toggleOpen={() => router.replace(router.pathname, router.asPath, { scroll: false })}>
          {
            router.query.dog && (
              <Case {...(cases.filter(dog => dog.attributes.slug === router.query.dog)[0].attributes)} />
            )
          }
        </Modal>
      </div>
    </div>
  )
}
