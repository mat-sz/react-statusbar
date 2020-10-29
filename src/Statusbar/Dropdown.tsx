import React, { useCallback, useEffect, useState } from 'react';

import styles from './Dropdown.module.scss';
import buttonStyles from './Button.module.scss';
import { className } from '../className';

export interface DropdownOption {
  key: React.ReactText;
  type?: 'separator' | 'button';
  label?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface DropdownProps {
  className?: string;
  options: DropdownOption[];
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ children, options }) => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);

  useEffect(() => {
    window.addEventListener('mousedown', close);
    window.addEventListener('touchstart', close);

    return () => {
      window.removeEventListener('mousedown', close);
      window.removeEventListener('touchstart', close);
    };
  }, [close]);

  return (
    <button
      onClick={toggle}
      className={className(buttonStyles.button, styles.button, {
        [buttonStyles.active]: open
      })}
    >
      {children}
      <div
        className={className(styles.dropdown, {
          [styles.open]: open
        })}
      >
        {options.map(option => {
          if (option.type === 'separator') {
            return <div className={styles.separator} key={option.key}></div>;
          }

          return (
            <button
              className={className(buttonStyles.button, styles.option)}
              key={option.key}
              onClick={option.onClick}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </button>
  );
};
