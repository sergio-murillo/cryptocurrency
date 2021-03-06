import { DropdownItem } from 'src/components/Commons/DropDown';
import { Table } from 'src/models/commons';

export const IMAGES_URL = 'https://www.coinlore.com';

export const IMAGES_C1_URL = 'https://c1.coinlore.com';

export const LIMIT_PER_PAGE = 100;

export const EXCHANGES_LIMIT_PER_PAGE = 50;

export const PRICE_FILTER_OPTIONS: DropdownItem[] =
[
  {
    id: 1,
    label: '$0.00',
    value: 0
  },
  {
    id: 2,
    label: '$100.00',
    value: 100.00
  },
  {
    id: 3,
    label: '$200.00',
    value: 200.00
  },
  {
    id: 4,
    label: '$300.00',
    value: 300.00
  },
  {
    id: 5,
    label: '$400.00',
    value: 400.00
  },
  {
    id: 6,
    label: '$1,000.00',
    value: 1000.00
  }
];

export const COIN_LIST_TEMPLATE: Table = {
  headers: [{ title: 'Posición' }, { title: 'Moneda', colspan: 2 }, { title: 'Precio (USD)' }, { title: '% 1h' }, { title: '% 24h' },
    { title: '% 7d' }, { title: 'Mercado Capital' }, { title: 'Volumen 24h'}
  ],
  items: [],
  isLoading: true,
};

export const MARKET_LIST_TEMPLATE: Table = {
  headers: [{ title: 'Mercad' }, { title: 'Par' }, { title: 'Precio (USD)' }, { title: 'Volumen (USD)' }],
  items: [],
  isLoading: false,
};

export const EXCHANGE_LIST_TEMPLATE: Table = {
  headers: [{ title: 'Base' }, { title: 'Cotiza' }, { title: 'Precio (USD)' }],
  items: [],
  isLoading: false,
};
