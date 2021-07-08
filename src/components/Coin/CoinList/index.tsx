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
import { LIMIT_PER_PAGE } from 'src/constants/commons';
import { ApplicationState } from 'src/reducers';
import { normalizeText } from 'src/utils/common';
import { Table } from 'src/models/commons';

interface propsFromState {
  coins: AllCoinsResponse;
  coinsFiltered: Ticker[];
  ui: UiCoin;
}

interface propsFromDispatch {
  fetchAllCoins: (request: AllCoinsRequest) => any;
  setCoins: (coins: Ticker[]) => any;
}

type Props = propsFromState & propsFromDispatch;

let coinList: Table = {
  headers: [{ title: 'Ranking' }, { title: 'Coin', colspan: 2 }, { title: 'Price (USD)' }, { title: '% 1h' }, { title: '% 24h' },
    { title: '% 7d' }, { title: 'Market Cap' }, { title: '24h Volume'}
  ],
  items: [],
  isLoading: true,
};

const CointList: React.FC<Props> = ({ coinsFiltered, coins, ui, fetchAllCoins, setCoins }) => {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllCoins({ start: 1, limit: LIMIT_PER_PAGE });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  coinList = {
    ...coinList,
    items: getCoinItems(coinsFiltered),
    isLoading: ui.isLoadingCoins
  };

  const requestCoins = (page: number) => {
    fetchAllCoins({ start: (page - 1) * LIMIT_PER_PAGE, limit: LIMIT_PER_PAGE });
    setCurrentPage(page);
  };

  const filterTextPerPage = (text: string) => {
    const coinsFiltered = coins.data.filter(({ name }) => normalizeText(name).includes(normalizeText(text)));

    setCoins(coinsFiltered);
  };

  const filterPricePerPage = ({ firstFilter, secondFilter }) => {
    const filterCondition = (price: number): boolean => {
      if (!firstFilter) {
        return price <= secondFilter;
      }

      if (!secondFilter) {
        return price >= firstFilter;
      }

      return price >= firstFilter && price <= secondFilter;
    };

    const coinsFiltered = coins.data.filter(({ price_usd }) => filterCondition(+price_usd));

    setCoins(coinsFiltered);
  };

  return (
    <CoinListContainer>
      <PanelContainer>
        <Filter
          submitText={(text) => filterTextPerPage(text)}
          submitFilter={(filter) => filterPricePerPage(filter)}></Filter>
        <TableContainer {...coinList} totalColumns={9}></TableContainer>
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
    setCoins: (coins: Ticker[]) => {
      dispatch(setCoinsFiltered(coins));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CointList);
