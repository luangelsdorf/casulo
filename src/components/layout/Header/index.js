import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Award from 'public/images/icons/ui/award.svg';
import LogoType from 'public/images/brand/horizontal-dark.svg';
import Link from 'next/link';

export default function Header({ content }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="/" className={styles.logo}>
          <LogoType />
        </Link>

        <ul className={styles.links}>
          <li>
            <Button link>Serviços</Button>
          </li>
          <li>
            <Button link>Quem Somos</Button>
          </li>
          <li>
            <Button link>Adestramento</Button>
          </li>
          <li>
            <Button link>Consultoria</Button>
          </li>
          <li>
            <Button link>Hotel Canino</Button>
          </li>
        </ul>

        <Button className={styles.button} LeftIcon={Award}>Avaliação</Button>
      </div>
    </header>
  )
}
