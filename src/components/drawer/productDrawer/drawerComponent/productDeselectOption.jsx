import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import CustomTypography from "../../../typography/customTypography";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useTranslation } from "react-i18next";
import ShowMoreBtn from "../../../button/showMoreButton";

const ProductDeselectOption = ({ deselectList, setCartItem }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const handleSelectOption = (index, option) => {
    setSelectedOptions((prevSelected) => {
      let newSelected;
      if (prevSelected.includes(index)) {
        newSelected = prevSelected.filter(
          (optionIndex) => optionIndex !== index
        );
        setCartItem((prev) => ({
          ...prev,
          deselectIngredients: prev.deselectIngredients.filter(
            (item) => item !== option
          ),
        }));
      } else {
        newSelected = [...prevSelected, index];
        setCartItem((prev) => ({
          ...prev,
          deselectIngredients: [...prev.deselectIngredients, option],
        }));
      }
      return newSelected;
    });
  };

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  const itemsToShow = showMore ? deselectList : deselectList.slice(0, 4);

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
        text={t("Deselect Ingredients")}
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
            backgroundColor: selectedOptions.includes(index)
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
          {selectedOptions.includes(index) ? (
            <CheckBoxIcon
              sx={{ fontSize: "36px", color: theme.palette.primary.main }}
            />
          ) : (
            <CheckBoxOutlineBlankIcon
              sx={{ fontSize: "36px", color: theme.palette.border.main }}
            />
          )}
          <Box marginLeft={"15px"}>
            <CustomTypography
              color={theme.palette.text.black}
              text={option}
              sx={{
                fontSize: "16px",
              }}
            />
          </Box>
        </Box>
      ))}

      {deselectList.length > 4 && (
        <ShowMoreBtn
          showMore={showMore}
          handleShowMoreToggle={handleShowMoreToggle}
        />
      )}
    </Box>
  );
};

export default ProductDeselectOption;
