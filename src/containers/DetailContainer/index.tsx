import React, { useCallback, useEffect } from 'react';
import Market from 'src/components/Market/MarketList';
import Exchange from 'src/components/Exchange/ExchangeList';
import { DetailContainer, DetailLists, DetailCoin, DetailTable } from './styles';
import CoinDetail from 'src/components/Coin/CoinDetail';
import { ApplicationState } from 'src/reducers';
import { connect } from 'react-redux';
import { fetchMarketForCoinActions } from 'src/store/market/actions';
import { fetchSpecificCoinActions } from 'src/store/coin/actions';
import { MarketResponse, Ticker } from 'src/models';
import { RouterState } from 'connected-react-router';

interface propsFromState {
  market: MarketResponse[];
  currentCoin: Ticker[];
  router?: RouterState;
}

interface propsFromDispatch {
  fetchMarkets: (id: number) => any;
  fetchSpecificCoin: (id: number) => any;
}

type AllProps = propsFromState & propsFromDispatch;

const Detail: React.FC<AllProps> = ({ market, currentCoin, router, fetchMarkets, fetchSpecificCoin }) => {

  const fetchInitialData = useCallback(() => {
    const coinId = +getId(router);
    fetchMarkets(coinId);
    fetchSpecificCoin(coinId);
  }, [router, fetchMarkets, fetchSpecificCoin]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <DetailContainer>
      <DetailCoin>
        <CoinDetail currentCoin={currentCoin[0] || {}}/>
        <DetailTable>
          <Exchange coinId={+getId(router)}/>
        </DetailTable>
      </DetailCoin>
      <DetailLists>
        <Market markets={market}/>
      </DetailLists>
    </DetailContainer>
  );
};

const mapStateToProps = ({ market: { market }, coin: { currentCoin }, router }: ApplicationState) => ({
  market,
  currentCoin,
  router
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMarkets: (id: number) => {
      dispatch(fetchMarketForCoinActions.request(id));
    },
    fetchSpecificCoin: (id: number) => {
      dispatch(fetchSpecificCoinActions.request(id));
    },
  };
};

const getId = (router?: RouterState<any>): string => router?.location.pathname.split('/')[2] || '0';

export default connect(mapStateToProps, mapDispatchToProps)(Detail);