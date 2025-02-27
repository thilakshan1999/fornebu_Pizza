import React from "react";
import { Helmet } from "react-helmet";
import AdminSection from "../sections/main/admin/adminSection";

const AdminPage = () => {
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <AdminSection />
    </>
  );
};

export default AdminPage;
