let amount = 5200;
let isMember = true;
let hasCoupon = false;
let day = "Sunday";

let discount = 0;

if (amount >= 5000) {
  if (isMember) {
    discount = 30;
  } else {
    discount = 20;
  }
}

else if (amount >= 3000 && hasCoupon) {
  discount = 15;
}

if (day === "Sunday") {
  discount += 5;
}

if (discount > 40) {
  discount = 40;
}

let finalAmount = amount - (amount * discount / 100);

console.log("Discount:", discount + "%");
console.log("Final Amount:", finalAmount);
