import Button from 'src/components/common/Button';
import styles from './AboutUs.module.scss';
import Heart from 'public/images/icons/ui/heart.svg';

export default function AboutUs({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <header className={styles.headline}>
              <p className="overline light">Quem Somos</p>
              <h2>Conheça a Casulo e nossa Dedicação aos Animais</h2>
              <Button className="inverted" LeftIcon={Heart}>Conheça mais</Button>
            </header>
          </div>

          <div className="col-12 offset-lg-1 col-lg-5">
            <div className={styles.textContent}>
              {
                `
                A Casulo nasceu do anseio por criar uma conexão mais profunda entre os seres humanos e os animais.
                \n
                Nossa equipe apaixonada e dedicada está comprometida em oferecer um ambiente acolhedor e seguro, onde a confiança é cultivada e a transformação é alcançada.
                `
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
