import { combineReducers } from "redux";
import bankReducers from "./bank.reducers"
import employeeReducers from "./employee.reducers"
import roleReducers from "./role.reducers";
import bankingReducers from "./banking.reducers";

const reducers = combineReducers({
    bank: bankReducers,
    employee: employeeReducers,
    role : roleReducers,
    banking : bankingReducers,
})

export default reducers;

export type State = ReturnType<typeof reducers>