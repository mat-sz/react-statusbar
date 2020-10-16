import React from 'react';
import styles from './index.module.scss';
import { Item } from './Item';

export { Item };

export interface StatusbarProps {
  children: typeof Item | typeof Item[];
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
      <div className={styles.items}>
        {Array.isArray(children)
          ? children.filter(child => (child as any).props?.align !== 'right')
          : children}
      </div>
      <div className={styles.items}>
        {Array.isArray(children)
          ? children.filter(child => (child as any).props?.align === 'right')
          : null}
      </div>
    </div>
  );
};
