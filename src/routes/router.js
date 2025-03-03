import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import HomePage from "../pages/homePage";
import HomeContent from "../sections/main/home/component/body/homeContent";
import CategoryContent from "../sections/main/home/component/body/categoryContent";
import SearchContent from "../sections/main/home/component/body/searchContent";
import MobileCartPage from "../pages/mobileCartPage";
import AdminPage from "../pages/adminPage";
import UnauthorizedPage from "../pages/unauthorizedPage";
import { useAuth } from "../provider/AuthProvider";
import CheckoutPage from "../pages/checkoutPage";

const Router = () => {
  const { checkIfUserIsAdmin } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HomePage />}>
          <Route index element={<HomeContent />} />
          <Route
            path="/:categoryName/:categoryId"
            element={<CategoryContent />}
          />
          <Route path="/search/:searchKeyword" element={<SearchContent />} />
        </Route>
        <Route path="/cart" element={<MobileCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
      <Route
        path="/admin"
        element={checkIfUserIsAdmin() ? <AdminPage /> : <UnauthorizedPage />}
      />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
    </Routes>
  );
};
export default Router;
