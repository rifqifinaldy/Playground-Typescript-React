import { response, Result } from "../../utilities/interfaces/responses";
import { EmployeeAction } from "./employee.action.types";
import { EmployeeType } from "./employee.types";

const initialState: response = {
  getEmployeeResult: {} as Result,
  postEmployeeResult: {} as Result,
  updateEmployeeResult: {} as Result,
  deleteEmployeeResult: {} as Result,
};

const employeeReducers = (state = initialState, action: EmployeeAction) => {
  switch (action.type) {
    case EmployeeType.GET:
      return {
        ...state,
        getEmployeeResult: action.payload.getResult,
        updateEmployeeResult: initialState.updateEmployeeResult,
      };
    case EmployeeType.POST:
      return {
        ...state,
        postEmployeeResult: action.payload.postResult,
        updateEmployeeResult: initialState.updateEmployeeResult,
      };
    case EmployeeType.DELETE:
      return {
        ...state,
        deleteEmployeeResult: action.payload.deleteResult,
      };

    case EmployeeType.UPDATE:
      return {
        ...state,
        updateEmployeeResult: action.payload.updateResult,
        postEmployeeResult: initialState.postEmployeeResult,
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
