import { Method, response } from "../actions-types/responses.types";

interface GetAction {
  type: Method.GET;
  payload: response;
}

interface PostAction {
  type: Method.POST;
  payload: response;
}

interface UpdateAction {
  type: Method.UPDATE;
  payload: response;
}

interface DeleteAction {
  type: Method.DELETE;
  payload: response;
}

interface ResetAction {
  type: Method.RESET;
}

export type ResponsesAction =
  | GetAction
  | PostAction
  | UpdateAction
  | DeleteAction
  | ResetAction;
