import { Result } from "../../utilities/interfaces/responses";
import { BankingType } from "./banking.types";

interface GetBanking {
  type: BankingType.GET;
  payload: {
    getResult: Result;
  };
}
interface PostBanking {
  type: BankingType.POST;
  payload: {
    postResult: Result;
  };
}
interface ResetBanking {
  type : BankingType.RESET;
}

export type BankingAction = GetBanking | PostBanking | ResetBanking;
