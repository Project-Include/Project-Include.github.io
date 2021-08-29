import React from 'react';

import { IconType } from 'react-icons';

import Link from '@/components/Link';

import styles from './SocialMediaLink.module.css';

type Props = {
  SocialMediaIcon: IconType;
  href: string;
};

const SocialMediaLink: React.FC<Props> = ({
  href,
  SocialMediaIcon,
}): JSX.Element => (
  <Link href={href}>
    <div className="d-flex align-items-center">
      <div className={styles.icon}>
        <SocialMediaIcon />
      </div>
    </div>
  </Link>
);

export default SocialMediaLink;
