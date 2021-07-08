import styled from '@emotion/styled';
import { flex, mq } from '../../styles/commons';

export const CoinContainer = styled.div`
  ${flex('stretch', 'row', 'space-between')}
  ${mq[0]} {
    ${flex('center', 'column')}
  }
`;

export const CoinMarketContainer = styled.div`
  width: 30%;
  margin-top: 0;
  margin-left: 20px;

  ${mq[0]} {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;

export const CoinListContainer = styled.div`
  width: 70%;
  ${mq[0]} {
    width: 100%;
  }
`;
