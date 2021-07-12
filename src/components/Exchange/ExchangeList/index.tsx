import { useEffect, useState, FC } from 'react';
import { connect } from 'react-redux';
import PanelContainer from 'src/components/Commons/Panel';
import Paginator from 'src/components/Commons/List/Paginator';
import TableContainer from 'src/components/Commons/List/Table';
import { EXCHANGES_LIMIT_PER_PAGE, EXCHANGE_LIST_TEMPLATE } from 'src/constants/commons';
import { ExchangeForCoinRequest, ExchangePair, ExchangeResponse, UiExchange } from 'src/models/exchange';
import { ApplicationState } from 'src/reducers';
import { fetchExchangeForCoinActions, setIsLoadingExchanges } from 'src/store/exchange/actions';
import { formatUSD } from 'src/utils';

/**
 * Properties from component
 */
interface propsFromComponent {
  /**
   * Coin Id
   * @type {number}
   */
  coinId: number;
}

/**
 * Properties from state
 */
interface PropsFromState {
  /**
   * exchange obtained by coin id
   * @type {ExchangeResponse}
   */
  currentExchange: ExchangeResponse;
  /**
   * UI status
   * @type {UiExchange}
   */
  ui: UiExchange;
}

interface PropsFromDispatch {
  /**
   * Called when the component is initialized to get the exchanges
   * @param {ExchangeForCoinRequest} request Request to get the exchanges
   * @param {number} total Total count of exchanges
   */
  fetchExchangeForCoin: (request: ExchangeForCoinRequest, total?: number) => any;
}

export type Props = propsFromComponent & PropsFromState & PropsFromDispatch;

/**
 * Exchange list
 */
export const ExchangeList: FC<Props> = ({ coinId, currentExchange, ui, fetchExchangeForCoin }) => {

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

/**
 * @private
 * @param exchanges Exchange list
 * @returns Exchange list transformed
 */
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
