import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import Whats from 'public/images/icons/ui/whatsapp.svg';
import Image from 'next/image';
import { useEffect } from 'react';
import { getSizesString } from 'src/utils/images';

export default function CallToAction({ content, info }) {

  useEffect(() => {
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
          entry.target.querySelector('.btn').classList.add('inverted');
        } else {
          entry.target.classList.remove(styles.active);
          entry.target.querySelector('.btn').classList.remove('inverted');
        }
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '0% 0% -100% 0%' });
    const targets = document.querySelectorAll(`.${styles.section}`);
    targets.forEach(target => observer.observe(target));

    return () => targets.forEach(target => observer.unobserve(target));
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.cta}>
          <Image src="/images/home/dog.png" fill sizes={getSizesString('col-12 col-md-8')} alt="" />
          <div className={styles.textContent}>
            <h2>{content.text.title}</h2>
            <p>{content.text.text}</p>
            <Button LeftIcon={Whats} href={`https://wa.me/${info.whatsapp}`} target="_blank">Fale Conosco</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
