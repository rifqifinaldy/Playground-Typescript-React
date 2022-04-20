import { Dispatch } from "redux";
import axios from "axios";
import { API_URL } from "../../utilities/utilities";
import { ResponsesAction } from "../actions/responses.action";
import {
  Method,
  StatusCode,
  StatusMessage,
} from "../actions-types/responses.types";

// GET
export const getBanking = () => {
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
      const { data } = await axios.get(API_URL + "bank");
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

// POST
export const postBanking = (sendData: {}) => {
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
      const { data } = await axios.post(API_URL + "Bank", sendData);
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
export const resetBanking =
  () => async (dispatch: Dispatch<ResponsesAction>) => {
    dispatch({
      type: Method.RESET,
    });
  };
