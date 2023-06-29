import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Award from 'public/images/icons/ui/award.svg';
import LogoType from 'public/images/brand/horizontal-dark.svg';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Header({ content, home }) {

  useEffect(() => {
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelector(`.${styles.home}`)?.classList.remove('active');
        } else {
          document.querySelector(`.${styles.home}`)?.classList.add('active');
        }
      });
    }
  
    const observer = new IntersectionObserver(callback, { rootMargin: '0px' });
    const targets = document.querySelectorAll('#home');
    targets.forEach(target => observer.observe(target));
  
    return () => targets.forEach(target => observer.unobserve(target));
  }, []);

  return (
    <header className={`${styles.header}${home ? ' ' + styles.home : ''}`}>
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
