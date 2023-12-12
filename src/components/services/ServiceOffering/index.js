import Button from 'src/components/common/Button';
import styles from './ServiceOffering.module.scss';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Img from 'src/components/common/Img';

export default function ServiceOffering({ content }) {

  return (
    <article className={styles.offering}>
      <header>
        <Img {...content.icon} />
        <h3>{content.title}</h3>
      </header>
      <p>{content.text}</p>
      <Button className="transparent sm" RightIcon={Arrow}>Solicitar serviço</Button>
    </article>
  )
}
