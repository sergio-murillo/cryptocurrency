export const formatUSD = (amount: number) => {
  return '$ ' + Number(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
