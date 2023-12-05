import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Award from 'public/images/icons/ui/award.svg';
import LogoType from 'public/images/brand/horizontal-dark.svg';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { Collapse } from 'src/components/common/Collapse';
import Caret from 'public/images/icons/ui/caret.svg';
import Adestramento from 'public/images/icons/Adestramento.svg';
import Consultoria from 'public/images/icons/Consultoria.svg';
import Creche from 'public/images/icons/Creche.svg';
import Hotel from 'public/images/icons/Hotel.svg';
import X from 'public/images/icons/ui/x.svg';
import Hamburger from 'public/images/icons/ui/menu.svg';
import { LayoutContext } from 'src/utils/contexts';

export default function Header({ home }) {

  useEffect(() => {
    if (matchMedia('(max-width: 576px)').matches) {
      document.querySelector(`.${styles.home}`)?.classList.add('active');
      return;
    }

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

  const data = useContext(LayoutContext);

  const Navigation = ({ ...props }) => (
    <ul className={styles.links} {...props}>
      <li>
        <Button href="/" link>Início</Button>
      </li>
      <li>
        <Button href="/sobre-nos" link>Sobre Nós</Button>
      </li>
      <li data-dd-trigger>
        <div className={styles.dropdown}>
          <div>
            {
              services.map((service, index) => (
                <DropDownCard {...service} key={index} />
              ))
            }
          </div>
        </div>
        <Button link onClick={e => e.preventDefault()} RightIcon={Caret}>Serviços</Button>
      </li>
      <Collapse>
        <Collapse.Title>
          <Button link btnElement RightIcon={Caret}>Serviços</Button>
        </Collapse.Title>
        <Collapse.Content>
          <ul>
            {
              services.map((service, index) => (
                <li key={index}>
                  <Button link href={service.href}>{service.title}</Button>
                </li>
              ))
            }
          </ul>
        </Collapse.Content>
      </Collapse>
      <li>
        <Button href="/cases" link>Cases de Sucesso</Button>
      </li>
      <li>
        <Button href="/blog" link>Blog</Button>
      </li>
      <li className="d-inline-flex d-lg-none">
        <Button href={`https://wa.me/${data.info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de marcar uma avaliação.`} LeftIcon={Award}>Avaliação</Button>
      </li>
    </ul>
  );

  const services = [
    {
      Icon: Adestramento,
      title: 'Adestramento',
      text: data.serviceSummaries.training,
      href: '/servicos/adestramento',
    },
    {
      Icon: Consultoria,
      title: 'Consultoria',
      text: data.serviceSummaries.consultancy,
      href: '/servicos/consultoria',
    },
    {
      Icon: Creche,
      title: 'Creche Educativa',
      text: data.serviceSummaries.nursery,
      href: '/servicos/creche-educativa',
    },
    {
      Icon: Hotel,
      title: 'Hotel Canino',
      text: data.serviceSummaries.hotel,
      href: '/servicos/hotel-canino',
    },
  ];

  const DropDownCard = ({ Icon, title, text, href }) => (
    <div className={styles.dropdownItem}>
      <Link className="wrapper" href={href}>
        <Icon />
        <div>
          <span>{title}</span>
          <span>{text}</span>
        </div>
      </Link>
    </div>
  );

  return (
    <header className={`${styles.header}${home ? (' ' + styles.home) : ''}`}>
      <div className="container">
        <Link href="/" className={styles.logo}>
          <LogoType />
        </Link>

        <Navigation data-desktop />

        <Button href={`https://wa.me/${data.info.whatsapp}?text=Olá, vim pelo site de vocês e gostaria de marcar uma avaliação.`} className="d-none d-lg-inline-flex" LeftIcon={Award}>Avaliação</Button>
        <Collapse className="d-block d-lg-none">
          <Collapse.Title>
            <Button onClick={e => e.currentTarget.classList.toggle(styles.active)} btnElement title="Menu">
              <Hamburger />
              <X />
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
