import { Global } from "./global";

export function getView(viewName) {
    let viewClass;
    Global.viewCollecton.every((value) => {
        if (viewName === value.name) {
            viewClass = value.view;
            return false;
        }
        return true;
    })
    return viewClass;
}

