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

function outer() {
  let a = 10
  return function inner(b) {
    console.log(a + b)
  }
}

let fnn = outer()
fnn(5)
fnn(10)

function makeAdder(x) {
  return function(y) {
    console.log(x + y)
  }
}

let add5 = makeAdder(5)
add5(2)
add5(5)

function outer() {
  let x = 1
  return function() {
    x = x + 2
    console.log(x)
  }
}

let f = outer()
f()
f()

function makeCounter() {
  let count = 0
  return {
    inc() {
      count++
      console.log(count)
    },
    dec() {
      count--
      console.log(count)
    }
  }
}

let c = makeCounter()
c.inc()
c.inc()
c.dec()

function outer() {
  let x = 10
  return () => {
    let x = 20
    console.log(x)
  }
}

let f1 = outer()
f1()
