import { useTheme } from "@emotion/react";
import { Box, Icon, Menu, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomTypography from "../../../../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";

const MenuItemComponent = ({ color, icon, text, onClick }) => {
  return (
    <MenuItem
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        margin: "0px 8px",
        borderRadius: "8px", // Corner radius
        color: color,
      }}
    >
      <Box>
        <Icon
          size="small"
          sx={{
            marginRight: 2,
          }}
        >
          {icon}
        </Icon>
      </Box>

      <CustomTypography
        text={text}
        align="left"
        sx={{
          fontWeight: "500",
          color: color,
          fontSize: "14px",
        }}
      />
    </MenuItem>
  );
};

const CategoryTableItemMenu = ({
  menuAnchorEl,
  setMenuAnchorEl,
  setOpenDeleteDialog,
  setOpenEditDialog,
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
export default CategoryTableItemMenu;
