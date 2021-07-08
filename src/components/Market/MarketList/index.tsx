import React from 'react';
import PanelContainer from 'src/components/Commons/Panel';
import Table from 'src/components/List/Table';

const marketList = {
    headers: [{ title: 'Market' }, { title: 'Pair' }, { title: 'Price (USD)' }, { title: 'Volume (USD)' }],
    items: []
  };


const Market: React.FC = () => {
  return (
    <PanelContainer>
        <Table {...marketList} totalColumns={4}></Table>
    </PanelContainer>
  );
};

export default Market;
