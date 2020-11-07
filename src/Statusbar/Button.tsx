import React from 'react';
import { cls } from '../cls';

import styles from './Button.module.scss';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = props => {
  return <button {...props} className={cls(styles.button, props.className)} />;
};
