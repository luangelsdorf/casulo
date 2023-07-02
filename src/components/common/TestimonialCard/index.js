import Image from 'next/image';
import styles from './TestimonialCard.module.scss';
import Prev from 'public/images/icons/ui/arrow-left.svg';
import Next from 'public/images/icons/ui/arrow-right.svg';
import Img from '../Img';

export default function TestimonialCard({ photo, name, services, short }) {
  
  return (
    <div className={`${styles.slide}${short ? ' ' + styles.short : ''}`}>
      <Img {...photo} fill />
      <div className={styles.infos}>
        <h2>{name}</h2>
        <p>{services}</p>
      </div>
      {
        !short && (
          <div className={styles.controls}>
            <div className="prev">
              <Prev />
            </div>
            <div className="next">
              <Next />
            </div>
          </div>
        )
      }
    </div>
  )
}
