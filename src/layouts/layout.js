import { Outlet } from "react-router-dom";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";
import BottomNavBar from "../sections/bottomNavigation/bottomNavBar";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures the layout takes full height
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <BottomNavBar />
      <Footer />
    </div>
  );
};

export default Layout;
