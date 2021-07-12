import { useCallback, useEffect, FC }  from 'react';
import CoinList from 'src/components/Coin/CoinList';
import MarketOverview from 'src/components/Market/MarketOverview';
import { connect } from 'react-redux';
import { ApplicationState } from 'src/reducers';
import { GlobalCryptoDataResponse } from 'src/models/coin';
import { fetchGlobalCryptoActions } from 'src/store/coin/actions';
import { CoinContainer, CoinMarketContainer, CoinListContainer } from './styles';

/**
 * Properties from state
 */
interface PropsFromState {
  /**
   * Global cryptocurrency data
   * @type {GlobalCryptoDataResponse[]}
   */
  globalCryptoData: GlobalCryptoDataResponse[];
}

/**
 * Properties from dispatcher
 */
interface PropsFromDispatch {
   /**
   * Called when the component is initialized to get global data
   */
  fetchGlobalCrypto: () => void;
}

export type Props = PropsFromState & PropsFromDispatch;

/**
 * Container to display cryptocurrency list and global market summary
 */
export const Coin: FC<Props> = ({ globalCryptoData, fetchGlobalCrypto }) => {

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
