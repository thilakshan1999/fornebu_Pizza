import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import CategoryTableItemMenu from "./categoryTableItemMenu";
import CustomDeleteDialog from "../../../../../../components/dialog/customDeleteDialog";
import { useTranslation } from "react-i18next";
import CategoryEditDialog from "./drawer/categortEditDialog";
const CategoryTableRow = ({ category }) => {
  const { t } = useTranslation();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
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
          console.log("Delete action confirmed");
          setOpenDeleteDialog(false);
        }}
        tittleText={t("Confirm Deletion")}
        msgText={t("Are you sure you want to delete this category?")}
      />
      <CategoryEditDialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        category={category}
      />
    </TableRow>
  );
};
export default CategoryTableRow;
