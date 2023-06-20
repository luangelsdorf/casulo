import Link from 'next/link';
import React from 'react';
import Open from 'public/images/icons/open.svg';
import Close from 'public/images/icons/close.svg';
import { useRouter } from 'next/router';

export default function Button({
  children,
  link = false,
  type = 'button',
  floating = false,
  btnElement = false,
  divElement = false,
  nativeLink = false,
  href = '#',
  className,
  LeftIcon,
  RightIcon,
  ...otherProps
}) {

  const router = useRouter();
  let prefix = '';
  if (router.query.referrer) prefix = '/' + router.query.referrer;


  const Children = () => (
    <div>
      {LeftIcon && <LeftIcon />}
      {
        children && <span>{children}</span>
      }
      {
        floating && (<>
          <Open />
          <Close />
        </>)
      }
      {RightIcon && <RightIcon />}
    </div>
  );

  const baseProps = {
    className: `${link ? '' : 'btn'} ${floating ? 'floating-btn' : ''} ${className ? ' ' + className : ''}`,
  };

  if (btnElement) {
    return (
      <button {...baseProps} type={type} {...otherProps}>
        <Children />
      </button>
    )
  }

  else if (divElement) {
    return (
      <div {...baseProps} role="link" {...otherProps}>
        <Children />
      </div>
    )
  }

  else if (nativeLink) {
    return (
      <a {...baseProps} href={href} {...otherProps}>
        <Children />
      </a>
    )
  }

  else {
    prefix + href
    return (
      <Link {...baseProps} href={prefix + href} {...otherProps}>
        <Children />
      </Link>
    )
  }
}