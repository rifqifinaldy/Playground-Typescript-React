import { useEffect, useCallback } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { employeeCreators, State } from "../../state";
import { ErrorOverlay, LoadingOverlay, NoDataOverlay } from "../../components/DataGrid/DataGridOverlay";


const ViewEmployee = () => {
  const dispatch = useDispatch();

  // Redux State
  const { getEmployee } = bindActionCreators(employeeCreators, dispatch);
  const employee = useSelector((state: State) => state.employee);

  const rerender = useCallback(() => {
    dispatch(getEmployee);
  }, [dispatch]);

  useEffect(() => {
    //   Get Data On Mount
    rerender();
  }, [rerender]);

  const columns: GridColDef[] = [
    { field: "employee_code", headerName: "Employee Code", width: 150 },
    { field: "full_name", headerName: "Full Name", width: 150 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "role", headerName: "HR", width: 250 },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        const onClick = () => {
          console.log(params.row);
        };
        return <Button onClick={onClick}>Edit</Button>;
      },
    },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
          pageSize={5}
          rowsPerPageOptions={[5]}
          components={{
            NoRowsOverlay: employee.loading ? LoadingOverlay : employee.error ? ErrorOverlay : employee.data.length === 0 ? NoDataOverlay : LoadingOverlay,
          }}
          rows={employee.data}
          columns={columns}
        />
    </div>
  );
};

export default ViewEmployee;
