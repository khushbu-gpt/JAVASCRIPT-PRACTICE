for (let i = 1; i <= 5; i++) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    rows += i;
  }
  console.log(rows);
}

let num = 1234;
let rev = 0;
while (num!== 0) {
  let lastDigit = num % 10;
  rev=rev*10+lastDigit
  num = Math.floor(num / 10);
}
console.log(rev)