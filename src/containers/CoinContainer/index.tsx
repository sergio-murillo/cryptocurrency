import React, { useEffect }  from 'react';
import CoinList from '@components/Coin/CoinList';
import MarketOverview from '@components/Market/MarketOverview';
import { connect } from 'react-redux';
import { ApplicationState } from '../../reducers';
import { GlobalCryptoDataResponse } from '@models/coin';
import { fetchGlobalCryptoActions } from '@store/coin/actions';
import { CoinContainer, CoinMarketContainer, CoinListContainer } from './styles';

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

const mapStateToProps = ({ coin }: ApplicationState) => ({
  globalCryptoData: coin.globalCryptoData
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalCrypto: () => {
      dispatch(fetchGlobalCryptoActions.request());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
