import React from 'react';
import PanelContainer from 'src/components/Commons/Panel';
import { IMAGES_C1_URL } from 'src/constants/commons';
import { buildImageUrl } from 'src/helpers';
import { MarketResponse } from 'src/models';
import { Table } from 'src/models/commons';
import { formatUSD } from 'src/utils';
import { MarketImage, MarketName, TableContainer } from './styles';

let marketList: Table = {
  headers: [{ title: 'Market' }, { title: 'Pair' }, { title: 'Price (USD)' }, { title: 'Volume (USD)' }],
  items: [],
  isLoading: false,
};

interface PropsFromComponent {
  markets: MarketResponse[];
}

type Props = PropsFromComponent;

const Market: React.FC<Props> = ({ markets }) => {
  marketList = {
    ...marketList,
    items: getMarketItems(markets)
  };

  return (
    <PanelContainer title="Mercados">
      <TableContainer
        {...marketList}
        totalColumns={marketList.headers.length}></TableContainer>
    </PanelContainer>
  );
};

const getMarketItems = (markets: MarketResponse[]) => (
  markets.map(market => [
    <MarketName>
      <MarketImage
        src={buildImageUrl(market.name.toLocaleLowerCase(), '/img/exchanges/25x25/', IMAGES_C1_URL)}
        alt={market.name}/>
        {market.name}
    </MarketName>,
    `${market.base}/${market.quote}`,
    formatUSD(market.price_usd),
    formatUSD(market.volume_usd),
  ])
);

export default Market;
