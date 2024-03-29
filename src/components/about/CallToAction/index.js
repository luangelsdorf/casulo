import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import Whats from 'public/images/icons/ui/whatsapp.svg';
import Image from 'next/image';
import { useContext } from 'react';
import { LayoutContext } from 'src/utils/contexts';

export default function CallToAction({ content, variant = 'about' }) {
  let imageUrl;
  switch (variant) {
    case 'cases':
      imageUrl = '/images/about/dog-cases-cta.png';
      break;
    case 'hotel':
      imageUrl = '/images/about/image-3.png';
      break;
    default:
      imageUrl = '/images/about/dog-2.png';
  }

  const { info } = useContext(LayoutContext);

  return (
    <div className={`${styles.section} ${styles[variant]}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles.content}>
              <div>
                <h2>{content.text.title}</h2>
                <p>{content.text.text}</p>
              </div>
              <Button className={(variant === 'cases') && 'inverted'} LeftIcon={Whats} href={`https://wa.me/${info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre os serviços.`} target="_blank">Fale Conosco</Button>
            </div>
            <Image className={styles[variant]} width={450} height={600} src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
