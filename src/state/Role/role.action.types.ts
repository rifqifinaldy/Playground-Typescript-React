import { Result } from "../../utilities/interfaces/responses";
import { RoleType } from "./role.types";

interface GetRole {
  type: RoleType.GET;
  payload: {
    getResult: Result;
  };
}

interface PostRole {
  type: RoleType.POST;
  payload: {
    postResult: Result;
  };
}
interface UpdateRole {
  type: RoleType.UPDATE;
  payload: {
    updateResult: Result;
  };
}
interface DeleteRole {
  type: RoleType.DELETE;
  payload: {
    deleteResult: Result;
  };
}
interface ResetRole {
  type: RoleType.RESET;
}

export type RoleAction =
  | GetRole
  | PostRole
  | UpdateRole
  | DeleteRole
  | ResetRole;
