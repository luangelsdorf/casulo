import styles from './Hero.module.scss';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.textContent}>
          <h1>Título do Blog</h1>
          <div className="col-12 col-lg-6 mx-auto">
            <p>{'Uma breve descrição apresentando seu blog para que \nos visitantes saibam que tipo de postagens \nencontrarão aqui.'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
