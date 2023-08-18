import styles from './Spinner.module.scss';

export default function Spinner({ height, width, style, className, ...other }) {
  return (
    <div style={{ height, width, ...style }} className={`${styles.spinner} ${className}`} {...other} />
  )
}
