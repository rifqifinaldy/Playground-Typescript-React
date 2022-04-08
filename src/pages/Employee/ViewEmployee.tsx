import { useEffect, useCallback } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { employeeCreators, State } from "../../state";

const ViewEmployee = () => {
  const dispatch = useDispatch();

  // Redux State
  const {getEmployee} = bindActionCreators(employeeCreators, dispatch);
  const employee = useSelector((state: State) => state.employee);

  const rerender = useCallback(() => {
    dispatch(getEmployee);
  }, [dispatch])

  useEffect(() => {
    //   Get Data On Mount
    rerender()
  },[rerender]);
  
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "employee_code", headerName: "Employee Code", width: 250 },
    { field: "role", headerName: "HR", width: 250 },
    { field: "full_name", headerName: "Full Name", width: 250 },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        const onClick = () => {
          console.log(params.row)
        };
        return <Button onClick={onClick}>Edit</Button>;
      },
    },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      {employee.length !== 0 ? (
        <DataGrid
          pageSize={5}
          rowsPerPageOptions={[5]}
          rows={employee}
          columns={columns}
        />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default ViewEmployee;
