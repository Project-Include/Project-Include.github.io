import React from 'react';

import styles from './HamburgerMenuButton.module.css';

type Props = {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const HamburgerMenuButton: React.FC<Props> = ({ onClick }): JSX.Element => (
  <div
    className={styles.hamburgerMenuButton}
    id="menu-toggle"
    onClick={(event): void => onClick(event)}
    onKeyPress={(event) => event}
    aria-label="Hamburger menu button"
    role="navigation"
  >
    <div>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
  </div>
);

export default HamburgerMenuButton;
