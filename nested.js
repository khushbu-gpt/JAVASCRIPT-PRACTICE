for (let i = 1; i <= 5; i++) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    rows += i;
  }
  console.log(rows);
}

let num = 123435;
// let rev = 0;
// while (num!== 0) {
//   let lastDigit = num % 10;
//   rev=rev*10+lastDigit
//   num = Math.floor(num / 10);
// }
// console.log(rev)

// let sum = 0;
// while (num > 0) {
//   let lastDigit = num % 10;
//   sum += lastDigit;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// Print all prime numbers between 1 and 20
// Use any loop
// let n=20
// let isPrime=false
// let i=0
// while(n>0){
//     if(n%i==0){
//         isPrime=true
//         break;
//     }
//     console.log(n)
//     i++
// }

let count = 0;

while (num> 0) {
  // logic
  count++;
  num = Math.floor(num / 10);
}

console.log(count);
