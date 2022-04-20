import { StatusCode, StatusMessage } from "../enum/response.status";

export interface Result {
  loading: boolean;
  method: string;
  data: {}[];
  status: StatusCode | number;
  message: StatusMessage | string;
}

export interface response {
  [result: string]: Result;
}
