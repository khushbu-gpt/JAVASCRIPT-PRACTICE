let arr = [10, 20, 30, 40];
console.log(arr[0]);
console.log(arr[arr.length - 1]);

arr.push(4);
arr.pop();
console.log(arr);

let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);

let arr1= [1, 2, 3, 4, 5];

let x = arr.slice(1, 3);
console.log(x);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

function hasDuplicate(arr) {
  const set = new Set();

  for (let num of arr) {
    if (set.has(num)) {
      return true; // duplicate found
    }
    set.add(num);
  }
  return false;
}
