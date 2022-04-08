import { combineReducers } from "redux";
import bankReducers from "./bank.reducers"
import employeeReducers from "./employee.reducers"

const reducers = combineReducers({
    bank: bankReducers,
    employee: employeeReducers
})

export default reducers;

export type State = ReturnType<typeof reducers>