import React, { ReactNode, useMemo } from 'react';

import styles from './Progress.module.scss';
import { cls } from '../cls';

export interface ProgressProps {
  className?: string;
  label?: ReactNode;
  value?: number;
  max?: number;
}

export const Progress: React.FC<ProgressProps> = ({
  className,
  value,
  max,
  label
}) => {
  const percent = useMemo(
    () =>
      typeof value !== 'undefined' && max ? (value / max) * 100 : undefined,
    [value, max]
  );

  return (
    <div className={cls(styles.progress, className)}>
      <div className={styles.bar}>
        <div
          className={cls(styles.fill, {
            [styles.marquee]: typeof percent === 'undefined'
          })}
          style={
            typeof percent !== 'undefined'
              ? { width: percent + '%' }
              : undefined
          }
        ></div>
        {typeof label !== 'undefined' && (
          <div className={styles.label}>{label}</div>
        )}
      </div>
    </div>
  );
};
