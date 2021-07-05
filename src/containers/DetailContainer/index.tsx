import React from 'react';
import CoinDetail from '@components/Coin/CoinDetail';
import Market from '@components/Market/MarketList';
import Exchange from '@components/Exchange/ExchangeList';
import { DetailContainer, DetailLists, DetailCoin, DetailTable } from './styles';

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