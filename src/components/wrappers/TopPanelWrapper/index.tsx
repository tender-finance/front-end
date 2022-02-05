import React, { ReactNode } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { useThemeContext } from '@aave/aave-ui-kit';

import messages from './messages';
import staticStyles from './style';
import './style.css';

interface TopPanelWrapperProps {
  isCollapse: boolean;
  setIsCollapse?: (value: boolean) => void;
  children: ReactNode;
  className?: string;
  withoutCollapseButton?: boolean;
}

export default function TopPanelWrapper({
  isCollapse,
  setIsCollapse,
  children,
  className,
  withoutCollapseButton,
}: TopPanelWrapperProps) {
  const intl = useIntl();
  const { currentTheme } = useThemeContext();

  return (
    <>
      <div className="top__content">
        <div className="container">
          <img className="top__content-star-t" src="images/tree.png" alt="" />
          <img className="top__content-star-l" src="images/star-l.svg" alt="" />
          <img className="top__content-star-r" src="images/star-r.svg" alt="" />
          <img className="top__content-gr-t" src="images/bg-gr-t.png" alt="" />
          <img className="top__content-gr-b" src="images/bg-gr-b.png" alt="" />
          <img className="top__content-el" src="images/bg-el.png" alt="" />
          <div className="top__content-inner">
            <h1 className="top__content-title">The Liquidity Protocol </h1>
            <div className="top__content-text">
              Aave is an open source and non-custodial liquidity protocol for earning interest on
              deposits and borrowing assets.{' '}
            </div>
            <button className="top__content-btn">Enter App </button>
            <div className="top__content-info">
              <div className="top__content-num">
                32k+<span>Coins</span>
              </div>
              <div className="top__content-num">
                20k+<span>Auctions</span>
              </div>
              <div className="top__content-num">
                10k+<span>Artists</span>
              </div>
            </div>
          </div>
        </div>
        {/* {!withoutCollapseButton && (
        <button
          className={classNames('TopPanelWrapper__button', {
            TopPanelWrapper__buttonCollapse: isCollapse,
          })}
          type="button"
          onClick={() => setIsCollapse && setIsCollapse(!isCollapse)}
        >
          <span />
          {intl.formatMessage(isCollapse ? messages.expand : messages.minimize)}
        </button>
      )} */}
      </div>
      <div className="TopPanelWrapper__content">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
