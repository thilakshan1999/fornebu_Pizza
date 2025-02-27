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
};
export default ProductApi;
