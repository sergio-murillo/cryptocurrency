import React from 'react';
import PanelContainer from 'src/components/Commons/Panel';
import Table from 'src/components/List/Table';

const exchangeList = {
    headers: [{ title: 'Exchange' }, { title: 'Pair' }, { title: '24h Volume' }, { title: 'Price (USD)' }],
    items: []
  };


const Exchange: React.FC = () => {
  return (
    <PanelContainer>
        <Table {...exchangeList} totalColumns={4}></Table>
    </PanelContainer>
  );
};

export default Exchange;
