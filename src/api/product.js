import { getAuth } from "firebase/auth";
import api from "./baseUrl";

const ProductApi = {
  getProductsByKeyword: async (keyword) => {
    try {
      const response = await api.get(`/product/search?keyword=${keyword}`);

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No products found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      return null;
    }
  },

  getProductsWithFilter: async (categoryId) => {
    try {
      const response = await api.get("/product/filter", {
        params: { categoryId },
      });
      console.log("Products fetched successfully:", response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No products found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },

  addProduct: async (productData) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      // Get the ID token (access token) for the current user
      const accessToken = await user.getIdToken();

      const response = await api.post("/product", productData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Product added successfully:", response.data);
      return response.data;
    } catch (err) {
      console.error("Error adding product:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },

  updateProduct: async (productId, productData) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      // Get the ID token (access token) for the current user
      const accessToken = await user.getIdToken();

      const response = await api.put(`/product/${productId}`, productData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(
        `Product with ID ${productId} updated successfully:`,
        response.data
      );
      return response.data;
    } catch (err) {
      console.error("Error updating product:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },

  deleteProduct: async (productId) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      // Get the ID token (access token) for the current user
      const accessToken = await user.getIdToken();

      const response = await api.delete(`/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(`Product with ID ${productId} deleted successfully.`);
      console.log(response);
      return true;
    } catch (err) {
      console.error("Error deleting product:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },
};
export default ProductApi;
