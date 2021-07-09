import { Ticker } from 'src/models';

export const normalizeText = (text: string) => text.toLocaleLowerCase();

export const filterTextPerPage = (data: Ticker[], text: string, setCoinsFiltered: (coins: Ticker[]) => void) => {
  const coinsFiltered = data.filter(({ name }) => normalizeText(name).includes(normalizeText(text)));

  setCoinsFiltered(coinsFiltered);
};

export const filterPricePerPage = ({ firstFilter, secondFilter }, data: Ticker[], setCoinsFiltered: (coins: Ticker[]) => void) => {
  const filterCondition = (price: number): boolean => {
    if (!firstFilter) {
      return price <= secondFilter;
    }

    if (!secondFilter) {
      return price >= firstFilter;
    }

    return price >= firstFilter && price <= secondFilter;
  };

  const coinsFiltered = data.filter(({ price_usd }) => filterCondition(+price_usd));

  setCoinsFiltered(coinsFiltered);
};