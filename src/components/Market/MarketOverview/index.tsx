import React from 'react';
import PanelContainer from '@components/Commons/Panel';
import { FaMoneyBillAlt, FaPercent } from 'react-icons/fa';
import PercentageValue from '@components/Commons/PercentageValue';
import { MarketOverviewItems, MarketOverviewItem, MarketName, MarketValue } from './style';

const MarketOverview: React.FC = () => (
  <PanelContainer>
    <MarketOverviewItems>
      <MarketOverviewItem>
        <MarketName><FaMoneyBillAlt style={iconsStyle()}/> Market Cap</MarketName>
        <MarketValue>79B ({<PercentageValue value={0.12}/>})</MarketValue>
      </MarketOverviewItem>
      <MarketOverviewItem>
        <MarketName><FaMoneyBillAlt style={iconsStyle()}/> 24h Volume</MarketName>
        <MarketValue>79B ({<PercentageValue value={0.12}/>})</MarketValue>
      </MarketOverviewItem>
      <MarketOverviewItem>
        <MarketName><FaPercent style={iconsStyle()}/> AVG Price Change</MarketName>
        <MarketValue>20.3%</MarketValue>
      </MarketOverviewItem>
    </MarketOverviewItems>
  </PanelContainer>
);

const iconsStyle = (): React.CSSProperties => ({
  marginRight: '10px',
});

export default MarketOverview;
