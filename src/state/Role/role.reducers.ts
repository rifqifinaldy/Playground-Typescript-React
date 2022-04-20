import { response, Result } from "../../utilities/interfaces/responses";
import { RoleAction } from "./role.action.types";
import { RoleType } from "./role.types";

const initialState: response = {
  getRoleResult: {} as Result,
  postRoleResult: {} as Result,
  updateRoleResult: {} as Result,
  deleteRoleResult: {} as Result,
};

const roleReducers = (state = initialState, action: RoleAction) => {
  switch (action.type) {
    case RoleType.GET:
      return {
        ...state,
        getRoleResult: action.payload.getResult,
      };
    case RoleType.POST:
      return {
        ...state,
        updateRoleResult: initialState.updateRoleResult,
        postRoleResult: action.payload.postResult,
      };
    case RoleType.DELETE:
      return {
        ...state,
        deleteRoleResult: action.payload.deleteResult,
      };

    case RoleType.UPDATE:
      return {
        ...state,
        postRoleResult: initialState.postRoleResult,
        updateRoleResult: action.payload.updateResult,
      };
    case RoleType.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default roleReducers;
