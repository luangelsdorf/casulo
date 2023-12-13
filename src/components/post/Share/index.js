import Button from 'src/components/common/Button';
import styles from './Share.module.scss';
import Facebook from 'public/images/icons/ui/facebook.svg';
import WhatsApp from 'public/images/icons/ui/whatsapp.svg';
import Instagram from 'public/images/icons/ui/instagram.svg';
import Share from 'public/images/icons/ui/share.svg';
import ShareUrl from 'share-url';
import { useRouter } from 'next/router';

export default function SharePost({ content }) {
  const router = useRouter();
  const url = `https://casulo.pet/blog/posts/${router.query.slug}`;

  return (
    <div className={styles.share}>
      <h3>Compartilhe esse Post</h3>
      <div>
        <Button target="_blank" href={ShareUrl.facebook({ u: url })} ><Facebook /></Button>
        <Button target="_blank" href={ShareUrl.whatsapp({ text: url })} ><WhatsApp /></Button>
        <Button btnElement onClick={() => navigator.share({ url, title: 'Blog Casulo' })}><Share /></Button>
      </div>
    </div>
  )
}
