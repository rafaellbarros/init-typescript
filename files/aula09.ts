var listCars = ["Camaro", "Ferrari", "Porsche"];

// in return keys
// of return values
for (var value of listCars) {
    console.log(value);
}

var colors = new Array(["red","blue","orange"]);

colors['title'] = "Colors";

console.log(colors);

for (var c in colors) {
    console.log("c:" + c);
}
for (var color of colors) {
    console.log("color: " + color);
}