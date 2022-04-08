import { EmployeeAction } from "../actions/employee.action";
import { EmployeeType } from "../actions-types/employee.types";

const initialState:[] = []

const employeeReducers = (state: [] = initialState, action: EmployeeAction) => {
  console.log("MASUK REDUCERS");
  switch (action.type) {
    case EmployeeType.GET:
      return state = action.payload
    default:
      console.log("DEFAULT");
      return state;
  }
};

export default employeeReducers;
