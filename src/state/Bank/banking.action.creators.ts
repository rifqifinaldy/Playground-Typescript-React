import { Dispatch } from "redux";
import axios from "axios";
import { API_URL } from "../../utilities";
import { BankingAction } from "./banking.action.types";
import { BankingType } from "./banking.types";
import {
  StatusCode,
  StatusMessage,
} from "../../utilities/enum/response.status";

// GET
export const getBanking = () => {
  return async (dispatch: Dispatch<BankingAction>) => {
    dispatch({
      type: BankingType.GET,
      payload: {
        getResult: {
          loading: true,
          method: BankingType.GET,
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
        type: BankingType.GET,
        payload: {
          getResult: {
            loading: false,
            method: BankingType.GET,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.GET,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: BankingType.GET,
        payload: {
          getResult: {
            loading: false,
            method: BankingType.GET,
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
  return async (dispatch: Dispatch<BankingAction>) => {
    dispatch({
      type: BankingType.POST,
      payload: {
        postResult: {
          loading: true,
          method: BankingType.POST,
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
        type: BankingType.POST,
        payload: {
          postResult: {
            loading: false,
            method: BankingType.POST,
            data: response,
            status: StatusCode.SUCCESS,
            message: StatusMessage.POST,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: BankingType.POST,
        payload: {
          postResult: {
            loading: false,
            method: BankingType.POST,
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
export const resetBanking = () => async (dispatch: Dispatch<BankingAction>) => {
  dispatch({
    type: BankingType.RESET,
  });
};
