import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      {...props}
      className={styles.button + ' ' + (props.className ?? '')}
    />
  );
};
