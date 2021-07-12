import * as Factory from 'factory.ts';
import { MarketResponse } from 'src/models';
import { getRandomArbitrary } from 'src/utils/common';

export const MarketMock = Factory.Sync.makeFactory<MarketResponse>({
  name: 'BitForex',
  base: 'BTC',
  quote: 'USDT',
  price: Factory.each(() => getRandomArbitrary(100, 1000)),
  price_usd: Factory.each(() => getRandomArbitrary(100, 1000)),
  volume: Factory.each(() => getRandomArbitrary(100, 1000)),
  volume_usd: Factory.each(() => getRandomArbitrary(100, 1000)),
  time: 1553469901
});
