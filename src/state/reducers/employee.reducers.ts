import { ResponsesAction } from "../actions/responses.action";
import { Method, response, Result } from "../actions-types/responses.types";

const initialState: response = {
  getEmployeeResult: {
    method: "GET",
    loading: false,
    status: 0,
    message: "",
    data: [
      {
        id: 1,
        role_name: "true",
        role_code: "true",
        department: { dept_id: 1, name: "DEP" },
      },
    ],
  } as Result,
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
      };
    case Method.POST:
      return {
        ...state,
        postEmployeeResult: action.payload.postResult,
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
