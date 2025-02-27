import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const AdminDrawerIconList = ({
  menuItems,
  setSelectedMenu,
  open,
  selectedMenu,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const selectedBgColor = "#e1f0db"; // Light green for selected background
  const selectedHoverColor = "#c8e0be"; // Slightly darker on hover when selected
  const unselectedHoverColor = "#f5f5f5";

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => setSelectedMenu(item.text)}
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
              display: "flex",
              flexDirection: open ? "row" : "column",
              alignItems: "center",
              margin: open ? "5px 10px" : "5px",
              borderRadius: "8px",
              backgroundColor:
                selectedMenu === item.text ? selectedBgColor : "transparent",
              "&:hover": {
                backgroundColor:
                  selectedMenu === item.text
                    ? selectedHoverColor
                    : unselectedHoverColor,
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
                color:
                  selectedMenu === item.text
                    ? theme.palette.text.green
                    : theme.palette.text.lightGrey,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={t(item.text)}
              sx={{
                marginLeft: open ? "30px" : "0",
                opacity: 1,
                textAlign: "center",
                "& .MuiTypography-root": {
                  fontSize: open ? "16px" : "12px",
                  textAlign: "left",
                  fontWeight: "400",

                  color:
                    selectedMenu === item.text
                      ? theme.palette.text.green
                      : theme.palette.text.lightGrey,
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default AdminDrawerIconList;
