import React, { useState } from 'react';

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
  return <Button>{label}</Button>;
};
