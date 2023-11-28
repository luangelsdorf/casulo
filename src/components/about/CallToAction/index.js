import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import Whats from 'public/images/icons/ui/whatsapp.svg';
import Image from 'next/image';

export default function CallToAction({ content, info, cases = false }) {
  return (
    <div className={`${styles.section}${cases ? ' ' + styles.cases : ''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles.content}>
              <div>
                <h2>{content.text.title}</h2>
                <p>{content.text.text}</p>
              </div>
              <Button className={cases && 'inverted'} LeftIcon={Whats} href={`https://wa.me/${info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de saber mais sobre os serviços.`} target="_blank">Fale Conosco</Button>
            </div>
            <Image width={450} height={600} src={cases ? '/images/about/dog-cases-cta.png' : '/images/about/dog-2.png'} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
