export enum Method {
  GET = "GET",
  POST = "POST",
  DETAIL = "DETAIL",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  RESET = "RESET",
}

export enum StatusMessage {
  GET = "Data Generated",
  POST = "Data Created Successfully",
  UPDATE = "Data Updated Successfully",
  DELETE = "Data Deleted Successfully",
  ERROR = "An Error has Occured, Please try again later",
}

export enum StatusCode {
  // SEMENTARA INI DULU
  SUCCESS = 200,
  ERROR = 404,
}

export interface Result {
  loading: boolean;
  method: Method;
  data: {}[];
  status: StatusCode | number;
  message: StatusMessage | string;
}

export interface response {
  [result: string]: Result;
}
