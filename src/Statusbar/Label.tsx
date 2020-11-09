import React from 'react';
import { cls } from '../cls';

import styles from './Label.module.scss';

export interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ className, children }) => {
  return <div className={cls(styles.label, className)}>{children}</div>;
};
