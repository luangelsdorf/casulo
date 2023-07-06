import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import Whats from 'public/images/icons/ui/whatsapp.svg';
import Image from 'next/image';
import { useEffect } from 'react';

export default function CallToAction({ content, info }) {

  useEffect(() => {
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add(styles.active);
          entry.target.querySelector('.btn').classList.add('inverted');
        } else {
          entry.target.classList.remove(styles.active);
          entry.target.querySelector('.btn').classList.remove('inverted');
        }
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '-20% 0% -20% 0%', threshold: 0.5 });
    const targets = document.querySelectorAll(`.${styles.section}`);
    targets.forEach(target => observer.observe(target));

    return () => targets.forEach(target => observer.unobserve(target));
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.cta}>
          <Image src="https://casulo.pet/strapi/uploads/dog_eb67cdb9f6.png" alt="" fill />
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
