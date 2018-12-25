export abstract class View {
    abstract render(model: { [key: string]: any }): string;
}