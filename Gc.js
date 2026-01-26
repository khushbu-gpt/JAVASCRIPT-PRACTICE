//garbage collector
let a = { x: 1 }
let b = a
a = null

function test() {
  let data = new Array(1000000)
  return function () {
    console.log("hi")
  }
}

let fn = test()

function test() {
  let data = new Array(1000000)
  return function () {
    data = null
  }
}

let fn1 = test()
fn1()


let obj = { a: 10 }
let ref1 = obj
let ref2 = obj

ref1 = null
ref2 = null
