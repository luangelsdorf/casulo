import styles from './TestimonialCard.module.scss';
import Prev from 'public/images/icons/ui/arrow-left.svg';
import Next from 'public/images/icons/ui/arrow-right.svg';
import Img from '../Img';
import Link from 'next/link';

export default function TestimonialCard({ photo, name, slug, services, short, sizes }) {

  return (
    <Link scroll={false} href={`?dog=${slug}`} as={`/cases/${slug}`} className={`wrapper ${styles.slide}${short ? ' ' + styles.short : ''}`}>
      <Img {...photo} sizes={sizes} fill priority={short ? undefined : true} />
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
    </Link>
  )
}
