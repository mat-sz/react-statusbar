import React from 'react';
import styles from './Statusbar.module.scss';

export interface StatusbarProps {
  children: React.ReactNode;
  theme: 'dark' | 'light';
}

export const Statusbar: React.FC<StatusbarProps> = ({
  children,
  theme = 'dark'
}) => {
  return (
    <div
      className={
        styles.statusbar + ' ' + (theme === 'dark' ? styles.dark : styles.light)
      }
    >
      {children}
    </div>
  );
};
