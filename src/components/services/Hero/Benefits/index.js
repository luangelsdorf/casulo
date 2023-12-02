import styles from './Benefits.module.scss';
import Check from 'public/images/icons/ui/check-circle.svg';

export default function Benefits({ service, content }) {
  
  return (
    <div className={`${styles.benefits} ${styles[service]}`}>
      <h2>{content.headline.title}</h2>
      {content.headline.text && <p>{content.headline.text}</p>}
      <ul>
        {
          content.items.map((item, i) => (
            <li key={i}>
              <Check />
              <div>
                <h3>{item.title}</h3>
                {item.text && <p>{item.text}</p>}
              </div>
            </li>
          ))
        }
      </ul>
      {content.additionalText && <p>{content.additionalText}</p>}
    </div>
  )
}
