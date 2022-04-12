import { EmployeeAction } from "../actions/employee.action";
import { EmployeeType } from "../actions-types/employee.types";

interface response {
  loading: boolean;
  success: string | boolean;
  data: [] | boolean;
  error: string | boolean;
  sendData: {};
}

const initialState: response = {
  loading: true,
  success: false,
  data: [],
  error: false,
  sendData: {},
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
        sendData: action.payload.sendData,
      };
    case EmployeeType.POST:
      return {
        ...state,
        loading: action.payload.loading,
        success: action.payload.success,
        data: action.payload.data,
        error: action.payload.error,
        sendData: action.payload.sendData,
      };
    case EmployeeType.DELETE:
      return {
        ...state,
        loading: action.payload.loading,
        success: action.payload.success,
        data: action.payload.data,
        error: action.payload.error,
        sendData: action.payload.sendData,
      };

    case EmployeeType.UPDATE:
      return {
        ...state,
        loading: action.payload.loading,
        success: action.payload.success,
        data: action.payload.data,
        error: action.payload.error,
        sendData: action.payload.sendData,
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
