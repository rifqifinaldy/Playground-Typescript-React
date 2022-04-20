import { ResponsesAction } from "../actions/responses.action";
import { Method, response, Result } from "../actions-types/responses.types";

const initialState: response = {
  getBankResult: {} as Result,
  postBankResult: {} as Result,
  updateBankResult: {} as Result,
  deleteBankResult: {} as Result,
};

const bankingReducers = (state = initialState, action: ResponsesAction) => {
  switch (action.type) {
    case Method.GET:
      return {
        ...state,
        getBankResult: action.payload.getResult,
      };
    case Method.POST:
      return {
        ...state,
        updateBankResult: initialState.updateBankResult,
        postBankResult: action.payload.postResult,
      };
    case Method.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default bankingReducers;
