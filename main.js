// Boolean
var isDone = false;
console.log("isDone:", isDone);
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("decimal:", decimal, "hex:", hex, "binary:", binary, "octal:", octal);
// String
var color = "blue";
color = 'red';
console.log("color:", color);
// Array
var list = [1, 2, 3];
console.log("list:", list);
// Tuple
var x;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'
console.log("tuple:", x);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("enum:", c); // Output: 1 (index of Green)
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log("notSure:", notSure);
// Void
function warnUser() {
    console.log("This is a warning message");
}
warnUser();
// Null and Undefined
var u = undefined;
var n = null;
console.log("undefined:", u, "null:", n);
// Never
function error(message) {
    throw new Error(message);
}
// Type Assertions
var someValue = "this is a string";
var strLength = someValue.length;
console.log("strLength:", strLength);
