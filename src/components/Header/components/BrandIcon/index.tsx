import React, { ReactElement } from 'react';

import Logo from '@/components/Logo';
import Link from '@/components/Link';
import styles from './BrandIcon.module.css';

const BrandIcon = (): ReactElement => (
  <div className={styles.brandIcon}>
    <Link href="/">
      <Logo />
    </Link>
  </div>
);

export default BrandIcon;
