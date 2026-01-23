// let amount = 5200;
// let isMember = true;
// let hasCoupon = false;
// let day = "Sunday";

// let discount = 0;

// if (amount >= 5000) {
//   if (isMember) {
//     discount = 30;
//   } else {
//     discount = 20;
//   }
// }

// else if (amount >= 3000 && hasCoupon) {
//   discount = 15;
// }

// if (day === "Sunday") {
//   discount += 5;
// }

// if (discount > 40) {
//   discount = 40;
// }

// let finalAmount = amount - (amount * discount / 100);

// console.log("Discount:", discount + "%");
// console.log("Final Amount:", finalAmount);


let num=5
let num2=10
if(num%2==0){
    console.log("even")
}else{
    console.log("odd")
}

if(num>num2){
    console.log("largest",num)
}else if(num2>num){
    console.log("largest",num2)
}else{
    console.log("equal")
}

let marks=40
if(marks>=33){
    console.log("pass")
}else{
    console.log("fail")
}

if(num>0){
    console.log("positive")
}else if(num<0){
    console.log("negative")
}else{
    console.log("equal")
}

let username="admin"
let password=1234
if(username==="admin"&&password===1234){
    console.log("login sucess")     

}else{
console.log("Invalid credentials")
}

let totalAmount = 4500;     
let isMember = true;        
let hasCoupon = true;        
let day = "Sunday";          
let shippingCost=0
let discount=0
if(isMember){
    discount+=30
}
if(hasCoupon){
    discount+=5
}
if(day=="sunday"){
    discount+=2
}
if(discount>15){
    discount=15
}
let discountedAmount=totalAmount-(totalAmount*discount/100)
if(discountedAmount>=5000){
    shippingCost=0
}else if(discountedAmount>=3000){
    shippingCost=50
}else{
    shippingCost=100
}

let finalAmount=discountedAmount+shippingCost
console.log(discount)
console.log(shippingCost)
console.log(finalAmount)