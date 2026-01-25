// Find the second largest element in an array
const arr = [10, 5, 10, 3, 8, 4, 3];
// const arr = [4, 0, 5, 0, 0, 2]
let largest = -Infinity;
let secondLargest = -Infinity;
if (arr.length < 2) return null;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] < largest && arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}
// console.log(largest, secondLargest);

//Check if an array is sorted (ascending)

let isSorted = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}
if (isSorted) {
  console.log("sorted");
} else {
  console.log("not sorted");
}

let newArr = [];
let count = 0;
// Move All Zeros to the End'
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    count++;
  } else {
    newArr.push(arr[i]);
  }
}
for (let i = 0; i < count; i++) {
  newArr.push(0);
}
// console.log(newArr)

let pos = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[pos] = arr[i];
    pos++;
  }
}

for (let i = pos; i < arr.length; i++) {
  arr[i] = 0;
}

// Remove duplicates in-place from sorted array
const dupArr = [1, 1, 2, 2, 2, 3];
let i = 0;
let p = 0;
while (i < dupArr.length) {
  if (dupArr[i] !== dupArr[i - 1]) {
    dupArr[p] = dupArr[i];
    p++;
  }
  i++;
}
console.log(dupArr);

// Find missing number from 1 to n
let a = [1, 2, 5,9]

let missing = -1

for (let i = 0; i < a.length; i++) {
  if (a[i] !== i + 1) {
    missing = i + 1
    break
  }
}

console.log(missing)

// Find if array contains duplicate
// Find pair with sum = target
// Find majority element
// Rotate array by k steps
// Maximum subarray sum
let ar = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length / 2; i++) {
//   let temp = arr[i]
//   arr[i] = arr[arr.length - 1 - i]
//   arr[arr.length - 1 - i] = temp
// }
let start = 0;
let end = ar.length - 1;

while (start < end) {
  let temp = ar[start];
  ar[start] = ar[end];
  ar[end] = temp;

  start++;
  end--;
}

console.log(ar);
