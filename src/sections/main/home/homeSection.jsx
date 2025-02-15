import { useState, useEffect, useRef } from "react";
import MenuBar from "./component/menu/menuBar";
import TittleCard from "./component/tittleCard/tittleCard";
import TittleCardMobile from "./component/tittleCardMobile/tittleCardMobile";
import { Outlet } from "react-router-dom";
import BottomNavBar from "../../bottomNavigation/bottomNavBar";
import CategoryDrawer from "./component/categoryDrawer";

const HomeSection = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (index) => {
    if (categoryRefs.current[index]) {
      categoryRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MenuBar isFixed={isFixed} handleCategoryClick={handleCategoryClick} />
      <TittleCard isFixed={isFixed} />
      <TittleCardMobile />
      <Outlet context={{ categoryRefs }} />
      <BottomNavBar setOpen={setOpen} />
      <CategoryDrawer
        open={open}
        setOpen={setOpen}
        handleCategoryClick={handleCategoryClick}
      />
    </>
  );
};
export default HomeSection;
