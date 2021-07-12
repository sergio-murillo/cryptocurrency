export const formatUSD = (amount: number) => {
  return '$ ' + Number(amount || 0)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
