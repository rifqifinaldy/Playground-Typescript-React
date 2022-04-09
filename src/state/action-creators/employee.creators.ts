import { EmployeeType } from "../actions-types/employee.types";
import { Dispatch } from "redux";
import { EmployeeAction } from "../actions/employee.action";
import axios from "axios";
import { API_URL } from "../../utilities/utilities";

export const getEmployee = () => async (dispatch: Dispatch<EmployeeAction>) => {
  dispatch({
    type: EmployeeType.GET,
    payload: {
      loading: true,
      data: [],
      error: false
    }
  });
  try {
    const { data } = await axios.get(API_URL + "employee");
    const response = data;
    dispatch({
      type: EmployeeType.GET,
      payload: {
        loading: false,
        data: response,
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: EmployeeType.GET,
      payload: {
        loading: false,
        data: [],
        error: true,
      },
    });
  }
};
