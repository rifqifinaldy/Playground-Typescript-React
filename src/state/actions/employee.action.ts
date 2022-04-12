import { EmployeeType } from "../actions-types/employee.types";

interface response {
  loading: boolean;
  success: string | boolean;
  sendData: {};
  data: [] | boolean;
  error: string | boolean;
}

interface GetAction {
  type: EmployeeType.GET;
  payload: response;
}

interface PostAction {
  type: EmployeeType.POST;
  payload: response;
}

interface UpdateAction {
  type: EmployeeType.UPDATE;
  payload: response;
}

interface DeleteAction {
  type: EmployeeType.DELETE;
  payload: response;
}

interface ResetAction {
  type: EmployeeType.RESET;
}

export type EmployeeAction =
  | GetAction
  | PostAction
  | UpdateAction
  | DeleteAction
  | ResetAction;
