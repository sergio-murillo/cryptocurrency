import styled from '@emotion/styled';
import Table from 'src/components/Commons/List/Table';
import Image from 'src/components/Commons/Image';

export const CoinListContainer = styled.div``;

export const TableContainer = styled(Table)`
  margin: 40px 0;

  tbody > tr > td:nth-of-type(2) {
    width: 25px;
  }
`;

export const CoinImage = styled(Image)`
  width: 25px;
  height: 25px;
`;