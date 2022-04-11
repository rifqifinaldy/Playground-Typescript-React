import { Button } from "@mui/material";
import {FC, useState } from "react";
import DashboardChildren from "./DashboardChildren";

const Dashboard:FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count+1)
  }
  return (
    <div>
      Component
      <Button color="primary" variant="contained">Primary</Button>
      <Button color="secondary" variant="contained">Secondary</Button>
      <Button color="error" variant="contained">Error</Button>
      <Button color="warning" variant="contained">Warning</Button>
      <Button color="info" variant="contained">Info</Button>
      <Button color="success" variant="contained">Success</Button>
      <DashboardChildren count={count} increment={increment}/>
    </div>
  );
};

export default Dashboard;
