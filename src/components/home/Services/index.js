import styles from './Services.module.scss';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Seal from 'public/images/brand/seal-dark.svg';
import Img from 'src/components/common/Img';
import Link from 'next/link';
import { getSizesString } from 'src/utils/images';
import { useRouter } from 'next/router';

export default function Services({ content }) {

  const router = useRouter();

  const Card = ({ image, sizes, href }) => {
    return (
      <Link href={href} className={`wrapper ${styles.card}`}>
        <Img {...image} sizes={sizes} fill alt="" />
        <Button divElement RightIcon={Arrow}>Saiba Mais</Button>
      </Link>
    );
  };

  return (
    <div className={styles.section}>
      <Seal className={styles.seal} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <article className={styles.training}>
              <div>
                <h2>{content.training.title}</h2>
                <p>{content.training.description}</p>
                <Button className="d-lg-none" RightIcon={Arrow} href="/servicos/adestramento">Saiba Mais</Button>
              </div>
              <Card image={content.training.image} sizes={getSizesString('col-12 col-lg-6')} href="/servicos/adestramento" />
            </article>
          </div>

          <div className="col-12 col-lg-6">
            <article className={styles.consultancy}>
              <Card image={content.consultancy.image} sizes={getSizesString('col-12 col-lg-6')} href="/servicos/consultoria" />
              <div>
                <h2>{content.consultancy.title}</h2>
                <p>{content.consultancy.description}</p>
                <Button className="d-lg-none" RightIcon={Arrow} href="/servicos/consultoria">Saiba Mais</Button>
              </div>
            </article>
          </div>

          <div className="col-12">
            <article className={styles.hotel}>
              <Link href="/servicos/hotel-canino" className={`wrapper`}>
                <Img {...content.dogHotel.image} fill alt="" />
              </Link>
              <div>
                <h2>{content.dogHotel.title}</h2>
                <p>{content.dogHotel.description}</p>
                <Button divElement onClick={() => router.push('/servicos/hotel-canino')} className="inverted" RightIcon={Arrow}>Saiba Mais</Button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}