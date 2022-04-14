import { combineReducers } from "redux";
import bankReducers from "./bank.reducers"
import employeeReducers from "./employee.reducers"
import roleReducers from "./role.reducers";

const reducers = combineReducers({
    bank: bankReducers,
    employee: employeeReducers,
    role : roleReducers
})

export default reducers;

export type State = ReturnType<typeof reducers>