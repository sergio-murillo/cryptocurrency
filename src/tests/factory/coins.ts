import * as Factory from "factory.ts";
import { Ticker, GlobalCryptoDataResponse } from '../../models';
import { getRandomArbitrary } from "../../utils/common";

export const CoinMock = Factory.Sync.makeFactory<Ticker>({
  id: '1',
  symbol: 'BTC',
  name: 'Bitcoin',
  nameid: 'bitcoin',
  rank: 1,
  price_usd: '31254',
  percent_change_24h: '0.12',
  percent_change_1h: '0.15',
  percent_change_7d: '0.18',
  market_cap_usd: '45454545',
  volume24: 454511515.12,
  volume24a: 45454545.1245,
  csupply: '454515155',
  price_btc: '1.00',
  tsupply: '41545',
  msupply: '4545151'
});

export const GlobalDataMock = Factory.Sync.makeFactory<GlobalCryptoDataResponse>({
  coins_count: Factory.each(() => getRandomArbitrary(100, 1000)),
  active_markets: Factory.each(() => getRandomArbitrary(100, 1000)),
  total_mcap: Factory.each(() => getRandomArbitrary(100, 1000)),
  total_volume: Factory.each(() => getRandomArbitrary(100, 1000)),
  btc_d: '42.3',
  eth_d: '10.3',
  mcap_change: '12.12',
  volume_change: '0.56',
  avg_change_percent: Factory.each(() => getRandomArbitrary(100, 1000)),
  volume_ath: Factory.each(() => getRandomArbitrary(100, 1000)),
  mcap_ath: Factory.each(() => getRandomArbitrary(100, 1000)),
});