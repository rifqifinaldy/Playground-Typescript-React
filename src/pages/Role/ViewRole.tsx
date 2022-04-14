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
  import { RFDataGrid } from "../../components/DataGrid/table.style";
  import DeleteIcon from "@mui/icons-material/Delete";
  import EditIcon from "@mui/icons-material/Edit";
  import { Button, Paper } from "@mui/material";
  import { Modal } from "../../components/Modal/Modal";
  import { FormStatus } from "../../utilities/interface";
  
  const ViewRole: FC<{
    changeFormStatus: (formStatus: FormStatus) => void;
  }> = ({ changeFormStatus }) => {
    const [pageSize, setPageSize] = useState<number>(7);
    const [modal, setModal] = useState<boolean>(false);
    const [dataID, setDataID] = useState<number | string | null>(null);
  
    const handleDelete = useCallback(
      () => () => {
        setModal(false);
      },
      []
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
  
    }, []);
  
    useEffect(() => {
      return () => {
      };
    }, []);
  
    const columns = useMemo(
      () => [
        {
          field: "role_code",
          type: "string",
          headerName: "Role Code",
          flex: 1,
        },
        { field: "role_name", type: "string", headerName: "Role Name", flex: 1 },
        { field: "division", type: "string", headerName: "Division", width: 100 },
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
      <Paper style={{ height: 300, width: "100%" }}>
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
            Toolbar: GridToolbar,
          }}
          rows={[]}
          columns={columns}
        />
      </Paper>
    );
  };
  
  export default ViewRole;
  