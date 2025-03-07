const formatCamelCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Adds space between camelCase words
    .replace(/^./, (char) => char.toUpperCase()); // Capitalizes the first letter
};

export default formatCamelCase;
