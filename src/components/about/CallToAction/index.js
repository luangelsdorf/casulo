import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import Whats from 'public/images/icons/ui/whatsapp.svg';
import dog from 'public/images/about/dog-2.png';
import Image from 'next/image';

export default function CallToAction({ content, info }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles.content}>
              <div>
                <h2>{content.text.title}</h2>
                <p>{content.text.text}</p>
              </div>
              <Button LeftIcon={Whats} href={`https://wa.me/${info.whatsapp}`} target="_blank">Fale Conosco</Button>
            </div>
            <Image src={dog} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
