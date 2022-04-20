import { useEffect, useCallback, useState, SyntheticEvent, FC } from "react";
import {
  GridActionsCellItem,
  GridRowId,
  GridRowParams,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import {
  ErrorOverlay,
  LoadingOverlay,
  NoDataOverlay,
} from "../../components/DataGrid/DataGridOverlay";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import { RFDataGrid } from "../../components/DataGrid/table.style";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Paper } from "@mui/material";
import { Modal } from "../../components/Modal/Modal";
import { FormStatus } from "../../utilities/interface";
import { deleteRole, getRole } from "../../state/action-creators/role.creators";
import { StatusCode } from "../../state/actions-types/responses.types";

const ViewRole: FC<{
  update: boolean;
  changeFormStatus: (formStatus: FormStatus) => void;
}> = ({ update, changeFormStatus }) => {
  const { getRoleResult } = useSelector((state: State) => state.role);
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState<number>(7);
  const [modal, setModal] = useState<boolean>(false);
  const [dataID, setDataID] = useState<number | string | null>(null);

  const rerender = useCallback(() => {
    dispatch(getRole());
  }, [dispatch]);

  const handleDelete = useCallback(
    () => () => {
      dispatch(deleteRole(dataID));
      setModal(false);
      rerender();
    },
    [dispatch, dataID, rerender]
  );

  const handleEdit = useCallback(
    (e: SyntheticEvent, row: GridRowId) => {
      let edit = {
        e: e,
        tabIndex: 0,
        edit: true,
        data: row,
      };
      changeFormStatus(edit);
    },
    [changeFormStatus]
  );

  useEffect(() => {
    //   Get Data On Mounts
    rerender();
  }, [rerender, changeFormStatus, update]);

  const columns = [
    {
      field: "role_code",
      type: "string",
      headerName: "Role Code",
      flex: 1,
    },
    { field: "role_name", type: "string", headerName: "Role Name", flex: 1 },
    {
      field: "department",
      type: "string",
      headerName: "Department",
      width: 100,
      valueGetter: (params: GridValueGetterParams) => {
        return params.row.department.name;
      },
    },
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
  ];

  const openModal = (id: GridRowId) => {
    setModal(true);
    setDataID(id);
  };

  return (
    <Paper style={{ height: 300, width: "100%" }} variant="outlined">
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
          NoRowsOverlay: getRoleResult.loading
            ? LoadingOverlay
            : getRoleResult.status === StatusCode.ERROR
            ? ErrorOverlay
            : getRoleResult.data instanceof Array && getRoleResult.data.length === 0
            ? NoDataOverlay
            : LoadingOverlay,
          Toolbar: GridToolbar,
        }}
        rows={getRoleResult.data instanceof Array ? getRoleResult.data : []}
        columns={columns}
      />
    </Paper>
  );
};

export default ViewRole;
