import Image from 'next/image';
import styles from './TestimonialCard.module.scss';
import Prev from 'public/images/icons/ui/arrow-left.svg';
import Next from 'public/images/icons/ui/arrow-right.svg';

export default function TestimonialCard({ image, name, services, short }) {
  return (
    <div className={styles.slide}>
      <Image src={image} fill alt="" />
      <div className={styles.infos}>
        <h2>{name}</h2>
        <p>{services}</p>
      </div>
      <div className={styles.controls}>
        <div className="prev">
          <Prev />
        </div>
        <div className="next">
          <Next />
        </div>
      </div>
    </div>
  )
}
