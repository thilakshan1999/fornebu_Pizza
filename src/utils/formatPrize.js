const formatPrice = (amount) => {
  return `${amount.toFixed(2).replace(".", ",")} kr`;
};

const formatAddPrice = (amount) => {
  return `+ ${amount.toFixed(2).replace(".", ",")}`;
};

export { formatPrice, formatAddPrice };
