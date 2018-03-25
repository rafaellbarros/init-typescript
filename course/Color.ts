module ColorModule{
    export class Color {
        name: string;
        code: string;

        getColor(): string {
            return this.code;
        }
    }
}

var blue = new ColorModule.Color();
blue.name = "blue";
blue.code = "#blue";
console.log(blue);