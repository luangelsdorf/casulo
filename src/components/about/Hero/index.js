import Button from 'src/components/common/Button';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Image from 'next/image';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <Image src="https://casulo.pet/strapi/uploads/Pastor_Belga_Malinois_3_4ec45fc054.png" fill alt="" />
        <div className="row justify-content-center">
          <div className="co-12 col-lg-8">
            <div className={styles.textContent}>
              <h1>{'Este título chama a \natenção dos visitantes'}</h1>
              <p>Uma breve descrição que apresenta aos visitantes o seu negócio.</p>
              <Button RightIcon={Arrow}>Fale Conosco</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
