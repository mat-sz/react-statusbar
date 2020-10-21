import React, { useMemo } from 'react';
import styles from './index.module.scss';
import { Item } from './Item';

export { Item };

export interface StatusbarTheme {
  primaryColor: string;
  backgroundColor: string;
}

export interface StatusbarProps {
  children: typeof Item | typeof Item[];
  theme?: 'dark' | 'light' | StatusbarTheme;
  className?: string;
}

export const Statusbar: React.FC<StatusbarProps> = ({
  children,
  className,
  theme = 'dark'
}) => {
  const style = useMemo<any>(() => {
    switch (theme) {
      case 'dark':
        return {
          '--primary-color': '#eee',
          '--background-color': '#333'
        };
      case 'light':
        return {
          '--primary-color': '#111',
          '--background-color': '#ddd'
        };
      default:
        return {
          '--primary-color': theme.primaryColor,
          '--background-color': theme.backgroundColor
        };
    }
  }, [theme]);

  return (
    <div
      className={styles.statusbar + ' ' + (className ? ' ' + className : '')}
      style={style}
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
