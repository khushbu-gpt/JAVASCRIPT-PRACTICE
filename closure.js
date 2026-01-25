//not closure
function outer() {
  let x = 10

  function inner() {
    console.log(x)
  }

  inner()
}
outer()
outer()

//real closure
function outer() {
  let x = 10

  function inner() {
    console.log(x)
  }

  return inner
}

let fn = outer()
fn()

function counter() {
  let count = 0

  return function () {
    count++
    console.log(count)
  }
}

let inc = counter()

inc() // 1
inc() // 2
inc() // 3
