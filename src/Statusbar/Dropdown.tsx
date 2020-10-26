import React, { useCallback, useState } from 'react';

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

  return (
    <>
      <Button onClick={toggle}>{label}</Button>
      <div className={styles.dropdown + ' ' + (open ? styles.open : '')}></div>
    </>
  );
};
