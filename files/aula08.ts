interface ICountString{
    valueTxt: string;
    countTxt():number;
}

interface IPrintTxt{
    print(value:string): void;
}

class MyText implements ICountString, IPrintTxt{
    
    constructor(public valueTxt:string){};
    
    countTxt(): number {
        return this.valueTxt.length; 
    };
    
    print(value: string): void {
        console.log(`Text => ${value}`);
    }
    

}

var my = new MyText("Meu nome é Rafael");
console.log(my.countTxt());
my.print(my.countTxt().toString());

// ....................

interface ICarString {
    name: string;
    getCar(): string;
}

interface ICarColor {
    color:string;
    getColor():string;
}

interface ICar extends ICarString, ICarColor{
    power:number;
    getPower():number;
}

class Car implements ICar {
    
    constructor(
        public name: string,
        public color: string,
        public power: number
        
    ) {};
    
    getPower(): number {
        return this.power;
    }
    getCar(): string {
        return this.name
    }
    getColor(): string {
        return this.color;
    }
    
}

var chevette = new Car("Chevett DL","Prata",90);
console.log(chevette.getCar(), chevette.getColor(), chevette.getPower());