import styles from './FAQ.module.scss';
import Plus from 'public/images/icons/ui/sum.svg';
import Arrow from 'public/images/icons/ui/arrow-right.svg';
import Button from '../Button';
import { Collapse } from '../Collapse';

const Question = ({ title, text }) => (
  <Collapse className={styles.question}>
    <Collapse.Title>
      <h3>{title}</h3>
      <Plus className={styles.icon} />
    </Collapse.Title>

    <Collapse.Content>
      <div className={styles.answer}>
        <p>{text}</p>
      </div>
    </Collapse.Content>
  </Collapse>
)

const FAQ = ({ content }) => {

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

              <div className={styles.questions}>
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

FAQ.Question = Question;

export default FAQ;