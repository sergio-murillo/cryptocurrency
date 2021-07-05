import React from 'react';
import Paginator from '@src/components/List/Paginator';
import Filter from '@src/components/List/Filter';
import PanelContainer from '@components/Commons/Panel';
import { CoinListContainer, TableContainer } from './styles';

const coinList = {
  headers: [{ title: 'Ranking' }, { title: 'Coin',colspan: 2 }, { title: 'Price (USD)' }, { title: '% 1h' }, { title: '% 24h' },
    { title: '% 7d' }, { title: 'Market Cap' }, { title: '24h Volume'}
  ],
  items: []
};

const CointList: React.FC = () => {
  return (
    <CoinListContainer>
      <PanelContainer>
        <Filter></Filter>
        <TableContainer {...coinList}></TableContainer>
        <Paginator maxItems={8} itemsPerPage={100}></Paginator>
      </PanelContainer>
    </CoinListContainer>
    
  );
};

export default CointList;
