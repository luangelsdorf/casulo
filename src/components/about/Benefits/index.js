import Img from 'src/components/common/Img';
import styles from './Benefits.module.scss';

export default function Benefits({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-5 gy-lg-0">
          <div className="col-12">
            <header>
              <h2>{content.title}</h2>
            </header>
          </div>

          {
            content.items.map((item, index) => (
              <div className="col-12 col-lg-3" key={index}>
                <article className={styles.benefit}>
                  <div>
                    <Img {...item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
