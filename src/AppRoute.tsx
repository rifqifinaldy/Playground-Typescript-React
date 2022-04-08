import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee/Employee";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/employee" element={<Employee />}></Route>
    </Routes>
  );
};

export default AppRoute;
