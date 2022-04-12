import { EmployeeType } from "../actions-types/employee.types";
import { Dispatch } from "redux";
import { EmployeeAction } from "../actions/employee.action";
import axios from "axios";
import { API_URL } from "../../utilities/utilities";

// GET METHOD
export const getEmployee = () => {
  return async (dispatch: Dispatch<EmployeeAction>) => {
    dispatch({
      type: EmployeeType.GET,
      payload: {
        success: false,
        loading: true,
        data: [],
        error: false,
      },
    });
    try {
      const { data } = await axios.get(API_URL + "employee");
      const response = data;
      dispatch({
        type: EmployeeType.GET,
        payload: {
          success: true,
          loading: false,
          data: response,
          error: false,
        },
      });
    } catch (error) {
      dispatch({
        type: EmployeeType.GET,
        payload: {
          success: false,
          loading: false,
          data: [],
          error: true,
        },
      });
    }
  };
};

// POST METHOD
export const postEmployee = (sendData: {}) => {
  return async (dispatch: Dispatch<EmployeeAction>) => {
    console.log("POSTING...");
    dispatch({
      type: EmployeeType.POST,
      payload: {
        success: false,
        loading: true,
        data: [],
        error: false,
      },
    });
    try {
      console.log("Sending..", sendData);
      const { data } = await axios.post(API_URL + "employee", sendData);
      const response = data;
      console.log(response);
      dispatch({
        type: EmployeeType.POST,
        payload: {
          success: true,
          loading: false,
          data: true,
          error: false,
        },
      });
    } catch (error) {
      dispatch({
        type: EmployeeType.POST,
        payload: {
          success: false,
          loading: false,
          data: true,
          error: true,
        },
      });
    }
  };
};

// RESET
export const resetEmployee =
  () => async (dispatch: Dispatch<EmployeeAction>) => {
    console.log("COMPONENT LEAVE & CANCEL ALL REQUEST")
    dispatch({
      type: EmployeeType.RESET,
      payload: {
        success: false,
        loading: true,
        data: [],
        error: false,
      },
    });
  };

  export const deleteEmployee = (id: string | number | null) => {
    return async (dispatch: Dispatch<EmployeeAction>) => {
      console.log("Deleting...");
      dispatch({
        type: EmployeeType.DELETE,
        payload: {
          success: false,
          loading: true,
          data: [],
          error: false,
        },
      });
      try {
        console.log("Sending..", id);
        const { data } = await axios.delete(API_URL + "employee/" + id);
        const response = data;
        console.log(response);
        dispatch({
          type: EmployeeType.DELETE,
          payload: {
            success: true,
            loading: false,
            data: true,
            error: false,
          },
        });
      } catch (error) {
        dispatch({
          type: EmployeeType.DELETE,
          payload: {
            success: false,
            loading: false,
            data: true,
            error: true,
          },
        });
      }
    };
  };
