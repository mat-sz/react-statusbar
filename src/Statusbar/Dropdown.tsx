import React, { useCallback, useEffect, useState } from 'react';

import styles from './Dropdown.module.scss';
import { Button } from './Button';

export interface DropdownOption {
  key: string;
  label: React.ReactNode;
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
    <Button
      onMouseDown={cancelEvent}
      onTouchStart={cancelEvent}
      onClick={toggle}
      className={styles.button}
    >
      {children}
      <div
        onMouseDown={cancelEvent}
        onTouchStart={cancelEvent}
        className={styles.dropdown + ' ' + (open ? styles.open : '')}
      >
        {options.map(option => (
          <button
            className={styles.option}
            key={option.key}
            onMouseDown={cancelEvent}
            onTouchStart={cancelEvent}
            onClick={cancelEvent}
          >
            {option.label}
          </button>
        ))}
      </div>
    </Button>
  );
};
