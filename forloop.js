// // Print Fibonacci series up to n terms
let nTerms = 10;
let a = 0, b = 1;
console.log(a);
console.log(b);
for(let i = 3; i <= nTerms; i++){
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

// // Print patterns (triangle of stars)
for(let i = 1; i <= 5; i++){
    let row = '';
    for(let j = 1; j <= i; j++){
        row += '*';
    }
    console.log(row);
}

// // Find the largest number in an array
const numbers = [5, 12, 7, 20, 3];
let max = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log("Largest:", max);

// // Factorial of a number
let num = 5;
let factorial = 1;
for(let i = 1; i <= num; i++){
    factorial *= i;
}
console.log(factorial); 

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        process.stdout.write(`${i*j}`);
    }
    console.log();
}

const arr1 = [1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        console.log(`Pair: (${arr[i]}, ${arr[j]})`);
    }
}

const arr2D = [[1,2],[3,4],[5,6]];
const flat = [];
for(let i=0;i<arr2D.length;i++){
    for(let j=0;j<arr2D[i].length;j++){
        flat.push(arr2D[i][j]);
    }
}
console.log(flat);


const a1 = [1,3,5];
const b1 = [2,4,6];
const merged = [];
let i=0,j=0;
for(; i<a.length && j<b.length;){
    if(a[i]<b[j]) merged.push(a[i++]);
    else merged.push(b[j++]);
}
while(i<a.length) merged.push(a[i++]);
while(j<b.length) merged.push(b[j++]);
console.log(merged);

let rows = 5;
for(let i=1;i<=rows;i++){
    let space = ' '.repeat(rows-i);
    let stars = '*'.repeat(2*i-1);
    console.log(space + stars);
}

const matrix1 = [
    [1,2,3],
    [4,5,6]
];
const transpose = [];
for(let i=0;i<matrix[0].length;i++){
    transpose[i] = [];
    for(let j=0;j<matrix.length;j++){
        transpose[i][j] = matrix[j][i];
    }
}
console.log(transpose);


const mat1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let mainDiag=0, secDiag=0;
for(let i=0;i<mat.length;i++){
    mainDiag += mat[i][i];
    secDiag += mat[i][mat.length-1-i];
}
console.log("Main:", mainDiag, "Secondary:", secDiag);


let n = 3;
let matrix = Array.from({length:n}, ()=>Array(n).fill(0));
let count = 1;
let top=0, bottom=n-1, left=0, right=n-1;

while(top <= bottom && left <= right){
    for(let i=left;i<=right;i++) matrix[top][i] = count++;
    top++;
    for(let i=top;i<=bottom;i++) matrix[i][right] = count++;
    right--;
    for(let i=right;i>=left;i--) matrix[bottom][i] = count++;
    bottom--;
    for(let i=bottom;i>=top;i--) matrix[i][left] = count++;
    left++;
}
console.log(matrix);

const arr2 = [1,2,3];
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        let subArr = [];
        for(let k=i;k<=j;k++) subArr.push(arr[k]);
        console.log(subArr);
    }
}

const arr = [16,17,4,3,5,2];
for(let i=0;i<arr.length;i++){
    let isLeader = true;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] <= arr[j]){
            isLeader = false;
            break;
        }
    }
    if(isLeader) console.log(arr[i]);
}

const mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let sum = 0;
for(let i=0;i<mat.length;i++){
    for(let j=i+1;j<mat[i].length;j++){
        sum += mat[i][j];
    }
}
console.log(sum); 


