import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Modal.module.scss';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import { useRouter } from 'next/router';

export default function Modal({ children, open, toggleOpen }) {
  const [animation, setAnimation] = useState(null);
  const modalElement = useRef(null);
  const lenis = useLenis();
  const router = useRouter();

  /*** create and set animation ***/
  useEffect(() => {
    const ani = modalElement.current.animate(
      { opacity: [0, 1] },
      {
        duration: 350,
        easing: 'ease',
        fill: 'forwards',
      })

    ani.onfinish = handleFinish;
    setAnimation(ani);
  }, []);

  const handleCLose = useCallback(e => {
    if (e.key === 'Escape' || e.type === 'close-modal') {
      animation.reverse();
    }
  }, [animation]);

  useEffect(() => {
    if (animation && animation.startTime) {
      if (open) {
        lenis.stop();
        modalElement.current.style.display = 'flex';
        document.addEventListener('keydown', handleCLose);
        document.addEventListener('close-modal', handleCLose);
        document.documentElement.classList.add('no-scroll');
        animation.play();
      } else {
        lenis?.start();
        document.removeEventListener('keydown', handleCLose);
        document.removeEventListener('close-modal', handleCLose);
        animation.reverse();
      }
    }
  }, [open, lenis, animation]);

  function handleFinish(playback) {
    if (playback.currentTime === 0) {
      router.replace(router.pathname, router.pathname, { scroll: false });
      lenis?.start();
      modalElement.current.scrollTop = 0;
      modalElement.current.style.display = 'none';
      playback.currentTarget.playbackRate = 1;
      document.documentElement.classList.remove('no-scroll');
    }
  }

  return (
    <div ref={modalElement} className={styles.modal} role="dialog">
      <Lenis className="lenis lenis-smooth" style={{ overflowY: 'auto', width: '100%' }}>
        <div className={styles.modalContent}>
          {children}
        </div>
      </Lenis>
    </div>
  )
}