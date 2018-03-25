var test: boolean = false;
var id: number = 2;

// ........... Number ...........

var decimal: number = 5.4;
var hex: number = 0xf00d;
var binary: number = 0b1010;
var octal: number = 0o744;

// ........... String ...........

var name: string = 'Rafael';
var car: string = 'Chevette';
var text = `Name: ${name} Car: ${car}`;

document.body.innerHTML = text;

// ........... Array ...........

var fruits: string[] = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);

var fruits1: Array<string> = ["Orange", "Banana", "Lemon"];
console.log(fruits1);

// ........... Enum ...........

enum Color {
    Red, Green, Blue
}
console.log(Color.Blue);

// ........... Any ...........

var list:any = 23;
console.log(list);
list = "String ....";
console.log(list);

// ........... Void ...........

function printNumber(num:number) :void {
    alert(num);
}

printNumber(30);
