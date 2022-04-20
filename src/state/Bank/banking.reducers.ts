import { BankingType } from "./banking.types";
import { BankingAction } from "./banking.action.types";
import { response, Result } from "../../utilities/interfaces/responses";

const initialState: response = {
  getBankResult: {} as Result,
  postBankResult: {} as Result,
  updateBankResult: {} as Result,
  deleteBankResult: {} as Result,
};

const bankingReducers = (state = initialState, action: BankingAction) => {
  switch (action.type) {
    case BankingType.GET:
      return {
        ...state,
        getBankResult: action.payload.getResult,
      };
    case BankingType.POST:
      return {
        ...state,
        updateBankResult: initialState.updateBankResult,
        postBankResult: action.payload.postResult,
      };
    case BankingType.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default bankingReducers;
