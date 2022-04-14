import { Dispatch } from "redux";
import axios from "axios";
import { API_URL } from "../../utilities/utilities";
import { EmployeeBody } from "../../pages/Employee/AddEmployee";
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
        loading: true,
        responses: {
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
      console.log(response)
      dispatch({
        type: Method.GET,
        payload: {
          loading: false,
          responses: {
            method: Method.GET,
            data: response,
            status: StatusCode.GET,
            message: StatusMessage.GET,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: Method.GET,
        payload: {
          loading: false,
          responses: {
            method: Method.GET,
            data: [],
            status: StatusCode.CLIENT_ERROR,
            message: StatusMessage.CLIENT_ERROR,
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
        loading: true,
        responses: {
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
      console.log(response);
      dispatch({
        type: Method.POST,
        payload: {
          loading: false,
          responses: {
            method: Method.POST,
            data: response,
            status: StatusCode.UPDATE,
            message: StatusMessage.POST,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: Method.POST,
        payload: {
          loading: false,
          responses: {
            method: Method.POST,
            data: [],
            status: StatusCode.CLIENT_ERROR,
            message: StatusMessage.CLIENT_ERROR,
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

export const deleteEmployee = (id: string | number | null) => {
  return async (dispatch: Dispatch<ResponsesAction>) => {
    dispatch({
      type: Method.DELETE,
      payload: {
        loading: true,
        responses: {
          method: Method.DELETE,
          data: [],
          status: 0,
          message: "Loading",
        },
      },
    });
    try {
      console.log("Sending..", id);
      const { data } = await axios.delete(API_URL + "employee/" + id);
      const response = data;
      console.log(response);
      dispatch({
        type: Method.DELETE,
        payload: {
          loading: false,
          responses: {
            method: Method.DELETE,
            data: response,
            status: StatusCode.DELETE,
            message: StatusMessage.DELETE,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: Method.DELETE,
        payload: {
          loading: false,
          responses: {
            method: Method.DELETE,
            data: [],
            status: StatusCode.CLIENT_ERROR,
            message: StatusMessage.CLIENT_ERROR,
          },
        },
      });
    }
  };
};

export const updateEmployee = (sendData: EmployeeBody) => {
  return async (dispatch: Dispatch<ResponsesAction>) => {
    dispatch({
      type: Method.UPDATE,
      payload: {
        loading: true,
        responses: {
          method: Method.UPDATE,
          data: [],
          status: 0,
          message: "Loading",
        },
      },
    });
    try {
      console.log("Editing", sendData.id);
      const { data } = await axios.put(
        API_URL + "employee/" + sendData.id,
        sendData
      );
      const response = data;
      dispatch({
        type: Method.UPDATE,
        payload: {
          loading: false,
          responses: {
            method: Method.UPDATE,
            data: response,
            status: StatusCode.UPDATE,
            message: StatusMessage.UPDATE,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: Method.UPDATE,
        payload: {
          loading: false,
          responses: {
            method: Method.UPDATE,
            data: {},
            status: StatusCode.CLIENT_ERROR,
            message: StatusMessage.CLIENT_ERROR,
          },
        },
      });
    }
  };
};
