import { getAuth } from "firebase/auth";
import api from "./baseUrl";

const OrderApi = {
  addOrder: async (orderData) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      // Get the ID token (access token) for the current user
      const accessToken = await user.getIdToken();

      const response = await api.post("/orders", orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Order added successfully:", response.data);
      return response.data;
    } catch (err) {
      console.error("Error adding order:", err);

      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      }
      return null;
    }
  },
};
export default OrderApi;
