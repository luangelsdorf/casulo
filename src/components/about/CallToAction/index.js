import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import Whats from 'public/images/icons/ui/whatsapp.svg';
import dog from 'public/images/about/dog-2.png';
import Image from 'next/image';

export default function CallToAction({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles.content}>
              <h2>{'Abrace a \ntransformação'}</h2>
              <p>{'Transforme a vida do seu cão. \nAgende uma consulta hoje mesmo!'}</p>
              <Button LeftIcon={Whats}>Fale Conosco</Button>
            </div>
            <Image src={dog} />
          </div>
        </div>
      </div>
    </div>
  )
}
