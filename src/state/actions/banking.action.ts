import { Banking } from "../actions-types/banking.types";
import { Method, Result } from "../actions-types/responses.types";

interface GetBanking {
  type: Banking.GET;
  payload: {
    getResult: Result;
  };
}
interface PostBanking {
  type: Banking.POST;
  payload: {
    postResult: Result;
  };
}

export type ResponsesAction = GetBanking | PostBanking;
