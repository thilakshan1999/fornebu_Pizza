import { Box } from "@mui/material";
import CategoryTable from "./components/table/categoryTable/categoryTable";
import CustomTypography from "../../../components/typography/customTypography";
import { useTheme } from "@emotion/react";
import AddItemButton from "../../../components/button/addItemButton";
import { useTranslation } from "react-i18next";

const CategorySection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
      <Box sx={{ display: "flex", marginBottom: "20px" }}>
        <CustomTypography
          text={t("Category")}
          align="centre"
          sx={{
            fontWeight: "600",
            color: theme.palette.text.black,
            fontSize: "24px",
            flexGrow: "1",
          }}
        />
        <AddItemButton text={t("Add Category")} />
      </Box>
      <CategoryTable />
    </Box>
  );
};

export default CategorySection;
