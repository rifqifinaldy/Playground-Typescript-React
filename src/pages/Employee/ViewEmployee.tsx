import { useState } from "react";
import RFTable from "../../components/Table/Table";

const ViewEmployee = () => {
  interface Column {
    id: "name" | "code" | "population" | "size" | "density";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }

  const columns: Column[] = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Density",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toFixed(2),
    },
  ];

  interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
  }

  const rows: Data = [
      {
          name : "Rifqi",
          code : "123",
          population: 123,
          size: 2,
          densitiy : 2
      }
    ];

  //   console.log(rows);

  return (
    <>
      <h1>HALO</h1>
      <RFTable columns={columns} rows={rows} />
    </>
  );
};

export default ViewEmployee;
