import React from 'react';
import Market from 'src/components/Market/MarketList';
import Exchange from 'src/components/Exchange/ExchangeList';
import { DetailContainer, DetailLists, DetailCoin, DetailTable } from './styles';
import CoinDetail from 'src/components/Coin/CoinDetail';

const Detail: React.FC = () => {
  return (
    <DetailContainer>
      <DetailCoin>
        <CoinDetail/>
      </DetailCoin>
      <DetailLists>
        <DetailTable>
          <Market/>
        </DetailTable>
        <DetailTable>
          <Exchange/>
        </DetailTable>
      </DetailLists>
    </DetailContainer>
  );
};


export default Detail;