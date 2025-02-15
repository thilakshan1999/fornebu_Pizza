const formatPrice = (amount) => {
  return `${amount.toFixed(2).replace(".", ",")} kr`;
};

export { formatPrice };
