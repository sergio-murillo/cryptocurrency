import React from 'react';
import PanelContainer from 'src/components/Commons/Panel';
import PercentageValue from 'src/components/Commons/PercentageValue';
import { H1, H2 } from 'src/styles/commons';
import {
  CoinDetailContainer,
  CoinRank,
  CoinIcon,
  CoinPercentagesContainer,
  CoinPercentageValue } from './styles';

const CoinDetail: React.FC = () => {
  return (
    <PanelContainer>
      <CoinDetailContainer>
        <CoinRank>Rank: 1</CoinRank>
        <CoinIcon src="https://www.coinlore.com/img/trueusd.png"/>
        <H1>TrueUSD (TUSD)</H1>
        <H1>$0.998074</H1>
        <CoinPercentagesContainer>
            <H2>1h</H2>
            <CoinPercentageValue><PercentageValue value={0.12}/></CoinPercentageValue>
        </CoinPercentagesContainer>
      </CoinDetailContainer>
    </PanelContainer>
  );
};


export default CoinDetail;
