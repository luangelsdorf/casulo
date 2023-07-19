import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Award from 'public/images/icons/ui/award.svg';
import LogoType from 'public/images/brand/horizontal-dark.svg';
import Link from 'next/link';
import { useEffect } from 'react';
import { Collapse } from 'src/components/common/Collapse';

export default function Header({ home }) {

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

  const Navigation = ({ ...props }) => (
    <ul className={styles.links} {...props}>
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
  )

  return (
    <header className={`${styles.header}${home ? ' ' + styles.home : ''}`}>
      <div className="container">
        <Link href="/" className={styles.logo}>
          <LogoType />
        </Link>

        <Navigation data-desktop />

        <Button className="d-none d-lg-inline-flex" LeftIcon={Award}>Avaliação</Button>
        <Collapse className="d-block d-lg-none">
          <Collapse.Title>
            <Button btnElement>
              <span style={{ display: 'inline-block', rotate: '90deg' }}>|||</span>
            </Button>
          </Collapse.Title>
          <Collapse.Content>
            <Navigation />
          </Collapse.Content>
        </Collapse>
      </div>
    </header>
  )
}
