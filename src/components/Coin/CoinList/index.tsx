import React, { useEffect, useState } from 'react';
import Paginator from 'src/components/List/Paginator';
import Filter from 'src/components/List/Filter';
import PanelContainer from 'src/components/Commons/Panel';
import PercentageValue from 'src/components/Commons/PercentageValue';
import { CoinImage, CoinListContainer, TableContainer } from './styles';
import { AllCoinsRequest, AllCoinsResponse, Ticker, UiCoin } from 'src/models';
import { buildImageUrl } from 'src/helpers';
import { formatUSD } from 'src/utils';
import { connect } from 'react-redux';
import { fetchAllCoinsActions, setCoinsFiltered, setIsLoadingCoins } from 'src/store/coin/actions';
import { LIMIT_PER_PAGE, COIN_LIST_TEMPLATE } from 'src/constants/commons';
import { ApplicationState } from 'src/reducers';
import { buildCoinUrl } from 'src/helpers/url';
import { filterPricePerPage, filterTextPerPage } from 'src/utils/common';

interface PropsFromState {
  coins: AllCoinsResponse;
  coinsFiltered: Ticker[];
  ui: UiCoin;
}

interface PropsFromDispatch {
  fetchAllCoins: (request: AllCoinsRequest) => void;
  setCoinsFiltered: (coins: Ticker[]) => void;
}

export type Props = PropsFromState & PropsFromDispatch;

const CointList: React.FC<Props> = ({ coinsFiltered, coins, ui, fetchAllCoins, setCoinsFiltered }) => {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllCoins({ start: 1, limit: LIMIT_PER_PAGE });
  }, [fetchAllCoins]);

  const coinList = {
    ...COIN_LIST_TEMPLATE,
    items: getCoinItems(coinsFiltered),
    isLoading: ui.isLoadingCoins,
    totalColumns: 9,
  };

  const requestCoins = (page: number) => {
    fetchAllCoins({ start: (page - 1) * LIMIT_PER_PAGE, limit: LIMIT_PER_PAGE });
    setCurrentPage(page);
  };

  return (
    <CoinListContainer>
      <PanelContainer>
        <Filter
          submitText={(text) => setCoinsFiltered(filterTextPerPage(coins.data, text))}
          submitFilter={(filter) => filterPricePerPage(filter, coins.data, setCoinsFiltered)}></Filter>
        <TableContainer
          {...coinList}
          actionRow={(index: number) => window.open(buildCoinUrl(coins.data[index].id))}></TableContainer>
        <Paginator
          totalCount={coins.info.coins_num}
          currentPage={currentPage}
          pageSize={LIMIT_PER_PAGE}
          onPageChange={page => requestCoins(+page)}></Paginator>
      </PanelContainer>
    </CoinListContainer>
  );
};

const getCoinItems = (coins: Ticker[]) => (
  coins.map(coin => [
    coin.rank,
    <CoinImage src={buildImageUrl(coin.name.toLocaleLowerCase())} alt={coin.name}/>,
    `${coin.name} (${coin.symbol})`,
    formatUSD(+coin.price_usd),
    <PercentageValue value={+coin.percent_change_1h}/>,
    <PercentageValue value={+coin.percent_change_24h}/>,
    <PercentageValue value={+coin.percent_change_7d}/>,
    formatUSD(+coin.market_cap_usd),
    formatUSD(coin.volume24)
  ])
);

const mapStateToProps = ({ coin: { coins, ui, coinsFiltered } }: ApplicationState) => ({
  coins,
  ui,
  coinsFiltered,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCoins: (request: AllCoinsRequest) => {
      dispatch(fetchAllCoinsActions.request(request));
      dispatch(setIsLoadingCoins(true));
    },
    setCoinsFiltered: (coins: Ticker[]) => {
      dispatch(setCoinsFiltered(coins));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CointList);
