let action = "withdraw";
let amount = 3000;
let balance = 10000;
let isVerified = true;

switch (action) {
  case "withdraw":
    if (!isVerified) {
      console.log("User not verified");
    } else if (amount <= 0) {
      console.log("Invalid amount");
    } else if (amount > balance) {
      console.log("Insufficient balance");
    } else {
      balance -= amount;
      console.log("Withdraw successful");
      console.log("Remaining balance:", balance);
    }
    break;

  case "deposit":
    if (amount <= 0) {
      console.log("Invalid amount");
    } else if (amount > 50000) {
      console.log("Deposit limit exceeded");
    } else {
      balance += amount;
      console.log("Deposit successful");
      console.log("Updated balance:", balance);
    }
    break;

  case "balance":
    console.log("Your balance is:", balance);
    break;

  case "exit":
    console.log("Thank you for using ATM");
    break;

  default:
    console.log("Invalid action selected");
}

let orderType = "delivery";
// let amount = 1200;
let paymentMode = "card";
let isPremium = true;
let distance = 8;

let discount = 0;
let deliveryCharge = 0;
let valid = true;

switch (orderType) {
  case "dinein":
    if (amount < 500) {
      console.log("Minimum order is 500");
      valid = false;
    }
    if (isPremium) discount += 10;
    break;

  case "takeaway":
    if (amount < 300) {
      console.log("Minimum order is 300");
      valid = false;
    }
    if (paymentMode === "cash") {
      console.log("Cash not allowed for takeaway");
      valid = false;
    }
    if (paymentMode === "upi") discount += 5;
    break;

  case "delivery":
    if (amount < 700) {
      console.log("Minimum order is 700");
      valid = false;
    } else if (distance > 10) {
      console.log("Delivery not available beyond 10km");
      valid = false;
    } else {
      if (!isPremium) {
        if (distance <= 5) deliveryCharge = 40;
        else deliveryCharge = 80;
      }
    }
    break;

  default:
    console.log("Invalid order type");
    valid = false;
}

// Common rules
if (paymentMode === "card") {
  discount += 2;
}

if (discount > 20) discount = 20;

if (valid) {
  let finalAmount = amount + deliveryCharge - (amount * discount / 100);
  console.log("Discount:", discount + "%");
  console.log("Delivery Charge:", deliveryCharge);
  console.log("Final Payable:", finalAmount);
}

let role = "manager";
let action = "delete";
let isActive = true;
let loginAttempts = 1;

// Step 1: Global checks
if (loginAttempts > 3) {
  console.log("Account locked due to multiple failed logins");
} else if (!isActive && action !== "read") {
  console.log("Inactive users can only read");
} else {

  switch (role) {
    case "admin":
      console.log("Action allowed");
      break;

    case "manager":
      if (action === "delete") {
        console.log("Managers cannot delete");
      } else {
        console.log("Action allowed");
      }
      break;

    case "user":
      if (action === "read" || action === "write") {
        console.log("Action allowed");
      } else {
        console.log("Action not allowed");
      }
      break;

    case "guest":
      if (action === "read") {
        console.log("Action allowed");
      } else {
        console.log("Guests can only read");
      }
      break;

    default:
      console.log("Invalid role");
  }
}
