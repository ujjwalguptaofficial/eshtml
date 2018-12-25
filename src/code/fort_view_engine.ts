import { ViewEngine } from "fortjs";
import { ViewEngineData } from "fortjs";
import { renderView } from "./render_view";
export class FortViewEngine implements ViewEngine {
    render(value: ViewEngineData): Promise<string> {
        return renderView(value);
    }
}