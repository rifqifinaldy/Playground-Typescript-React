import { useEffect, useCallback, useState, FC } from "react";
import {
  GridCellParams,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import {
  ErrorOverlay,
  LoadingOverlay,
  NoDataOverlay,
} from "../../components/DataGrid/DataGridOverlay";
import { RFDataGrid } from "../../components/DataGrid/table.style";
import { capitalize, Paper } from "@mui/material";
import { StatusCode } from "../../utilities/enum/response.status";
import { localDate } from "../../utilities/tools/format.date";
import { currency } from "../../utilities/tools/format.currency";
import { getBanking } from "../../state/Bank/banking.action.creators";
import theme from "../../style/theme";

const ViewBank: FC = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState<number>(7);

  // Redux State
  const { getBankResult } = useSelector((state: State) => state.banking);
  
  const rerender = useCallback(() => {
    dispatch(getBanking());
  }, [dispatch]);

  useEffect(() => {
    //   Get Data On Mounts
    rerender();
  }, [rerender]);
  const columns = [
    {
      field: "date",
      type: "string",
      headerName: "Date",
      flex: 1,
      valueGetter: (params: GridValueGetterParams) => {
        return localDate(params.row.date);
      },
    },
    {
      field: "method",
      type: "string",
      headerName: "Method",
      width: 100,
      valueGetter: (params: GridValueGetterParams) => {
        return capitalize(params.row.method);
      },
    },
    {
      field: "amount",
      type: "number",
      headerName: "Amount",
      flex: 1,
      valueGetter: (params: GridValueGetterParams) => {
        return currency.format(params.row.amount);
      },
    },
  ];

  return (
    <Paper
      sx={{
        height: "380px",
        width: 1,
        "& .withdraw": {
          color: theme.palette.error.main,
          fontWeight: "bold",
        },
        "& .deposit": {
          color: "#131313",
        },
      }}
      variant="outlined"
    >
      <RFDataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[7, 14, 21]}
        components={{
          NoRowsOverlay: getBankResult.loading
            ? LoadingOverlay
            : getBankResult.status === StatusCode.ERROR
            ? ErrorOverlay
            : getBankResult.data instanceof Array &&
              getBankResult.data.length === 0
            ? NoDataOverlay
            : LoadingOverlay,
          Toolbar: GridToolbar,
        }}
        rows={getBankResult.data instanceof Array ? getBankResult.data : []}
        columns={columns}
        getCellClassName={(params: GridCellParams<number>) => {
          return params.row.amount >= 0 ? 'deposit' : 'withdraw';
        }}
      />
    </Paper>
  );
};

export default ViewBank;
