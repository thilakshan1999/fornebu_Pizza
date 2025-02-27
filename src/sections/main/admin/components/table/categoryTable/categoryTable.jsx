import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import CategoryTableRow from "./categoryTableRow";
import { Skeleton } from "@mui/material";

export default function CategoryTable({
  categories,
  loading,
  fetchCategories,
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead
          sx={{
            backgroundColor: "#f5f5f5",
            position: "sticky", // Make header sticky
            top: 0, // Stick it at the top
            zIndex: 1,
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                width: "100px",
                fontWeight: "bold",
                color: theme.palette.text.grey,
              }}
            >
              {t("Id")}
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: theme.palette.text.grey }}
              align="left"
            >
              {t("Name")}
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: theme.palette.text.grey }}
              align="center"
            >
              {t("Product Count")}
            </TableCell>
            <TableCell sx={{ width: "100px" }} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading
            ? Array.from(new Array(5)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Skeleton variant="text" width={40} height={20} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={120} height={20} />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton
                      variant="text"
                      width={40}
                      height={20}
                      sx={{ margin: "auto" }}
                    />
                  </TableCell>

                  <TableCell align="right">
                    <Skeleton variant="rectangular" width={60} height={20} />
                  </TableCell>
                </TableRow>
              ))
            : categories.map((category) => (
                <CategoryTableRow
                  category={category}
                  key={category.id}
                  fetchCategories={fetchCategories}
                />
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
