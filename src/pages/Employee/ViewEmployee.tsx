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
import { Alert, Button, Grid, Paper, Zoom } from "@mui/material";
import { Modal } from "../../components/Modal/Modal";

const ViewEmployee = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState<number>(7);
  const [modal, setModal] = useState<boolean>(false);
  const [dataID, setDataID] = useState<number | string | null>(null);
  const [alert, setAlert] = useState({
    open: false,
    color: "success",
    text: "Loading",
  });

  // Redux State
  const { getEmployee, resetEmployee, deleteEmployee } = bindActionCreators(
    employeeCreators,
    dispatch
  );
  const employee = useSelector((state: State) => state.employee);
  const rerender = useCallback(() => {
    console.log("GET EMPLOYEE");
    dispatch(getEmployee);
  }, [dispatch, getEmployee]);

  const handleDelete = useCallback(
    () => () => {
      console.log("Handling Delete ID :", dataID);
      deleteEmployee(dataID);
      setModal(false);
      rerender();
    },
    [deleteEmployee, rerender]
  );

  const handleEdit = useCallback(
    (row: GridRowId) => () => {
      console.log("Edit toggle", row);
    },
    []
  );

  useEffect(() => {
    //   Get Data On Mount
    dispatch(getEmployee);
    return () => {
      console.log("Cleaning Up");
      dispatch(resetEmployee);
    };
  }, []);

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
            onClick={() => openModal(params.id)}
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

  const openModal = (id: GridRowId) => {
    console.log("OPEN MODAL", id);
    setModal(true);
    setDataID(id);
  };
  
  return (
    <Paper style={{ height: 380, width: "100%" }}>
      <Modal
        modal={modal}
        title="Confirm Delete"
        text="You are going to delete this data"
        action={
          <>
            <Button color="info" autoFocus onClick={() => setModal(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete()}
              autoFocus
            >
              Confirm
            </Button>
          </>
        }
      />

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
      <Grid container justifyContent="center" alignItems="center">
          <Grid item md={6}>
            <Zoom in={alert.open}>
              <Alert severity={alert.color === "success" ? "success" : "error"}>
                {alert.text}
              </Alert>
            </Zoom>
          </Grid>
        </Grid>
    </Paper>
  );
};

export default ViewEmployee;
