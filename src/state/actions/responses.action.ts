import { Method, Result } from "../actions-types/responses.types";

interface GetAction {
  type: Method.GET;
  payload: {
    getResult: Result;
  };
}
interface PostAction {
  type: Method.POST;
  payload: {
    postResult: Result;
  };
}
interface DetailAction {
  type: Method.DETAIL;
  payload: {
    detailResult: Result;
  };
}

interface UpdateAction {
  type: Method.UPDATE;
  payload: {
    updateResult: Result;
  };
}

interface DeleteAction {
  type: Method.DELETE;
  payload: {
    deleteResult: Result;
  };
}

interface ResetAction {
  type: Method.RESET;
}

export type ResponsesAction =
  | GetAction
  | PostAction
  | DetailAction
  | UpdateAction
  | DeleteAction
  | ResetAction;
