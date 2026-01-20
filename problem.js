// Array length ko loop ke andar change kar dena
for (let i = 0; i < arr.length; i++) {
  arr.push(10);
}

let n = arr.length;
for (let i = 0; i < n; i++) {
}

//  Index out of bound access karna
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
}
// arr[arr.length] → undefined

// 5️⃣ Object (HashMap) ko array ki tarah use karna
let freq = [];
freq["a"] = 1;

let freq = {};
freq["a"] = 1;

// undefined / null case handle na karna
for (let i = 0; i < nums.length; i++) {
}

if (!nums || nums.length === 0) return 0;

// Mutating input jab allowed nahi hota
nums.sort((a, b) => a - b);

let copy = [...nums];
copy.sort((a, b) => a - b);

// for...in aur for...of ka galat use
for (let i in arr) {
  console.log(arr[i]);
}

for (let val of arr) {
  console.log(val);
}

// Time Complexity ignore karna
// Galat (O(n²))
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
  }
}

let map = {};
for (let i = 0; i < n; i++) {
}


function test(x) {
  x = x || 10;
  return x;
}
// x = x ?? 10;

console.log(test(0));

// Wrong data structure choose karna
array.includes(x) // O(n)
//correct
set.has(x) // O(1)


// Edge cases bhool jana
if (arr.length === 0) return;
if (!arr || arr.length === 0) return;


Number(x), String(x)


