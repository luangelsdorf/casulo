import { useEffect, useRef } from 'react';
import styles from './FAQ.module.scss';
import Plus from 'public/images/icons/ui/sum.svg';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Button from '../Button';

export default function FAQ({ content }) {
  const faq = useRef(null);

  useEffect(() => {
    require('bootstrap/js/dist/collapse');

    let faqElement = faq.current;

    function handleCollapse(e) {
      if (e.type === 'shown.bs.collapse') {
        e.currentTarget.classList.add(styles.active);
      } else {
        e.currentTarget.classList.remove(styles.active);
      }
    }

    faq.current?.childNodes.forEach(q => {
      q.addEventListener('shown.bs.collapse', handleCollapse);
      q.addEventListener('hidden.bs.collapse', handleCollapse);
    });

    return () => {
      faqElement?.childNodes.forEach(q => {
        q.removeEventListener('shown.bs.collapse', handleCollapse);
        q.removeEventListener('hidden.bs.collapse', handleCollapse);
      });
    }
  }, []);

  const Question = ({ id, title, text }) => (
    <article className={styles.question} data-bs-toggle="collapse" data-bs-target={`#faq-collapse-${id}`}>
      <header>
        <h3>{title}</h3>
        <div className={styles.icon}>
          <Plus />
        </div>
      </header>
      <div className="collapse" id={`faq-collapse-${id}`}>
        <div className={styles.answer}>
          <p>{text}</p>
        </div>
      </div>
    </article>
  )

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div>
              <header className={styles.headline}>
                <h2>{content.title}</h2>
                <Button RightIcon={Arrow} className="folha inverted" href="/faq">Ver todos os FAQs</Button>
              </header>

              <div className={styles.questions} ref={faq}>
                {
                  content.questions.map(q => (
                    <Question {...q} key={q.id} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}