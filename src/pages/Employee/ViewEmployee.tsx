import { useEffect, useCallback, useMemo, useState } from "react";
import {
  GridActionsCellItem,
  GridRowId,
  GridRowParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { employeeCreators, State } from "../../state";
import {
  ErrorOverlay,
  LoadingOverlay,
  NoDataOverlay,
} from "../../components/DataGrid/DataGridOverlay";
import { RFDataGrid } from "../../components/DataGrid/table.style";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Paper } from "@mui/material";

const ViewEmployee = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState<number>(7);

  // Redux State
  const { getEmployee, resetEmployee } = bindActionCreators(
    employeeCreators,
    dispatch
  );
  const employee = useSelector((state: State) => state.employee);
  const rerender = useCallback(() => {
    dispatch(getEmployee);
  }, [dispatch]);

  useEffect(() => {
    //   Get Data On Mount
    rerender();
    return () => {
      console.log("RESET");
      dispatch(resetEmployee);
    };
  }, [rerender]);

  const handleDelete = useCallback(
    (id: GridRowId) => () => {
      console.log("Delete", id);
    },
    []
  );

  const handleEdit = useCallback(
    (row: GridRowId) => () => {
      console.log("Edit toggle", row);
    },
    []
  );

  const columns = useMemo(
    () => [
      {
        field: "employee_code",
        type: "string",
        headerName: "Employee Code",
        flex: 1,
      },
      { field: "full_name", type: "string", headerName: "Full Name", flex: 1 },
      { field: "age", type: "string", headerName: "Age", width: 100 },
      { field: "address", type: "string", headerName: "Address", flex: 1 },
      { field: "role", type: "string", headerName: "Role", flex: 1 },
      {
        field: "actions",
        headerName: "Action",
        type: "actions",
        width: 100,
        getActions: (params: GridRowParams) => [
          <GridActionsCellItem
            icon={<DeleteIcon color="error" />}
            label="Delete"
            onClick={handleDelete(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<EditIcon color="info" />}
            label="Edit"
            onClick={handleEdit(params.row)}
            showInMenu
          />,
        ],
      },
    ],
    [handleDelete, handleEdit]
  );

  return (
    <Paper style={{ height: 380, width: "100%" }}>
      <RFDataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        components={{
          NoRowsOverlay: employee.loading
            ? LoadingOverlay
            : employee.error
            ? ErrorOverlay
            : employee.data instanceof Array && employee.data.length === 0
            ? NoDataOverlay
            : LoadingOverlay,
          Toolbar: GridToolbar,
        }}
        rows={employee.data instanceof Array ? employee.data : []}
        columns={columns}
      />
    </Paper>
  );
};

export default ViewEmployee;
