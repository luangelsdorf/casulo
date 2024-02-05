import Button from 'src/components/common/Button';
import styles from './Footer.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Symbol from 'public/images/symbol.svg';
import { useContext } from 'react';
import { LayoutContext } from 'src/utils/contexts';

export default function Footer({ content }) {
  const { info } = useContext(LayoutContext);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className={styles.cta}>
              <h2>{content.callToAction.title}</h2>
              <p>{content.callToAction.text}</p>
              <Button href={`https://wa.me/${info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre os serviços.`} RightIcon={Arrow} className="sm folha inverted">Agende uma Consulta</Button>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.footer}>
              <div className={styles.links}>
                <div className={styles.nav}>
                  {
                    content.firstColumn.map((col, i) => (
                      <ul key={i}>
                        {
                          col.column.map((link, i) => (
                            <li key={i}>
                              <Button link href={link.url}>{link.text}</Button>
                            </li>
                          ))
                        }
                      </ul>
                    ))
                  }
                </div>
                <div className={styles.logo}>
                  <Symbol />
                </div>
              </div>
              <div className={styles.detail}>
                <small>
                  <Button href="/termos-de-uso" link>Termos de Uso</Button>
                  <span className="d-none d-lg-inline">&bull;</span>
                  <Button href="/politica-de-privacidade" link>Política de Privacidade</Button>
                </small>
                <small>
                  Todos os Direitos Reservados © 2023
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
