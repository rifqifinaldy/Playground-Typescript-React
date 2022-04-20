import { Dispatch } from "redux";
import axios from "axios";
import { API_URL } from "../../utilities";
import { RoleAction } from "./role.action.types";
import { RoleType } from "./role.types";
import { StatusCode, StatusMessage } from "../../utilities/enum/response.status";
import { IRoleBody } from "./role.body";

export const getRole = () => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleType.GET,
      payload: {
        getResult: {
          loading: true,
          method: RoleType.GET,
          data: [],
          status: 0,
          message: "Loading",
        },
      },
    });
    try {
      const { data } = await axios.get(API_URL + "role");
      const response = data;
      dispatch({
        type: RoleType.GET,
        payload: {
          getResult: {
            loading: false,
            method: RoleType.GET,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.GET,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: RoleType.GET,
        payload: {
          getResult: {
            loading: false,
            method: RoleType.GET,
            data: [],
            status: StatusCode.ERROR,
            message: StatusMessage.ERROR,
          },
        },
      });
    }
  };
};

export const postRole = (sendData: {}) => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleType.POST,
      payload: {
        postResult: {
          loading: true,
          method: RoleType.POST,
          data: [],
          status: 0,
          message: "Loading",
        },
      },
    });
    try {
      const { data } = await axios.post(API_URL + "role", sendData);
      const response = data;
      dispatch({
        type: RoleType.POST,
        payload: {
          postResult: {
            loading: false,
            method: RoleType.POST,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.POST,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: RoleType.POST,
        payload: {
          postResult: {
            loading: false,
            method: RoleType.POST,
            data: [],
            status: StatusCode.ERROR,
            message: StatusMessage.ERROR,
          },
        },
      });
    }
  };
};

// RESET
export const resetRole = () => async (dispatch: Dispatch<RoleAction>) => {
  dispatch({
    type: RoleType.RESET,
  });
};

// Delete
export const deleteRole = (id: string | number | null) => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleType.DELETE,
      payload: {
        deleteResult: {
          loading: true,
          method: RoleType.DELETE,
          data: [],
          status: 0,
          message: "Loading",
        },
      },
    });
    try {
      const { data } = await axios.delete(API_URL + "role/" + id);
      const response = data;
      dispatch({
        type: RoleType.DELETE,
        payload: {
          deleteResult: {
            loading: false,
            method: RoleType.DELETE,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.DELETE,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: RoleType.DELETE,
        payload: {
          deleteResult: {
            loading: false,
            method: RoleType.DELETE,
            data: [],
            status: StatusCode.ERROR,
            message: StatusMessage.ERROR,
          },
        },
      });
    }
  };
};

// Update
export const updateRole = (sendData: IRoleBody) => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleType.UPDATE,
      payload: {
        updateResult: {
          loading: true,
          method: RoleType.UPDATE,
          data: [],
          status: 0,
          message: "Loading",
        },
      },
    });
    try {
      const { data } = await axios.put(
        API_URL + "role/" + sendData.id,
        sendData
      );
      const response = data;
      dispatch({
        type: RoleType.UPDATE,
        payload: {
          updateResult: {
            loading: false,
            method: RoleType.UPDATE,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.UPDATE,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: RoleType.UPDATE,
        payload: {
          updateResult: {
            loading: false,
            method: RoleType.UPDATE,
            data: [],
            status: StatusCode.ERROR,
            message: StatusMessage.ERROR,
          },
        },
      });
    }
  };
};
