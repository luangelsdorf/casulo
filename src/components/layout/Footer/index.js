import Button from 'src/components/common/Button';
import styles from './Footer.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Symbol from 'public/images/symbol.svg';

export default function Footer({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className={styles.cta}>
              <h2>{content.callToAction.title}</h2>
              <p>{content.callToAction.text}</p>
              <Button RightIcon={Arrow} className="sm folha inverted">Agende uma Consulta</Button>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.footer}>
              <div className={styles.links}>
                <div className={styles.nav}>
                  <ul>
                    <li><Button link>Cases de Sucesso</Button></li>
                    <li><Button link>Nosso Blog</Button></li>
                    <li><Button link>Sobre Nós</Button></li>
                    <li><Button link>Contatos</Button></li>
                  </ul>
                  <ul>
                    <li><Button link>Guarda</Button></li>
                    <li><Button link>Obediência</Button></li>
                    <li><Button link>Faro</Button></li>
                  </ul>
                  <ul>
                    <li><Button link>Comportamento</Button></li>
                    <li><Button link>Educação Sanitária</Button></li>
                    <li><Button link>Cães de Assistência</Button></li>
                  </ul>
                </div>
                <div className={styles.logo}>
                  <Symbol />
                </div>
              </div>
              <div className={styles.detail}>
                <small>
                  <Button link>Termos de Uso</Button>
                  <span>&bull;</span>
                  <Button link>Política de Privacidade</Button>
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
