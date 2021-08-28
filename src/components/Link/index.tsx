import React from 'react';
import Link, { LinkProps } from 'next/link';

import styles from './Link.module.css';

type Props = React.HTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    href: string;
  };

const NavLink: React.FC<Props> = ({ href, children }): JSX.Element => (
  <Link href={href}>
    <a className={styles.link}>{children}</a>
  </Link>
);

export default NavLink;
