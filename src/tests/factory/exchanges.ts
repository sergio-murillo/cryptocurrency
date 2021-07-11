import * as Factory from "factory.ts";
import { AllExchangeResponse, ExchangePair } from "../../models/exchange";
import { getRandomArbitrary } from "../../utils/common";

export const ExchangeMock = Factory.Sync.makeFactory<ExchangePair>({
  base: 'BNB',
  quote: 'USDT',
  volume: Factory.each(() => getRandomArbitrary(100, 1000)),
  price: Factory.each(() => getRandomArbitrary(100, 1000)),
  price_usd: Factory.each(() => getRandomArbitrary(100, 1000)),
  time: 1553469901
});


export const AllExchangeMock = Factory.Sync.makeFactory<AllExchangeResponse>({
  '1': {
    id: '1',
    name: 'Binance',
    name_id: 'binance',
    url: 'https:\/\/www.binance.com',
    country: 'Japan',
    date_live: '01-01-2021',
    date_added: '01-01-2021',
    usdt: '0.15',
    fiat: '0.00',
    auto: '0.00',
    volume_usd: 1515151551
  }
});