import theme from "../../style/theme";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const RFDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color: "rgba(0,0,0,.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: "#fafafa",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${"#f0f0f0"}`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${"#f0f0f0"}`,
  },
  "& .MuiDataGrid-cell": {
    color: "rgba(0,0,0,.85)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
}));
