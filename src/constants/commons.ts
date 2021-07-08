import { DropdownItem } from 'src/components/Commons/DropDown';

export const IMAGES_URL = 'https://www.coinlore.com';

export const LIMIT_PER_PAGE = 100;

export const PRICE_FILTER_OPTIONS: DropdownItem[] =
[
  {
    id: 1,
    label: '$0.00',
    value: 0
  },
  {
    id: 2,
    label: '$1,000,000,000.00',
    value: 1000000000.00
  },
  {
    id: 3,
    label: '$5,000,000,000.00',
    value: 5000000000.00
  },
  {
    id: 4,
    label: '$50,000,000,000.00',
    value: 50000000000.00
  },
  {
    id: 5,
    label: '$100,000,000,000.00',
    value: 100000000000.00
  },
  {
    id: 6,
    label: '$1,000,000,000,000.00',
    value: 1000000000000.00
  }
];
