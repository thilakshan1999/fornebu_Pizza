import { Box, TextField, useTheme } from "@mui/material";
import CustomTypography from "../../../typography/customTypography";
import { useTranslation } from "react-i18next";

const ProductOrderNote = ({ setCartItem }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const handleNoteChange = (event) => {
    const newNote = event.target.value;
    setCartItem((prev) => ({
      ...prev,
      note: newNote,
    }));
  };

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
        text={t("Order Note")}
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />

      <TextField
        id="outlined-multiline-flexible"
        multiline
        maxRows={4}
        minRows={4}
        placeholder="Leave a comment on your order"
        sx={{
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
        onChange={handleNoteChange}
      />
    </Box>
  );
};
export default ProductOrderNote;
