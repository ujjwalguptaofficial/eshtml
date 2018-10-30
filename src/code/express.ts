import { getView } from "./helper";
import { ERROR_TYPE } from "./enums/error_type";
import { LogHelper } from "./log_helper";
import { View } from "./model";

export function renderViewForExpress(view, model, callback) {
    const viewClass = getView(view);
    if (viewClass == null) {
        new LogHelper(ERROR_TYPE.View_Not_Found, view)
    }
    else {
        const viewObj: View = new viewClass();
        const rendered = viewObj.render(model)
        return callback(null, rendered)
    }

}