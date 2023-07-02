import styles from './Purpose.module.scss';

export default function Purpose({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <h2>{content.title}</h2>
            </header>
            <div className={styles.items}>
              {
                content.items.map((item, index) => (
                  <article key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
