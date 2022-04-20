import { ResponsesAction } from "../actions/responses.action";
import { Method, response, Result } from "../actions-types/responses.types";

const initialState: response = {
  getEmployeeResult: {} as Result,
  postEmployeeResult: {} as Result,
  updateEmployeeResult: {} as Result,
  deleteEmployeeResult: {} as Result,
};

const employeeReducers = (state = initialState, action: ResponsesAction) => {
  switch (action.type) {
    case Method.GET:
      return {
        ...state,
        getEmployeeResult: action.payload.getResult,
        updateEmployeeResult: initialState.updateEmployeeResult,
      };
    case Method.POST:
      return {
        ...state,
        postEmployeeResult: action.payload.postResult,
        updateEmployeeResult: initialState.updateEmployeeResult,
      };
    case Method.DELETE:
      return {
        ...state,
        deleteEmployeeResult: action.payload.deleteResult,
      };

    case Method.UPDATE:
      return {
        ...state,
        updateEmployeeResult: action.payload.updateResult,
        postEmployeeResult: initialState.postEmployeeResult,
      };
    case Method.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default employeeReducers;
