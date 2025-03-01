import { useTheme } from "@emotion/react";
import { Menu } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useTranslation } from "react-i18next";
import MenuItemComponent from "../MenuItemComponent";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProductTableItemMenu = ({
  menuAnchorEl,
  setMenuAnchorEl,
  setOpenDeleteDialog,
  setOpenEditDialog,
  setOpenViewDialog,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={menuAnchorEl}
      open={Boolean(menuAnchorEl)}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        "& .MuiPaper-root": {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: `1px solid ${theme.palette.grey[300]}`,
        },
      }}
    >
      <MenuItemComponent
        icon={<VisibilityIcon />}
        text={t("View")}
        onClick={() => {
          handleMenuClose();
          setOpenViewDialog(true);
        }}
      />

      <MenuItemComponent
        icon={<EditIcon />}
        text={t("Edit")}
        onClick={() => {
          handleMenuClose();
          setOpenEditDialog(true);
        }}
      />

      <MenuItemComponent
        color={theme.palette.text.red}
        icon={<DeleteIcon />}
        text={t("Delete")}
        onClick={() => {
          setOpenDeleteDialog(true);
          handleMenuClose();
        }}
      />
    </Menu>
  );
};
export default ProductTableItemMenu;
