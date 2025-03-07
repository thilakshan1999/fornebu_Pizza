import { useTheme } from "@emotion/react";
import { useState } from "react";
import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import { MoreVert } from "@mui/icons-material";
import { formatPrice } from "../../../../../../utils/formatPrize";
import { format } from "date-fns";
import formatName from "../../../../../../utils/formatCategoryName ";
import OrderTableItemMenu from "./orderTableItemMenu";
import OrderViewDialog from "./dialog/OrderViewDialog";

const OrderTableRow = ({ order, fetchOrders, setLoading }) => {
  const theme = useTheme();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const estimatedTime = order.estimatedTime;
  const formattedTime = format(estimatedTime, "h:mm a");
  const createdAt = order.createdAt;
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy"); // March 04, 2025

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <TableRow>
        <TableCell align="left">{String(order.id).padStart(6, "0")}</TableCell>
        <TableCell align="left">{formatName(order.userName)}</TableCell>
        <TableCell align="center">{formattedDate}</TableCell>
        <TableCell align="center">{formattedTime}</TableCell>
        <TableCell align="center">{order.itemCount}</TableCell>
        <TableCell align="center">{formatPrice(order.total)}</TableCell>
        <TableCell align="center">{order.paid ? "Paid" : "Not Paid"}</TableCell>
        <TableCell>
          <IconButton aria-label="menu" size="small" onClick={handleMenuClick}>
            <MoreVert />
          </IconButton>
        </TableCell>
      </TableRow>

      <OrderTableItemMenu
        menuAnchorEl={menuAnchorEl}
        setMenuAnchorEl={setMenuAnchorEl}
        order={order}
        handleOpenDialog={handleOpenDialog}
        fetchOrders={fetchOrders}
        setLoading={setLoading}
      />

      <OrderViewDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        orderID={order.id}
      />
    </>
  );
};
export default OrderTableRow;
