import React from 'react';
import styles from './index.module.scss';
import { Item } from './Item';

export { Item };

export interface StatusbarProps {
  children: typeof Item | typeof Item[];
  theme?: 'dark' | 'light';
  className?: string;
}

export const Statusbar: React.FC<StatusbarProps> = ({
  children,
  className,
  theme = 'dark'
}) => {
  return (
    <div
      className={
        styles.statusbar +
        ' ' +
        (theme === 'dark' ? styles.dark : styles.light) +
        (className ? ' ' + className : '')
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
