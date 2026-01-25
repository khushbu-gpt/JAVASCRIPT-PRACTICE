let person = {
  name: "Khushbu",
  age: 20,
  city: "Delhi"
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
let obj1 = { a: 1 }
let obj2 = { b: 2 }

let merged = Object.assign({}, obj1, obj2)
console.log(merged)

console.log("age" in person)  
console.log("salary" in person) 
