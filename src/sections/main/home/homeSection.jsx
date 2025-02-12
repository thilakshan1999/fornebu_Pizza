import { useState, useEffect } from "react";
import HeaderContent from "./component/body/headerContent";
import MenuBar from "./component/menu/menuBar";
import TittleCard from "./component/tittleCard/tittleCard";
import TittleCardMobile from "./component/tittleCardMobile/tittleCardMobile";

const HomeSection = () => {
  const [isFixed, setIsFixed] = useState(false);

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

  return (
    <>
      <MenuBar isFixed={isFixed} />
      <TittleCard isFixed={isFixed} />
      <TittleCardMobile />
      <HeaderContent />
    </>
  );
};
export default HomeSection;
