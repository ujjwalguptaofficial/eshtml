import { ViewEngineData } from "fortjs";
import { Global } from "./global";
import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "./enums/error_type";
import { View } from "./abstracts/view";
import { getView } from "./helper";

export async function renderView(data: ViewEngineData): Promise<string> {
    const viewClass = getView(data.view);
    if (viewClass == null) {
        new LogHelper(ERROR_TYPE.View_Not_Found, data.view).throw();
    }
    else {
        const viewObj: View = new viewClass();
        return viewObj.render(data.model);
    }
}