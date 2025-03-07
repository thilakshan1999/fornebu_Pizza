import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Skeleton, Tab, TableCell, TableRow, Tabs } from "@mui/material";
import { useTranslation } from "react-i18next";
import OrderTableHead from "./orderTableHead";
import OrderTableRow from "./orderTableRow";

export default function OrderTable({
  orders,
  activeTab,
  setActiveTab,
  loading,
  fetchOrders,
  setLoading,
}) {
  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  const { t } = useTranslation();
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "grey.100",
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
        sx={{
          marginLeft: "10px",
          "& .MuiTabs-indicator": {
            height: "3px", // Thicker indicator
            borderRadius: "3px", // Rounded indicator edges
          },
          "& .MuiTab-root": {
            fontSize: "14px", // Adjust font size
            fontWeight: "bold", // Adjust font weight
          },
        }}
      >
        {/* <Tab label={t("All")} value="all" /> */}
        <Tab label={t("Pending")} value="pending" />
        <Tab label={t("Confirmed")} value="confirmed" />
        <Tab label={t("In Progress")} value="inProgress" />
        <Tab label={t("Ready For Pickup")} value="readyForPickup" />
        <Tab label={t("Completed")} value="completed " />
        <Tab label={t("Canceled")} value="cancelled" />
      </Tabs>
      <Table aria-label="collapsible table">
        <OrderTableHead />
        <TableBody>
          {loading ? (
            Array.from(new Array(5)).map((_, index) => (
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
                  <Skeleton variant="rectangular" width={20} height={20} />
                </TableCell>
              </TableRow>
            ))
          ) : orders.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={8}
                align="center"
                sx={{ padding: "20px", fontSize: "16px", fontWeight: "bold" }}
              >
                No orders found
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <OrderTableRow
                key={order.id}
                order={order}
                fetchOrders={fetchOrders}
                setLoading={setLoading}
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
