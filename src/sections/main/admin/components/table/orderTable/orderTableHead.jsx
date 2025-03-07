import { useTheme } from "@emotion/react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { useTranslation } from "react-i18next";

function HeadRow({ tittle, width, align }) {
  const theme = useTheme();

  return (
    <TableCell
      align={align}
      sx={{
        fontWeight: "bold",
        color: theme.palette.text.lightGrey,
        width: width,
      }}
    >
      {tittle}
    </TableCell>
  );
}

const OrderTableHead = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <TableHead
      sx={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <TableRow>
        <HeadRow tittle={t("Order Id")} width={"120px"} align={"left"} />
        <HeadRow tittle={t("Customer")} align={"left"} />
        <HeadRow tittle={t("Order Date")} width={"220px"} align={"center"} />
        <HeadRow tittle={t("Est. Time")} width={"130px"} align={"center"} />
        <HeadRow tittle={t("Items")} width={"60px"} align={"center"} />
        <HeadRow tittle={t("Total")} align={"center"} width={"150px"} />
        <HeadRow tittle={t("Paid")} width={"150px"} align={"center"} />
        <TableCell align={"right"} sx={{ width: "20px" }} />
      </TableRow>
    </TableHead>
  );
};
export default OrderTableHead;
