const getStatusStyles = (status) => {
  let background, text;
  const cleanedStatus = status.trim();

  switch (cleanedStatus) {
    case "pending":
      background = "#FFD3B6"; // Light orange
      text = "#FF8C00"; // Dark orange
      break;
    case "confirmed":
      background = "#C3E6CB"; // Light green
      text = "#155724"; // Dark green
      break;
    case "inProgress":
      background = "#FFD966"; // Light yellow
      text = "#856404"; // Dark yellow
      break;
    case "readyForPickUp":
      background = "#B8DAFF"; // Light blue
      text = "#004085"; // Dark blue
      break;
    case "completed":
      background = "#D4EDDA"; // Light green (similar to confirmed)
      text = "#155724"; // Dark green (similar to confirmed)
      break;
    case "cancelled":
      background = "#F8D7DA"; // Light red
      text = "#721C24"; // Dark red
      break;
    default:
      background = "#FFFFFF"; // Default white background
      text = "#000000"; // Default black text
      break;
  }

  return { background, text };
};

export default getStatusStyles;
