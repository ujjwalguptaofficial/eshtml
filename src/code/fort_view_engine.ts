import { ViewEngine } from "fortjs";
import { IViewOption } from "fortjs";
import { getView } from "./helper";
import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "./enums/error_type";
import { View } from "./abstracts/view";
export class FortViewEngine implements ViewEngine {
    render(value: IViewOption): Promise<string> {
        return new Promise((resolve, reject) => {
            const viewClass = getView(value.view);
            if (viewClass == null) {
                new LogHelper(ERROR_TYPE.View_Not_Found, value.view).throw();
            }
            else {
                const viewObj: View = new viewClass();
                resolve(viewObj.render(value.model));
            }
        });
    }
}