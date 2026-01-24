let num=7
function factorial(num){
    if(num==1) return num=1
    return num*factorial(num-1)
}
const res=
factorial(num)
console.log(res)

function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}

countDown(5);
