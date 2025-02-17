import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import CustomTypography from "../../../typography/customTypography";
import { formatPrice } from "../../../../utils/formatPrize";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useTranslation } from "react-i18next";
import ShowMoreBtn from "../../../button/showMoreButton";

const ProductSelectOption = ({ selectList, prize, setPrize, setCartItem }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleSelectOption = (index, option) => {
    setCartItem((prev) => {
      let updatedSelect = [];

      if (selectedOption === index) {
        // If the same option is clicked again, remove it
        setSelectedOption(null);
        setPrize(prize - option.price);
      } else {
        // If switching options, remove the previous one and add the new one
        if (selectedOption !== null) {
          const previouslySelectedPrice = selectList[selectedOption].price;
          setPrize(prize - previouslySelectedPrice + option.price);
        } else {
          setPrize(prize + option.price);
        }
        setSelectedOption(index);
        updatedSelect = [option]; // Only one option can be selected at a time
      }

      return {
        ...prev,
        select: updatedSelect,
      };
    });
  };

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  const itemsToShow = showMore ? selectList : selectList.slice(0, 4);

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
        text={t("Select")}
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
      {itemsToShow.map((option, index) => (
        <Box
          key={index}
          onClick={() => handleSelectOption(index, option)}
          sx={{
            padding: "10px",
            borderRadius: 2,
            cursor: "pointer",
            border: "1px solid #ccc",
            backgroundColor:
              selectedOption === index
                ? theme.palette.primary.light
                : "transparent",
            transition: "0.3s",
            "&:hover": {
              border: `1px solid ${theme.palette.primary.main}`, // Primary border on hover
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          {selectedOption === index ? (
            <RadioButtonCheckedIcon
              sx={{ fontSize: "36px", color: theme.palette.primary.main }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              sx={{ fontSize: "36px", color: theme.palette.border.main }}
            />
          )}
          <Box marginLeft={"15px"}>
            <CustomTypography
              color={theme.palette.text.black}
              text={option.name}
              sx={{
                fontSize: "16px",
              }}
            />
            <CustomTypography
              color={theme.palette.text.green}
              text={"+ " + formatPrice(option.price)}
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            />
          </Box>
        </Box>
      ))}

      {selectList.length > 4 && (
        <ShowMoreBtn
          showMore={showMore}
          handleShowMoreToggle={handleShowMoreToggle}
        />
      )}
    </Box>
  );
};

export default ProductSelectOption;
