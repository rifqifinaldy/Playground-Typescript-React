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
    CLIENT_ERROR = "There's an Error, Please check your Form",
    SERVER_ERROR = "An Error has Occured, Please try again later"
}

export enum StatusCode {
    GET = 200,
    UPDATE = 201, // POST/UPDATE
    DELETE = 204, // BUAT BEDAIN JADI 204
    CLIENT_ERROR = 404,
    SERVER_ERROR = 500,
}

export interface responses {
    method: Method;
    data : [] | {};
    status: StatusCode | number;
    message: StatusMessage | string;
}

export interface response {
    loading: boolean;
    responses: responses;
}