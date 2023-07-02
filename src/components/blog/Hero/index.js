import styles from './Hero.module.scss';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.textContent}>
          <h1>{content.topic.title}</h1>
          <div className="col-12 col-lg-6 mx-auto">
            <p>{content.topic.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
