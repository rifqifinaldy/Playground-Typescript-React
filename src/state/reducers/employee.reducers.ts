import { EmployeeAction } from "../actions/employee.action";
import { EmployeeType } from "../actions-types/employee.types";

interface response {
  loading: boolean,
  data: [],
  error: string | boolean
}

const initialState:response = {
  loading: true,
  data: [],
  error: false,
}

const employeeReducers = (state = initialState, action: EmployeeAction) => {
  switch (action.type) {
    case EmployeeType.GET:
      return {
        loading: action.payload.loading,
        data: action.payload.data,
        error: action.payload.error
      }
    default:
      return state;
  }
};

export default employeeReducers;
