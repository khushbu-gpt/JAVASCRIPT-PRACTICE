// Find the second largest element in an array
// const arr = [10, 5, 10, 3, 8, 4, 3];
const arr = [4, 0, 5, 0, 0, 2]
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

let isSorted=true
for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        isSorted=false
        break
    }
}
if(isSorted){
    console.log("sorted")
}else{
    console.log("not sorted")
}

let newArr=[]
let count=0
// Move All Zeros to the End'
for(let i=0;i<arr.length;i++){
  if(arr[i]===0) {
    count++
  }else{
  newArr.push(arr[i])
 }
}
for (let i = 0; i < count; i++) {
  newArr.push(0)
}
// console.log(newArr)
 

let pos = 0    
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[pos] = arr[i]
    pos++
  }
}

for (let i = pos; i < arr.length; i++) {
  arr[i] = 0
}

// Remove duplicates in-place from sorted array
// Find missing number from 1 to n
// Find if array contains duplicate
// Find pair with sum = target
// Find majority element
// Rotate array by k steps
// Maximum subarray sum
