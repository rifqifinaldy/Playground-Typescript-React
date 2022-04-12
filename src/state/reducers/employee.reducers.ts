import { EmployeeAction } from "../actions/employee.action";
import { EmployeeType } from "../actions-types/employee.types";

interface response {
  loading: boolean;
  success: string | boolean;
  data: [] | boolean;
  error: string | boolean;
}

const initialState: response = {
  loading: true,
  success: false,
  data: [],
  error: false,
};

const employeeReducers = (state = initialState, action: EmployeeAction) => {
  switch (action.type) {
    case EmployeeType.GET:
      return {
        ...state,
        loading: action.payload.loading,
        success: action.payload.success,
        data: action.payload.data,
        error: action.payload.error,
      };
    case EmployeeType.POST:
      return {
        ...state,
        loading: action.payload.loading,
        success: action.payload.success,
        data: action.payload.data,
        error: action.payload.error,
      };
    case EmployeeType.DELETE:
      return {
        ...state,
        loading: action.payload.loading,
        success: action.payload.success,
        data: action.payload.data,
        error: action.payload.error,
      };
    case EmployeeType.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default employeeReducers;
