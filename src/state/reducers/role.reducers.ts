import { ResponsesAction } from "../actions/responses.action";
import { Method, response, Result } from "../actions-types/responses.types";

const initialState: response = {
  getRoleResult: {} as Result,
  postRoleResult : {} as Result,
  updateRoleResult: {} as Result,
  deleteRoleResult: {} as Result,
};

const roleReducers = (state = initialState, action: ResponsesAction) => {
  switch (action.type) {
    case Method.GET:
      return {
        ...state,
        getRoleResult: action.payload.getResult,
      };
    case Method.POST:
      return {
        ...state,
        updateRoleResult: initialState.updateRoleResult,
        postRoleResult: action.payload.postResult
      };
    case Method.DELETE:
      return {
        ...state,
        deleteRoleResult: action.payload.deleteResult,
      };

    case Method.UPDATE:
      return {
        ...state,
        postRoleResult: initialState.postRoleResult,
        updateRoleResult: action.payload.updateResult,
      };
    case Method.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default roleReducers;
