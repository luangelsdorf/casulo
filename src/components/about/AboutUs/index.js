import Image from 'next/image';
import styles from './AboutUs.module.scss';
import Seal from 'public/images/brand/seal-dark.svg';

export default function AboutUs({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.image}>
              <Seal />
              <Image src="https://casulo.pet/strapi/uploads/adestramento_1ca219560f.jpg" fill alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.textContent}>
              <h2>Quem Somos</h2>
              <p>Destaque o propósito do seu negócio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat eget elit tincidunt.</p>
              <p>
                {`
                  A Casulo nasceu do anseio por criar uma conexão mais profunda entre os seres humanos e os animais. 

                  Nossa equipe apaixonada e dedicada está comprometida em oferecer um ambiente acolhedor e seguro, onde a confiança é cultivada e a transformação é alcançada.
                `}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
