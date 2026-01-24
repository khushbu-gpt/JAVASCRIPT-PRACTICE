let x = 0;
let y = "Hello";
let z = null;

if (x || (y && z)) {
  console.log("Inside if");  
} else {
  console.log("Inside else");  
}

let a = "";
let b = 0;
let c = "JS";
let d = null;
let e = "Logic";

if ((a || b) && (c && d || e)) {
  console.log("Inside if");
} else {
  console.log("Inside else");
}

// let a = 0;        // falsy
// let b = "";       // falsy
// let c = "JS";     // truthy
// let d = null;     // falsy
// let e = "Logic";  // truthy
// let f = false;    // falsy

// if ((a || b) && (c && d || e) && !f || b && c) {
//   console.log("Inside if");
// } else {
//   console.log("Inside else");
// }


// let num=0
// let guessNum=Math.round(Math.random()*10)
// while(guessNum!==num){
//   num=parseInt(prompt("enter a number"))
//   if(guessNum>num){
//     console.log("greater")
//   }else{
//     console.log("lower")
//   }
// }
// console.log("found num")