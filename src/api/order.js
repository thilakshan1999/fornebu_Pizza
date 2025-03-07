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

  getOrdersByUserId: async (uid) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      const accessToken = await user.getIdToken();

      const response = await api.get(`/orders/user/${uid}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No orders found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      return null;
    }
  },

  getOrdersByStatus: async (status) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      const accessToken = await user.getIdToken();

      const response = await api.get(`/orders/status/${status}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No orders found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },

  getOrdersById: async (orderId) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      const accessToken = await user.getIdToken();

      const response = await api.get(`/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No order found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching order:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },

  updateOrderStatus: async (orderId, status) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      const accessToken = await user.getIdToken();

      const response = await api.patch(`/orders/${orderId}/status`, null, {
        params: { status: status },
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add access token to headers
        },
      });

      console.log(response);
      if (response.data) {
        return response.data; // Successfully updated
      } else {
        console.error("Failed to update order status.");
        return null;
      }
    } catch (err) {
      console.error("Error updating order status:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },

  updateOrderPayment: async (orderId) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      const accessToken = await user.getIdToken();

      const response = await api.patch(`/orders/${orderId}/payment`, null, {
        params: { isPaid: true },
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add access token to headers
        },
      });

      console.log(response);
      if (response.data) {
        return response.data; // Successfully updated
      } else {
        console.error("Failed to update order status.");
        return null;
      }
    } catch (err) {
      console.error("Error updating order status:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },
};
export default OrderApi;
