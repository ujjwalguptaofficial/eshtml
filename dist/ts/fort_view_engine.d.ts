import { ViewEngine } from "fortjs";
import { ViewEngineData } from "fortjs";
export declare class FortViewEngine implements ViewEngine {
    render(value: ViewEngineData): Promise<string>;
}
