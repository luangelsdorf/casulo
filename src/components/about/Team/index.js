import Img from 'src/components/common/Img';
import styles from './Team.module.scss';
import { getSizesString } from 'src/utils/images';

export default function Team({ content }) {

  function handleClick(e) {
    e.target.parentElement.parentElement.classList.toggle('expanded');
  }

  return (
    <div className={styles.section}>
      <header style={{ textAlign: 'center' }}>
        <p className="overline">{content.headline.overline}</p>
        <h2>{content.headline.title}</h2>
      </header>
      <div className="container">
        <div className="row justify-content-center gy-5">
          {
            content.members.map((member, i) => {
              let splitted = member.text.split('\n');
              let firstPart = splitted.shift();
              return (
                <div key={i} className="col-12 col-lg-6 col-xl-5">
                  <div className={styles.photo}>
                    <Img sizes={getSizesString('col-12 col-lg-5')} {...member.icon} />
                    <div className={styles.text}>
                      <h3>{member.title}</h3>
                      <p className={styles.subtitle}>{member.subtitle}</p>
                      <p>
                        {firstPart}
                      </p>
                      <p id={`collapse-${member.id}`} className="collapse">
                        {splitted.join('\n')}
                      </p>
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${member.id}`}
                        role="button"
                        onClick={handleClick}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}
