import { IError } from "./interfaces/error";
import { ERROR_TYPE } from "./enums/error_type";
export declare class LogHelper implements IError {
    type: ERROR_TYPE;
    message: string;
    private info_;
    constructor(type: ERROR_TYPE, info?: any);
    static log(msg: any): void;
    logError(): void;
    logWarning(): void;
    throw(): void;
    get(): IError;
    private getMsg_;
}
