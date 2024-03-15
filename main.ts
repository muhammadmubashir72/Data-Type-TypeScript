// Boolean
let isDone: boolean = false;
console.log("isDone:", isDone);

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("decimal:", decimal, "hex:", hex, "binary:", binary, "octal:", octal);

// String
let color: string = "blue";
color = 'red';
console.log("color:", color);

// Array
let list: number[] = [1, 2, 3];
console.log("list:", list);

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'
console.log("tuple:", x);

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log("enum:", c); // Output: 1 (index of Green)

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log("notSure:", notSure);

// Void
function warnUser(): void {
    console.log("This is a warning message");
}
warnUser();

// Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log("undefined:", u, "null:", n);

// Never
function error(message: string): never {
    throw new Error(message);
}

// Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log("strLength:", strLength);
