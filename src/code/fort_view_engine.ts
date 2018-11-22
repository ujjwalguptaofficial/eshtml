import { ViewEngine } from "fortjs";
import { IViewOption } from "fortjs";
import { render } from "./render";
export class FortViewEngine implements ViewEngine {
    render(value: IViewOption): Promise<string> {
        return render(value);
    }
}