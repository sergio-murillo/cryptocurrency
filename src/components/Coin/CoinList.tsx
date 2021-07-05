import React from 'react';
import styled from '@emotion/styled';
import Table from '../List/Table';
import Paginator from '../List/Paginator';
import Filter from '../List/Filter';
import PanelContainer from '../Panel';

const CoinListContainer = styled.div``;

const TableContainer = styled(Table)`
  margin: 50px 0;
`;

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
