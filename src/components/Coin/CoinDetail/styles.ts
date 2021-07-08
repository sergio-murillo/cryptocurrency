import styled from '@emotion/styled';
import { Theme, withTheme } from '@emotion/react';
import { flex } from 'src/styles/commons';

export const CoinDetailContainer = styled.div`
  ${flex('center', 'column')}
`;

export const CoinIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 50px;
`;

export const CoinRank = withTheme(styled.span`
  font-weight: ${(props: { theme: Theme }) => props.theme.fontWeights.semibold}; 
  padding-bottom: 30px;
`);

export const CoinPercentagesContainer = styled.div`
  ${flex('center', 'row', 'space-between', 'wrap')}
  width: 50%;
  margin-top: 20px;
`;

export const CoinPercentageValue = styled.span``;
