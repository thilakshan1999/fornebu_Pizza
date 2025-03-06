import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Tab, Tabs } from "@mui/material";
import { useTranslation } from "react-i18next";
import OrderTableHead from "./orderTableHead";

export default function OrderTable({ orders, activeTab, setActiveTab }) {
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
        <Tab label={t("All")} value="all" />
        <Tab label={t("Pending")} value="pending" />
        <Tab label={t("Confirmed")} value="confirmed" />
        <Tab label={t("In Progress")} value="inProgress" />
        <Tab label={t("Ready For Pickup")} value="readyForPickup" />
        <Tab label={t("Completed")} value="completed " />
        <Tab label={t("Canceled")} value="cancelled" />
      </Tabs>
      <Table
        aria-label="collapsible table"
        sx={{
          minWidth: "600px",
          "& .MuiTableCell-root": {
            borderColor: "grey.100",
            borderWidth: "1px",
          },
          "& .MuiTableHead-root": {
            backgroundColor: "grey.100",
          },
        }}
      >
        <OrderTableHead />
        {/* <TableBody>
            {filteredOrders.map((orderInfo) => (
              <OrderTableRow key={orderInfo.orderId} orderInfo={orderInfo} />
            ))}
          </TableBody> */}
      </Table>
    </TableContainer>
  );
}
