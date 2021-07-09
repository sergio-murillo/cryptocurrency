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

type Props = PropsFromComponent;

const MarketOverview: React.FC<Props> = ({ globalData: { total_mcap, mcap_change, total_volume, volume_change, avg_change_percent } }) => (
  <PanelContainer>
    <MarketOverviewItems>
      <MarketOverviewItem>
        <MarketName><FaMoneyBillAlt style={iconsStyle()}/> Market Cap</MarketName>
        <MarketValue>{formatUSD(total_mcap)} ({<PercentageValue value={+mcap_change}/>})</MarketValue>
      </MarketOverviewItem>
      <MarketOverviewItem>
        <MarketName><FaMoneyBillAlt style={iconsStyle()}/> 24h Volume</MarketName>
        <MarketValue>{formatUSD(total_volume)} ({<PercentageValue value={+volume_change}/>})</MarketValue>
      </MarketOverviewItem>
      <MarketOverviewItem>
        <MarketName><FaPercent style={iconsStyle()}/> AVG Price Change</MarketName>
        <MarketValue>{<PercentageValue value={+avg_change_percent}/>}</MarketValue>
      </MarketOverviewItem>
    </MarketOverviewItems>
  </PanelContainer>
);

export default MarketOverview;
