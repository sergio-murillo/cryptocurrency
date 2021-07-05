import React from 'react';
import PanelContainer from '../Panel';
import styled from '@emotion/styled';
import { FaMoneyBillAlt, FaPercent } from 'react-icons/fa';
import PercentageValue from '../PercentageValue';
import { flex } from '../../styles/commons';

const MarketOverviewItems = styled.div`
  ${flex('flex-start', 'column')}
`;

const MarketOverviewItem = styled.div`
  ${flex('stretch', 'row', 'space-between')}
  font-weight: 600;
  width: 100%;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const MarketName = styled.div`
  display: flex;
  align-items: center;
`;

const MarketValue = styled.div``;

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
