function test(a, b) {
  console.log(arguments);
}

test(1, 2, 3, 4); // Arguments object contains all passed args

function createUser({ name = "Guest", age = 18 } = {}) {
  console.log(name, age);
}

createUser({ name: "Aman" }); // Aman 18
createUser();                  // Guest 18 ✅ safe

//IMPURE FUNCTION
function getCurrentYear() {
  return new Date().getFullYear(); // depends on system
}

//function factories
function createMultiplier(x) {
  return function(y) {
    return x * y;
  }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

const [p = 10, q = 20, r = 30, s = 40] = [1, 2];
console.log(p, q, r, s); // 1 2 30 40

function showCity({ address: { city = "Unknown" } = {} }) {
  console.log(city);
}
showCity({ address: { city: "Delhi" } }); // Delhi
showCity({});                             // Unknown
