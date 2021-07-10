import React from 'react';
import PanelContainer from 'src/components/Commons/Panel';
import { FaMoneyBillAlt, FaPercent } from 'react-icons/fa';
import PercentageValue from 'src/components/Commons/PercentageValue';
import { MarketOverviewItems, MarketOverviewItem, MarketName, MarketValue, iconsStyle } from './style';
import { GlobalCryptoDataResponse } from 'src/models';
import { formatUSD } from 'src/utils';

interface PropsFromComponent {
  globalData: GlobalCryptoDataResponse;
}

export type Props = PropsFromComponent;

const MarketOverview: React.FC<Props> = ({ globalData: { total_mcap, mcap_change, total_volume, volume_change, avg_change_percent } }) => (
  <PanelContainer>
    <MarketOverviewItems data-testid="market-overview-items">
      <MarketOverviewItem data-testid="market-item-mcap">
        <MarketName><FaMoneyBillAlt style={iconsStyle()}/> Mercado Capital</MarketName>
        <MarketValue>{formatUSD(total_mcap)} ({<PercentageValue value={+mcap_change}/>})</MarketValue>
      </MarketOverviewItem>
      <MarketOverviewItem data-testid="market-item-volume">
        <MarketName><FaMoneyBillAlt style={iconsStyle()}/> Acumulado 24h</MarketName>
        <MarketValue>{formatUSD(total_volume)} ({<PercentageValue value={+volume_change}/>})</MarketValue>
      </MarketOverviewItem>
      <MarketOverviewItem data-testid="market-item-change-price">
        <MarketName><FaPercent style={iconsStyle()}/> % de Cambio</MarketName>
        <MarketValue>{<PercentageValue value={+avg_change_percent}/>}</MarketValue>
      </MarketOverviewItem>
    </MarketOverviewItems>
  </PanelContainer>
);

export default MarketOverview;
