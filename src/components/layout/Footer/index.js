import Button from 'src/components/common/Button';
import styles from './Footer.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Symbol from 'public/images/symbol.svg';
import { useContext } from 'react';
import { LayoutContext } from 'src/utils/contexts';

export default function Footer({ content }) {
  const { whatsapp } = useContext(LayoutContext);
  
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className={styles.cta}>
              <h2>{content.callToAction.title}</h2>
              <p>{content.callToAction.text}</p>
              <Button href={`https://wa.me/${whatsapp}?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre os serviços.`} RightIcon={Arrow} className="sm folha inverted">Agende uma Consulta</Button>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.footer}>
              <div className={styles.links}>
                <div className={styles.nav}>
                  <ul>
                    <li><Button href="/cases" link>Cases de Sucesso</Button></li>
                    <li><Button href="/blog" link>Nosso Blog</Button></li>
                    <li><Button href="/sobre-nos" link>Sobre Nós</Button></li>
                    <li><Button href="/#" link>Contatos</Button></li>
                  </ul>
                  <ul>
                    <li><Button href="/servicos/adestramento#tipos-de-adestramento" link>Guarda</Button></li>
                    <li><Button href="/servicos/adestramento#tipos-de-adestramento" link>Obediência</Button></li>
                    <li><Button href="/servicos/adestramento#tipos-de-adestramento" link>Faro</Button></li>
                  </ul>
                  <ul>
                    <li><Button href="/servicos/adestramento#tipos-de-adestramento" link>Comportamento</Button></li>
                    <li><Button href="/servicos/adestramento#tipos-de-adestramento" link>Educação Sanitária</Button></li>
                    <li><Button href="/servicos/adestramento#tipos-de-adestramento" link>Cães de Assistência</Button></li>
                  </ul>
                </div>
                <div className={styles.logo}>
                  <Symbol />
                </div>
              </div>
              <div className={styles.detail}>
                <small>
                  <Button href="/termos-de-uso" link>Termos de Uso</Button>
                  <span>&bull;</span>
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
