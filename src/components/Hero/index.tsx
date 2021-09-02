import React from 'react';
import Image from 'next/image';

import styles from './Hero.module.css';

type Props = {
  onClick?: (e: Event) => void;
};

const Hero: React.FC<Props> = ({ children, ...props }): JSX.Element => (
  <div className={styles.imageContainer}>
    {children}
    <Image
      src="/HeroImage.svg"
      alt="Code for the future"
      height={100}
      width={1000}
      className={styles.image}
    />
  </div>
);

export default Hero;
