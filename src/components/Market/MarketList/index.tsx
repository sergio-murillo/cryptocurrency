import React from 'react';
import PanelContainer from 'src/components/Commons/Panel';
import { IMAGES_C1_URL, MARKET_LIST_TEMPLATE } from 'src/constants/commons';
import { buildImageUrl } from 'src/helpers';
import { MarketResponse } from 'src/models';
import { formatUSD } from 'src/utils';
import { MarketImage, MarketName, TableContainer } from './styles';

interface PropsFromComponent {
  markets: MarketResponse[];
}

type Props = PropsFromComponent;

const Market: React.FC<Props> = ({ markets }) => {
  const marketList = {
    ...MARKET_LIST_TEMPLATE,
    items: getMarketItems(markets)
  };

  return (
    <PanelContainer title="Mercados">
      <TableContainer
        {...marketList}
        totalColumns={marketList.headers.length}
        actionRow={(index: number) => console.info(markets[index])}></TableContainer>
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
