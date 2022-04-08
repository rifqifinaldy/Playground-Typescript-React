import { EmployeeType } from "../actions-types/employee.types";

interface GetAction {
  type: EmployeeType.GET;
  payload: [];
}

// interface UpdateAction {
//   type: EmployeeType.UPDATE;
//   payload: {}[];
// }

// interface DeleteAction {
//   type: EmployeeType.DELETE;
// }

export type EmployeeAction = GetAction;
