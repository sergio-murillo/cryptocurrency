import React, { useEffect }  from 'react';
import styled from '@emotion/styled';
import CoinList from '../components/Coin/CoinList';
import MarketOverview from '../components/Market/MarketOverview';
import { connect } from 'react-redux';
import { ApplicationState } from '../reducers';
import { GlobalCryptoDataResponse } from '../types/types';
import { fetchGlobalCryptoActions } from '../actions';
import { flex, mq } from '../styles/commons';

const CoinContainer = styled.div`
  ${flex('stretch', 'row', 'space-between')}
  ${mq[0]} {
    ${flex('center', 'column')}
  }
`;

const CoinMarketContainer = styled.div`
  width: 40%;
  margin-top: 0;
  margin-left: 20px;

  ${mq[0]} {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;

const CoinListContainer = styled.div`
  width: 60%;
  ${mq[0]} {
    width: 100%;
  }
`;

interface propsFromState {
  globalCryptoData: GlobalCryptoDataResponse[];
}

interface propsFromDispatch {
  fetchGlobalCrypto: () => any;
}

type AllProps = propsFromState & propsFromDispatch;

const Coin: React.FC<AllProps> = ({ globalCryptoData, fetchGlobalCrypto }) => {

  useEffect(() => {
    fetchGlobalCrypto();
  });

  return (
    <CoinContainer>
      <CoinListContainer>
        <CoinList/>
      </CoinListContainer>
      <CoinMarketContainer>
        <MarketOverview/>
      </CoinMarketContainer>
    </CoinContainer>
    
  );
};

const mapStateToProps = ({ cryptocurrency }: ApplicationState) => ({
  globalCryptoData: cryptocurrency.globalCryptoData
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalCrypto: () => {
      dispatch(fetchGlobalCryptoActions.request());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
