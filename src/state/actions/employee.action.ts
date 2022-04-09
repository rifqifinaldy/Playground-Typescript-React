import { EmployeeType } from "../actions-types/employee.types";

interface response {
  loading: boolean,
  data: [],
  error: string | boolean
}

interface GetAction {
  type: EmployeeType.GET;
  payload: response;
}

interface PostAction {
  type: EmployeeType.POST;
  payload: response;
}

// interface UpdateAction {
//   type: EmployeeType.UPDATE;
//   payload: {}[];
// }

// interface DeleteAction {
//   type: EmployeeType.DELETE;
// }

export type EmployeeAction = GetAction;
