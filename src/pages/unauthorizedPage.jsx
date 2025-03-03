import { Helmet } from "react-helmet";
import UnauthorizedSection from "../sections/main/unauthorized/unauthorizedSection";

const UnauthorizedPage = () => {
  return (
    <>
      <Helmet>
        <title>Unauthorized</title>
      </Helmet>
      <UnauthorizedSection />
    </>
  );
};

export default UnauthorizedPage;
