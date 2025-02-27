import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import CategoryTableItemMenu from "./categoryTableItemMenu";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 1, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 1, 9.0, 37, 4.3),
  createData("Eclair", 1, 16.0, 24, 6.0),
  createData("Cupcake", 1, 3.7, 67, 4.3),
  createData("Gingerbread", 1, 16.0, 49, 3.9),
];

export default function CategoryTable() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
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
            <TableCell sx={{ width: "100px" }} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.calories}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="menu"
                  size="small"
                  onClick={handleMenuClick}
                >
                  <MoreVert />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CategoryTableItemMenu
        menuAnchorEl={menuAnchorEl}
        setMenuAnchorEl={setMenuAnchorEl}
      />
    </TableContainer>
  );
}
