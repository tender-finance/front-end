import React from 'react';

import TableItem from '../../../../components/BasicAssetsTable/TableItem';
import TableColumn from '../../../../components/BasicTable/TableColumn';
import Value from '../../../../components/basic/Value';
import LiquidityMiningCard from '../../../../components/liquidityMining/LiquidityMiningCard';
import NoData from '../../../../components/basic/NoData';
import { isAssetStable } from '../../../../helpers/markets/assets';

import { DepositTableItem } from './types';

export default function DepositItem({
  id,
  symbol,
  walletBalance,
  walletBalanceInUSD,
  liquidityRate,
  avg30DaysLiquidityRate,
  userId,
  borrowingEnabled,
  isFreezed,
  aIncentivesAPY,
}: DepositTableItem) {
  const url = `/deposit/${symbol}-${id}`;

  return (
    <TableItem symbol={symbol} url={url} isFreezed={isFreezed} darkOnDarkMode={true}>
      <TableColumn>
        {!userId || Number(walletBalance) <= 0 ? (
          <NoData color="dark" />
        ) : (
          <Value
            value={Number(walletBalance)}
            subValue={walletBalanceInUSD}
            maximumSubValueDecimals={2}
            subSymbol="USD"
            maximumValueDecimals={isAssetStable(symbol) ? 2 : 5}
            minimumValueDecimals={isAssetStable(symbol) ? 2 : 5}
          />
        )}
      </TableColumn>

      {!isFreezed && (
        <TableColumn>
          <LiquidityMiningCard
            value={liquidityRate}
            thirtyDaysValue={avg30DaysLiquidityRate}
            liquidityMiningValue={aIncentivesAPY}
            symbol={symbol}
            type="deposit-apy"
          />
        </TableColumn>
      )}
    </TableItem>
  );
}
