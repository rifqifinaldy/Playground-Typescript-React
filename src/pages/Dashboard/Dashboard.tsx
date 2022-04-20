import { Button } from "@mui/material";
import { FC } from "react";
import DashboardChildren from "./DashboardChildren";

const Dashboard: FC = () => {
  return (
    <div>
      Component
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
      <Button color="error" variant="contained">
        Error
      </Button>
      <Button color="warning" variant="contained">
        Warning
      </Button>
      <Button color="info" variant="contained">
        Info
      </Button>
      <Button color="success" variant="contained">
        Success
      </Button>
    </div>
  );
};

export default Dashboard;
