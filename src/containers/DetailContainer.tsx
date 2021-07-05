import React from 'react';
import styled from '@emotion/styled';
import CoinDetail from '../components/Coin/CoinDetail';
import Market from '../components/Market/Market';
import Exchange from '../components/Exchange/Exchange';
import { flex, mq } from '../styles/commons';

const DetailContainer = styled.div`
  ${flex('stretch', 'row', 'center')}
  ${mq[0]} {
    flex-direction: column;
  }
`;

const DetailLists = styled.div`
  margin-left: 20px;
  width: 70%;
  ${mq[0]} {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
  }
`;

const DetailCoin = styled.div`
  width: 30%;
  ${mq[0]} {
    width: 100%;
  }
`;

const DetailTable = styled.div`
  margin-bottom: 0;

  &:first-of-type {
    margin-bottom: 20px;
  }
`;

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