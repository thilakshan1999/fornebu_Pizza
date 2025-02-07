export const storeHours = {
  Monday: { open: "11:00", close: "22:00" },
  Tuesday: { open: "11:00", close: "22:00" },
  Wednesday: { open: "11:00", close: "22:00" },
  Thursday: { open: "11:00", close: "22:00" },
  Friday: { open: "11:00", close: "22:00" },
  Saturday: { open: "11:00", close: "22:00" },
  Sunday: { open: "11:00", close: "22:00" },
};

// Function to get today's store hours
export const getTodayHours = () => {
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  return storeHours[today] || { open: "Closed", close: "Closed" };
};

export const isShopOpen = () => {
  const { open, close } = getTodayHours(); // Get today's opening hours

  if (open === "Closed" || close === "Closed") {
    return false; // Shop is closed all day
  }

  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes
  const [openHour, openMinute] = open.split(":").map(Number);
  const [closeHour, closeMinute] = close.split(":").map(Number);
  const openTime = openHour * 60 + openMinute; // Convert open time to minutes
  const closeTime = closeHour * 60 + closeMinute; // Convert close time to minutes

  return currentTime >= openTime && currentTime < closeTime;
};
