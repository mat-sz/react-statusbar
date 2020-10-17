import React from 'react';

export interface ItemProps {
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const Item: React.FC<ItemProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
