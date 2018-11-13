import { Global } from "../global";
import { Util } from "../util";

export function declareView(alias?: string): ClassDecorator {
    return (target: any) => {
        const classNameLower = (target.name as string).toLowerCase();
        Global.viewCollecton.push({
            name: Util.isNullOrEmpty(alias) ? classNameLower : alias,
            view: target
        })
    }
}