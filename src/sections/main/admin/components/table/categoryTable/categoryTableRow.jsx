import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import CategoryTableItemMenu from "./categoryTableItemMenu";
import CustomDeleteDialog from "../../../../../../components/dialog/customDeleteDialog";
import { useTranslation } from "react-i18next";
import CategoryEditDialog from "./drawer/categortEditDialog";
import CategoryApi from "../../../../../../api/category";
import showSuccessToast from "../../../../../../components/toast/showSucessToast";
const CategoryTableRow = ({ category, fetchCategories }) => {
  const { t } = useTranslation();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteCategory = async () => {
    setLoading(true);
    setError(null);
    try {
      const success = await CategoryApi.deleteCategory(category.id);
      if (success) {
        console.log("Category deleted successfully");
        setOpenDeleteDialog(false);
        fetchCategories();
        showSuccessToast(t("Category deleted successfully."));
      } else {
        setError("Failed to delete category. Please try again.");
      }
    } catch (err) {
      console.error("Error deleting category:", err);
      setError("Error deleting category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (openDeleteDialog) {
      setLoading(false);
      setError(null);
    }
  }, [openDeleteDialog]);

  return (
    <TableRow
      key={category.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {category.id}
      </TableCell>
      <TableCell align="left">{category.name}</TableCell>
      <TableCell align="center">{category.productCount}</TableCell>
      <TableCell align="right">
        <IconButton aria-label="menu" size="small" onClick={handleMenuClick}>
          <MoreVert />
        </IconButton>
      </TableCell>
      <CategoryTableItemMenu
        menuAnchorEl={menuAnchorEl}
        setMenuAnchorEl={setMenuAnchorEl}
        setOpenDeleteDialog={setOpenDeleteDialog}
        setOpenEditDialog={setOpenEditDialog}
      />
      <CustomDeleteDialog
        openDialog={openDeleteDialog}
        setOpenDialog={setOpenDeleteDialog}
        onClick={() => {
          handleDeleteCategory();
        }}
        tittleText={t("Confirm Deletion")}
        msgText={t("Are you sure you want to delete this category?")}
        loading={loading}
        error={error}
      />
      <CategoryEditDialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        category={category}
        onCategoryEdit={fetchCategories}
      />
    </TableRow>
  );
};
export default CategoryTableRow;
