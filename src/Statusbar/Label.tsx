import React from 'react';

export interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
