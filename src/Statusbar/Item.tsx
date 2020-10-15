import React from 'react';

export interface ItemProps {
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export const Item: React.FC<ItemProps> = ({ children }) => {
  return <div>{children}</div>;
};
