// Find the second largest element in an array
// const arr = [10, 5, 10, 3, 8, 4, 3];
const arr = [1,0,2,0,3,4];
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
console.log(largest, secondLargest);

// Is Array Sorted

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

