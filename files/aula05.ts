class Car{
    constructor(
        public name: string, 
        public color: string, 
        public power: number
    ){};

    printCar(): void {
        console.log(this.name, this.color, this.power);
    }
}

var camaro = new Car("Camaro", "Red", 200);
camaro.printCar();

class Car2{

    private _name: string;
    private _color: string;
    private _power: number;
    public static list: Array<string> = [];

    constructor(name: string, color: string, power: number){
        this._name = name;
        this._color = color;
        this._power = power;
    };


	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}
    

	public get color(): string {
		return this._color;
	}

	public set color(value: string) {
		this._color = value;
	}
    
	public get power(): number {
		return this._power;
	}

	public set power(value: number) {
		this._power = value;
	}

 

}

var ferrari = new Car2("Ferrari", "Yellow", 250);

console.log(ferrari);

Car2.list.push(ferrari.name);

var chevette = new Car2("Chevete DL Ap Turbo", "Preto", 180);

Car2.list.push(chevette.name);

console.log(Car2.list);

