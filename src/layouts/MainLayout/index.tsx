import React, { ReactNode } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styles from './MainLayout.module.css';

type Props = {
  children: ReactNode | ReactNode[];
};

const MainLayout: React.FC<Props> = ({ children }): JSX.Element => (
  <>
    <Header />
    <div className={styles.childrenContainer}>{children}</div>
    <Footer />
  </>
);

export default MainLayout;
