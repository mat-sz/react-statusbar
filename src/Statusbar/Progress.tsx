import React, { useMemo } from 'react';

import styles from './Progress.module.scss';
import { cls } from '../cls';

export interface ProgressProps {
  className?: string;
  label?: string;
  value?: number;
  max?: number;
}

export const Progress: React.FC<ProgressProps> = ({
  className,
  value,
  max
}) => {
  const percent = useMemo(
    () => (value && max ? (value / max) * 100 : undefined),
    [value, max]
  );
  return (
    <div className={cls(styles.progress, className)}>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: percent + '%' }}></div>
      </div>
    </div>
  );
};
