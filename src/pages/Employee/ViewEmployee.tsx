import { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef, GridApi } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const ViewEmployee = () => {
  console.log(process.env.REACT_APP_API_URL)
  const [data, setData] = useState<GridRowsProp>([
    {
      id: 1,
      code: "EMP-2015-HR-01",
      role: "HR",
      name: "R Finaldy",
    },
    {
      id: 2,
      code: "EMP-2017-EN-02",
      role: "Engineer",
      name: "F Rifqi",
    },
  ]);

  const [selected, setSelected] = useState({})

  const columns: GridColDef[] = [
    { field: "code", headerName: "Employee Code", width: 250 },
    { field: "role", headerName: "HR", width: 250 },
    { field: "name", headerName: "Full Name", width: 250 },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        const onClick = () => {
          setSelected(params.row);

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
        rows={data}
        columns={columns}
      />
    </div>
  );
};

export default ViewEmployee;
