import { IViewOption } from "server";
import { Global } from "./global";
import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "./enums/error_type";
import { View } from "./model/view";
import { getView } from "./helper";

export function render(option: IViewOption) {
    return new Promise((resolve, reject) => {
        const viewClass = getView(option.view);
        if (viewClass == null) {
            new LogHelper(ERROR_TYPE.View_Not_Found, option.view).throw();
        }
        else {
            const viewObj: View = new viewClass();
            resolve(viewObj.render(option.model));
        }
    })
}