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

// let totalAmount = 4500;
// let isMember = true;
// let hasCoupon = true;
// let day = "Sunday";
// let shippingCost=0
// let discount=0
// if(isMember){
//     discount+=30
// }
// if(hasCoupon){
//     discount+=5
// }
// if(day=="sunday"){
//     discount+=2
// }
// if(discount>15){
//     discount=15
// }
// let discountedAmount=totalAmount-(totalAmount*discount/100)
// if(discountedAmount>=5000){
//     shippingCost=0
// }else if(discountedAmount>=3000){
//     shippingCost=50
// }else{
//     shippingCost=100
// }

// let finalAmount=discountedAmount+shippingCost
// console.log(discount)
// console.log(shippingCost)
// console.log(finalAmount)

// let age = 65;
// let isStudent = false;
// let day = "Monday";
// let showTime = "night";
// let baseTicketPrice = 300;

// let discount = 0;
// let extraCharge = 0;

// if(age < 12) discount = 50;
// if(age >= 60) discount = 30;
// if(isStudent) discount += 10;
// if(day.toLowerCase() === "monday") discount += 5;
// if(showTime.toLowerCase() === "night") discount += 20;

// if(discount > 60) discount = 60;

// let discountedPrice = baseTicketPrice - (baseTicketPrice * discount / 100);

// if(showTime.toLowerCase() === "morning") extraCharge = 20;
// else if(showTime.toLowerCase() === "afternoon") extraCharge = 30;
// else if(showTime.toLowerCase() === "evening") extraCharge = 50;
// else extraCharge = 70;

// let finalTicketPrice = discountedPrice + extraCharge;

// console.log("Total Discount %:", discount + "%");
// console.log("Price after discount:", discountedPrice);
// console.log("Extra Charge:", extraCharge);
// console.log("Final Ticket Price:", finalTicketPrice);

// let itemsBought=50;
// let isStudentCustomer=true;
// let isMemberCustomer=true;
// let dayOfWeek="Monday";
// let initialAmount=500;
// let serviceCharge=0
// let discount=0
// if(isStudentCustomer) discount+=12
// if(isMemberCustomer) discount+=7
// if(dayOfWeek.toLowerCase()=="wednesday") discount+=5
// if(initialAmount>2000) discount+=8
// if(discount>30) discount=30
// if(itemsBought<=2) serviceCharge=15
// else if(itemsBought<=5) serviceCharge=35
// else if(itemsBought<=9) serviceCharge=60
// else serviceCharge=120

// let amountAfterDiscount=initialAmount-(initialAmount*discount/100)
// let finalPayableAmount=amountAfterDiscount+serviceCharge

// console.log("Discount %:", discount);
// console.log("Amount after discount:", amountAfterDiscount);
// console.log("Service Fee:", serviceCharge);
// console.log("Final Payable Amount:", finalPayableAmount);

let customers = [
  {
    name: "Alice",
    items: 5,
    isStudent: true,
    isMember: false,
    day: "Monday",
    total: 1200,
  },
  {
    name: "Bob",
    items: 8,
    isStudent: false,
    isMember: true,
    day: "Wednesday",
    total: 2500,
  },
  {
    name: "Charlie",
    items: 2,
    isStudent: true,
    isMember: true,
    day: "Friday",
    total: 800,
  },
  {
    name: "Diana",
    items: 12,
    isStudent: false,
    isMember: false,
    day: "Sunday",
    total: 3000,
  },
];

const res = customers.map((items) => {
  let bonus = 0;
  let discount = 0;
  if (
    items.isMember &&
    items.isStudent &&
    items.day.toLowerCase() == "sunday"
  ) {
    bonus = 5;
  }
  if (items.items > 10 && items.total > 3000) {
    discount = 7;
  }
  let discountedAmount = items.total - (items.total * discount) / 100;
  let finalPayableAmount = discountedAmount - (discountedAmount * bonus) / 100;
  return {
    name: items.name,
    originalTotal: items.total,
    discountPercent: discount,
    discountedAmount,
    bonusPercent: bonus,
    finalPayableAmount,
  };
});
console.log(res);
