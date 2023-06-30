import styles from './Purpose.module.scss';

export default function Purpose({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <h2>Nosso Propósito</h2>
            </header>
            <div className={styles.items}>
              <article>
                <h3>Missão</h3>
                <p>{'Descrição sucinta dos \nnorteadores estratégicos.'}</p>
              </article>
              <article>
                <h3>Visão</h3>
                <p>{'Descrição sucinta dos \nnorteadores estratégicos.'}</p>
              </article>
              <article>
                <h3>Valores</h3>
                <p>{'Descrição sucinta dos \nnorteadores estratégicos.'}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
