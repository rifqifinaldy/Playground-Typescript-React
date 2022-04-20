import { Result } from "../../utilities/interfaces/responses";
import { EmployeeType } from "./employee.types";

interface GetEmployee {
  type: EmployeeType.GET;
  payload: {
    getResult: Result;
  };
}

interface PostEmployee {
  type: EmployeeType.POST;
  payload: {
    postResult: Result;
  };
}
interface UpdateEmployee {
  type: EmployeeType.UPDATE;
  payload: {
    updateResult: Result;
  };
}
interface DeleteEmployee {
  type: EmployeeType.DELETE;
  payload: {
    deleteResult: Result;
  };
}
interface ResetEmployee {
  type: EmployeeType.RESET;
}

export type EmployeeAction =
  | GetEmployee
  | PostEmployee
  | UpdateEmployee
  | DeleteEmployee
  | ResetEmployee;
