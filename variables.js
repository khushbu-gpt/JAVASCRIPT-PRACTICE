let name = "";
const favLanguage = "";
let likesJS = true;
let bigNumber = 12345678901234567890n;

console.log(typeof bigNumber);
let a = 10;
let b = 3;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 


let age = 20;

console.log(age > 18 && age < 25); 
console.log(age < 18 || age > 60); 
console.log(!(age > 18));       

// implicit type coercion
console.log(false == 0);
console.log(10 + "5");
console.log("10" - 5);
console.log(true + 1);
console.log(false + "1");
console.log(null + 1);
console.log(undefined + 1);

// scope differences.
var x = 10;
let y = 20;
const z = 30;

{
  var x = 40;
  let y = 50;
}

console.log(x);
console.log(y);
console.log(z);

// why strings are immutable but arrays are mutable.
let str = "Hello";
str[0] = "h";

let arr = [1, 2, 3];
arr[0] = 10;

console.log(str);
console.log(arr);

// memory behavior for primitives vs objects
let a1 = 10;
let b1 = a1;
b1 = 20;

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;

console.log(a);
console.log(obj1.value);

// Checking Data Types Correctly
let arr = [];
let obj = {};

console.log(typeof arr === "array");
console.log(typeof obj === "object");

// truthy values f
// 0
// ""
// " "
// null
// undefined
// NaN
// []
// {}


const user = {
  name: "Alice",
  age: 25
};

user.age = 26;

// why === is preferred.
console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);
console.log(0 == false);
console.log(0 === false);


let value = 10;
value = "ten";
value = true;

console.log(value);


let arr = [];
// let obj = {};
// let value = null;

console.log(Array.isArray(arr)); // true
console.log(typeof obj === "object"); // true
console.log(value === null); // true