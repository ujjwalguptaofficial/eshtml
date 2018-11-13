import { ViewEngine } from "fortjs";
import { IViewOption } from "fortjs";
export declare class FortViewEngine implements ViewEngine {
    render(value: IViewOption): Promise<string>;
}
