import Link from 'next/link';
import styles from './Cookies.module.scss';
import { useEffect, useState } from 'react';

export default function Cookies() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!localStorage.casuloCookies) {
      setShowPopup(true);
    }
  }, []);

  function handleClick() {
    setShowPopup(false);
    localStorage.setItem('casuloCookies', true);
  }

  return (
    <div className={styles.wrapper} style={{ display: showPopup ? 'block' : 'none' }}>
      <div className="col-12 col-lg-6 col-xl-5 mx-auto">
        <div className={styles.content}>
          <p>Utilizamos cookies e outras tecnologias para melhorar sua
            experiência no nosso site. Ao continuar navegando você
            estará de acordo com a nossa <Link className="p-0" href="/politica-de-privacidade">Política de Privacidade</Link>.
          </p>
          <button className="btn small" onClick={handleClick}>Concordo</button>
        </div>
      </div>
    </div>
  )
}