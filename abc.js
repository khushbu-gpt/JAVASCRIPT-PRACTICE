let user = { name: "Khushbu" };

function sayHello(greeting) {
  console.log(greeting + " " + this.name);
}
sayHello.call(user, "hello");

function sum(a, b, c) {
  console.log(a + b + c);
}
// sum.apply(null, [1, 2, 3]);

function sum() {
  console.log(this.a + this.b + this.c);
}
sum.apply({ a: 1, b: 2, c: 3 });

function printName() {
  console.log(this.name);
}

// setTimeout(printName.bind(user),1000)

let obj1 = {
  name: "A",
  print: function () {
    console.log(this.name);
  },
};

let obj2 = {
  name: "B",
};
obj1.print.call(obj2);

let a = { x: 1, y: 2, z: 8 };
let b = { y: 2, x: 1 };
let isEqual = true;
if (Object.keys(a).length !== Object.keys(b).length) {
  isEqual = false;
} else {
  for (let key in a) {
    if (a[key] !== b[key]) {
      isEqual = false;
      break;
    }
  }
}
if (isEqual) console.log("equal");
else console.log("not equal");
let prices = {
  apple: 100,
  banana: 40,
  mango: 60,
};

const data=Object.entries(prices)
data.sort((a,b)=>a[1]-b[1])
console.log(data)
