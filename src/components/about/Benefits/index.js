import styles from './Benefits.module.scss';
import Star from 'public/images/icons/ui/star.svg';

export default function Benefits({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <h2>Por que Trabalhar Conosco</h2>
            </header>
          </div>
          <div className="col-12 col-lg-3">
            <article className={styles.benefit}>
              <div>
                <Star />
              </div>
              <h3>Vantagem 01</h3>
              <p>{'Uma breve descrição do \nbenefício / vantagem.'}</p>
            </article>
          </div>
          <div className="col-12 col-lg-3">
            <article className={styles.benefit}>
              <div>
                <Star />
              </div>
              <h3>Vantagem 02</h3>
              <p>{'Uma breve descrição do \nbenefício / vantagem.'}</p>
            </article>
          </div>
          <div className="col-12 col-lg-3">
            <article className={styles.benefit}>
              <div>
                <Star />
              </div>
              <h3>Vantagem 03</h3>
              <p>{'Uma breve descrição do \nbenefício / vantagem.'}</p>
            </article>
          </div>
          <div className="col-12 col-lg-3">
            <article className={styles.benefit}>
              <div>
                <Star />
              </div>
              <h3>Vantagem 04</h3>
              <p>{'Uma breve descrição do \nbenefício / vantagem.'}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
