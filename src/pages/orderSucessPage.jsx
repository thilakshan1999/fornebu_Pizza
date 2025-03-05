import { Helmet } from "react-helmet";
import OrderSuccessSection from "../sections/main/orderSucess/orderSucessSection";

const OrderSuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>OrderSuccess</title>
      </Helmet>
      <OrderSuccessSection />
    </>
  );
};

export default OrderSuccessPage;
