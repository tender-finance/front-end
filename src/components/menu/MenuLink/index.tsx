import React from 'react';
import classNames from 'classnames';
import { gradient, useThemeContext } from '@aave/aave-ui-kit';

import goToTop from '../../../helpers/goToTop';
import Link from '../../basic/Link';

import staticStyles from './style';

interface MenuLinkProps {
  to: string;
  title: string;
  isActive?: boolean;
  hidden?: boolean;
  onClick?: () => void;
}

export default function MenuLink({ to, title, isActive, hidden, onClick }: MenuLinkProps) {
  const { currentTheme } = useThemeContext();

  const activeGradient = gradient(
    230,
    `${currentTheme.primary.rgb}, 1`,
    0,
    `${currentTheme.secondary.rgb}, 1`,
    100
  );

  return (
    <Link
      to={to}
      className={classNames('MenuLink ButtonLink', {
        MenuLink__active: isActive,
        MenuLink__hidden: hidden,
      })}
      onClick={() => {
        goToTop();
        onClick && onClick();
      }}
    >
      <strong>{title}</strong>
      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .MenuLink {
          color: ${currentTheme.white.hex} !important;
          .MenuLink__title {
            i {
              background: ${activeGradient} !important;
            }
          }
        }
      `}</style>
    </Link>
  );
}
