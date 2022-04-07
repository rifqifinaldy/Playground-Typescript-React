import {FC, useState } from "react";
import DashboardChildren from "./DashboardChildren";

const Dashboard:FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count+1)
  }
  return (
    <div>
      Dashboard
      <DashboardChildren count={count} increment={increment}/>
    </div>
  );
};

export default Dashboard;
