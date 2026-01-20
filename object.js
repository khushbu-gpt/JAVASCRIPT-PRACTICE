const user = { name: "Khushbu", age: 20 };

Object.freeze(user);

user.age = 30;  // will NOT change
console.log(user);

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));  // true

const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const result = arr.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

console.log(result);

const scores = { a: 12, b: 50, c: 33 };

const maxKey = Object.keys(scores).reduce((a, b) =>
  scores[a] > scores[b] ? a : b
);

console.log(maxKey, scores[maxKey]);

const marks = { eng: 40, math: 80, sci: 30, comp: 90 };

for (let key in marks) {
  if (marks[key] < 50) {
    delete marks[key];
  }
}
console.log(marks);

function countProps(obj) {
  let count = 0;

  for (let key in obj) {
    count++;
    if (typeof obj[key] === "object") {
      count += countProps(obj[key]);
    }
  }
  return count;
}

const obj = {
  a: 1,
  b: { x: 2, y: 3, z: { p: 4 } }
};

console.log(countProps(obj));


const keys = ["name", "age"];
const values = ["Khushbu", 20];

// const obj = keys.reduce((acc, key, index) => {
//   acc[key] = values[index];
//   return acc;
// }, {});

// console.log(obj);


const users = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
];

const group = users.reduce((acc, user) => {
  if (!acc[user.city]) acc[user.city] = [];
  acc[user.city].push(user.name);
  return acc;
}, {});

console.log(group);

