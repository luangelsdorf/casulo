import Image from 'next/image';
import styles from './Services.module.scss';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Seal from 'public/images/brand/seal-dark.svg';

export default function Services({ content }) {

  const Card = ({ image }) => (
    <a className={`link-image ${styles.card}`}>
      <img src={image} alt="" />
      <Button divElement RightIcon={Arrow}>Saiba Mais</Button>
    </a>
  );

  return (
    <div className={styles.section}>
      <Seal className={styles.seal} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <article className={styles.training}>
              <div>
                <h2>Adestramento</h2>
                <p>Oferecemos treinamentos personalizados, adaptados às necessidades específicas do seu cão e fortalecer os vínculos entre você e seu pet.</p>
              </div>
              <Card image="https://casulo.pet/strapi/uploads/adestramento_1ca219560f.jpg" />
            </article>
          </div>

          <div className="col-12 col-lg-6">
            <article className={styles.consultancy}>
              <Card image="https://casulo.pet/strapi/uploads/consultoria_dceb5fb71c.jpg" />
              <div>
                <h2>Consultoria</h2>
                <p>Seja para lidar com problemas ou para melhorar a relação com o seu pet, conte com nossa expertise para ajudá-lo a encontrar soluções.</p>
              </div>
            </article>
          </div>

          <div className="col-12">
            <article className={styles.hotel}>
              <img src="https://casulo.pet/strapi/uploads/Adobe_Stock_346122018_e79891e330.png" alt="" />
              <div>
                <h2>Hotel Canino</h2>
                <p>Quando você precisa viajar, oferecemos um Pet Hotel seguro e acolhedor para hospedar seu companheiro canino. Deixe-o conosco e tenha tranquilidade enquanto está fora.</p>
                <Button className="inverted" divElement RightIcon={Arrow}>Saiba Mais</Button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}