for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

function bankAccount() {
  let balance = 1000

  return {
    deposit(amount) {
      balance += amount
      console.log(balance)
    },
    withdraw(amount) {
      balance -= amount
      console.log(balance)
    }
  }
}

let acc = bankAccount()
acc.deposit(500)
acc.withdraw(300)

function memoSum() {
  let cache = {}

  return function (n) {
    if (cache[n]) {
      console.log("from cache")
      return cache[n]
    } else {
      cache[n] = n + 10
      return cache[n]
    }
  }
}

let sum = memoSum()
console.log(sum(5))
console.log(sum(5))


function outer() {
  let name = "Khushbu"

  return function () {
    console.log(this.name)
  }
}

let fn = outer().bind({ name: "Khushbu" })
fn()
