import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee/Employee";
import Role from "./pages/Role/Role";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/hr/employee" element={<Employee />}></Route>
      <Route path="/hr/role" element={<Role />}></Route>
    </Routes>
  );
};

export default AppRoute;
