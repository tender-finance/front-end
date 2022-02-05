import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useThemeContext } from '@aave/aave-ui-kit';

import goToTop from '../../../helpers/goToTop';

import staticStyles from './style';

interface TableItemWrapperProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  withGoToTop?: boolean;
  darkOnDarkMode?: boolean;
}

export default function TableItemWrapper({
  onClick,
  disabled,
  className,
  children,
  withGoToTop,
  darkOnDarkMode,
}: TableItemWrapperProps) {
  const { currentTheme } = useThemeContext();

  return (
    <div
      className={classNames(
        'TableItemWrapper',
        { TableItemWrapper__disabled: disabled },
        className
      )}
      onClick={() => {
        !disabled && onClick();
        withGoToTop && goToTop();
      }}
    >
      {children}

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .TableItemWrapper {
          background: #1c1e22;
          padding: 40px;
          position: relative;
        }
        .TableItemWrapper:after {
          content: '';
          width: calc(100% - 80px);
          bottom: 0;
          left: 40px;
          height: 1px;
          background: #34383f;
          position: absolute;
        }
        .TableItemWrapper:last-child:after {
          display: none;
        }
      `}</style>
    </div>
  );
}
