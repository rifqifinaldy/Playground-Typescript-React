import { EmployeeAction } from "../actions/employee.action";
import { EmployeeType } from "../actions-types/employee.types";

const initialState:[] = []

const employeeReducers = (state: [] = initialState, action: EmployeeAction) => {
  switch (action.type) {
    case EmployeeType.GET:
      return state = action.payload
    default:
      return state;
  }
};

export default employeeReducers;
