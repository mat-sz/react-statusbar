import React, { useCallback, useEffect, useState } from 'react';

import styles from './Dropdown.module.scss';
import { Button } from './Button';

export interface DropdownOption {
  key: string;
  label: string;
}

export interface DropdownProps {
  className?: string;
  options: DropdownOption[];
  label: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = label => {
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
    <>
      <Button
        onMouseDown={cancelEvent}
        onTouchStart={cancelEvent}
        onClick={toggle}
      >
        {label}
      </Button>
      <div
        onMouseDown={cancelEvent}
        onTouchStart={cancelEvent}
        className={styles.dropdown + ' ' + (open ? styles.open : '')}
      ></div>
    </>
  );
};
