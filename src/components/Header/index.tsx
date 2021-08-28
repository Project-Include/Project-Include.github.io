import React, { ReactElement } from 'react';

import { BrandIcon, Menu } from './components';

import styles from './Header.module.css';

const Header = (): ReactElement => (
  <header className={styles.header}>
    <div className={styles.nav}>
      <BrandIcon />
      <Menu />
    </div>
  </header>
);

export default Header;
