import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={styles.button + ' ' + (className ?? '')}>
      {children}
    </button>
  );
};
