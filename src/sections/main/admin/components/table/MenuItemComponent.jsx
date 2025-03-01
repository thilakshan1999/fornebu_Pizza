import { Box, Icon, MenuItem } from "@mui/material";
import CustomTypography from "../../../../../components/typography/customTypography";

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

export default MenuItemComponent;
