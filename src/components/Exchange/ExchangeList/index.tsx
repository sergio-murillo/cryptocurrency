import React from 'react';
import PanelContainer from '@components/Commons/Panel';
import Table from '@components/List/Table';

const exchangeList = {
    headers: [{ title: 'Exchange' }, { title: 'Pair' }, { title: '24h Volume' }, { title: 'Price (USD)' }],
    items: []
  };


const Exchange: React.FC = () => {
  return (
    <PanelContainer>
        <Table {...exchangeList}></Table>
    </PanelContainer>
  );
};

export default Exchange;
