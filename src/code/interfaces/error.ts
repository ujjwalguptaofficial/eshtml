import { ERROR_TYPE } from "../enums/error_type";

export interface IError {
    message: string;
    type: ERROR_TYPE
}