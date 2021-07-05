import React from 'react';
import PanelContainer from '@components/Commons/Panel';
import Table from '@components/List/Table';

const marketList = {
    headers: [{ title: 'Market' }, { title: 'Pair' }, { title: 'Price (USD)' }, { title: 'Volume (USD)' }],
    items: []
  };


const Market: React.FC = () => {
  return (
    <PanelContainer>
        <Table {...marketList}></Table>
    </PanelContainer>
  );
};

export default Market;
