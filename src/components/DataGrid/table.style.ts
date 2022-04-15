import { styled } from "@mui/material/styles";
import {
  DataGrid,
} from "@mui/x-data-grid";

export const RFDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 1,
  color: "rgba(0,0,0,.85)",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    width: "100%",
    backgroundColor: "#fafafa",
  },
  "& .MuiDataGrid-iconSeparator": {
    color: theme.palette.info.main
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& .MuiDataGrid-columnHeaderTitle" : {
    color: "#131313",
    fontSize: "14px",
    fontWeight: "bold"
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: "1px solid #fafafa",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid #fafafa`,
  },
}));
