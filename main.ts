interface ICar{
    brand: string;
    name: string;
    power: number;
}

class Car {
    brand: string;
    name: string;
    power: number;
}

var getCar = function(car: ICar){
    console.log(car.brand, car.name, car.power);
}

var Camaro = new Car();
Camaro.brand = "Chevrolet";
Camaro.name = "Camaro";
Camaro.power = 200;


console.log(getCar(Camaro));