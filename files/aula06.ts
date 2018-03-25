interface IPeople{
    name: string;
    age: number;
}

function people(value: IPeople): void{
    console.log(value);
}

people({name: "Rafael", age: 29});

function people2(name: string, age: number): IPeople {
    return {name: name, age: age};
}

console.log(people2("Maria", 20));

interface IColor{
    title?: string;
    codeColor: string;
}

function getColor(codeColor: string, title?: string){
    
    if(title){
        return { title: title, codeColor: codeColor};
    }

    return { codeColor: codeColor};
}

console.log(getColor("#000000"));
console.log(getColor("black","#000000"));