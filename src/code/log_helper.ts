import { IError } from "./interfaces/error";
import { ERROR_TYPE } from "./enums/error_type";


export class LogHelper implements IError {
    type: ERROR_TYPE;
    message: string;
    private info_: any;

    constructor(type: ERROR_TYPE, info?: any) {
        this.type = type;
        this.info_ = info;
        this.message = this.getMsg_();
    }

    static log(msg) {
        console.log(msg);
    }

    logError() {
        console.error(this.get());
    }

    logWarning() {
        console.warn(this.get());
    }

    throw() {
        const err = this.get();
        throw JSON.stringify(err);
    }

    get() {
        return {
            message: this.message,
            type: this.type
        } as IError;
    }

    private getMsg_() {
        let errMsg: string;
        switch (this.type) {
            case ERROR_TYPE.View_Not_Found:
                errMsg = `View '${this.info_}' not found. Please make sure you are specifying a valid view.`;
                break;
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    }
}