import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import ProductTableRow from "./productTableRow";
import { Box, IconButton, Skeleton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CustomTypography from "../../../../../../components/typography/customTypography";
import ProductFilterDialog from "./dialog/productFilterDialog";
import DummyCategories from "../../../../../../utils/dummyCateories";

export default function ProductTable({
  products,
  loading,
  fetchProducts,
  categories,
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [openFilterDialog, setOpenFilterDialog] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState(null);

  const handleApplyFilter = (selectedCategory) => {
    console.log(selectedCategory);
    setFilterValue(selectedCategory);
    if (selectedCategory) {
      fetchProducts(selectedCategory.id);
    } else {
      fetchProducts();
    }
  };
  return (
    <TableContainer component={Paper}>
      {/* Custom header above table */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "10px 20px",
          backgroundColor: theme.palette.button.white,
        }}
      >
        <CustomTypography
          color={theme.palette.text.black}
          text={
            filterValue
              ? filterValue.name + " " + t("Products")
              : t("All Products")
          }
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        />

        <IconButton onClick={() => setOpenFilterDialog(true)}>
          <FilterListIcon />
        </IconButton>
      </Box>
      <Table aria-label="collapsible table">
        <TableHead
          sx={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <TableRow>
            <TableCell
              align="left"
              sx={{
                width: "100px",
                fontWeight: "bold",
                color: theme.palette.text.grey,
              }}
            >
              {t("Id")}
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.grey,
              }}
            >
              {t("Name")}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                width: "100px",
                fontWeight: "bold",
                color: theme.palette.text.grey,
              }}
            >
              {t("Stock")}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                width: "150px",
                fontWeight: "bold",
                color: theme.palette.text.grey,
              }}
            >
              {t("Amount")}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.grey,
              }}
            >
              {t("Category")}
            </TableCell>
            <TableCell align="right" sx={{ width: "100px" }} />
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
                  <TableCell align="center">
                    <Skeleton
                      variant="text"
                      width={40}
                      height={20}
                      sx={{ margin: "auto" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton
                      variant="text"
                      width={60}
                      height={20}
                      sx={{ margin: "auto" }}
                    />
                  </TableCell>

                  <TableCell align="right">
                    <Skeleton variant="rectangular" width={60} height={20} />
                  </TableCell>
                </TableRow>
              ))
            : products.map((product) => (
                <ProductTableRow
                  product={product}
                  key={product.id}
                  fetchProducts={fetchProducts}
                  categories={categories}
                  products={products}
                />
              ))}
        </TableBody>
      </Table>

      {/* Filter Dialog */}
      <ProductFilterDialog
        open={openFilterDialog}
        onClose={() => setOpenFilterDialog(false)}
        categories={DummyCategories}
        onApplyFilter={handleApplyFilter}
        initialFilterValue={filterValue ? filterValue.id : ""}
      />
    </TableContainer>
  );
}
