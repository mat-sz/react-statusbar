import React from 'react';

import styles from './Dropdown.module.scss';

export interface DropdownOption {
  key: string;
  label: string;
}

export interface DropdownProps {
  className?: string;
  options: DropdownOption[];
  label: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = props => {
  return (
    <button
      {...props}
      className={styles.button + ' ' + (props.className ?? '')}
    />
  );
};
