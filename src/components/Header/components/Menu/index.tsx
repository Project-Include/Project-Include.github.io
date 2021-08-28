import React, { useState } from 'react';

import Link from '@/components/Link';
import Button from '@/components/Button';
import { HamburgerMenuButton } from './components';

import styles from './Menu.module.css';

const Menu = (): JSX.Element => {
  const [isMobileMenuOpen, toggleMobileMenuOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <HamburgerMenuButton
        onClick={(): void =>
          toggleMobileMenuOpen((prevMenuOpenState) => !prevMenuOpenState)
        }
      />
      <ul
        className={
          isMobileMenuOpen ? styles.showMobileMenu : styles.hideMobileMenu
        }
      >
        <li>
          <Link href="/programs">Programs</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/volunteer">Volunteer</Link>
        </li>
        <li>
          <Button>Register</Button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
