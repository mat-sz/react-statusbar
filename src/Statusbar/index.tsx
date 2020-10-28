import React, { ReactNode, useMemo } from 'react';
import { className } from '../className';

import styles from './index.module.scss';

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

export const Statusbar: React.FC<StatusbarProps> = props => {
  const { theme = 'dark', height, left, right } = props;

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
    <div className={className(styles.statusbar, props.className)} style={style}>
      <div className={styles.items}>{left}</div>
      <div className={styles.items}>{right}</div>
    </div>
  );
};

export * from './Button';
export * from './Dropdown';
