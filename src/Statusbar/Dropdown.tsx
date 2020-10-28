import React, { useCallback, useEffect, useState } from 'react';

import styles from './Dropdown.module.scss';
import buttonStyles from './Button.module.scss';

export interface DropdownOption {
  key: React.ReactText;
  label: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
  const cancelEvent = (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

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
      onMouseDown={cancelEvent}
      onTouchStart={cancelEvent}
      onClick={toggle}
      className={
        buttonStyles.button +
        ' ' +
        styles.button +
        ' ' +
        (open ? buttonStyles.active : '')
      }
    >
      {children}
      <div
        onMouseDown={cancelEvent}
        onTouchStart={cancelEvent}
        className={styles.dropdown + ' ' + (open ? styles.open : '')}
      >
        {options.map(option => (
          <button
            className={buttonStyles.button + ' ' + styles.option}
            key={option.key}
            onClick={option.onClick}
          >
            {option.label}
          </button>
        ))}
      </div>
    </button>
  );
};
