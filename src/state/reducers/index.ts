import { combineReducers } from "redux";
import employeeReducers from "../Employee/employee.reducers";
import roleReducers from "../Role/role.reducers";
import bankingReducers from "../Bank/banking.reducers";

const reducers = combineReducers({
  employee: employeeReducers,
  role: roleReducers,
  banking: bankingReducers,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
