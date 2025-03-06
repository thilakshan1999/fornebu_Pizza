import { useTheme } from "@emotion/react";
import { TableCell, TableHead, TableRow } from "@mui/material";

function HeadRow({ tittle }) {
  const theme = useTheme();
  return (
    <TableCell
      align="left"
      sx={{ fontWeight: "bold", color: theme.palette.text.lightGrey }}
    >
      {tittle}
    </TableCell>
  );
}

const OrderTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <HeadRow tittle={"Order Id"} />
        <HeadRow tittle={"Customer Name"} />
        <HeadRow tittle={"Order on"} />
        <HeadRow tittle={"Items"} />
        <HeadRow tittle={"Price"} />
        <TableCell />
      </TableRow>
    </TableHead>
  );
};
export default OrderTableHead;
