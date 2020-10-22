import React, { ReactNode, useMemo } from 'react';

import styles from './index.module.scss';
export { Button } from './Button';

const defaultFontFamily = "'Courier New', Courier, monospace";

export interface StatusbarTheme {
  primaryColor: string;
  backgroundColor: string;
  fontFamily?: string;
}

export interface StatusbarProps {
  theme?: 'dark' | 'light' | StatusbarTheme;
  height?: string;
  className?: string;
  left?: ReactNode;
  right?: ReactNode;
}

export const Statusbar: React.FC<StatusbarProps> = ({
  left,
  right,
  height = '30px',
  className,
  theme = 'dark'
}) => {
  const style = useMemo<any>(() => {
    const styles: any = {
      height
    };

    switch (theme) {
      case 'dark':
        return {
          ...styles,
          '--statusbar-primary-color': '#eee',
          '--statusbar-background-color': '#333',
          '--statusbar-font-family': defaultFontFamily
        };
      case 'light':
        return {
          ...styles,
          '--statusbar-primary-color': '#111',
          '--statusbar-background-color': '#ddd',
          '--statusbar-font-family': defaultFontFamily
        };
      default:
        return {
          ...styles,
          '--statusbar-primary-color': theme.primaryColor,
          '--statusbar-background-color': theme.backgroundColor,
          '--statusbar-font-family': theme.fontFamily ?? defaultFontFamily
        };
    }
  }, [theme, height]);

  return (
    <div className={styles.statusbar + ' ' + (className ?? '')} style={style}>
      <div className={styles.items}>{left}</div>
      <div className={styles.items}>{right}</div>
    </div>
  );
};
