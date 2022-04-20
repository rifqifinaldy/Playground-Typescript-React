import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee/Employee";
import Role from "./pages/Role/Role";
import Bank from "./pages/Bank/Bank";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/hr/employee" element={<Employee />}></Route>
      <Route path="/hr/role" element={<Role />}></Route>
      <Route path="/bank" element={<Bank />}></Route>
    </Routes>
  );
};

export default AppRoute;
