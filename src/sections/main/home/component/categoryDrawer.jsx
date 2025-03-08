import React, { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryApi from "../../../../api/category";
import { useTranslation } from "react-i18next";

const CategoryDrawer = ({
  open,
  setOpen,
  handleCategoryClick: handleCategoryClickHome,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomeSelected = location.pathname === "/";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await CategoryApi.getBasicCategoryHasProducts();
      if (data) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleCategoryClick = (name, id, index) => {
    if (isHomeSelected) {
      console.log("click id");
      console.log(index);
      handleCategoryClickHome(index);
    } else {
      navigate(
        `/${name
          .replace(/[^a-zA-Z0-9\s]/g, "")
          .replace(/\s+/g, "-")
          .toLowerCase()}/${id}`
      );
    }
    setOpen(false);
  };

  return (
    <>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <ListItemText
              primary={t("Categories")}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: "bold",
                },
              }}
            />
          </ListItem>
          <Divider />

          {categories.map((category, index) => (
            <ListItemButton
              key={category.id}
              onClick={() =>
                handleCategoryClick(category.name, category.id, index)
              }
            >
              <ListItemText primary={category.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default CategoryDrawer;
