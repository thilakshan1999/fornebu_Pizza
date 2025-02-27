import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import CustomTypography from "../../../typography/customTypography";
import ShowMoreBtn from "../../../button/showMoreButton";
import ProductExtraCard from "./productExtraCard";

const ProductExtraOption = ({
  id,
  extraList,
  setPrize,
  tittle,
  setCartItem,
}) => {
  const theme = useTheme();

  const [showMore, setShowMore] = useState(false);

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  const filteredList =
    id === "dressing"
      ? extraList
      : extraList.filter((option) => option.stock > 0);

  const itemsToShow = showMore ? filteredList : filteredList.slice(0, 4);

  return (
    <Box
      display="flex"
      gap={2}
      padding={"15px"}
      flexDirection={"column"}
      sx={{
        borderBottom: "1px solid",
        borderColor: theme.palette.border.main,
      }}
    >
      <CustomTypography
        color={theme.palette.text.black}
        text={tittle}
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
      {itemsToShow.map((option, index) => (
        <ProductExtraCard
          id={id}
          index={index}
          option={option}
          setPrize={setPrize}
          setCartItem={setCartItem}
        />
      ))}

      {filteredList.length > 4 && (
        <ShowMoreBtn
          showMore={showMore}
          handleShowMoreToggle={handleShowMoreToggle}
        />
      )}
    </Box>
  );
};
export default ProductExtraOption;
