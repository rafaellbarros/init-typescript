var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var Camaro = new Car();
Camaro.brand = "Chevrolet";
Camaro.name = "Camaro";
Camaro.power = 200;
console.log(getCar(Camaro));
