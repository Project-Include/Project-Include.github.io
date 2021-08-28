import React from 'react';
import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';
import cx from 'classnames';

import styles from './Button.module.css';

type Props = ButtonProps & {
  onClick?: (e: Event) => void;
};

const Button: React.FC<Props> = ({ children, ...props }): JSX.Element => (
  <BootstrapButton className={cx(styles.button)} {...props}>
    {children}
  </BootstrapButton>
);

export default Button;
