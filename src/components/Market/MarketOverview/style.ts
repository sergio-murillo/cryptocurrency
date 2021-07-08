import { flex } from 'src/styles/commons';
import styled from '@emotion/styled';

export const MarketOverviewItems = styled.div`
  ${flex('flex-start', 'column')}
`;

export const MarketOverviewItem = styled.div`
  ${flex('stretch', 'row', 'space-between')}
  width: 100%;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const MarketName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const MarketValue = styled.div``;
