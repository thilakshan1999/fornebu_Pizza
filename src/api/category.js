import { getAuth } from "firebase/auth";
import api from "./baseUrl";

const CategoryApi = {
  getBasicCategoryHasProducts: async () => {
    try {
      const response = await api.get("/categories/simple");

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No categories found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      return null;
    }
  },

  getBasicCategory: async () => {
    try {
      const response = await api.get("/categories/simple/all");

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No categories found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      }
      return null;
    }
  },

  getCategoriesHasProducts: async () => {
    try {
      const response = await api.get("/categories");

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No categories found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      return null;
    }
  },

  getCategoriesById: async (id) => {
    try {
      const response = await api.get(`/categories/${id}`);

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("No category found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching category:", err);
      return null;
    }
  },

  addCategory: async (categoryName) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      // Get the ID token (access token) for the current user
      const accessToken = await user.getIdToken();

      const response = await api.post(
        "/categories",
        {
          name: categoryName,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("Failed to create category.");
        return null;
      }
    } catch (err) {
      console.error("Error creating category:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },

  updateCategory: async (categoryId, categoryName) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      // Get the ID token (access token) for the current user
      const accessToken = await user.getIdToken();

      const response = await api.put(
        `/categories/${categoryId}`,
        {
          name: categoryName,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response);
      if (response.data) {
        return response.data;
      } else {
        console.error("Failed to update category.");
        return null;
      }
    } catch (err) {
      console.error("Error updating category:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },

  deleteCategory: async (categoryId) => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is authenticated.");
        return null;
      }

      // Get the ID token (access token) for the current user
      const accessToken = await user.getIdToken();

      const response = await api.delete(`/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Category deleted successfully:", response);
      return true;
    } catch (err) {
      console.error("Error deleting category:", err);
      if (!err.response) {
        throw new Error("Network error: Unable to connect to the server.");
      } else {
        throw new Error("Server error. Please try again later.");
      }
    }
  },
};
export default CategoryApi;
