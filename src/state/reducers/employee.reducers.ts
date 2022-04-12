import { ResponsesAction } from "../actions/responses.action";
import { Method, response, responses } from "../actions-types/responses.types";

const initialState: response = {
  loading: true,
  responses: {} as responses,
};

const employeeReducers = (state = initialState, action: ResponsesAction) => {
  switch (action.type) {
    case Method.GET:
      return {
        ...state,
        loading: action.payload.loading,
        responses: action.payload.responses,
      };
    case Method.POST:
      return {
        ...state,
        loading: action.payload.loading,
        responses: action.payload.responses,
      };
    case Method.DELETE:
      return {
        ...state,
        loading: action.payload.loading,
        responses: action.payload.responses,
      };

    case Method.UPDATE:
      return {
        ...state,
        loading: action.payload.loading,
        responses: action.payload.responses,
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
