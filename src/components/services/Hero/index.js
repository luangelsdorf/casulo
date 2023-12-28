import Img from 'src/components/common/Img';
import styles from './Hero.module.scss';
import Benefits from './Benefits';
import Button from 'src/components/common/Button';
import Calendar from 'public/images/icons/ui/calendar.svg';

export default function Hero({ service, content }) {
  return (
    <div className={`${styles.section} ${styles[service]}`}>
      <div className="container">
        <div className={styles.hero}>
          <div className="row">
            <div className="col-12 col-lg-5 offset-lg-1">
              <div className={styles.textContent}>
                <h1>{content.title}</h1>
                <p>{content.text}</p>
                <div className={styles.tags}>
                  {
                    content.extraInfo.map((info, i) => (
                      <div key={i}>
                        {info.icon.data && <Img {...info.icon} />}
                        <p>{info.text}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 offset-lg-1" style={{ position: 'relative' }}>
              <div className={styles.benefitsWrapper}>
                <Benefits service={service} content={{...content.benefits, offer: content.offer}} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className={styles.detailsText}>
                <h2>{content.details.title}</h2>
                <p>{content.details.text}</p>
                <Button LeftIcon={Calendar} href={content.details.button.url}>{content.details.button.text}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
