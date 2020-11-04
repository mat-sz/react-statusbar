import React from 'react';
import { cls } from '../cls';

import styles from './Button.module.scss';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

export const Button: React.FC<ButtonProps> = props => {
  return <button {...props} className={cls(styles.button, props.className)} />;
};
