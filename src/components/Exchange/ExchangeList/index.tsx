import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PanelContainer from 'src/components/Commons/Panel';
import Paginator from 'src/components/List/Paginator';
import TableContainer from 'src/components/List/Table';
import { EXCHANGES_LIMIT_PER_PAGE, EXCHANGE_LIST_TEMPLATE } from 'src/constants/commons';
import { ExchangeForCoinRequest, ExchangePair, ExchangeResponse, UiExchange } from 'src/models/exchange';
import { ApplicationState } from 'src/reducers';
import { fetchExchangeForCoinActions, setIsLoadingExchanges } from 'src/store/exchange/actions';
import { formatUSD } from 'src/utils';

interface propsFromComponent {
  coinId: number;
}

interface PropsFromState {
  currentExchange: ExchangeResponse;
  ui: UiExchange;
}

interface PropsFromDispatch {
  fetchExchangeForCoin: (request: ExchangeForCoinRequest, total?: number) => any;
}

type Props = propsFromComponent & PropsFromState & PropsFromDispatch;

const ExchangeList: React.FC<Props> = ({ coinId, currentExchange, ui, fetchExchangeForCoin }) => {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchExchangeForCoin({ id: coinId, start: 1, limit: EXCHANGES_LIMIT_PER_PAGE });
  }, [fetchExchangeForCoin, coinId]);
  
  const exchangeList = {
    ...EXCHANGE_LIST_TEMPLATE,
    items: getExchangeItems(currentExchange.data),
    isLoading: ui.isLoadingExchanges
  };

  const requestExchanges = (page: number) => {
    fetchExchangeForCoin({
      id: coinId,
      start: (page - 1) * EXCHANGES_LIMIT_PER_PAGE,
      limit: EXCHANGES_LIMIT_PER_PAGE 
    }, currentExchange.total_counts);
    setCurrentPage(page);
  };

  return (
    <PanelContainer title="Cambio a USD">
        <TableContainer
          {...exchangeList}
          totalColumns={exchangeList.headers.length}
          actionRow={(index: number) => console.info(currentExchange.data[index])}></TableContainer>
        <Paginator
          totalCount={currentExchange.total_counts}
          currentPage={currentPage}
          pageSize={EXCHANGES_LIMIT_PER_PAGE}
          onPageChange={page => requestExchanges(+page)}></Paginator>
    </PanelContainer>
  );
};

const getExchangeItems = (exchanges: ExchangePair[]) => (
  exchanges.map(exchange => [
    exchange.base,
    exchange.quote,
    formatUSD(exchange.price_usd),
  ])
);

const mapStateToProps = ({  exchange: { currentExchange, ui }}: ApplicationState) => ({
  currentExchange,
  ui,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExchangeForCoin: (request: ExchangeForCoinRequest, total = 0) => {
      dispatch(fetchExchangeForCoinActions.success({ data: [], total_counts: total }));
      dispatch(fetchExchangeForCoinActions.request(request));
      dispatch(setIsLoadingExchanges(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeList);
