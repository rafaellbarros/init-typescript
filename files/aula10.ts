interface ICar {
    name: string;
    color: string;
    power: number;
    getCar(): void;
}

////<reference path="ICar"/>

class Car implements ICar {
    constructor(
        public name: string,
        public color: string,
        public power: number
    ){}

    getCar(): void{
        console.log(this.name, this.color, this.power);
    }
}

////<reference path="Car"/>

var opala = new Car("Opala Comodoro", "Marron", 150);
opala.getCar();
