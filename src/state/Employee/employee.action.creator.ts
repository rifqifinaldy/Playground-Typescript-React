import { Dispatch } from "redux";
import axios from "axios";
import { API_URL } from "../../utilities";
import { EmployeeAction } from "./employee.action.types";
import { EmployeeType } from "./employee.types";
import { StatusCode, StatusMessage } from "../../utilities/enum/response.status";
import { IEmployeeBody } from "./employee.body";

// GET METHOD
export const getEmployee = () => {
  return async (dispatch: Dispatch<EmployeeAction>) => {
    dispatch({
      type: EmployeeType.GET,
      payload: {
        getResult: {
          loading: true,
          method: EmployeeType.GET,
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
        type: EmployeeType.GET,
        payload: {
          getResult: {
            loading: false,
            method: EmployeeType.GET,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.GET,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: EmployeeType.GET,
        payload: {
          getResult: {
            loading: false,
            method: EmployeeType.GET,
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
  return async (dispatch: Dispatch<EmployeeAction>) => {
    dispatch({
      type: EmployeeType.POST,
      payload: {
        postResult: {
          loading: true,
          method: EmployeeType.POST,
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
        type: EmployeeType.POST,
        payload: {
          postResult: {
            loading: false,
            method: EmployeeType.POST,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.POST,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: EmployeeType.POST,
        payload: {
          postResult: {
            loading: false,
            method: EmployeeType.POST,
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
  () => async (dispatch: Dispatch<EmployeeAction>) => {
    dispatch({
      type: EmployeeType.RESET,
    });
  };

  // Delete
export const deleteEmployee = (id: string | number | null) => {
  return async (dispatch: Dispatch<EmployeeAction>) => {
    dispatch({
      type: EmployeeType.DELETE,
      payload: {
        deleteResult: {
          loading: true,
          method: EmployeeType.DELETE,
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
        type: EmployeeType.DELETE,
        payload: {
          deleteResult: {
            loading: false,
            method: EmployeeType.DELETE,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.DELETE,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: EmployeeType.DELETE,
        payload: {
          deleteResult: {
            loading: false,
            method: EmployeeType.DELETE,
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
export const updateEmployee = (sendData: IEmployeeBody) => {
  return async (dispatch: Dispatch<EmployeeAction>) => {
    dispatch({
      type: EmployeeType.UPDATE,
      payload: {
        updateResult: {
          loading: true,
          method: EmployeeType.UPDATE,
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
        type: EmployeeType.UPDATE,
        payload: {
          updateResult: {
            loading: false,
            method: EmployeeType.UPDATE,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.UPDATE,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: EmployeeType.UPDATE,
        payload: {
          updateResult: {
            loading: false,
            method: EmployeeType.UPDATE,
            data: [],
            status: StatusCode.ERROR,
            message: StatusMessage.ERROR,
          },
        },
      });
    }
  };
};
