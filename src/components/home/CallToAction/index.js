import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import Whats from 'public/images/icons/ui/whatsapp.svg';
import Image from 'next/image';

export default function CallToAction({ content, info }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.cta}>
          <Image src="https://casulo.pet/strapi/uploads/dog_eb67cdb9f6.png" alt="" fill />
          <div className={styles.textContent}>
            <h2>{content.text.title}</h2>
            <p>{content.text.text}</p>
            <Button LeftIcon={Whats} href={`https://wa.me/${info.whatsapp}`} target="_blank">Fale Conosco</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
