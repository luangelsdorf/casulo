import Button from 'src/components/common/Button';
import styles from './Content.module.scss';
import Logo from 'public/images/brand/vertical-dark.svg';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import { apiURL } from 'src/utils/env';
import Image from 'next/image';

export default function Content({ links, cta }) {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <div className={styles.inner}>
              <Logo />
              <div className={styles.buttons}>
                {
                  links.map(link => (
                    <a key={link.id} href={link.url} className="btn lg" target="_blank">
                      {link.icon.data && <Image width={24} height={24} src={apiURL + link.icon.data.attributes.url} />}
                      <span>{link.title}</span>
                    </a>
                  ))
                }
              </div>
              <div className={styles.cta}>
                <h2>{cta.title}</h2>
                <p>{cta.text}</p>
                <Button href={cta.button.url} RightIcon={Arrow} className="sm folha inverted">Agende uma Consulta</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{margin: '48px 0'}}>
        <small>Todos os Direitos Reservados © 2023</small>
      </footer>
    </div>
  )
}
