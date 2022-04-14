import { Dispatch } from "redux";
import axios from "axios";
import { API_URL } from "../../utilities/utilities";
import { ResponsesAction } from "../actions/responses.action";
import {
  Method,
  StatusCode,
  StatusMessage,
} from "../actions-types/responses.types";
import { RoleBody } from "../../pages/Role/FormRole";

export const getRole = () => {
  return async (dispatch: Dispatch<ResponsesAction>) => {
    dispatch({
      type: Method.GET,
      payload: {
        getResult: {
          loading: true,
          method: Method.GET,
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
        type: Method.GET,
        payload: {
          getResult: {
            loading: false,
            method: Method.GET,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.GET,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: Method.GET,
        payload: {
          getResult: {
            loading: false,
            method: Method.GET,
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
  return async (dispatch: Dispatch<ResponsesAction>) => {
    dispatch({
      type: Method.POST,
      payload: {
        postResult: {
          loading: true,
          method: Method.POST,
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
        type: Method.POST,
        payload: {
          postResult: {
            loading: false,
            method: Method.POST,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.POST,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: Method.POST,
        payload: {
          postResult: {
            loading: false,
            method: Method.POST,
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
export const resetRole = () => async (dispatch: Dispatch<ResponsesAction>) => {
  dispatch({
    type: Method.RESET,
  });
};

// Delete
export const deleteRole = (id: string | number | null) => {
  return async (dispatch: Dispatch<ResponsesAction>) => {
    dispatch({
      type: Method.DELETE,
      payload: {
        deleteResult: {
          loading: true,
          method: Method.DELETE,
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
        type: Method.DELETE,
        payload: {
          deleteResult: {
            loading: false,
            method: Method.DELETE,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.DELETE,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: Method.DELETE,
        payload: {
          deleteResult: {
            loading: false,
            method: Method.DELETE,
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
export const updateRole = (sendData: RoleBody) => {
  return async (dispatch: Dispatch<ResponsesAction>) => {
    dispatch({
      type: Method.UPDATE,
      payload: {
        updateResult: {
          loading: true,
          method: Method.UPDATE,
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
        type: Method.UPDATE,
        payload: {
          updateResult: {
            loading: false,
            method: Method.UPDATE,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.UPDATE,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: Method.UPDATE,
        payload: {
          updateResult: {
            loading: false,
            method: Method.UPDATE,
            data: {},
            status: StatusCode.ERROR,
            message: StatusMessage.ERROR,
          },
        },
      });
    }
  };
};
