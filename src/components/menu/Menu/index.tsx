import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { rgba, useThemeContext } from '@aave/aave-ui-kit';

import { useUserWalletDataContext } from '../../../libs/web3-data-provider';
import { useProtocolDataContext } from '../../../libs/protocol-data-provider';
import goToTop from '../../../helpers/goToTop';
import Link from '../../basic/Link';
import MarketSwitcher from '../../market/MarketSwitcher';
import MenuLink from '../MenuLink';
import MoreButton from '../MoreButton';
import AddressInfo from '../AddressInfo';
import MobileContent from '../MobileContent';
import { LOGO } from '../../../ui-config';

import './style.css';

import navigation from '../navigation';

import backIcon from '../../../images/mobileBackArrow.svg';

interface MenuProps {
  title: string;
}

export default function Menu({ title }: MenuProps) {
  const location = useLocation();
  const history = useHistory();
  const intl = useIntl();
  const { currentTheme } = useThemeContext();
  const { currentAccount } = useUserWalletDataContext();
  const { currentMarketData } = useProtocolDataContext();
  const [openMenu, setOpenMenu] = useState(false);

  const isActive = (url: string) => {
    return `/${url.split('/')[1]}` === `/${location.pathname.split('/')[1]}`;
  };

  const topLineColor = rgba(`${currentTheme.white.rgb}, 0.1`);

  return (
    <header className="header">
      <div className="container d-f">
        <div className="header__inner">
          <Link className="header__logo" to="/markets" onClick={() => goToTop()}>
            <img src="/images/logo.svg" alt="Aave" />
          </Link>
          <div className="header__menu-inner">
            <div className="header__menu-links">
              {navigation.map((link) => (
                <MenuLink to={link.link} title={intl.formatMessage(link.title)} />
              ))}
            </div>
            <button className="header__menu-btn">Enter App</button>
          </div>
        </div>

        <div className={`header__mobile-menu `}>
          <div className="header__mobile-menu-bg"></div>
          <button className="header__mobile-menu-open" onClick={() => setOpenMenu(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className={`header__mobile-menu-inner ${
              openMenu ? 'header__mobile-menu-inner-active ' : ''
            }`}
          >
            <div className="header__mobile-menu-top">
              <button
                className="header__mobile-menu-close"
                onClick={() => setOpenMenu(false)}
                type="button"
              >
                {' '}
              </button>
            </div>
            <div className="header__mobile-menu-links">
              <ul className="header__mobile-menu-links-inner">
                {navigation.map((link) => (
                  <li>
                    {' '}
                    <MenuLink to={link.link} title={intl.formatMessage(link.title)} />
                  </li>
                ))}
              </ul>
              <button className="header__menu-btn">Enter Ap</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
