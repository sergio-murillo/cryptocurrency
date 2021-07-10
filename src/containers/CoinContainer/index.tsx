import React, { useCallback, useEffect }  from 'react';
import CoinList from 'src/components/Coin/CoinList';
import MarketOverview from 'src/components/Market/MarketOverview';
import { connect } from 'react-redux';
import { ApplicationState } from 'src/reducers';
import { GlobalCryptoDataResponse } from 'src/models/coin';
import { fetchGlobalCryptoActions } from 'src/store/coin/actions';
import { CoinContainer, CoinMarketContainer, CoinListContainer } from './styles';

interface PropsFromState {
  globalCryptoData: GlobalCryptoDataResponse[];
}

interface PropsFromState {
  fetchGlobalCrypto: () => void;
}

export type Props = PropsFromState & PropsFromState;

const Coin: React.FC<Props> = ({ globalCryptoData, fetchGlobalCrypto }) => {

  const fetchInitialData = useCallback(() => {
    fetchGlobalCrypto();
  }, [fetchGlobalCrypto]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <CoinContainer>
      <CoinListContainer>
        <CoinList/>
      </CoinListContainer>
      <CoinMarketContainer>
        <MarketOverview globalData={globalCryptoData[0] || {}}/>
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
