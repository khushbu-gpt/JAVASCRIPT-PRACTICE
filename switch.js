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
