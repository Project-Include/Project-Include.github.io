import React, { ReactElement } from 'react';

import Menu from './components/Menu';
import BrandIcon from './components/BrandIcon';

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
