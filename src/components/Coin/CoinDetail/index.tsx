import { FC } from 'react';
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

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
   * Current cryptocurrency
   * @type {Ticker}
   */
  currentCoin: Ticker;
}

export type Props = PropsFromComponent;

/**
 * Detailed summary of a cryptocurrency
 */
 export const CoinDetail: FC<Props> = ({ currentCoin: { rank, nameid, symbol, name, price_usd, percent_change_1h } }) => {
  return (
    <PanelContainer>
      <CoinDetailContainer>
        <CoinRank data-testid="coin-rank">Clasificación: {rank}</CoinRank>
        <CoinIcon
          src={buildImageUrl(nameid, '/img/')}/>
        <H1>{name} ({symbol})</H1>
        <H1>{formatUSD(+price_usd)}</H1>
        <CoinPercentagesContainer data-testid="coin-percentages-container">
            <H2>1h</H2>
            <CoinPercentageValue>
              <PercentageValue value={+percent_change_1h}/>
            </CoinPercentageValue>
        </CoinPercentagesContainer>
      </CoinDetailContainer>
    </PanelContainer>
  );
};

export default CoinDetail;
