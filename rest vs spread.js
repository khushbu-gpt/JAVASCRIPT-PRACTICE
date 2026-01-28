const nums = [1, 2, 3, 4];
//skip value
const [first, , third] = nums;

console.log(first); // 1
console.log(third); // 3

// const nums = [5];
// Default Values
const [x = 0, y = 0] = nums;

console.log(x); // 5
console.log(y); // 0

// const user = { name: "Aman" };

const { age = 18 } = user;

console.log(age); // 18


//rename variable
const user = { name: "Aman" };

const { name: userName } = user;

console.log(userName); // Aman


//REST
// const nums = [1, 2, 3, 4, 5];

const [firs, second, ...restNums] = nums;

console.log(firs);     // 1
console.log(second);    // 2
console.log(restNums);  // [3,4,5]

// const user = {
//   name: "Aman",
//   age: 22,
//   city: "Delhi"
// };

const { name, ...restUser } = user;

console.log(name);      // Aman
console.log(restUser);  // { age: 22, city: "Delhi" }

//REST IN FUNCTION

function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3, 4, 5); // 15

// const nums = [10, 20, 30, 40];

const [firsti, ...rest] = nums;

console.log(firsti); // 10
console.log(rest);  // [20,30,40]

function printUser({ name, age }) {
  console.log(name, age);
}

printUser({ name: "Aman", age: 22 });


// const user = {};

const {
  profile: {
    // name = "Guest"
  } = {}
} = user;

console.log(name); // Guest


const users = [
  { name: "Aman", age: 22 },
  { name: "Ravi", age: 25 }
];

for (const { name, age } of users) {
  console.log(name, age);
}

function pickName({ name }) {
  return { name };
}

pickName({ name: "Aman", age: 22 });

function createUser({ name, ...rest }) {
  console.log(name); // Aman
  console.log(rest); // { age, city }
}

createUser({ name: "Aman", age: 22, city: "Delhi" });

function handler({ target: { value } }) {
  console.log(value);
}
