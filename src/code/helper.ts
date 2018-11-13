import { Global } from "./global";

export function getView(viewName: string) {
    viewName = viewName.toLowerCase();
    let viewFound = Global.viewCollecton.find(qry => qry.name === viewName);
    return viewFound == null ? null : viewFound.view;
}

