import {
  useEffect,
  useCallback,
  useMemo,
  useState,
  SyntheticEvent,
  FC,
} from "react";
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
import { Button, Paper } from "@mui/material";
import { Modal } from "../../components/Modal/Modal";
import { StatusCode } from "../../state/actions-types/responses.types";
import { FormStatus } from "./Employee";

const ViewEmployee: FC<{
  changeFormStatus: (formStatus: FormStatus) => void;
}> = ({ changeFormStatus }) => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState<number>(7);
  const [modal, setModal] = useState<boolean>(false);
  const [dataID, setDataID] = useState<number | string | null>(null);

  // Redux State
  const { getEmployee, resetEmployee, deleteEmployee } = bindActionCreators(
    employeeCreators,
    dispatch
  );
  const employee = useSelector((state: State) => state.employee);
  const rerender = useCallback(() => {
    getEmployee();
  }, [getEmployee]);

  const handleDelete = useCallback(
    () => () => {
      deleteEmployee(dataID);
      setModal(false);
      rerender();
    },
    [deleteEmployee, rerender, dataID]
  );

  const handleEdit = (e: SyntheticEvent, row: GridRowId) => {
    let edit = {
      e: e,
      tabIndex: 0,
      edit: true,
      data: row,
    };
    changeFormStatus(edit);
  };

  useEffect(() => {
    //   Get Data On Mounts
    rerender();

  }, []);

  useEffect(() => {
    return () => {
      resetEmployee();
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
            onClick={(e) => handleEdit(e, params.row)}
            showInMenu
          />,
        ],
      },
    ],
    []
  );

  const openModal = (id: GridRowId) => {
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
        rowsPerPageOptions={[7, 14, 21]}
        components={{
          NoRowsOverlay: employee.loading
            ? LoadingOverlay
            : employee.responses.status === StatusCode.CLIENT_ERROR
            ? ErrorOverlay
            : employee.responses.data instanceof Array &&
              employee.responses.data.length === 0
            ? NoDataOverlay
            : LoadingOverlay,
          Toolbar: GridToolbar,
        }}
        rows={
          employee.responses.data instanceof Array
            ? employee.responses.data
            : []
        }
        columns={columns}
      />
    </Paper>
  );
};

export default ViewEmployee;
