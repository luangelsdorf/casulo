import styles from './Div.module.scss';
import Line from 'public/images/brand/line.svg';

export default function Div({ content }) {
  return (
    <div className={styles.line}>
      <Line />
    </div>
  )
}
