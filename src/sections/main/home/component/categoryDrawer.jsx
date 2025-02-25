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
import { DummyCategories } from "../../../../utils/dummyCateories";
import CategoryApi from "../../../../api/category";

// const categories = DummyCategories.map((category) => ({
//   name: category.name,
//   id: category.id,
// }));

const CategoryDrawer = ({
  open,
  setOpen,
  handleCategoryClick: handleCategoryClickHome,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomeSelected = location.pathname === "/";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await CategoryApi.getCategoryName();
      if (data) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleCategoryClick = (name, id) => {
    if (isHomeSelected) {
      handleCategoryClickHome(id);
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
            <ListItemText primary="Categories" sx={{ fontWeight: "bold" }} />
          </ListItem>
          <Divider />

          {categories.map((category) => (
            <ListItemButton
              key={category.id}
              onClick={() => handleCategoryClick(category.name, category.id)}
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
