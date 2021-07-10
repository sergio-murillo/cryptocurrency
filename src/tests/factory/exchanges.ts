import * as Factory from "factory.ts";
import { ExchangePair } from "../../models/exchange";
import { getRandomArbitrary } from "../../utils/common";

export const ExchangeMock = Factory.Sync.makeFactory<ExchangePair>({
  base: 'BNB',
  quote: 'USDT',
  volume: Factory.each(() => getRandomArbitrary(100, 1000)),
  price: Factory.each(() => getRandomArbitrary(100, 1000)),
  price_usd: Factory.each(() => getRandomArbitrary(100, 1000)),
  time: 1553469901
});
