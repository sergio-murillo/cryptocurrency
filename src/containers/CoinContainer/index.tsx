import React, { useEffect }  from 'react';
import CoinList from 'src/components/Coin/CoinList';
import MarketOverview from 'src/components/Market/MarketOverview';
import { connect } from 'react-redux';
import { ApplicationState } from 'src/reducers';
import { GlobalCryptoDataResponse } from 'src/models/coin';
import { fetchGlobalCryptoActions } from 'src/store/coin/actions';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const mapStateToProps = ({ coin: { globalCryptoData } }: ApplicationState) => ({
  globalCryptoData
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalCrypto: () => {
      dispatch(fetchGlobalCryptoActions.request());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
