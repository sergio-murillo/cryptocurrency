import styled from '@emotion/styled';
import Table from 'src/components/Commons/List/Table';
import Image from 'src/components/Commons/Image';

export const MarketName = styled.div``;

export const MarketImage = styled(Image)`
  margin-right: 20px;
`;

export const TableContainer = styled(Table)`
  tbody > tr > td {
    &:first-of-type {
      width: 30%;
      text-align: left;
    }

    &:last-of-type {
      text-align: right;
    }
  }
`;