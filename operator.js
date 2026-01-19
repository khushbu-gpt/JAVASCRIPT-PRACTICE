console.log("5" + 3);
console.log(3 + "5");
console.log(3 + 5);

console.log("10" - 2);
console.log("10" - "4");
console.log("10" - "a");

console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

console.log(true && false);
console.log("hello" && "");
console.log(0 && 5);
console.log(1 && 2 && 3);

console.log(false || true);
console.log(0 || 5 || 10);
console.log("" || "default");

let a = 0;
let b = null;
let c = undefined;
console.log(a ?? 10);
console.log(b ?? 10);
console.log(c ?? 10);

let x = 5;
console.log(x++ + ++x);
let y = 2;
console.log(y-- + --y);

let score = 85;
console.log(score >= 90 ? "A" : score >= 80 ? "B" : "C");

let a1= (1 + 2, 3 + 4, 5 + 6);
console.log(a1);

console.log(+"5");
console.log(+"hello");
console.log(-"5");
console.log(-true);

console.log("a" + 1 + 2);
console.log(1 + 2 + "a");

console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(""));

console.log(!!0);
console.log(!!"hello");
console.log(!!"");
console.log(!!null);
console.log(!![]);

let obj1 = {a:1};
let obj2 = {a:1};
console.log(obj1 == obj2);
console.log(obj1 === obj2);
let obj3 = obj1;
console.log(obj1 === obj3);

console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof "abc");

console.log("5" + 1);
console.log(Number("5") + 1);
console.log(+ "5" + 1);

function sayHi(){ console.log("Hi"); return true; }
console.log(false && sayHi());
console.log(true || sayHi());
console.log(true && sayHi());

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

console.log("" + 0);
console.log("" - 0);
console.log(true + false);
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});

// let x = NaN;

console.log(x === NaN);
console.log(Number.isNaN(x));

// let obj = {};
obj[1] = "one";
obj["1"] = "string one";

console.log(obj);