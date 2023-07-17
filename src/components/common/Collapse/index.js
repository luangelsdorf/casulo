import styles from './Collapse.module.scss';

const Title = ({ children }) => <summary>{children}</summary>;
const Content = ({ children }) => <div className="content">{children}</div>;

export function Collapse({ children, className, open = false, ...other }) {

  const title = children.find(({ type }) => type.toString() === Title.toString()).props.children;
  const content = children.find(({ type }) => type.toString() === Content.toString()).props.children;

  return (
    <details open={open} className={`${className ? className + ' ' : ''}${styles.collapse}`} onClick={handleClick} {...other}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </details>
  )
}

function handleClick(e) {
  e.preventDefault();
  let details = e.currentTarget;
  let detailsContent = details.querySelector('.content');

  if (details.open) {
    detailsContent.animate(
      {
        height: [`${detailsContent.scrollHeight}px`, 0],
      },
      {
        duration: 400,
        easing: 'ease',
      }
    ).finished.then(() => details.open = false);
  }

  else {
    details.open = true;
    detailsContent.animate(
      {
        height: [0, `${detailsContent.scrollHeight}px`],
      },
      {
        duration: 400,
        easing: 'ease',
      }
    );
  }
}

Collapse.Title = Title;
Collapse.Content = Content;