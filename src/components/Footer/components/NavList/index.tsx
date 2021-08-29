import React, { ReactElement } from 'react';

import Link from '@/components/Link';

import styles from './NavList.module.css';

type NavListItem = {
  to: string;
  text: string;
};

type NavListProps = {
  listTitle: string;
  listItems: NavListItem[];
};

const NavList = ({ listTitle, listItems }: NavListProps): ReactElement => (
  <div className={styles.footerNavList}>
    <h5 className={styles.navListTitle}>{listTitle}</h5>
    {listItems.map(({ to, text }) => (
      <li key={text}>
        <Link href={to}>{text}</Link>
      </li>
    ))}
  </div>
);

export default NavList;
