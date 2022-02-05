import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { valueToBigNumber } from '@aave/protocol-js';
import { useThemeContext } from '@aave/aave-ui-kit';

import {
  useDynamicPoolDataContext,
  useStaticPoolDataContext,
} from '../../../../libs/pool-data-provider';
import { useProtocolDataContext } from '../../../../libs/protocol-data-provider';
import toggleLocalStorageClick from '../../../../helpers/toggle-local-storage-click';
import TopPanelWrapper from '../../../../components/wrappers/TopPanelWrapper';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import SelectMarketPanel from '../../components/SelectMarketPanel';
import MarketTable from '../../components/MarketTable';
import MarketTableItem from '../../components/MarketTableItem';
import TotalMarketsSize from '../../components/TotalMarketsSize';
import BorrowRatesHelpModal from '../../../../components/HelpModal/BorrowRatesHelpModal';
import LabeledSwitcher from '../../../../components/basic/LabeledSwitcher';
import MarketMobileCard from '../../components/MarketMobileCard';
import './style.css';
import messages from './messages';
import staticStyles from './style';
import { useIncentivesDataContext } from '../../../../libs/pool-data-provider/hooks/use-incentives-data-context';
import ReactPaginate from 'react-paginate';

export default function Markets() {
  const intl = useIntl();
  const { currentTheme } = useThemeContext();
  const { marketRefPriceInUsd } = useStaticPoolDataContext();
  const { reserves } = useDynamicPoolDataContext();
  const { currentMarketData } = useProtocolDataContext();
  const { reserveIncentives } = useIncentivesDataContext();
  const [isPriceInUSD, setIsPriceInUSD] = useState(
    localStorage.getItem('marketsIsPriceInUSD') === 'true'
  );
  const [sortName, setSortName] = useState('');
  const [sortDesc, setSortDesc] = useState(false);

  const [currentItems, setCurrentItems] = useState<any>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  let totalLockedInUsd = valueToBigNumber('0');
  let sortedData = reserves
    .filter((res) => res.isActive)
    .map((reserve) => {
      totalLockedInUsd = totalLockedInUsd.plus(
        valueToBigNumber(reserve.totalLiquidity)
          .multipliedBy(reserve.priceInMarketReferenceCurrency)
          .multipliedBy(marketRefPriceInUsd)
      );

      const totalLiquidity = Number(reserve.totalLiquidity);
      const totalLiquidityInUSD = valueToBigNumber(reserve.totalLiquidity)
        .multipliedBy(reserve.priceInMarketReferenceCurrency)
        .multipliedBy(marketRefPriceInUsd)
        .toNumber();

      const totalBorrows = Number(reserve.totalDebt);
      const totalBorrowsInUSD = valueToBigNumber(reserve.totalDebt)
        .multipliedBy(reserve.priceInMarketReferenceCurrency)
        .multipliedBy(marketRefPriceInUsd)
        .toNumber();
      const reserveIncentiveData = reserveIncentives[reserve.underlyingAsset.toLowerCase()];
      return {
        totalLiquidity,
        totalLiquidityInUSD,
        totalBorrows: reserve.borrowingEnabled ? totalBorrows : -1,
        totalBorrowsInUSD: reserve.borrowingEnabled ? totalBorrowsInUSD : -1,
        id: reserve.id,
        underlyingAsset: reserve.underlyingAsset,
        currencySymbol: reserve.symbol,
        depositAPY: reserve.borrowingEnabled ? Number(reserve.supplyAPY) : -1,
        avg30DaysLiquidityRate: Number(reserve.avg30DaysLiquidityRate),
        stableBorrowRate:
          reserve.stableBorrowRateEnabled && reserve.borrowingEnabled
            ? Number(reserve.stableBorrowAPY)
            : -1,
        variableBorrowRate: reserve.borrowingEnabled ? Number(reserve.variableBorrowAPY) : -1,
        avg30DaysVariableRate: Number(reserve.avg30DaysVariableBorrowRate),
        borrowingEnabled: reserve.borrowingEnabled,
        stableBorrowRateEnabled: reserve.stableBorrowRateEnabled,
        isFreezed: reserve.isFrozen,
        aincentivesAPR: reserveIncentiveData ? reserveIncentiveData.aIncentives.incentiveAPR : '0',
        vincentivesAPR: reserveIncentiveData ? reserveIncentiveData.vIncentives.incentiveAPR : '0',
        sincentivesAPR: reserveIncentiveData ? reserveIncentiveData.sIncentives.incentiveAPR : '0',
      };
    });

  if (sortDesc) {
    if (sortName === 'currencySymbol') {
      sortedData.sort((a, b) =>
        b.currencySymbol.toUpperCase() < a.currencySymbol.toUpperCase() ? -1 : 0
      );
    } else {
      // @ts-ignore
      sortedData.sort((a, b) => a[sortName] - b[sortName]);
    }
  } else {
    if (sortName === 'currencySymbol') {
      sortedData.sort((a, b) =>
        a.currencySymbol.toUpperCase() < b.currencySymbol.toUpperCase() ? -1 : 0
      );
    } else {
      // @ts-ignore
      sortedData.sort((a, b) => b[sortName] - a[sortName]);
    }
  }

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 5;
    setCurrentItems(sortedData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(sortedData.length / 5));
  }, [itemOffset]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 5) % sortedData.length;
    setItemOffset(newOffset);
  };

  return (
    <ScreenWrapper
      pageTitle={intl.formatMessage(messages.pageTitle)}
      // className="Markets"
      withMobileGrayBg={true}
    >
      <TopPanelWrapper isCollapse={true} withoutCollapseButton={true}>
        <div className="Markets__top-content">
          <TotalMarketsSize value={totalLockedInUsd.toNumber()} />
          <SelectMarketPanel />
        </div>
      </TopPanelWrapper>

      <div className="Markets__size">
        <div className="container">
          <TotalMarketsSize value={totalLockedInUsd.toNumber()} />
        </div>
      </div>

      <div className="Markets__price-switcher">
        <div className="container">
          <LabeledSwitcher
            value={!isPriceInUSD}
            leftOption="USD"
            rightOption={intl.formatMessage(messages.native)}
            onToggle={() =>
              toggleLocalStorageClick(isPriceInUSD, setIsPriceInUSD, 'marketsIsPriceInUSD')
            }
          />
        </div>
      </div>

      <div className="Markets__market-switcher">
        <div className="container">
          <p className="Markets__marketSwitcher--title">
            {intl.formatMessage(messages.selectMarket)}
          </p>
          <SelectMarketPanel />
        </div>
      </div>

      <MarketTable
        sortName={sortName}
        setSortName={setSortName}
        sortDesc={sortDesc}
        setSortDesc={setSortDesc}
      >
        {currentItems?.length
          ? currentItems.map((item: any, index: any) => (
              <MarketTableItem {...item} isPriceInUSD={isPriceInUSD} key={index} />
            ))
          : null}
      </MarketTable>
      {reserves?.length > 5 ? (
        <div className="pagination-wrap desc">
          <ReactPaginate
            previousLabel="<"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
          />
        </div>
      ) : null}

      <div className="Markets__mobile--cards">
        {currentMarketData.enabledFeatures?.incentives && (
          <div className="Markets__help--modalInner">
            <BorrowRatesHelpModal // TO-DO: Pass rewardTokenSymbol to this component
              className="Markets__help--modal"
              text={intl.formatMessage(messages.rewardsInformation)}
              iconSize={14}
            />
          </div>
        )}

        {currentItems?.length
          ? currentItems.map((item: any, index: any) => <MarketMobileCard {...item} key={index} />)
          : null}
        {reserves?.length > 5 ? (
          <div className="pagination-wrap mobile">
            <ReactPaginate
              previousLabel="<"
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
            />
          </div>
        ) : null}
      </div>

      <section className="holders">
        <div className="container">
          <div className="holders__inner">
            <div className="holders__info">
              <h2 className="holders__title">
                Stake Holders <img className="holders__item-lable" src="images/bg-holders-gr.png" />
              </h2>
              <p className="holders__text">
                These stakeholders actively contribute as part of the community to the Aave Protocol
                and its governance.
              </p>
            </div>
            <div className="holders__items">
              <div className="holders__item">
                <img className="holders__item-img" src="images/holders/papafi.png" alt="papafi" />{' '}
              </div>
              <div className="holders__item">
                <img
                  className="holders__item-img"
                  src="images/holders/three.png"
                  alt="three-arrows-capital"
                />
              </div>
              <div className="holders__item">
                <img className="holders__item-img" src="images/holders/dtc.png" alt="dtc.capital" />{' '}
              </div>
              <div className="holders__item">
                <img
                  className="holders__item-img"
                  src="images/holders/framework.png"
                  alt="framework"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="container subscribe-con">
          <div className="subscribe__info">
            <img className="holders__item-img" src="/images/subs-bg.png" />
            <h3 className="subscribe__title">Subscribe our newsletter</h3>
            <p className="subscribe__text">
              Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of
              social commerce.
            </p>
            <button className="subscribe-btn">
              Subscribe <img className="def" src="images/ico/sub-ico.svg" alt="" />
              <img className="hov" src="images/ico/sub-ico-bl.svg" alt="" />
            </button>
          </div>
        </div>
      </section>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .Markets {
          &__top-content {
            color: #fff;
            background: #1c1e22;
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.07);
            border-radius: 15px;
          }
          &__marketSwitcher--title {
            color: #fff;
          }
        }
      `}</style>
    </ScreenWrapper>
  );
}
