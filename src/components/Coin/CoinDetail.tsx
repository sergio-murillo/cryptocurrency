import React from 'react';
import PanelContainer from '../Panel';
import styled from '@emotion/styled';
import PercentageValue from '../PercentageValue';
import { flex, H1, H2 } from '../../styles/commons';
import { Theme, withTheme } from '@emotion/react';

const CoinDetailContainer = styled.div`
  ${flex('center', 'column')}
`;

const CoinIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 50px;
`;

const CoinRank = withTheme(styled.span`
  font-weight: ${(props: { theme: Theme }) => props.theme.fontWeights.semibold}; 
  padding-bottom: 30px;
`);

const CoinPercentagesContainer = styled.div`
  ${flex('center', 'row', 'space-between', 'wrap')}
  width: 50%;
  margin-top: 20px;
`;

const CoinPercentageValue = styled.span``;

const CoinDetail: React.FC = () => {
  return (
    <PanelContainer>
      <CoinDetailContainer>
        <CoinRank>Rank: 1</CoinRank>
        <CoinIcon src="https://www.coinlore.com/img/trueusd.png"/>
        <H1>TrueUSD (TUSD)</H1>
        <H1>$0.998074</H1>
        <CoinPercentagesContainer>
            <H2>1h</H2>
            <CoinPercentageValue><PercentageValue value={0.12}/></CoinPercentageValue>
        </CoinPercentagesContainer>
      </CoinDetailContainer>
    </PanelContainer>
  );
};


export default CoinDetail;
