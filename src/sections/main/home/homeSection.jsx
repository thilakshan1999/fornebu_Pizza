import { useState, useEffect, useRef, useLayoutEffect } from "react";
import MenuBar from "./component/menu/menuBar";
import TittleCard from "./component/tittleCard/tittleCard";
import TittleCardMobile from "./component/tittleCardMobile/tittleCardMobile";
import { Outlet } from "react-router-dom";
import BottomNavBar from "../../bottomNavigation/bottomNavBar";
import CategoryDrawer from "./component/categoryDrawer";
import { Box } from "@mui/material";
import Cart from "./component/cart/cart";

const HomeSection = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const categoryRefs = useRef([]);
  const [cartHeight, setCartHeight] = useState(0);
  const menuBarRef = useRef(null);
  const titleCardRef = useRef(null);
  const timeoutRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const menuBarHeight = menuBarRef.current?.offsetHeight || 0;
      const titleCardHeight = titleCardRef.current?.offsetHeight || 0;
      const totalHeight = 15 + menuBarHeight + titleCardHeight;

      const handleHeightUpdate = () => {
        if (window.scrollY > totalHeight) {
          setCartHeight("calc(100% - 120px)");
        } else {
          setCartHeight(
            `calc(100% - 120px - ${totalHeight}px + ${window.scrollY}px)`
          );
        }
      };

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(handleHeightUpdate, 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array e

  const handleCategoryClick = (index) => {
    if (categoryRefs.current[index]) {
      categoryRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MenuBar
        isFixed={isFixed}
        handleCategoryClick={handleCategoryClick}
        ref={menuBarRef}
      />
      <TittleCard isFixed={isFixed} ref={titleCardRef} />
      <TittleCardMobile />
      <Box
        sx={{
          display: "flex",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Outlet context={{ categoryRefs }} />
        <Cart height={cartHeight} />
      </Box>
      <BottomNavBar id="bottomNav" setOpen={setOpen} />
      <CategoryDrawer
        open={open}
        setOpen={setOpen}
        handleCategoryClick={handleCategoryClick}
      />
    </>
  );
};
export default HomeSection;
