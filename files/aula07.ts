interface ITypeFunc{
    (a:number,b:number): number;
}

var sum: ITypeFunc;

sum = function(varA:number, varB:number) :number {
    return varA + varB;
}

interface IColor {
    (codeColor:string, title?:string) : {codeColor:string, title?:string};
}

var getColor: IColor;

getColor = function(codeColor:string, title?:string): {codeColor:string, title?:string}{

    if(title){
        return {codeColor:codeColor, title:title};
    }

    return {codeColor:codeColor};
}

interface IArrayTypes {
    [index:number]: string;
}

var arr: IArrayTypes;
arr = ["test"];

console.log(arr);