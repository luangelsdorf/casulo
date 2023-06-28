import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import Whats from 'public/images/icons/ui/whatsapp.svg';

export default function CallToAction({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.cta}>
          <img src="https://casulo.pet/strapi/uploads/dog_eb67cdb9f6.png" alt="" />
          <div className={styles.textContent}>
            <h2>{'Abrace a \nTransformação'}</h2>
            <p>{'Transforme a vida do seu cão. \nAgende uma consulta hoje mesmo!'}</p>
            <Button LeftIcon={Whats}>Fale Conosco</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
