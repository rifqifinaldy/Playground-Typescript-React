import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RFDataGrid } from "../../components/DataGrid/table.style";
import { State } from "../../state";
import { Paper } from "@mui/material";
import {
  getBanking
} from "../../state/action-creators/banking.creators";

const ViewBank = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState<number>(7);
  const { getBankResult } = useSelector((state: State) => state.banking);

  console.log(getBankResult, "GET RESULT")

  useEffect(() => {
    dispatch(getBanking())
    return () => {

    }
  }, [dispatch])
  
  const columns = [
    {
      field: "date",
      type: "date",
      headerName: "Date",
      flex: 1,
    },
    { field: "activity", type: "string", headerName: "Type", flex: 1 },
    { field: "amount", type: "number", headerName: "Amount", flex: 1 },
  ];

  return (
    <Paper style={{ height: 380, width: "100%" }} variant="outlined">
      <RFDataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[7, 14, 21]}
        rows={[]}
        columns={columns}
      />
    </Paper>
  );
};

export default ViewBank;
