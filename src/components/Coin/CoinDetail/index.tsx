import React from 'react';
import PanelContainer from 'src/components/Commons/Panel';
import PercentageValue from 'src/components/Commons/PercentageValue';
import { buildImageUrl } from 'src/helpers';
import { Ticker } from 'src/models';
import { H1, H2 } from 'src/styles/commons';
import { formatUSD } from 'src/utils';
import {
  CoinDetailContainer,
  CoinRank,
  CoinIcon,
  CoinPercentagesContainer,
  CoinPercentageValue } from './styles';

interface PropsFromComponent {
  currentCoin: Ticker;
}

type Props = PropsFromComponent;

const CoinDetail: React.FC<Props> = ({ currentCoin }) => {
  return (
    <PanelContainer>
      <CoinDetailContainer>
        <CoinRank>Rank: {currentCoin.rank}</CoinRank>
        <CoinIcon src={buildImageUrl(currentCoin.nameid, '/img/')}/>
        <H1>{currentCoin.name} ({currentCoin.symbol})</H1>
        <H1>{formatUSD(+currentCoin.price_usd)}</H1>
        <CoinPercentagesContainer>
            <H2>1h</H2>
            <CoinPercentageValue><PercentageValue value={+currentCoin.percent_change_1h}/></CoinPercentageValue>
        </CoinPercentagesContainer>
      </CoinDetailContainer>
    </PanelContainer>
  );
};


export default CoinDetail;
