import React, { useCallback, useEffect, useState } from 'react';

import styles from './Dropdown.module.scss';
import buttonStyles from './Button.module.scss';
import { cls } from '../cls';

export interface DropdownOption {
  key: React.ReactText;
  type?: 'separator' | 'button';
  label?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface DropdownProps {
  className?: string;
  menuClassName?: string;
  searchable?: boolean;
  options: DropdownOption[];
  children: React.ReactNode;
}

const stopPropagation = (
  e: React.MouseEvent | React.TouchEvent | React.KeyboardEvent
) => {
  e.stopPropagation();
};

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  options,
  className,
  menuClassName,
  searchable = false
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const toggle = useCallback(() => {
    setOpen(open => !open);
    setSearch('');
  }, [setOpen, setSearch]);
  const close = useCallback(() => {
    setOpen(false);
    setSearch('');
  }, [setOpen, setSearch]);

  useEffect(() => {
    window.addEventListener('mousedown', close);
    window.addEventListener('touchstart', close);

    return () => {
      window.removeEventListener('mousedown', close);
      window.removeEventListener('touchstart', close);
    };
  }, [close]);

  return (
    <button
      onClick={toggle}
      className={cls(
        buttonStyles.button,
        styles.button,
        {
          [buttonStyles.active]: open
        },
        className
      )}
    >
      {children}
      <div
        className={cls(
          styles.dropdown,
          {
            [styles.open]: open
          },
          menuClassName
        )}
        onMouseDown={stopPropagation}
        onTouchStart={stopPropagation}
      >
        {searchable && (
          <div className={styles.search} onClick={stopPropagation}>
            <input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        )}
        {options
          .filter(
            option =>
              search === '' ||
              option.label
                ?.toString()
                .toLowerCase()
                .includes(search.toLowerCase())
          )
          .map(option => {
            if (option.type === 'separator') {
              return <div className={styles.separator} key={option.key}></div>;
            }

            return (
              <button
                className={cls(buttonStyles.button, styles.option)}
                key={option.key}
                onClick={option.onClick}
              >
                {option.label}
              </button>
            );
          })}
      </div>
    </button>
  );
};
