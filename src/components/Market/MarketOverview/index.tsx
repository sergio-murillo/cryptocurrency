import React from 'react';
import PanelContainer from 'src/components/Commons/Panel';
import { FaMoneyBillAlt, FaPercent } from 'react-icons/fa';
import PercentageValue from 'src/components/Commons/PercentageValue';
import { MarketOverviewItems, MarketOverviewItem, MarketName, MarketValue } from './style';
import { GlobalCryptoDataResponse } from 'src/models';
import { formatUSD } from 'src/utils';

interface PropsFromComponent {
  globalData: GlobalCryptoDataResponse;
}

type Props = PropsFromComponent;

const MarketOverview: React.FC<Props> = ({ globalData }) => (
  <PanelContainer>
    <MarketOverviewItems>
      <MarketOverviewItem>
        <MarketName><FaMoneyBillAlt style={iconsStyle()}/> Market Cap</MarketName>
        <MarketValue>{formatUSD(globalData.total_mcap)} ({<PercentageValue value={+globalData.mcap_change}/>})</MarketValue>
      </MarketOverviewItem>
      <MarketOverviewItem>
        <MarketName><FaMoneyBillAlt style={iconsStyle()}/> 24h Volume</MarketName>
        <MarketValue>{formatUSD(globalData.total_volume)} ({<PercentageValue value={+globalData.volume_change}/>})</MarketValue>
      </MarketOverviewItem>
      <MarketOverviewItem>
        <MarketName><FaPercent style={iconsStyle()}/> AVG Price Change</MarketName>
        <MarketValue>{<PercentageValue value={+globalData.avg_change_percent}/>}</MarketValue>
      </MarketOverviewItem>
    </MarketOverviewItems>
  </PanelContainer>
);

const iconsStyle = (): React.CSSProperties => ({
  marginRight: '10px',
});

export default MarketOverview;
