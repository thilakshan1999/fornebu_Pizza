import { Outlet } from "react-router-dom";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";
import LogInDialogBox from "../sections/authentication/logInDialogBox";
import SignInDialogBox from "../sections/authentication/signInDialogBox";

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
      <Footer />
      <LogInDialogBox />
      <SignInDialogBox />
    </div>
  );
};

export default Layout;
