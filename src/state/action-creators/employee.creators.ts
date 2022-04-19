import { Dispatch } from "redux";
import axios from "axios";
import { API_URL } from "../../utilities/utilities";
import { EmployeeBody } from "../../pages/Employee/FormEmployee";
import { ResponsesAction } from "../actions/responses.action";
import {
  Method,
  StatusCode,
  StatusMessage,
} from "../actions-types/responses.types";

// GET METHOD
export const getEmployee = () => {
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
      const { data } = await axios.get(API_URL + "employee");
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

// POST METHOD
export const postEmployee = (sendData: {}) => {
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
      const { data } = await axios.post(API_URL + "employee", sendData);
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
export const resetEmployee =
  () => async (dispatch: Dispatch<ResponsesAction>) => {
    dispatch({
      type: Method.RESET,
    });
  };

  // Delete
export const deleteEmployee = (id: string | number | null) => {
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
      const { data } = await axios.delete(API_URL + "employee/" + id);
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
export const updateEmployee = (sendData: EmployeeBody) => {
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
        API_URL + "employee/" + sendData.id,
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
            data: [],
            status: StatusCode.ERROR,
            message: StatusMessage.ERROR,
          },
        },
      });
    }
  };
};
